// Exam-style "tricky" distractor generation.
//
// The real JLPT doesn't test kanji with four unrelated choices — reading
// questions offer near-misses of the correct kana (がっこう/がこう/かっこう),
// and orthography questions offer visually confusable characters (大/犬/太).
// This module generates both kinds of confounders.

// ---- Kana utilities --------------------------------------------------------

const HIRA_START = 0x3041
const HIRA_END = 0x3096
const KATA_OFFSET = 0x60 // katakana block sits 0x60 above hiragana

const isKatakanaChar = (c: string) => {
  const code = c.charCodeAt(0)
  return code >= HIRA_START + KATA_OFFSET && code <= HIRA_END + KATA_OFFSET
}

export function toHiragana(s: string): string {
  return [...s]
    .map((c) => (isKatakanaChar(c) ? String.fromCharCode(c.charCodeAt(0) - KATA_OFFSET) : c))
    .join('')
}

function toKatakana(s: string): string {
  return [...s]
    .map((c) => {
      const code = c.charCodeAt(0)
      return code >= HIRA_START && code <= HIRA_END ? String.fromCharCode(code + KATA_OFFSET) : c
    })
    .join('')
}

// Kunyomi entries mark the okurigana boundary with a dot ("ひと.つ").
// The stem is what identifies the reading; drop the dot (and okurigana for
// prompts, via `.split('.')[0]` at the call site).
export const stripDots = (r: string) => r.replace(/\./g, '')

// Normalized form for "is this the same reading?" comparisons.
export const normalizeReading = (r: string) => toHiragana(r.split('.')[0])

// Voiced/half-voiced siblings: swapping one of these is the classic JLPT
// reading trap (かっこう vs がっこう).
const VOICE_PAIRS = [
  'かが', 'きぎ', 'くぐ', 'けげ', 'こご',
  'さざ', 'しじ', 'すず', 'せぜ', 'そぞ',
  'ただ', 'ちぢ', 'つづ', 'てで', 'とど',
  'はば', 'ひび', 'ふぶ', 'へべ', 'ほぼ',
  'はぱ', 'ひぴ', 'ふぷ', 'へぺ', 'ほぽ',
  'ばぱ', 'びぴ', 'ぶぷ', 'べぺ', 'ぼぽ',
]
const VOICING = new Map<string, string[]>()
for (const pair of VOICE_PAIRS) {
  const [a, b] = [...pair]
  VOICING.set(a, [...(VOICING.get(a) ?? []), b])
  VOICING.set(b, [...(VOICING.get(b) ?? []), a])
}

// Vowel rows, used to pick the conventional lengthener (こ→こう, け→けい).
const ROWS: [string, string][] = [
  ['あかがさざただなはばぱまやらわゃ', 'あ'],
  ['いきぎしじちぢにひびぴみり', 'い'],
  ['うくぐすずつづぬふぶぷむゆるゅ', 'う'],
  ['えけげせぜてでねへべぺめれ', 'い'],
  ['おこごそぞとどのほぼぽもよろをょ', 'う'],
]
const lengthenerFor = (c: string): string | null => {
  for (const [row, len] of ROWS) if (row.includes(c)) return len
  return null
}

// Kana that take a geminate っ before them.
const GEMINATABLE = 'かきくけこさしすせそたちつてとぱぴぷぺぽ'
const SMALL_YOON = 'ゃゅょ'
const BIG_YOON = 'やゆよ'

// All plausible near-miss variants of a kana reading: one voicing flip, one
// added/dropped mora, a gained/lost っ, or a small-kana mixup. Input may be
// hiragana or katakana; output matches the input script.
export function kanaNearMisses(reading: string): string[] {
  const wasKatakana = [...reading].some(isKatakanaChar)
  const s = toHiragana(reading)
  const chars = [...s]
  const out = new Set<string>()
  const add = (v: string) => {
    if (v && v !== s) out.add(v)
  }
  const replace = (i: number, c: string) => chars.slice(0, i).join('') + c + chars.slice(i + 1).join('')
  const insertAfter = (i: number, c: string) => chars.slice(0, i + 1).join('') + c + chars.slice(i + 1).join('')

  for (let i = 0; i < chars.length; i++) {
    const c = chars[i]
    // voicing flips: か↔が, は↔ば↔ぱ ...
    for (const v of VOICING.get(c) ?? []) add(replace(i, v))
    // add a long vowel: こ→こう, け→けい — but never split a yōon (りょ + い
    // between り and ょ would be unpronounceable)
    const len = lengthenerFor(c)
    if (len && chars[i + 1] !== len && !SMALL_YOON.includes(chars[i + 1] ?? '')) {
      add(insertAfter(i, len))
    }
    // insert a geminate: がこう→がっこう (never after ん — んっ is impossible)
    if (i > 0 && GEMINATABLE.includes(c) && chars[i - 1] !== 'っ' && chars[i - 1] !== 'ん') {
      add(chars.slice(0, i).join('') + 'っ' + chars.slice(i).join(''))
    }
    // small-kana mixups: きょ→きゃ/きゅ/きよ, and きよ→きょ
    const yoonIdx = SMALL_YOON.indexOf(c)
    if (yoonIdx >= 0) {
      for (const alt of SMALL_YOON) if (alt !== c) add(replace(i, alt))
      add(replace(i, BIG_YOON[yoonIdx]))
    }
    const bigIdx = BIG_YOON.indexOf(c)
    if (bigIdx >= 0 && i > 0) add(replace(i, SMALL_YOON[bigIdx]))
    // drop a mora ("missing letter"): がっこう→がこう, にちようび→にちよび.
    // Skip when the next char is a small yōon (deleting き from きょ leaves
    // an orphaned ょ) and keep at least two morae.
    if (chars.length >= 3 && !SMALL_YOON.includes(chars[i + 1] ?? '')) {
      add(chars.slice(0, i).join('') + chars.slice(i + 1).join(''))
    }
  }

  const list = [...out]
  return wasKatakana ? list.map(toKatakana) : list
}

// Weaker near-misses used as backfill when the primary ones run short (short
// all-vowel readings like あう have few voicing/length variants): swap one
// kana for another in the same consonant row (あう→おう, すむ→さむ).
const CONSONANT_ROWS = [
  'あいうえお', 'かきくけこ', 'がぎぐげご', 'さしすせそ', 'ざじずぜぞ',
  'たちつてと', 'だぢづでど', 'なにぬねの', 'はひふへほ', 'ばびぶべぼ',
  'ぱぴぷぺぽ', 'まみむめも', 'やゆよ', 'らりるれろ',
]

export function kanaVowelSwaps(reading: string): string[] {
  const wasKatakana = [...reading].some(isKatakanaChar)
  const s = toHiragana(reading)
  const chars = [...s]
  const out = new Set<string>()
  for (let i = 0; i < chars.length; i++) {
    const row = CONSONANT_ROWS.find((r) => r.includes(chars[i]))
    if (!row) continue
    for (const alt of row) {
      if (alt === chars[i]) continue
      const v = chars.slice(0, i).join('') + alt + chars.slice(i + 1).join('')
      if (v !== s) out.add(v)
    }
  }
  const list = [...out]
  return wasKatakana ? list.map(toKatakana) : list
}

// ---- Visually confusable kanji ---------------------------------------------
// Curated groups of look-alikes. Within a group, every member is a plausible
// wrong option for any other (大 for 犬, 末 for 未...). Used only as a
// *preference* when picking distractors — candidates are still checked against
// the pool for shared readings/meanings, so an over-eager group can never
// create a second correct answer.
const CONFUSABLE_GROUPS = [
  '大犬太天夫央',
  '人入八',
  '土士',
  '日目白百自旧',
  '千干于午牛',
  '牛午年半',
  '石右左友有布',
  '木本体休未末札',
  '林森村材',
  '待持特侍時詩寺',
  '間問聞開閉関門',
  '話語詰読',
  '買貝見具員頁',
  '線緑録縁',
  '読続',
  '熱熟勢',
  '考老孝',
  '教数救',
  '校交効較',
  '新親',
  '曜躍濯',
  '遠園',
  '道首導',
  '近辺返込',
  '雨両雪雲電需',
  '車東束速',
  '来米',
  '私和秋科利',
  '春奏泰',
  '青清晴精静情請',
  '半平羊洋様詳',
  '万方力刀刃',
  '九丸凡',
  '己已巳',
  '水氷永泳',
  '会合今令含',
  '金全会',
  '食飲館飯飾',
  '高商適敵滴摘',
  '切初分',
  '北比此批',
  '外多夕名',
  '名各客格路略',
  '兄見先元光克充',
  '元完院園',
  '花化貨靴',
  '作昨酢詐',
  '使便更硬',
  '住注柱往主駐',
  '助勧効',
  '勉免晩逃',
  '銀根眼限恨',
  '記紀起配妃',
  '失矢先夫',
  '師帥',
  '微徴徹撤',
  '複復腹覆',
  '績積責債',
  '検険験倹剣',
  '講構購溝',
  '識織職',
  '議犠儀義',
  '論輪倫',
  '測側則',
  '招紹昭照沼',
  '組祖阻粗租',
  '低底抵邸',
  '停亭',
  '徒従',
  '渡度席庭底府庫',
  '猫描苗',
  '暑署着看',
  '思恩因困',
  '回同円内',
  '田由甲申冊',
  '王玉主',
  '少小示宗',
  '糸系係孫',
  '安案宴',
  '夜液',
  '悪亜',
  '区匹医',
  '病痛疲療',
  '何可河荷歌',
  '可司同向',
  '週周調彫',
  '達幸辛運',
  '乗垂重量',
  '重動働種',
  '若苦草',
  '真直値置具',
  '貸賃資費貨',
  '仕任住仁',
  '代付伐化',
  '急息恵',
  '思急総',
  '悲非俳排輩',
  '比皆階',
  '皆背骨',
  '成城誠盛',
  '式試',
  '弁井',
  '届屈掘',
  '局居屋室',
]

const CONFUSABLES = new Map<string, Set<string>>()
for (const group of CONFUSABLE_GROUPS) {
  for (const c of group) {
    const set = CONFUSABLES.get(c) ?? new Set<string>()
    for (const other of group) if (other !== c) set.add(other)
    CONFUSABLES.set(c, set)
  }
}

export function confusablesFor(char: string): Set<string> {
  return CONFUSABLES.get(char) ?? new Set()
}

// JLPT 表記-style fake spellings of a word: swap one kanji for a look-alike
// (大学→犬学). `realWords` guards against accidentally producing an actual
// word from the pool.
export function confusableWordForms(word: string, realWords: Set<string>): string[] {
  const chars = [...word]
  const out: string[] = []
  for (let i = 0; i < chars.length; i++) {
    for (const c of confusablesFor(chars[i])) {
      const v = chars.slice(0, i).join('') + c + chars.slice(i + 1).join('')
      if (!realWords.has(v)) out.push(v)
    }
  }
  return out
}
