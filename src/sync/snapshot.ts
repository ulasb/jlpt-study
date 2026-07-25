// The shape of the JSON file we keep in Drive, plus the pure functions that
// build, validate, and merge it. Kept free of network and Dexie calls so the
// merge rules are easy to reason about (and to test) on their own.

import { ALL_LEVELS, type Dimension, type JlptLevel, type ReviewState } from '../types'

export const SNAPSHOT_VERSION = 1

export interface SyncPrefs {
  selectedLevel: JlptLevel | null
  newPerDay: number
  disabledLevels: JlptLevel[]
  // When these preferences last changed, so the newer device's copy wins.
  updatedAt: number
}

export interface SyncSnapshot {
  version: number
  // When this snapshot was written. Informational — merging is per-row.
  updatedAt: number
  prefs: SyncPrefs
  reviews: ReviewState[]
  // Per-level "progress was reset at" timestamps. See mergeSnapshots.
  resetMarkers: Partial<Record<JlptLevel, number>>
}

const DIMENSIONS: Dimension[] = ['kanji', 'vocab', 'grammar', 'reading', 'listening']

export function emptySnapshot(): SyncSnapshot {
  return {
    version: SNAPSHOT_VERSION,
    updatedAt: 0,
    prefs: { selectedLevel: null, newPerDay: 10, disabledLevels: [], updatedAt: 0 },
    reviews: [],
    resetMarkers: {},
  }
}

// ---- Validation ----------------------------------------------------------
// The file is the user's own data, but it may have been written by an older
// build (or a half-finished upload), so nothing is trusted into IndexedDB
// without a shape check. Anything unrecognised is dropped, not rejected — a
// single bad row must never block a sync.

const isLevel = (v: unknown): v is JlptLevel => ALL_LEVELS.includes(v as JlptLevel)
const num = (v: unknown, fallback: number): number =>
  typeof v === 'number' && Number.isFinite(v) ? v : fallback

function parseReview(raw: unknown): ReviewState | null {
  if (!raw || typeof raw !== 'object') return null
  const r = raw as Record<string, unknown>
  if (typeof r.itemId !== 'string' || !r.itemId) return null
  if (!isLevel(r.level)) return null
  if (!DIMENSIONS.includes(r.dimension as Dimension)) return null
  return {
    itemId: r.itemId,
    level: r.level,
    dimension: r.dimension as Dimension,
    repetitions: num(r.repetitions, 0),
    easeFactor: num(r.easeFactor, 2.5),
    intervalDays: num(r.intervalDays, 0),
    dueAt: num(r.dueAt, 0),
    lastReviewedAt: typeof r.lastReviewedAt === 'number' ? r.lastReviewedAt : null,
    lapses: num(r.lapses, 0),
  }
}

function parseResetMarkers(raw: unknown): Partial<Record<JlptLevel, number>> {
  const out: Partial<Record<JlptLevel, number>> = {}
  if (!raw || typeof raw !== 'object') return out
  for (const [level, at] of Object.entries(raw as Record<string, unknown>)) {
    if (isLevel(level) && typeof at === 'number' && Number.isFinite(at)) out[level] = at
  }
  return out
}

// Turn whatever came back from Drive into a snapshot we can merge, or null if
// it isn't one at all (wrong file, newer format we don't understand).
export function parseSnapshot(raw: unknown): SyncSnapshot | null {
  if (!raw || typeof raw !== 'object') return null
  const s = raw as Record<string, unknown>
  if (num(s.version, 0) > SNAPSHOT_VERSION) return null

  const prefs = (s.prefs ?? {}) as Record<string, unknown>
  const disabled = Array.isArray(prefs.disabledLevels) ? prefs.disabledLevels.filter(isLevel) : []
  const reviews = Array.isArray(s.reviews) ? s.reviews : []

  return {
    version: num(s.version, SNAPSHOT_VERSION),
    updatedAt: num(s.updatedAt, 0),
    prefs: {
      selectedLevel: isLevel(prefs.selectedLevel) ? prefs.selectedLevel : null,
      newPerDay: Math.max(1, Math.round(num(prefs.newPerDay, 10))),
      disabledLevels: disabled,
      updatedAt: num(prefs.updatedAt, 0),
    },
    reviews: reviews.map(parseReview).filter((r): r is ReviewState => r !== null),
    resetMarkers: parseResetMarkers(s.resetMarkers),
  }
}

// ---- Merge ---------------------------------------------------------------

// How recent a review row is. SM-2 stamps `lastReviewedAt` on every grade, so
// it orders two copies of the same item correctly; rows that were created but
// never graded sort oldest.
const recency = (r: ReviewState): number => r.lastReviewedAt ?? 0

// Merge two snapshots into the state both devices should converge on.
//
//  - Reviews merge per item, newest study wins. Studying different items on
//    two devices therefore keeps *both* — nothing is lost by syncing late.
//  - A reset marker is a tombstone: rows for that level last studied before
//    the reset are dropped, so "reset my N3 progress" on one device isn't
//    silently undone by stale N3 rows arriving from another.
//  - Preferences move as one block, from whichever device changed them last.
export function mergeSnapshots(local: SyncSnapshot, remote: SyncSnapshot): SyncSnapshot {
  const resetMarkers: Partial<Record<JlptLevel, number>> = { ...remote.resetMarkers }
  for (const [level, at] of Object.entries(local.resetMarkers)) {
    const l = level as JlptLevel
    if (at !== undefined && at > (resetMarkers[l] ?? 0)) resetMarkers[l] = at
  }

  // Remote first, then local, with `>=` on the comparison — so when both
  // copies are equally recent the local row stays and the merge is a no-op.
  const byItem = new Map<string, ReviewState>()
  for (const r of [...remote.reviews, ...local.reviews]) {
    const prev = byItem.get(r.itemId)
    if (!prev || recency(r) >= recency(prev)) byItem.set(r.itemId, r)
  }

  const reviews = [...byItem.values()].filter((r) => recency(r) >= (resetMarkers[r.level] ?? 0))
  const prefs = remote.prefs.updatedAt > local.prefs.updatedAt ? remote.prefs : local.prefs

  return {
    version: SNAPSHOT_VERSION,
    updatedAt: Math.max(local.updatedAt, remote.updatedAt),
    prefs,
    reviews,
    resetMarkers,
  }
}
