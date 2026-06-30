import { Fragment } from 'react'
import { parseFurigana } from '../lib/furigana'

// Renders text with inline furigana markup (漢字[かんじ]) as <ruby> annotations.
export function Furigana({ text }: { text: string }) {
  return (
    <>
      {parseFurigana(text).map((t, i) =>
        t.reading ? (
          <ruby key={i}>
            {t.base}
            <rt>{t.reading}</rt>
          </ruby>
        ) : (
          <Fragment key={i}>{t.base}</Fragment>
        ),
      )}
    </>
  )
}
