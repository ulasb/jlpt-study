import type { Dimension, JlptLevel, ReviewState } from '../types'

// A 4-button grade, mapped to SM-2 quality scores (0-5).
// We collapse SM-2's 0-5 scale to the four buttons Anki-style apps use.
export type Grade = 'again' | 'hard' | 'good' | 'easy'

const QUALITY: Record<Grade, number> = {
  again: 1,
  hard: 3,
  good: 4,
  easy: 5,
}

export const DAY_MS = 24 * 60 * 60 * 1000

export function freshReview(
  itemId: string,
  level: JlptLevel,
  dimension: Dimension,
  now: number,
): ReviewState {
  return {
    itemId,
    level,
    dimension,
    repetitions: 0,
    easeFactor: 2.5,
    intervalDays: 0,
    dueAt: now, // brand-new items are immediately due (subject to new-per-day cap)
    lastReviewedAt: null,
    lapses: 0,
  }
}

// Apply the SM-2 algorithm. Returns a new ReviewState; does not mutate input.
export function applyGrade(state: ReviewState, grade: Grade, now: number): ReviewState {
  const q = QUALITY[grade]
  const next: ReviewState = { ...state, lastReviewedAt: now }

  if (q < 3) {
    // Lapse: reset the streak, show again soon (within the same session-ish).
    next.repetitions = 0
    next.intervalDays = 0
    next.lapses = state.lapses + 1
    next.dueAt = now + 10 * 60 * 1000 // 10 minutes
    // Ease still degrades on a lapse.
    next.easeFactor = Math.max(1.3, state.easeFactor - 0.2)
    return next
  }

  // Correct recall: update ease per SM-2.
  const ef = state.easeFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  next.easeFactor = Math.max(1.3, ef)
  next.repetitions = state.repetitions + 1

  if (next.repetitions === 1) {
    next.intervalDays = 1
  } else if (next.repetitions === 2) {
    next.intervalDays = 6
  } else {
    next.intervalDays = Math.round(state.intervalDays * next.easeFactor)
  }

  // "Hard" nudges the interval down, "easy" bumps it up a touch.
  if (grade === 'hard') next.intervalDays = Math.max(1, Math.round(next.intervalDays * 0.8))
  if (grade === 'easy') next.intervalDays = Math.round(next.intervalDays * 1.3)

  next.dueAt = now + next.intervalDays * DAY_MS
  return next
}
