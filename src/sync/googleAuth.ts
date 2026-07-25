// Google sign-in for the optional Drive-backed progress sync.
//
// Uses Google Identity Services (GIS) with the OAuth 2.0 *token* flow, which
// runs entirely in the browser: no backend, no client secret, no refresh token
// to store. Access tokens live in memory only and last about an hour; when one
// expires we ask GIS for another silently (the user's grant is remembered by
// Google, so no UI is shown).
//
// Only the `drive.appdata` scope is requested. That is a non-sensitive scope
// granting access to a hidden, per-app folder in the user's Drive — this app
// cannot see, read, or touch any of the user's own files.
//
// Browser-only by design: Google refuses OAuth inside embedded WebViews, so
// `syncAvailable()` is false in the native (Capacitor) build.

import { Capacitor } from '@capacitor/core'

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID
const SCOPES = 'email https://www.googleapis.com/auth/drive.appdata'
const GIS_SRC = 'https://accounts.google.com/gsi/client'

// Remembers that the user opted in, so we can silently re-acquire a token on
// later visits. Holds no token — only the account label to show in Settings.
const SESSION_KEY = 'drive-sync-session'

interface StoredSession {
  email: string
  lastSyncedAt: number | null
}

interface TokenResponse {
  access_token?: string
  expires_in?: number
  error?: string
  error_description?: string
}

interface TokenClient {
  requestAccessToken(overrides?: { prompt?: string }): void
}

interface GisErrorResponse {
  type?: string
  message?: string
}

declare global {
  interface Window {
    google?: {
      accounts: {
        oauth2: {
          initTokenClient(config: {
            client_id: string
            scope: string
            callback: (response: TokenResponse) => void
            error_callback?: (error: GisErrorResponse) => void
          }): TokenClient
          revoke(token: string, done?: () => void): void
        }
      }
    }
  }
}

// Thrown when a token can only be obtained by showing UI. GIS opens a popup
// even for a "silent" request, and browsers block popups that aren't tied to a
// user gesture — so any background sync (startup, post-session, page hide)
// fails this way once the cached token expires. It's an expected, quiet
// outcome, not an error worth alarming the user about: the next sync started
// from a click will succeed.
export class InteractionRequiredError extends Error {}

// Whether this build has an OAuth client ID at all. Without one the feature is
// hidden completely, the same way analytics is without a Measurement ID.
export function syncConfigured(): boolean {
  return !!CLIENT_ID
}

// Sync needs a configured client ID and a real browser (see file header).
export function syncAvailable(): boolean {
  return syncConfigured() && !Capacitor.isNativePlatform()
}

export function getStoredSession(): StoredSession | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as StoredSession
    return typeof parsed?.email === 'string' ? parsed : null
  } catch {
    return null
  }
}

function storeSession(session: StoredSession | null): void {
  try {
    if (session) localStorage.setItem(SESSION_KEY, JSON.stringify(session))
    else localStorage.removeItem(SESSION_KEY)
  } catch {
    /* private mode / storage disabled — sync just won't be remembered */
  }
}

export function rememberLastSynced(at: number): void {
  const session = getStoredSession()
  if (session) storeSession({ ...session, lastSyncedAt: at })
}

// ---- GIS script + token client ----

let gisLoad: Promise<void> | null = null

function loadGis(): Promise<void> {
  if (window.google?.accounts?.oauth2) return Promise.resolve()
  if (!gisLoad) {
    gisLoad = new Promise<void>((resolve, reject) => {
      const script = document.createElement('script')
      script.src = GIS_SRC
      script.async = true
      script.onload = () => resolve()
      script.onerror = () => {
        gisLoad = null // allow a retry once back online
        reject(new Error("Couldn't reach Google. Check your connection and try again."))
      }
      document.head.appendChild(script)
    })
  }
  return gisLoad
}

let token: { value: string; expiresAt: number } | null = null
let client: TokenClient | null = null
// The GIS callback is registered once at client creation, so the in-flight
// request's promise handlers are parked here for it to resolve.
let pending: { resolve: (t: string) => void; reject: (e: Error) => void } | null = null
let inFlight: Promise<string> | null = null

async function getClient(): Promise<TokenClient> {
  await loadGis()
  if (!client) {
    client = window.google!.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID!,
      scope: SCOPES,
      callback: (response) => {
        const p = pending
        pending = null
        if (!p) return
        if (response.access_token) {
          // Retire the token a minute early so a request never races expiry.
          const ttl = (response.expires_in ?? 3600) * 1000 - 60_000
          token = { value: response.access_token, expiresAt: Date.now() + Math.max(0, ttl) }
          p.resolve(response.access_token)
        } else {
          p.reject(new Error(response.error_description || response.error || 'Authorization failed.'))
        }
      },
      error_callback: (error) => {
        const p = pending
        pending = null
        if (!p) return
        // No user gesture, so the popup never opened — recoverable on the next
        // click, and deliberately distinguished from a real failure.
        if (error?.type === 'popup_failed_to_open') {
          p.reject(new InteractionRequiredError('Sign-in needs to be started from a button.'))
          return
        }
        const cancelled = error?.type === 'popup_closed' || error?.type === 'user_cancel'
        p.reject(new Error(cancelled ? 'Sign-in was cancelled.' : error?.message || 'Sign-in failed.'))
      },
    })
  }
  return client
}

// Get a usable access token, reusing the cached one until it expires.
// `interactive: false` asks GIS to reuse the existing grant without showing UI;
// it fails if the user never granted (or revoked) access, which is the signal
// to fall back to a real, user-initiated sign-in.
function requestToken(interactive: boolean): Promise<string> {
  if (token && token.expiresAt > Date.now()) return Promise.resolve(token.value)
  if (!inFlight) {
    inFlight = (async () => {
      const c = await getClient()
      return await new Promise<string>((resolve, reject) => {
        pending = { resolve, reject }
        c.requestAccessToken({ prompt: interactive ? 'consent' : '' })
      })
    })().finally(() => {
      inFlight = null
    })
  }
  return inFlight
}

// A token for a background sync: never pops up UI. Throws if the silent path
// fails, so callers can degrade quietly instead of ambushing the user.
export function getSilentToken(): Promise<string> {
  if (!syncAvailable()) return Promise.reject(new Error('Google Drive sync is not available here.'))
  return requestToken(false)
}

async function fetchEmail(accessToken: string): Promise<string> {
  const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  if (!res.ok) return 'your Google account'
  const info = (await res.json()) as { email?: string }
  return info.email ?? 'your Google account'
}

// Interactive sign-in, from a click. Shows Google's account picker + consent.
export async function signIn(): Promise<StoredSession> {
  if (!syncAvailable()) throw new Error('Google Drive sync is not available here.')
  const accessToken = await requestToken(true)
  const email = await fetchEmail(accessToken)
  const session: StoredSession = { email, lastSyncedAt: getStoredSession()?.lastSyncedAt ?? null }
  storeSession(session)
  return session
}

// Re-establish a remembered session without any UI. Returns null when the
// grant is gone (revoked, expired cookies, different browser profile…).
export async function restoreSession(): Promise<StoredSession | null> {
  if (!syncAvailable() || !getStoredSession()) return null
  try {
    await requestToken(false)
    return getStoredSession()
  } catch {
    return null
  }
}

// Drop the local session and revoke the grant so the app keeps no access.
// The Drive file itself is left alone — signing back in resumes where you were.
export async function signOut(): Promise<void> {
  const current = token?.value
  token = null
  storeSession(null)
  if (current && window.google?.accounts?.oauth2) {
    await new Promise<void>((resolve) => window.google!.accounts.oauth2.revoke(current, resolve))
  }
}

// Called when Drive rejects a token mid-sync: force the next call to re-mint.
export function invalidateToken(): void {
  token = null
}
