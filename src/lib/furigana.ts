// Inline furigana markup: a run of kanji immediately followed by its reading in
// square brackets, e.g. 会社[かいしゃ] or 食[た]べる. Plain kana/punctuation pass
// through untouched. This keeps content authorable as plain strings.

export interface FuriToken {
  base: string
  reading?: string
}

const RUBY_SRC = '([\\u4e00-\\u9faf々〆ヶ〇]+)\\[([^\\]]+)\\]'

export function parseFurigana(text: string): FuriToken[] {
  const tokens: FuriToken[] = []
  const re = new RegExp(RUBY_SRC, 'g')
  let last = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(text))) {
    if (m.index > last) tokens.push({ base: text.slice(last, m.index) })
    tokens.push({ base: m[1], reading: m[2] })
    last = re.lastIndex
  }
  if (last < text.length) tokens.push({ base: text.slice(last) })
  return tokens
}

// Remove furigana annotations, leaving the bare kanji — used for the quiz prompt
// so the reading isn't given away before the user answers.
export function stripFurigana(text: string): string {
  return text.replace(new RegExp(RUBY_SRC, 'g'), '$1')
}
