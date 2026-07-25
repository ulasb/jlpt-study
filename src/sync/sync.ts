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
}

let status: SyncStatus = {
  available: syncAvailable(),
  email: getStoredSession()?.email ?? null,
  syncing: false,
  lastSyncedAt: getStoredSession()?.lastSyncedAt ?? null,
  error: null,
  needsReauth: false,
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
  const [settings, reviews] = await Promise.all([db.settings.get('app'), db.reviews.toArray()])
  return {
    version: SNAPSHOT_VERSION,
    updatedAt: Date.now(),
    prefs: settingsToPrefs(settings),
    reviews,
    resetMarkers: settings?.resetMarkers ?? {},
  }
}

// Everything about a snapshot that's worth persisting, as a comparable string.
// `updatedAt` is deliberately excluded — it moves on every sync and would make
// an unchanged snapshot look different. Used to skip no-op uploads.
function contentKey(s: SyncSnapshot): string {
  const reviews = [...s.reviews].sort((a, b) => (a.itemId < b.itemId ? -1 : a.itemId > b.itemId ? 1 : 0))
  const markers = Object.entries(s.resetMarkers).sort(([a], [b]) => (a < b ? -1 : 1))
  const { selectedLevel, newPerDay, disabledLevels, updatedAt } = s.prefs
  return JSON.stringify([selectedLevel, newPerDay, [...disabledLevels].sort(), updatedAt, markers, reviews])
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

  if (!removed.length && !incoming.length && !prefsChanged) {
    // Still record any reset markers learned from the other device.
    const settings = await db.settings.get('app')
    if (settings) await db.settings.put({ ...settings, resetMarkers: merged.resetMarkers })
    return
  }

  await db.transaction('rw', [db.reviews, db.settings], async () => {
    if (removed.length) await db.reviews.bulkDelete(removed)
    if (incoming.length) await db.reviews.bulkPut(incoming)

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
      setStatus({ syncing: false, lastSyncedAt: at, error: null, needsReauth: false })
    })
    .catch((err: unknown) => {
      // The cached token expired and this sync had no user gesture to open a
      // popup with. Expected and self-healing — ask for a click, don't shout.
      if (err instanceof InteractionRequiredError) {
        setStatus({ syncing: false, error: null, needsReauth: true })
        return
      }
      // An expired or revoked grant is recoverable by signing in again; keep
      // the session so Settings can offer "Reconnect" rather than losing it.
      // A project misconfiguration is NOT — offering "Reconnect" for that just
      // loops the user through a consent screen that can't help.
      const authProblem = err instanceof DriveAuthError
      if (authProblem) invalidateToken()
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
  setStatus({ email: null, error: null, needsReauth: false, lastSyncedAt: null })
}

// ---- Triggers ------------------------------------------------------------

// Restore a remembered session on startup and sync once. Silent throughout:
// if the grant is gone the user simply sees "Reconnect" in Settings.
export async function initSync(): Promise<void> {
  if (!syncAvailable() || !getStoredSession()) return
  const session = await restoreSession()
  if (!session) {
    setStatus({ needsReauth: true })
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

export function flushPendingSync(): void {
  if (!pendingSync) return
  clearTimeout(pendingSync)
  pendingSync = null
  void syncNow()
}
