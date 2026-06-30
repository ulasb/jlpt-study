import type { RevealBlock } from '../study/quiz'
import { Furigana } from './Furigana'

export function Reveal({ blocks }: { blocks: RevealBlock[] }) {
  return (
    <div className="reveal-blocks">
      {blocks.map((b, i) => {
        switch (b.kind) {
          case 'main':
            return (
              <div key={i} className="rb-main">
                <Furigana text={b.text} />
              </div>
            )
          case 'sentence':
            return (
              <div key={i} className="rb-sentence">
                <Furigana text={b.text} />
              </div>
            )
          case 'trans':
            return (
              <div key={i} className="rb-trans">
                {b.text}
              </div>
            )
          case 'note':
            return (
              <div key={i} className={`rb-note ${b.ok ? 'ok' : 'bad'}`}>
                <span className="rb-form">
                  {b.ok ? '✓' : '✗'} {b.form}
                </span>
                <span className="rb-gloss">{b.text}</span>
              </div>
            )
          case 'link':
            return (
              <a key={i} className="rb-link" href={b.url} target="_blank" rel="noopener noreferrer">
                {b.label} ↗
              </a>
            )
        }
      })}
    </div>
  )
}
