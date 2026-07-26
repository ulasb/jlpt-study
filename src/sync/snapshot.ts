// The shape of the JSON file we keep in Drive, plus the pure functions that
// build, validate, and merge it. Kept free of network and Dexie calls so the
// merge rules are easy to reason about (and to test) on their own.

import { ALL_LEVELS, type Dimension, type ExamScore, type JlptLevel, type ReviewState } from '../types'

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
  // Best-of mock exam scores. Added after the format shipped, deliberately
  // *without* bumping SNAPSHOT_VERSION: it's a new optional field, so a build
  // that predates it still reads the file and simply ignores it. Bumping would
  // make that build reject the snapshot outright and upload one holding only
  // its own reviews — losing the other device's study history is a far worse
  // outcome than an old build dropping a best score that the newer device
  // restores on its next sync.
  examScores: ExamScore[]
}

const DIMENSIONS: Dimension[] = ['kanji', 'vocab', 'grammar', 'reading', 'listening']

export function emptySnapshot(): SyncSnapshot {
  return {
    version: SNAPSHOT_VERSION,
    updatedAt: 0,
    prefs: { selectedLevel: null, newPerDay: 10, disabledLevels: [], updatedAt: 0 },
    reviews: [],
    resetMarkers: {},
    examScores: [],
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

function parseExamScore(raw: unknown): ExamScore | null {
  if (!raw || typeof raw !== 'object') return null
  const s = raw as Record<string, unknown>
  if (!isLevel(s.level)) return null
  const test = Math.round(num(s.test, 0))
  if (test < 1) return null
  // The id is derived, not trusted: it's the primary key, and a mismatched one
  // would quietly split a single test's history into two rows.
  const bestTotal = Math.max(1, Math.round(num(s.bestTotal, 1)))
  const bestCorrect = Math.min(bestTotal, Math.max(0, Math.round(num(s.bestCorrect, 0))))
  return {
    id: `${s.level}:${test}`,
    level: s.level,
    test,
    bestPct: Math.min(100, Math.max(0, Math.round(num(s.bestPct, 0)))),
    bestCorrect,
    bestTotal,
    bestPass: s.bestPass === true,
    bestAt: num(s.bestAt, 0),
    attempts: Math.max(1, Math.round(num(s.attempts, 1))),
    lastPct: Math.min(100, Math.max(0, Math.round(num(s.lastPct, 0)))),
    lastAt: num(s.lastAt, 0),
  }
}

// Whether two rows for the same test say the same thing. Used to skip writes
// and uploads that would change nothing.
export function sameExamScore(a: ExamScore, b: ExamScore): boolean {
  return (
    a.bestPct === b.bestPct &&
    a.bestCorrect === b.bestCorrect &&
    a.bestTotal === b.bestTotal &&
    a.bestPass === b.bestPass &&
    a.bestAt === b.bestAt &&
    a.attempts === b.attempts &&
    a.lastPct === b.lastPct &&
    a.lastAt === b.lastAt
  )
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
  const examScores = Array.isArray(s.examScores) ? s.examScores : []

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
    examScores: examScores.map(parseExamScore).filter((e): e is ExamScore => e !== null),
  }
}

// ---- Merge ---------------------------------------------------------------

// How recent a review row is. SM-2 stamps `lastReviewedAt` on every grade, so
// it orders two copies of the same item correctly; rows that were created but
// never graded sort oldest.
const recency = (r: ReviewState): number => r.lastReviewedAt ?? 0

// Exam scores merge per test: the higher best wins outright (that's the whole
// point of a personal best), and the attempt counter takes the *larger* of the
// two rather than their sum — max is idempotent, so re-merging the same pair of
// devices can't inflate it. A row only one side has is passed through by
// identity, which lets applySnapshot skip rewriting it.
function mergeExamScores(local: ExamScore[], remote: ExamScore[]): ExamScore[] {
  const byId = new Map<string, ExamScore>()
  for (const score of [...remote, ...local]) {
    const prev = byId.get(score.id)
    if (!prev) {
      byId.set(score.id, score)
      continue
    }
    // `>=` favours the local copy on a tie, matching the reviews merge.
    const best = score.bestPct >= prev.bestPct ? score : prev
    const latest = score.lastAt >= prev.lastAt ? score : prev
    byId.set(score.id, {
      ...best,
      attempts: Math.max(score.attempts, prev.attempts),
      lastPct: latest.lastPct,
      lastAt: latest.lastAt,
    })
  }
  return [...byId.values()]
}

// Merge two snapshots into the state both devices should converge on.
//
//  - Reviews merge per item, newest study wins. Studying different items on
//    two devices therefore keeps *both* — nothing is lost by syncing late.
//  - Exam scores keep the best sitting from either device (see above).
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
    // Deliberately untouched by reset markers: "reset progress" clears SRS
    // review history for a level, not the exam results you earned.
    examScores: mergeExamScores(local.examScores, remote.examScores),
  }
}
