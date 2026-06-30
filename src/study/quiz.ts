import { stripFurigana } from '../lib/furigana'
import type { Dimension, Grammar, Kanji, Vocab } from '../types'

// A block in the post-answer explanation. `main`/`sentence` may carry furigana
// markup and are rendered as ruby; `note` explains why a choice is right/wrong.
export type RevealBlock =
  | { kind: 'main'; text: string }
  | { kind: 'sentence'; text: string }
  | { kind: 'trans'; text: string }
  | { kind: 'note'; ok: boolean; form: string; text: string }

export interface Question {
  itemId: string
  dimension: Dimension
  modeLabel: string // small hint above the prompt
  prompt: string // the thing being asked about (no reading given away)
  promptStyle: 'kanji' | 'word' | 'sentence' | 'meaning'
  options: string[] // exactly 4, already shuffled
  correctIndex: number
  optionStyle?: 'kanji' // enlarge single-kanji options in reverse modes
  reveal: RevealBlock[] // shown only after answering
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function sample<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n)
}

function pickMode<T extends string>(modes: T[]): T {
  return modes[Math.floor(Math.random() * modes.length)]
}

// ---- Kanji ----------------------------------------------------------------
// Forward: kanji → meaning (reading hidden until reveal).
// Reverse: meaning → kanji, or reading → kanji.
export function buildKanjiQuestion(item: Kanji, pool: Kanji[]): Question {
  const others = pool.filter((k) => k.id !== item.id)
  const meaning = item.meanings.join(', ')
  const readings = [...item.kunyomi, ...item.onyomi]
  const readingLine = [
    item.kunyomi.length ? `訓 ${item.kunyomi.join('・')}` : '',
    item.onyomi.length ? `音 ${item.onyomi.join('・')}` : '',
  ]
    .filter(Boolean)
    .join('　')
  const exampleLine = item.exampleWords
    .map((w) => `${w.word}（${w.reading}）${w.meaning}`)
    .join('、')

  const reveal: RevealBlock[] = [
    { kind: 'main', text: item.character },
    { kind: 'trans', text: `${readingLine}　·　${item.strokeCount} strokes` },
    { kind: 'trans', text: meaning },
    { kind: 'trans', text: `例 ${exampleLine}` },
  ]

  const modes = readings.length ? (['k2m', 'm2k', 'r2k'] as const) : (['k2m', 'm2k'] as const)
  const mode = pickMode([...modes])

  if (mode === 'k2m') {
    const wrong = sample(others, 3).map((k) => k.meanings.join(', '))
    const options = shuffle([meaning, ...wrong])
    return {
      itemId: item.id, dimension: 'kanji', modeLabel: 'What does this kanji mean?',
      prompt: item.character, promptStyle: 'kanji', options,
      correctIndex: options.indexOf(meaning), reveal,
    }
  }
  // reverse: options are kanji characters
  const wrong = sample(others, 3).map((k) => k.character)
  const options = shuffle([item.character, ...wrong])
  const isReading = mode === 'r2k'
  return {
    itemId: item.id, dimension: 'kanji',
    modeLabel: isReading ? 'Which kanji is read this way?' : 'Which kanji has this meaning?',
    prompt: isReading ? (readings[0] ?? '') : meaning,
    promptStyle: isReading ? 'word' : 'meaning',
    options, correctIndex: options.indexOf(item.character), optionStyle: 'kanji', reveal,
  }
}

// ---- Vocab ----------------------------------------------------------------
// Forward: word → meaning (reading hidden). Reverse: meaning → word, reading → word.
export function buildVocabQuestion(item: Vocab, pool: Vocab[]): Question {
  const others = pool.filter((w) => w.id !== item.id)
  const meaning = item.meanings.join(', ')

  const reveal: RevealBlock[] = [
    { kind: 'main', text: `${item.word}[${item.reading}]` },
    { kind: 'trans', text: `${meaning}　·　${item.partOfSpeech}` },
  ]
  if (item.exampleSentence) {
    reveal.push({ kind: 'sentence', text: item.exampleSentence.jp })
    reveal.push({ kind: 'trans', text: item.exampleSentence.en })
  }

  // Skip reading→word when the word is already all kana (word === reading):
  // the prompt would equal the answer, making it trivial.
  const isKana = item.word === item.reading
  const mode = pickMode(isKana ? (['w2m', 'm2w'] as const) : (['w2m', 'm2w', 'r2w'] as const))

  if (mode === 'w2m') {
    const wrong = sample(others, 3).map((w) => w.meanings.join(', '))
    const options = shuffle([meaning, ...wrong])
    return {
      itemId: item.id, dimension: 'vocab', modeLabel: 'What does this word mean?',
      prompt: item.word, promptStyle: 'word', options,
      correctIndex: options.indexOf(meaning), reveal,
    }
  }
  const wrong = sample(others, 3).map((w) => w.word)
  const options = shuffle([item.word, ...wrong])
  const isReading = mode === 'r2w'
  return {
    itemId: item.id, dimension: 'vocab',
    modeLabel: isReading ? 'Which word has this reading?' : 'Which word means this?',
    prompt: isReading ? item.reading : meaning,
    promptStyle: isReading ? 'word' : 'meaning',
    options, correctIndex: options.indexOf(item.word), reveal,
  }
}

// ---- Grammar --------------------------------------------------------------
// Fill-in-the-blank. The grammar point's title is NOT shown in the prompt (it
// would give the answer away); it appears in the post-answer explanation, which
// also explains why the answer is right and why each shown distractor is wrong.
export function buildGrammarQuestion(item: Grammar): Question {
  const example = sample(item.examples, 1)[0]
  const correct = example.answer
  const wrong = sample(
    item.distractorPool.filter((d) => d.form !== correct),
    3,
  )
  const options = shuffle([correct, ...wrong.map((d) => d.form)])

  const reveal: RevealBlock[] = [
    { kind: 'trans', text: `${item.title} — ${item.meaning}` },
    { kind: 'sentence', text: example.sentence.replace('___', example.answer) },
    { kind: 'trans', text: example.translation },
    { kind: 'note', ok: true, form: correct, text: item.whyRight },
    ...wrong.map((d): RevealBlock => ({ kind: 'note', ok: false, form: d.form, text: d.gloss })),
  ]

  return {
    itemId: item.id, dimension: 'grammar', modeLabel: 'Choose the word that fits the blank',
    prompt: stripFurigana(example.sentence.replace('___', '＿＿＿')),
    promptStyle: 'sentence', options, correctIndex: options.indexOf(correct), reveal,
  }
}
