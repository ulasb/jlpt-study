// JLPT levels. Official levels are N5 (easiest) through N1 (hardest).
// We start by populating N4; the schema supports all five.
export type JlptLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1'

export const ALL_LEVELS: JlptLevel[] = ['N5', 'N4', 'N3', 'N2', 'N1']

export type Dimension = 'kanji' | 'vocab' | 'grammar' | 'reading' | 'listening'

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
  // Optional lead-in sentence that sets the situation so the target answer is
  // the only correct choice (disambiguates otherwise-plausible distractors).
  // Furigana markup allowed; no blank.
  context?: string
  // English translation of `context`, shown in the post-answer explanation.
  contextTranslation?: string
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

export interface ReadingOption {
  // Plain Japanese (no furigana markup) — rendered directly on answer buttons.
  text: string
  // Why this option is right/wrong given the passage. Shown after answering.
  explanation: string
}

export interface ReadingQuestion {
  // Comprehension question about the passage. Furigana markup allowed; it is
  // stripped in the quiz prompt and rendered as ruby in the explanation.
  question: string
  questionTranslation: string
  options: ReadingOption[] // exactly 4, exactly one correct
  correctIndex: number
}

export interface Reading {
  id: string // e.g. "reading:N4:lost-umbrella"
  level: JlptLevel
  title: string // short Japanese title, furigana markup allowed
  // Passage text with furigana markup; paragraphs separated by "\n". Shown
  // without furigana while answering (like the real JLPT), with ruby after.
  passage: string
  translation: string // English translation of the whole passage
  questions: ReadingQuestion[] // 2-3 per passage; one is sampled per review
}

export interface ListeningLine {
  // Short speaker label shown in the transcript (furigana markup allowed,
  // e.g. 女[おんな]の人[ひと], アナウンス). Distinct speakers get different
  // TTS pitches so dialogues are followable by ear.
  speaker: string
  text: string // furigana markup — doubles as the TTS source (spoken as kana)
}

export interface Listening {
  id: string // e.g. "listening:N4:movie-plans"
  level: JlptLevel
  title: string // short Japanese title, furigana markup allowed
  // The audio script. Never shown before answering; spoken via on-device TTS
  // (readings come from the furigana markup, so pronunciation is deterministic).
  script: ListeningLine[]
  translation: string // English translation of the whole script
  questions: ReadingQuestion[] // same shape as reading; one sampled per review
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
  // ---- Google Drive sync bookkeeping (see src/sync/) ----
  // When the synced preferences above last changed, so a merge can tell which
  // device's copy is newer. Absent on rows written before sync existed.
  prefsUpdatedAt?: number
  // "Progress was reset at" timestamps, per level. A merge drops review rows
  // older than the marker for their level, so resetting on one device isn't
  // undone by stale rows arriving from another.
  resetMarkers?: Partial<Record<JlptLevel, number>>
}
