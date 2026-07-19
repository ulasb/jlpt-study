import { stripFurigana } from '../lib/furigana'
import { tofuguSearchUrl } from '../lib/tofugu'
import {
  confusablesFor,
  confusableWordForms,
  kanaNearMisses,
  kanaVowelSwaps,
  normalizeReading,
  stripDots,
  toHiragana,
} from './tricky'
import type { Dimension, Grammar, Kanji, Listening, Reading, Vocab } from '../types'

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
  contextStyle?: 'passage' // render context as a reading passage, not a lead-in
  audio?: string // listening: audio file path, relative to the app base URL
  options: string[] // exactly 4, already shuffled
  correctIndex: number
  optionStyle?: 'kanji' // enlarge single-kanji options in reverse modes
  reveal: RevealBlock[] // shown only after answering
}

// Randomness source. Defaults to Math.random; exam papers pass a seeded rng
// (via BuildOpts) so a given test number always produces the same questions.
// Every exported builder sets this on entry, so it can't leak between calls.
let rand: () => number = Math.random

export interface BuildOpts {
  rng?: () => number
  // Force a specific question mode (exam sections are mode-specific: the
  // 漢字読み section is all reading questions, 表記 all orthography).
  mode?: string
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function sample<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n)
}

function pickMode<T extends string>(modes: T[]): T {
  return modes[Math.floor(rand() * modes.length)]
}

// Weighted mode picker: exam-realistic modes (reading questions) should come
// up more often than the rest.
function pickWeighted<T extends string>(entries: [T, number][]): T {
  const total = entries.reduce((s, [, w]) => s + w, 0)
  let r = rand() * total
  for (const [v, w] of entries) {
    r -= w
    if (r < 0) return v
  }
  return entries[entries.length - 1][0]
}

const overlaps = (a: string[], b: string[]) => a.some((x) => b.includes(x))

// Pick n distinct option strings, preferring `safe`, never repeating one
// already in `exclude` (distinct pool items can render the same meaning
// string, which would otherwise produce duplicate options).
function pickDistinctStrings(safe: string[], all: string[], n: number, exclude: Set<string>): string[] {
  const picked: string[] = []
  const seen = new Set(exclude)
  for (const s of [...shuffle(safe), ...shuffle(all)]) {
    if (picked.length >= n) break
    if (!seen.has(s)) {
      picked.push(s)
      seen.add(s)
    }
  }
  return picked
}

// Like pickDistractors but with ordered preference tiers: exhaust the most
// exam-like candidates (visual confusables, near-miss readings) before the
// broader pool. Dedupes across tiers.
function pickTiered<T>(tiers: T[][], all: T[], n: number): T[] {
  const picked: T[] = []
  for (const tier of [...tiers, all]) {
    if (picked.length >= n) break
    picked.push(...sample(tier.filter((x) => !picked.includes(x)), n - picked.length))
  }
  return picked
}

// Assemble n wrong readings for a reading question: a couple of `preferred`
// distractors first (e.g. the kanji's other reading swapped into the word),
// then kana near-misses, then `fallback` (real readings from the pool).
// `forbidden` holds every string that would be a correct answer.
function readingDistractors(
  correct: string,
  forbidden: Set<string>,
  preferred: string[],
  fallback: string[],
  n: number,
): string[] {
  const seen = new Set<string>([correct, ...forbidden])
  const ok = (r: string) => r.length > 0 && !seen.has(r)
  const picked: string[] = []
  const take = (pool: string[], count: number) => {
    for (const r of sample(pool.filter(ok), count)) {
      picked.push(r)
      seen.add(r)
    }
  }
  take(preferred, 1)
  take(kanaNearMisses(correct), n - picked.length)
  take(kanaVowelSwaps(correct), n - picked.length)
  take(fallback, n - picked.length)
  return picked
}

// ---- Kanji ----------------------------------------------------------------
// Modes, weighted like the exam:
//   k2r (most common) — JLPT 漢字読み: a word using the kanji → pick the kana
//        reading among near-misses (がっこう/がこう/かっこう...).
//   r2k / m2k — reading or meaning → pick the kanji, preferring visually
//        confusable distractors (大 vs 犬 vs 太).
//   k2m — kanji → meaning.

const allReadings = (k: Kanji) => [...k.kunyomi, ...k.onyomi].map(normalizeReading)

// "Wrong version of the reading" distractors: if the word's reading contains
// one of the kanji's readings, swap in another (日曜日 にちようび → じつようび).
function swappedReadings(wordReading: string, item: Kanji): string[] {
  const rs = [...new Set(allReadings(item))]
  const out: string[] = []
  for (const r of rs) {
    const idx = r ? wordReading.indexOf(r) : -1
    if (idx < 0) continue
    for (const r2 of rs) {
      if (r2 && r2 !== r)
        out.push(wordReading.slice(0, idx) + r2 + wordReading.slice(idx + r.length))
    }
  }
  return out
}

export type KanjiMode = 'k2r' | 'r2k' | 'm2k' | 'k2m'

export function buildKanjiQuestion(item: Kanji, pool: Kanji[], opts?: BuildOpts): Question {
  rand = opts?.rng ?? Math.random
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

  // A forced mode that needs readings falls back to the no-readings pick.
  const forced = opts?.mode as KanjiMode | undefined
  const mode =
    forced && (readings.length > 0 || (forced !== 'k2r' && forced !== 'r2k'))
      ? forced
      : readings.length
        ? pickWeighted<KanjiMode>([['k2r', 4], ['r2k', 2], ['m2k', 2], ['k2m', 2]])
        : pickMode(['k2m', 'm2k'] as const)

  // Distractor tiers shared by the pick-the-kanji modes: visual look-alikes
  // first, then kanji of similar stroke count (visually plausible), then any.
  const lookAlikes = confusablesFor(item.character)
  const tiersFor = (safe: Kanji[]) => [
    safe.filter((k) => lookAlikes.has(k.character)),
    safe.filter((k) => Math.abs(k.strokeCount - item.strokeCount) <= 1),
    safe,
  ]

  if (mode === 'k2r') {
    // Prefer asking through a real word, like the exam. Fall back to the bare
    // kanji when there's no usable example word.
    const ex = sample(item.exampleWords.filter((w) => w.word !== w.reading && w.reading), 1)[0]
    // Bare-kanji fallback asks for the reading stem (okurigana dropped).
    const correct = ex ? ex.reading : sample(readings, 1)[0].split('.')[0]
    // Anything that's a valid reading of the prompt must not appear as a
    // distractor. When the prompt is the bare kanji — including an example
    // word that IS the bare kanji (妻: つま asked, さい also valid) — that's
    // all of its readings: stems and full forms, in both scripts.
    const allForms = readings.flatMap((r) => [
      r.split('.')[0], stripDots(r), toHiragana(stripDots(r)), normalizeReading(r),
    ])
    const forbidden =
      ex && ex.word !== item.character
        ? new Set([ex.reading])
        : new Set([...(ex ? [ex.reading] : []), ...allForms])
    const preferred = ex ? swappedReadings(ex.reading, item) : []
    const fallback = others.flatMap((k) => allReadings(k)).filter(Boolean)
    const wrong = readingDistractors(correct, forbidden, preferred, fallback, 3)
    const options = shuffle([correct, ...wrong])
    return {
      itemId: item.id, dimension: 'kanji',
      modeLabel: ex ? 'How is this word read?' : 'How is this kanji read?',
      prompt: ex ? ex.word : item.character,
      promptStyle: ex ? 'word' : 'kanji', options,
      correctIndex: options.indexOf(correct), reveal,
    }
  }

  if (mode === 'k2m') {
    // Don't offer another kanji's meaning that overlaps this one's.
    const safe = others.filter((k) => !overlaps(k.meanings, item.meanings))
    const toMeaning = (k: Kanji) => k.meanings.join(', ')
    const wrong = pickDistinctStrings(safe.map(toMeaning), others.map(toMeaning), 3, new Set([meaning]))
    const options = shuffle([meaning, ...wrong])
    return {
      itemId: item.id, dimension: 'kanji', modeLabel: 'What does this kanji mean?',
      prompt: item.character, promptStyle: 'kanji', options,
      correctIndex: options.indexOf(meaning), reveal,
    }
  }

  // reverse: options are kanji characters
  const isReading = mode === 'r2k'
  // Show the reading stem in its original script (onyomi stay katakana);
  // compare in normalized hiragana.
  const promptReading = (sample(readings, 1)[0] ?? '').split('.')[0]
  // Exclude kanji that would also be correct: same reading (r2k) or a shared meaning (m2k).
  const safe = isReading
    ? others.filter((k) => !allReadings(k).includes(toHiragana(promptReading)))
    : others.filter((k) => !overlaps(k.meanings, item.meanings))
  const wrong = pickTiered(tiersFor(safe), others, 3).map((k) => k.character)
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
// Modes, weighted like the exam:
//   w2r (most common, kanji words only) — 漢字読み: word → pick the kana
//        reading among near-misses.
//   m2w / r2w — meaning or reading → pick the written form; mixes in 表記-style
//        fake spellings that swap one kanji for a look-alike (大学→犬学).
//   w2m — word → meaning.
export type VocabMode = 'w2r' | 'w2m' | 'm2w' | 'r2w'

export function buildVocabQuestion(item: Vocab, pool: Vocab[], opts?: BuildOpts): Question {
  rand = opts?.rng ?? Math.random
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

  // Reading modes only make sense when the word isn't already written in kana
  // (word === reading would make the prompt equal the answer).
  const isKana = item.word === item.reading
  // A forced reading mode is meaningless for a kana-only word; fall back.
  const forced = opts?.mode as VocabMode | undefined
  const mode =
    forced && !(isKana && (forced === 'w2r' || forced === 'r2w'))
      ? forced
      : isKana
        ? pickMode(['w2m', 'm2w'] as const)
        : pickWeighted<VocabMode>([['w2r', 4], ['w2m', 2], ['m2w', 2], ['r2w', 2]])

  if (mode === 'w2r') {
    // Distractors that are readings of *other* pool words are fine — the
    // question asks for this word's reading — but a homophone's reading
    // equals the correct answer, which the forbidden set already covers.
    const fallback = others.map((w) => w.reading)
    const wrong = readingDistractors(item.reading, new Set([item.reading]), [], fallback, 3)
    const options = shuffle([item.reading, ...wrong])
    return {
      itemId: item.id, dimension: 'vocab', modeLabel: 'How is this word read?',
      prompt: item.word, promptStyle: 'word', options,
      correctIndex: options.indexOf(item.reading), reveal,
    }
  }

  if (mode === 'w2m') {
    // Don't offer another word's meaning that overlaps this one's.
    const safe = others.filter((w) => !overlaps(w.meanings, item.meanings))
    const toMeaning = (w: Vocab) => w.meanings.join(', ')
    const wrong = pickDistinctStrings(safe.map(toMeaning), others.map(toMeaning), 3, new Set([meaning]))
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
  // Up to two 表記-style fakes (look-alike kanji swapped in, guaranteed not to
  // be real pool words), topped up with real words from the pool.
  const realWords = new Set([item.word, ...others.map((w) => w.word)])
  const fakes = isKana ? [] : sample(confusableWordForms(item.word, realWords), 2)
  const real = pickDistinctStrings(
    safe.map((w) => w.word), others.map((w) => w.word),
    3 - fakes.length, new Set([item.word, ...fakes]),
  )
  const options = shuffle([item.word, ...fakes, ...real])
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
export function buildGrammarQuestion(item: Grammar, opts?: BuildOpts): Question {
  rand = opts?.rng ?? Math.random
  const example = sample(item.examples, 1)[0]
  // Answer/distractor forms may carry furigana markup (聞[き]いて); options are
  // shown plain — the reveal renders the marked-up forms as ruby instead.
  const correct = stripFurigana(example.answer)
  const wrong = sample(
    item.distractorPool.filter((d) => stripFurigana(d.form) !== correct),
    3,
  )
  const options = shuffle([correct, ...wrong.map((d) => stripFurigana(d.form))])

  const filled = example.sentence.replace('___', example.answer)
  const contextBlocks: RevealBlock[] = example.context
    ? [
        { kind: 'sentence', text: example.context },
        ...(example.contextTranslation ? [{ kind: 'trans', text: example.contextTranslation } as RevealBlock] : []),
      ]
    : []
  const reveal: RevealBlock[] = [
    { kind: 'trans', text: `${item.title} — ${item.meaning}` },
    ...contextBlocks,
    { kind: 'sentence', text: filled },
    { kind: 'trans', text: example.translation },
    { kind: 'note', ok: true, form: example.answer, text: item.whyRight },
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

// ---- Reading --------------------------------------------------------------
// Comprehension: the passage is shown without furigana (like the real JLPT)
// with one of the passage's questions; the reveal shows the passage with ruby,
// its translation, and why each option is right/wrong.
export function buildReadingQuestion(item: Reading, opts?: BuildOpts): Question {
  rand = opts?.rng ?? Math.random
  const q = sample(item.questions, 1)[0]
  const order = shuffle(q.options.map((_, i) => i))
  const options = order.map((i) => q.options[i].text)
  const correctIndex = order.indexOf(q.correctIndex)

  const reveal: RevealBlock[] = [
    ...item.passage
      .split('\n')
      .filter(Boolean)
      .map((p): RevealBlock => ({ kind: 'sentence', text: p })),
    { kind: 'trans', text: item.translation },
    { kind: 'sentence', text: q.question },
    { kind: 'trans', text: q.questionTranslation },
    // correct answer's note first, then the wrong ones in display order
    { kind: 'note', ok: true, form: q.options[q.correctIndex].text, text: q.options[q.correctIndex].explanation },
    ...order
      .filter((i) => i !== q.correctIndex)
      .map((i): RevealBlock => ({ kind: 'note', ok: false, form: q.options[i].text, text: q.options[i].explanation })),
  ]

  return {
    itemId: item.id, dimension: 'reading', modeLabel: 'Read the passage and answer',
    prompt: stripFurigana(q.question), promptStyle: 'sentence',
    context: stripFurigana(item.passage), contextStyle: 'passage',
    options, correctIndex, reveal,
  }
}

// ---- Listening ------------------------------------------------------------
// The script is never shown before answering — the pre-generated audio file
// (see scripts/gen-audio.mjs) is played instead. One file per item, derived
// from the item id: "listening:N5:apple-shop" → audio/listening/n5/apple-shop.m4a

export function audioPathFor(item: Listening): string {
  return `audio/listening/${item.level.toLowerCase()}/${item.id.split(':')[2]}.m4a`
}

export function buildListeningQuestion(item: Listening, opts?: BuildOpts): Question {
  rand = opts?.rng ?? Math.random
  const q = sample(item.questions, 1)[0]
  const order = shuffle(q.options.map((_, i) => i))
  const options = order.map((i) => q.options[i].text)
  const correctIndex = order.indexOf(q.correctIndex)

  const reveal: RevealBlock[] = [
    ...item.script.map((l): RevealBlock => ({ kind: 'sentence', text: `${l.speaker}：${l.text}` })),
    { kind: 'trans', text: item.translation },
    { kind: 'sentence', text: q.question },
    { kind: 'trans', text: q.questionTranslation },
    // correct answer's note first, then the wrong ones in display order
    { kind: 'note', ok: true, form: q.options[q.correctIndex].text, text: q.options[q.correctIndex].explanation },
    ...order
      .filter((i) => i !== q.correctIndex)
      .map((i): RevealBlock => ({ kind: 'note', ok: false, form: q.options[i].text, text: q.options[i].explanation })),
  ]

  return {
    itemId: item.id, dimension: 'listening', modeLabel: 'Listen and answer',
    prompt: stripFurigana(q.question), promptStyle: 'sentence',
    audio: audioPathFor(item),
    options, correctIndex, reveal,
  }
}
