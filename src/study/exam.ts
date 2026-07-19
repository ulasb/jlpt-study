// Full JLPT-style mock exams: 10 fixed tests per level.
//
// Each test mirrors the real exam's three papers —
//   1. 言語知識（文字・語彙）: kanji reading, orthography, vocabulary
//   2. 言語知識（文法）・読解: grammar, reading comprehension
//   3. 聴解: listening
// — with section sizes shaped like the real thing (reading/listening are
// scaled down to what the content pools support; see SPECS).
//
// Determinism: item selection uses a permutation seeded per (level,
// dimension), and each test takes consecutive slices of it, so Test 1 and
// Test 2 draw disjoint items until a pool wraps. Question randomness (modes,
// distractors, option order) is seeded per (level, test), so retaking
// "N3 · Test 4" shows the identical paper.

import { rngFor, shuffleWith } from './rng'
import {
  buildGrammarQuestion,
  buildKanjiQuestion,
  buildListeningQuestion,
  buildReadingQuestion,
  buildVocabQuestion,
  type KanjiMode,
  type Question,
  type VocabMode,
} from './quiz'
import type { Grammar, JlptLevel, Kanji, Listening, Reading, Vocab } from '../types'

export const TESTS_PER_LEVEL = 10

export interface ExamPools {
  kanji: Kanji[]
  vocab: Vocab[]
  grammar: Grammar[]
  reading: Reading[]
  listening: Listening[]
}

export interface ExamQuestion extends Question {
  paper: string // which of the three papers this question belongs to
}

export const PAPERS = {
  moji: '文字・語彙 · Vocabulary',
  bunpo: '文法・読解 · Grammar & Reading',
  chokai: '聴解 · Listening',
} as const

// Section sizes per level, loosely following the official question counts.
// kanjiRead = 漢字読み (k2r), ortho = 表記 (pick the right kanji/word),
// vocab = 文脈規定/言い換え-style meaning questions.
interface Spec {
  kanjiRead: number
  ortho: number
  vocab: number
  grammar: number
  reading: number
  listening: number
}
const SPECS: Record<JlptLevel, Spec> = {
  N5: { kanjiRead: 10, ortho: 8, vocab: 10, grammar: 14, reading: 6, listening: 8 },
  N4: { kanjiRead: 10, ortho: 8, vocab: 10, grammar: 15, reading: 6, listening: 8 },
  N3: { kanjiRead: 10, ortho: 8, vocab: 11, grammar: 16, reading: 8, listening: 8 },
  N2: { kanjiRead: 10, ortho: 8, vocab: 12, grammar: 17, reading: 8, listening: 8 },
  N1: { kanjiRead: 10, ortho: 8, vocab: 12, grammar: 18, reading: 8, listening: 8 },
}

export const examLength = (level: JlptLevel): number =>
  Object.values(SPECS[level]).reduce((a, b) => a + b, 0)

// Take n items starting at `offset` from a level-seeded permutation of the
// pool, wrapping when the pool is smaller than 10 tests' worth of slices.
function slice<T>(level: JlptLevel, dimension: string, pool: T[], offset: number, n: number): T[] {
  const perm = shuffleWith(rngFor(`${level}:${dimension}`), pool)
  return Array.from({ length: Math.min(n, perm.length) }, (_, i) => perm[(offset + i) % perm.length])
}

// Test numbers are 1-based (Test 1 … Test 10).
export function buildFullExam(level: JlptLevel, test: number, pools: ExamPools): ExamQuestion[] {
  const spec = SPECS[level]
  const t = test - 1
  const rng = rngFor(`${level}:test${test}`)
  const opts = { rng }

  // Paper 1: 文字・語彙
  const kanjiItems = slice(level, 'kanji', pools.kanji, t * (spec.kanjiRead + spec.ortho), spec.kanjiRead + spec.ortho)
  const kanjiRead = kanjiItems
    .slice(0, spec.kanjiRead)
    .map((k) => buildKanjiQuestion(k, pools.kanji, { ...opts, mode: 'k2r' satisfies KanjiMode }))
  const ortho = kanjiItems.slice(spec.kanjiRead).map((k, i) =>
    buildKanjiQuestion(k, pools.kanji, { ...opts, mode: (i % 2 ? 'm2k' : 'r2k') satisfies KanjiMode }),
  )
  const vocab = slice(level, 'vocab', pools.vocab, t * spec.vocab, spec.vocab).map((w, i) =>
    buildVocabQuestion(w, pools.vocab, { ...opts, mode: (i % 2 ? 'm2w' : 'w2m') satisfies VocabMode }),
  )

  // Paper 2: 文法・読解
  const grammar = slice(level, 'grammar', pools.grammar, t * spec.grammar, spec.grammar).map((g) =>
    buildGrammarQuestion(g, opts),
  )
  const reading = slice(level, 'reading', pools.reading, t * spec.reading, spec.reading).map((r) =>
    buildReadingQuestion(r, opts),
  )

  // Paper 3: 聴解
  const listening = slice(level, 'listening', pools.listening, t * spec.listening, spec.listening).map((l) =>
    buildListeningQuestion(l, opts),
  )

  return [
    ...[...kanjiRead, ...ortho, ...vocab].map((q) => ({ ...q, paper: PAPERS.moji })),
    ...[...grammar, ...reading].map((q) => ({ ...q, paper: PAPERS.bunpo })),
    ...listening.map((q) => ({ ...q, paper: PAPERS.chokai })),
  ]
}

export interface PaperScore {
  paper: string
  correct: number
  total: number
}

// Real-JLPT-style verdict: pass the total (≥60% here) AND clear a sectional
// minimum (≥1/3) in every paper — one collapsed section fails the exam.
export function scoreExam(questions: ExamQuestion[], correct: boolean[]) {
  const papers: PaperScore[] = []
  questions.forEach((q, i) => {
    let p = papers.find((s) => s.paper === q.paper)
    if (!p) papers.push((p = { paper: q.paper, correct: 0, total: 0 }))
    p.total++
    if (correct[i]) p.correct++
  })
  const total = correct.filter(Boolean).length
  const pct = Math.round((total / questions.length) * 100)
  const sectionalOk = papers.every((p) => p.correct / p.total >= 1 / 3)
  return { papers, total, pct, pass: pct >= 60 && sectionalOk, sectionalOk }
}
