// JLPT levels. Official levels are N5 (easiest) through N1 (hardest).
// We start by populating N4; the schema supports all five.
export type JlptLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1'

export const ALL_LEVELS: JlptLevel[] = ['N5', 'N4', 'N3', 'N2', 'N1']

export type Dimension = 'kanji' | 'vocab' | 'grammar'

export interface Kanji {
  id: string // e.g. "kanji:N4:会"
  level: JlptLevel
  character: string
  meanings: string[]
  onyomi: string[]
  kunyomi: string[]
  strokeCount: number
  exampleWords: { word: string; reading: string; meaning: string }[]
}

export interface Vocab {
  id: string // e.g. "vocab:N4:時間"
  level: JlptLevel
  word: string // surface form (may contain kanji)
  reading: string // kana reading
  meanings: string[]
  partOfSpeech: string
  exampleSentence?: { jp: string; en: string }
}

export interface GrammarExample {
  // The sentence is rendered with `___` standing in for `answer`.
  // Kanji carry inline furigana markup: 漢字[かんじ]. Furigana is stripped in the
  // quiz prompt and rendered as ruby in the post-answer explanation.
  sentence: string // contains the literal token "___" and furigana markup
  answer: string
  translation: string
}

export interface GrammarDistractor {
  form: string
  // What this form means / why it does NOT fit the blank. Shown after answering.
  gloss: string
}

export interface Grammar {
  id: string // e.g. "grammar:N4:てしまう"
  level: JlptLevel
  title: string // e.g. "～てしまう"
  meaning: string
  explanation: string
  formation: string
  // Why the target form is the right answer; shown in the post-answer explanation.
  whyRight: string
  examples: GrammarExample[]
  // Pool of plausible-but-wrong choices (conjugation/particle variants, etc.),
  // each with a gloss explaining why it's wrong. At quiz time we sample 3 as
  // distractors and show their glosses after the answer. 10-20 recommended.
  distractorPool: GrammarDistractor[]
}

// ---- SRS (SM-2) review state, one row per studyable item ----
export interface ReviewState {
  itemId: string
  level: JlptLevel
  dimension: Dimension
  repetitions: number // consecutive correct recalls
  easeFactor: number // SM-2 ease (>= 1.3)
  intervalDays: number // current interval in days
  dueAt: number // epoch ms when next due
  lastReviewedAt: number | null
  lapses: number // times forgotten
}

export interface AppSettings {
  key: 'app'
  selectedLevel: JlptLevel | null
  newPerDay: number
  seedVersion: number
  // Levels the user has paused; they drop out of the Today overview/totals.
  disabledLevels: JlptLevel[]
}
