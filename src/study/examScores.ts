// Best-of bookkeeping for the fixed mock exams.
//
// One row per (level, test), holding the best attempt — the score the exam
// picker shows — plus how many times the paper has been sat and how the last
// sitting went. Retaking a test always replays the identical paper (see
// exam.ts), so comparing attempts is meaningful.

import { db } from '../db/db'
import { scheduleSync } from '../sync/sync'
import type { ExamScore, JlptLevel } from '../types'

export const examScoreId = (level: JlptLevel, test: number): string => `${level}:${test}`

// One sitting of a paper, as scoreExam() reports it.
export interface ExamAttempt {
  correct: number
  total: number
  pct: number
  pass: boolean
}

// Every recorded score for a level, keyed by test number for easy lookup.
export async function loadExamScores(level: JlptLevel): Promise<Record<number, ExamScore>> {
  const rows = await db.examScores.where('level').equals(level).toArray()
  return Object.fromEntries(rows.map((row) => [row.test, row]))
}

/**
 * Fold a finished attempt into the stored row. Returns the row as it now
 * stands, whether this attempt beat everything before it (a first sitting
 * counts as a best, a tie does not), and the mark it beat — the stored row no
 * longer remembers that once it's been overwritten.
 */
export async function recordExamAttempt(
  level: JlptLevel,
  test: number,
  attempt: ExamAttempt,
  at = Date.now(),
): Promise<{ score: ExamScore; isBest: boolean; previousBestPct: number | null }> {
  const id = examScoreId(level, test)
  const prev = await db.examScores.get(id)
  const prevBest: ExamAttempt | null = prev
    ? { correct: prev.bestCorrect, total: prev.bestTotal, pct: prev.bestPct, pass: prev.bestPass }
    : null

  // Compare first, then read the winner's identity back out — this way the
  // "was it a best?" answer and the row we store can never disagree.
  const best = !prevBest || attempt.pct > prevBest.pct ? attempt : prevBest
  const isBest = best === attempt

  const score: ExamScore = {
    id,
    level,
    test,
    bestPct: best.pct,
    bestCorrect: best.correct,
    bestTotal: best.total,
    bestPass: best.pass,
    bestAt: isBest ? at : (prev?.bestAt ?? at),
    attempts: (prev?.attempts ?? 0) + 1,
    lastPct: attempt.pct,
    lastAt: at,
  }

  await db.examScores.put(score)
  scheduleSync()
  return { score, isBest, previousBestPct: prevBest?.pct ?? null }
}
