// Orchestrates the optional Google Drive sync: pull the remote snapshot, merge
// it with local state, write the result back to both sides.
//
// The merge (src/sync/snapshot.ts) is symmetric and idempotent, so it does not
// matter which device syncs first, how long a device was offline, or whether a
// sync is interrupted — the worst case is that the run is retried later.

import { db } from '../db/db'
import type { AppSettings, JlptLevel } from '../types'
import {
  DriveAuthError,
  downloadSnapshot,
  findSnapshotFile,
  uploadSnapshot,
} from './drive'
import {
  getSilentToken,
  getStoredSession,
  InteractionRequiredError,
  invalidateToken,
  rememberLastSynced,
  restoreSession,
  signIn,
  signOut,
  syncAvailable,
} from './googleAuth'
import {
  emptySnapshot,
  mergeSnapshots,
  parseSnapshot,
  sameExamScore,
  SNAPSHOT_VERSION,
  type SyncSnapshot,
} from './snapshot'

// ---- Observable status ---------------------------------------------------

export interface SyncStatus {
  /** Available at all when a client ID is configured and we're in a browser. */
  available: boolean
  /** Signed-in account, or null when sync is off. */
  email: string | null
  syncing: boolean
  lastSyncedAt: number | null
  error: string | null
  /** The stored grant is gone; the user must sign in again to resume. */
  needsReauth: boolean
  /**
   * We're waiting for the user's next tap to refresh access by itself, so the
   * pause is very likely temporary and not worth telling them about yet.
   */
  autoRetrying: boolean
}

let status: SyncStatus = {
  available: syncAvailable(),
  email: getStoredSession()?.email ?? null,
  syncing: false,
  lastSyncedAt: getStoredSession()?.lastSyncedAt ?? null,
  error: null,
  needsReauth: false,
  autoRetrying: false,
}

const listeners = new Set<() => void>()

export function subscribeSync(listener: () => void): () => void {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

// Returns a stable object identity between changes, as useSyncExternalStore
// requires — every update replaces it wholesale.
export function getSyncStatus(): SyncStatus {
  return status
}

function setStatus(patch: Partial<SyncStatus>): void {
  status = { ...status, ...patch }
  for (const listener of listeners) listener()
}

// ---- Local snapshot <-> IndexedDB ----------------------------------------

function settingsToPrefs(settings: AppSettings | undefined) {
  return {
    selectedLevel: settings?.selectedLevel ?? null,
    newPerDay: settings?.newPerDay ?? 10,
    disabledLevels: settings?.disabledLevels ?? [],
    updatedAt: settings?.prefsUpdatedAt ?? 0,
  }
}

async function buildLocalSnapshot(): Promise<SyncSnapshot> {
  const [settings, reviews, examScores] = await Promise.all([
    db.settings.get('app'),
    db.reviews.toArray(),
    db.examScores.toArray(),
  ])
  return {
    version: SNAPSHOT_VERSION,
    updatedAt: Date.now(),
    prefs: settingsToPrefs(settings),
    reviews,
    resetMarkers: settings?.resetMarkers ?? {},
    examScores,
  }
}

// Everything about a snapshot that's worth persisting, as a comparable string.
// `updatedAt` is deliberately excluded — it moves on every sync and would make
// an unchanged snapshot look different. Used to skip no-op uploads.
function contentKey(s: SyncSnapshot): string {
  const reviews = [...s.reviews].sort((a, b) => (a.itemId < b.itemId ? -1 : a.itemId > b.itemId ? 1 : 0))
  const markers = Object.entries(s.resetMarkers).sort(([a], [b]) => (a < b ? -1 : 1))
  // Field order is spelled out rather than left to JSON.stringify: exam rows
  // reach us from three places (Dexie, the parser, the merge) and key order
  // isn't guaranteed to agree between them.
  const exams = [...s.examScores]
    .sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0))
    .map((e) => [e.id, e.bestPct, e.bestCorrect, e.bestTotal, e.bestPass, e.bestAt, e.attempts, e.lastPct, e.lastAt])
  const { selectedLevel, newPerDay, disabledLevels, updatedAt } = s.prefs
  return JSON.stringify([selectedLevel, newPerDay, [...disabledLevels].sort(), updatedAt, markers, reviews, exams])
}

// Write the merged result into IndexedDB: rows the merge dropped (reset on
// another device) are deleted, and only rows that actually changed are put
// back. mergeSnapshots doesn't clone, so a row that came from local state is
// the very same object — identity is an exact and cheap "unchanged" test.
// (If it ever did clone, this would rewrite more rows, never fewer, so the
// result stays correct either way.)
//
// Preferences are only touched when the remote copy actually won, so a sync
// never churns the settings row — and never bumps its own `prefsUpdatedAt`,
// which would make every device look like the most recent editor.
async function applySnapshot(merged: SyncSnapshot, local: SyncSnapshot): Promise<void> {
  const keep = new Set(merged.reviews.map((r) => r.itemId))
  const removed = local.reviews.filter((r) => !keep.has(r.itemId)).map((r) => r.itemId)
  const unchanged = new Set(local.reviews)
  const incoming = merged.reviews.filter((r) => !unchanged.has(r))
  const prefsChanged = merged.prefs.updatedAt > local.prefs.updatedAt

  // Exam rows the merge rebuilt are new objects even when nothing about them
  // changed, so they're compared by value instead of identity.
  const localExams = new Map(local.examScores.map((e) => [e.id, e]))
  const exams = merged.examScores.filter((e) => {
    const prev = localExams.get(e.id)
    return !prev || !sameExamScore(prev, e)
  })

  if (!removed.length && !incoming.length && !prefsChanged && !exams.length) {
    // Still record any reset markers learned from the other device.
    const settings = await db.settings.get('app')
    if (settings) await db.settings.put({ ...settings, resetMarkers: merged.resetMarkers })
    return
  }

  await db.transaction('rw', [db.reviews, db.examScores, db.settings], async () => {
    if (removed.length) await db.reviews.bulkDelete(removed)
    if (incoming.length) await db.reviews.bulkPut(incoming)
    if (exams.length) await db.examScores.bulkPut(exams)

    const settings = await db.settings.get('app')
    if (!settings) return
    await db.settings.put({
      ...settings,
      ...(prefsChanged
        ? {
            selectedLevel: merged.prefs.selectedLevel,
            newPerDay: merged.prefs.newPerDay,
            disabledLevels: merged.prefs.disabledLevels,
            prefsUpdatedAt: merged.prefs.updatedAt,
          }
        : {}),
      resetMarkers: merged.resetMarkers,
    })
  })
}

// Record that this level's progress was cleared, so the deletion survives a
// merge with a device that still holds the old rows. Called by Settings when
// the user resets progress.
export async function recordResetMarker(level: JlptLevel, at: number): Promise<void> {
  const settings = await db.settings.get('app')
  if (!settings) return
  await db.settings.put({
    ...settings,
    resetMarkers: { ...settings.resetMarkers, [level]: at },
  })
}

// ---- Getting access back without the user noticing -----------------------

// Even a "silent" token request goes through a popup window, and browsers only
// let a popup open during a user gesture — so *every* background sync (startup,
// end of a study session, tab shown again) fails with InteractionRequiredError
// once the cached token expires, about an hour in. Nothing is actually broken:
// the grant is still there, we just have no click to open the popup from.
//
// Rather than park a "Reconnect" button in Settings and hope the user thinks to
// look, we listen for their next tap anywhere in the app and retry from inside
// that gesture. Google reuses the existing grant, so the popup opens and closes
// without showing anything and syncing simply resumes.
//
// If that retry fails for a real reason — the grant revoked from the user's
// Google account page, say — no amount of tapping will fix it, so we stop and
// let SyncAlert ask for an explicit reconnect.
const GESTURE_EVENTS = ['pointerdown', 'keydown'] as const

// One tap is enough when the grant is healthy. The cap only bounds the case
// where it isn't, so a revoked grant can't re-prompt on every click forever.
const MAX_GESTURE_RETRIES = 3

let gestureRetries = 0
let disarmGesture: (() => void) | null = null

// Returns whether a retry is now waiting on a tap — callers report that as
// `autoRetrying`, so the UI stays quiet exactly while it's still worth waiting.
function armGestureRetry(): boolean {
  if (disarmGesture) return true
  if (typeof document === 'undefined') return false
  if (gestureRetries >= MAX_GESTURE_RETRIES) return false

  const onGesture = () => {
    disarm()
    gestureRetries++
    // Called straight from the handler on purpose: awaiting anything first can
    // outlive the popup permission the tap just granted.
    void syncNow()
  }
  function disarm(): void {
    for (const type of GESTURE_EVENTS) document.removeEventListener(type, onGesture, true)
    disarmGesture = null
  }

  for (const type of GESTURE_EVENTS) document.addEventListener(type, onGesture, true)
  disarmGesture = disarm
  return true
}

function cancelGestureRetry(): void {
  disarmGesture?.()
  setStatus({ autoRetrying: false })
}

// ---- The sync itself -----------------------------------------------------

let running: Promise<void> | null = null

async function runSync(): Promise<void> {
  const token = await getSilentToken()
  const fileId = await findSnapshotFile(token)

  const remote = fileId ? parseSnapshot(await downloadSnapshot(token, fileId)) : null
  const local = await buildLocalSnapshot()
  const merged = mergeSnapshots(local, remote ?? emptySnapshot())

  await applySnapshot(merged, local)

  // A full history runs to a megabyte or so, and most syncs (app start, a
  // second device catching up) change nothing — so only upload when the file
  // would actually differ.
  if (!remote || contentKey(merged) !== contentKey(remote)) {
    await uploadSnapshot(token, fileId, merged)
  }
}

/**
 * Pull, merge, and push. Safe to call any time: it's a no-op when sync is
 * unavailable or the user isn't signed in, and concurrent calls share one run.
 */
export function syncNow(): Promise<void> {
  if (!syncAvailable() || !getStoredSession()) return Promise.resolve()
  if (running) return running

  setStatus({ syncing: true, error: null })
  running = runSync()
    .then(() => {
      const at = Date.now()
      rememberLastSynced(at)
      gestureRetries = 0
      disarmGesture?.()
      setStatus({
        syncing: false,
        lastSyncedAt: at,
        error: null,
        needsReauth: false,
        autoRetrying: false,
      })
    })
    .catch((err: unknown) => {
      // The cached token expired and this sync had no user gesture to open a
      // popup with. Expected and self-healing — wait for a tap, don't shout.
      if (err instanceof InteractionRequiredError) {
        setStatus({
          syncing: false,
          error: null,
          needsReauth: true,
          autoRetrying: armGestureRetry(),
        })
        return
      }
      // An expired or revoked grant is recoverable by signing in again; keep
      // the session so we can offer "Reconnect" rather than losing it. A
      // project misconfiguration is NOT — offering "Reconnect" for that just
      // loops the user through a consent screen that can't help.
      const authProblem = err instanceof DriveAuthError
      if (authProblem) invalidateToken()
      // A failure with a real reason behind it won't be fixed by another tap,
      // so stop waiting for one and surface it instead.
      cancelGestureRetry()
      setStatus({
        syncing: false,
        error: err instanceof Error ? err.message : 'Sync failed.',
        needsReauth: authProblem,
      })
    })
    .finally(() => {
      running = null
    })
  return running
}

// ---- Sign-in / sign-out --------------------------------------------------

export async function connectDrive(): Promise<void> {
  setStatus({ error: null })
  cancelGestureRetry()
  gestureRetries = 0
  try {
    const session = await signIn()
    setStatus({ email: session.email, needsReauth: false, lastSyncedAt: session.lastSyncedAt })
  } catch (err) {
    setStatus({ error: err instanceof Error ? err.message : 'Sign-in failed.' })
    return
  }
  await syncNow()
}

export async function disconnectDrive(): Promise<void> {
  await signOut()
  cancelGestureRetry()
  gestureRetries = 0
  setStatus({ email: null, error: null, needsReauth: false, lastSyncedAt: null })
}

// ---- Triggers ------------------------------------------------------------

// Restore a remembered session on startup and sync once. Silent throughout:
// a startup with no user gesture behind it can't open the token popup, so this
// commonly "fails" on a perfectly good grant — hence the tap-triggered retry
// rather than an error.
export async function initSync(): Promise<void> {
  if (!syncAvailable() || !getStoredSession()) return
  const session = await restoreSession()
  if (!session) {
    setStatus({ needsReauth: true, autoRetrying: armGestureRetry() })
    return
  }
  await syncNow()
}

let pendingSync: ReturnType<typeof setTimeout> | null = null

// Coalesce the bursts of writes a study session produces into one upload a few
// seconds after the user stops, and flush early if they leave the page first.
export function scheduleSync(delayMs = 4000): void {
  if (!syncAvailable() || !getStoredSession()) return
  if (pendingSync) clearTimeout(pendingSync)
  pendingSync = setTimeout(() => {
    pendingSync = null
    void syncNow()
  }, delayMs)
}

// How stale the last sync must be before coming back to the app is worth a
// round trip. Short enough to catch up on another device, long enough that
// flicking between tabs doesn't hammer Drive.
const RESYNC_AFTER_MS = 2 * 60_000

// Called when the tab is shown again or the network comes back: the moment
// another device's progress matters most, and — since a tap usually follows
// right behind — a good chance to notice and heal an expired token early.
export function syncOnReturn(): void {
  if (!syncAvailable() || !getStoredSession()) return
  if (status.lastSyncedAt && Date.now() - status.lastSyncedAt < RESYNC_AFTER_MS) return
  void syncNow()
}

export function flushPendingSync(): void {
  if (!pendingSync) return
  clearTimeout(pendingSync)
  pendingSync = null
  void syncNow()
}
