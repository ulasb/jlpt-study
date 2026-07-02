import { stripFurigana } from '../lib/furigana'
import { tofuguSearchUrl } from '../lib/tofugu'
import type { Dimension, Grammar, Kanji, Vocab } from '../types'

// A block in the post-answer explanation. `main`/`sentence` may carry furigana
// markup and are rendered as ruby; `note` explains why a choice is right/wrong.
export type RevealBlock =
  | { kind: 'main'; text: string }
  | { kind: 'sentence'; text: string }
  | { kind: 'trans'; text: string }
  | { kind: 'note'; ok: boolean; form: string; text: string }
  | { kind: 'link'; label: string; url: string }

export interface Question {
  itemId: string
  dimension: Dimension
  modeLabel: string // small hint above the prompt
  prompt: string // the thing being asked about (no reading given away)
  promptStyle: 'kanji' | 'word' | 'sentence' | 'meaning'
  context?: string // optional lead-in shown above the prompt (grammar)
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

const overlaps = (a: string[], b: string[]) => a.some((x) => b.includes(x))

// Pick n distractors, preferring the "safe" set (candidates that can't also be
// a correct answer). Falls back to the wider pool only if there aren't enough,
// so a question always has 4 options.
function pickDistractors<T>(safe: T[], all: T[], n: number): T[] {
  const picked = sample(safe, n)
  if (picked.length >= n) return picked
  const rest = all.filter((x) => !picked.includes(x))
  return picked.concat(sample(rest, n - picked.length))
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
    // Don't offer another kanji's meaning that overlaps this one's.
    const safe = others.filter((k) => !overlaps(k.meanings, item.meanings))
    const wrong = pickDistractors(safe, others, 3).map((k) => k.meanings.join(', '))
    const options = shuffle([meaning, ...wrong])
    return {
      itemId: item.id, dimension: 'kanji', modeLabel: 'What does this kanji mean?',
      prompt: item.character, promptStyle: 'kanji', options,
      correctIndex: options.indexOf(meaning), reveal,
    }
  }
  // reverse: options are kanji characters
  const isReading = mode === 'r2k'
  const promptReading = readings[0] ?? ''
  // Exclude kanji that would also be correct: same reading (r2k) or a shared meaning (m2k).
  const safe = isReading
    ? others.filter((k) => ![...k.kunyomi, ...k.onyomi].includes(promptReading))
    : others.filter((k) => !overlaps(k.meanings, item.meanings))
  const wrong = pickDistractors(safe, others, 3).map((k) => k.character)
  const options = shuffle([item.character, ...wrong])
  return {
    itemId: item.id, dimension: 'kanji',
    modeLabel: isReading ? 'Which kanji is read this way?' : 'Which kanji has this meaning?',
    prompt: isReading ? promptReading : meaning,
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
    // Don't offer another word's meaning that overlaps this one's.
    const safe = others.filter((w) => !overlaps(w.meanings, item.meanings))
    const wrong = pickDistractors(safe, others, 3).map((w) => w.meanings.join(', '))
    const options = shuffle([meaning, ...wrong])
    return {
      itemId: item.id, dimension: 'vocab', modeLabel: 'What does this word mean?',
      prompt: item.word, promptStyle: 'word', options,
      correctIndex: options.indexOf(meaning), reveal,
    }
  }
  const isReading = mode === 'r2w'
  // Exclude words that would also be correct: same reading (r2w, homophones) or
  // a shared meaning (m2w, synonyms).
  const safe = isReading
    ? others.filter((w) => w.reading !== item.reading)
    : others.filter((w) => !overlaps(w.meanings, item.meanings))
  const wrong = pickDistractors(safe, others, 3).map((w) => w.word)
  const options = shuffle([item.word, ...wrong])
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

  const filled = example.sentence.replace('___', example.answer)
  const reveal: RevealBlock[] = [
    { kind: 'trans', text: `${item.title} — ${item.meaning}` },
    ...(example.context ? [{ kind: 'sentence', text: example.context } as RevealBlock] : []),
    { kind: 'sentence', text: filled },
    { kind: 'trans', text: example.translation },
    { kind: 'note', ok: true, form: correct, text: item.whyRight },
    ...wrong.map((d): RevealBlock => ({ kind: 'note', ok: false, form: d.form, text: d.gloss })),
    { kind: 'link', label: `Read more about ${item.title} on Tofugu`, url: tofuguSearchUrl(item.title) },
  ]

  return {
    itemId: item.id, dimension: 'grammar', modeLabel: 'Choose the word that fits the blank',
    prompt: stripFurigana(example.sentence.replace('___', '＿＿＿')),
    promptStyle: 'sentence',
    context: example.context ? stripFurigana(example.context) : undefined,
    options, correctIndex: options.indexOf(correct), reveal,
  }
}
