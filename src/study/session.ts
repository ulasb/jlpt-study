import { LEVEL_COUNTS } from '../data/meta'
import { db } from '../db/db'
import { ensureLevelSeeded } from '../db/seed'
import { applyGrade, freshReview, type Grade } from '../srs/sm2'
import type { Dimension, JlptLevel } from '../types'
import {
  buildGrammarQuestion,
  buildKanjiQuestion,
  buildVocabQuestion,
  type Question,
} from './quiz'

export interface QueueStats {
  due: number
  new: number
  total: number
}

type Studyable = { id: string }

const DIMS: Dimension[] = ['kanji', 'vocab', 'grammar']

// Split content into due items (sorted by due date) and brand-new items (no
// review row yet), capping new items at `newPerDay`.
function partitionQueue<T extends Studyable>(
  items: T[],
  reviewById: Map<string, { dueAt: number }>,
  newPerDay: number,
  now: number,
): T[] {
  const due: T[] = []
  const fresh: T[] = []
  for (const item of items) {
    const r = reviewById.get(item.id)
    if (!r) fresh.push(item)
    else if (r.dueAt <= now) due.push(item)
  }
  due.sort((a, b) => reviewById.get(a.id)!.dueAt - reviewById.get(b.id)!.dueAt)
  return [...due, ...fresh.slice(0, newPerDay)]
}

// Build the study queue for a dimension. Each dimension is fetched with its
// concrete type so the matching question builder gets the right shape.
export async function buildSession(
  level: JlptLevel,
  dimension: Dimension,
  newPerDay: number,
  now: number,
): Promise<Question[]> {
  await ensureLevelSeeded(level)
  const reviews = await db.reviews.where('[level+dimension]').equals([level, dimension]).toArray()
  const reviewById = new Map(reviews.map((r) => [r.itemId, r]))

  if (dimension === 'kanji') {
    const items = await db.kanji.where('level').equals(level).toArray()
    return partitionQueue(items, reviewById, newPerDay, now).map((it) =>
      buildKanjiQuestion(it, items),
    )
  }
  if (dimension === 'vocab') {
    const items = await db.vocab.where('level').equals(level).toArray()
    return partitionQueue(items, reviewById, newPerDay, now).map((it) =>
      buildVocabQuestion(it, items),
    )
  }
  const items = await db.grammar.where('level').equals(level).toArray()
  return partitionQueue(items, reviewById, newPerDay, now).map((it) => buildGrammarQuestion(it))
}

// Content-free: due/new are derived from the small reviews table plus the
// per-level total from metadata, so the dashboard renders without loading the
// content modules.
export async function queueStats(
  level: JlptLevel,
  dimension: Dimension,
  newPerDay: number,
  now: number,
): Promise<QueueStats> {
  const reviews = await db.reviews.where('[level+dimension]').equals([level, dimension]).toArray()
  const total = LEVEL_COUNTS[level][dimension]
  const due = reviews.filter((r) => r.dueAt <= now).length
  const fresh = Math.max(0, total - reviews.length)
  const newCount = Math.min(fresh, newPerDay)
  return { due, new: newCount, total: due + newCount }
}

// Record a graded answer, creating the review row on first encounter.
export async function recordGrade(
  itemId: string,
  level: JlptLevel,
  dimension: Dimension,
  grade: Grade,
  now: number,
): Promise<void> {
  const existing = await db.reviews.get(itemId)
  const base = existing ?? freshReview(itemId, level, dimension, now)
  const updated = applyGrade(base, grade, now)
  await db.reviews.put(updated)
}

export interface LevelSummary {
  level: JlptLevel
  due: number // reviews due now (all dimensions)
  new: number // new items on deck today (capped per dimension)
  seen: number // items reviewed at least once
  total: number // total items at this level
  mastered: number // items with interval >= 21 days
}

// Aggregate a level's standing across all three dimensions, for the home view.
export async function levelSummary(
  level: JlptLevel,
  newPerDay: number,
  now: number,
): Promise<LevelSummary> {
  let due = 0
  let newCount = 0
  let seen = 0
  let total = 0
  let mastered = 0
  for (const dim of DIMS) {
    const reviews = await db.reviews.where('[level+dimension]').equals([level, dim]).toArray()
    const dimTotal = LEVEL_COUNTS[level][dim]
    total += dimTotal
    seen += reviews.length
    mastered += reviews.filter((r) => r.intervalDays >= 21).length
    due += reviews.filter((r) => r.dueAt <= now).length
    newCount += Math.min(Math.max(0, dimTotal - reviews.length), newPerDay)
  }
  return { level, due, new: newCount, seen, total, mastered }
}

// Progress summary for a dimension: how many items have been "learned"
// (seen at least once) and how many are well-known (interval >= 21 days).
// Total comes from metadata so this stays content-free.
export async function dimensionProgress(level: JlptLevel, dimension: Dimension) {
  const total = LEVEL_COUNTS[level][dimension]
  const reviews = await db.reviews.where('[level+dimension]').equals([level, dimension]).toArray()
  const seen = reviews.length
  const mastered = reviews.filter((r) => r.intervalDays >= 21).length
  return { total, seen, mastered }
}
