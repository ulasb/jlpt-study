import { useLiveQuery } from 'dexie-react-hooks'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Furigana } from '../components/Furigana'
import { tofuguSearchUrl } from '../lib/tofugu'
import { db } from '../db/db'
import { ensureLevelSeeded } from '../db/seed'
import { useSettings } from '../hooks/useSettings'
import type { Dimension } from '../types'

export function Browse() {
  const { dimension } = useParams<{ dimension: Dimension }>()
  const dim = dimension as Dimension
  const navigate = useNavigate()
  const settings = useSettings()
  const level = settings?.selectedLevel
  const [open, setOpen] = useState<string | null>(null)

  // Lazy-load this level's content; the live queries below react to the writes.
  useEffect(() => {
    if (level) void ensureLevelSeeded(level)
  }, [level])

  const kanji = useLiveQuery(
    () => (level && dim === 'kanji' ? db.kanji.where('level').equals(level).toArray() : []),
    [level, dim],
  )
  const vocab = useLiveQuery(
    () => (level && dim === 'vocab' ? db.vocab.where('level').equals(level).toArray() : []),
    [level, dim],
  )
  const grammar = useLiveQuery(
    () => (level && dim === 'grammar' ? db.grammar.where('level').equals(level).toArray() : []),
    [level, dim],
  )

  if (!level) return null

  return (
    <div className="page">
      <button className="back" onClick={() => navigate('/today')}>← Today</button>

      {dim === 'kanji' && (
        <>
          <h1>{level} Kanji</h1>
          <div className="browse-list">
            {kanji?.map((it) => (
              <div key={it.id} className="browse-item">
                <div className="kanji-row">
                  <span className="kanji-big">{it.character}</span>
                  <div>
                    <div className="kanji-meaning">{it.meanings.join(', ')}</div>
                    <div className="muted small">
                      {it.kunyomi.length > 0 && <>訓 {it.kunyomi.join('・')}　</>}
                      {it.onyomi.length > 0 && <>音 {it.onyomi.join('・')}　</>}
                      {it.strokeCount} strokes
                    </div>
                    <div className="muted small examples">
                      {it.exampleWords.map((w) => (
                        <span key={w.word}>{w.word}（{w.reading}）{w.meaning}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {dim === 'vocab' && (
        <>
          <h1>{level} Vocabulary</h1>
          <div className="browse-list">
            {vocab?.map((it) => (
              <div key={it.id} className="browse-item">
                <div className="vocab-row">
                  <div>
                    <span className="vocab-word">{it.word}</span>
                    <span className="muted"> （{it.reading}）</span>
                  </div>
                  <span className="muted small pos">{it.partOfSpeech}</span>
                </div>
                <div className="vocab-meaning">{it.meanings.join(', ')}</div>
                {it.exampleSentence && (
                  <div className="muted small example-sentence">
                    <Furigana text={it.exampleSentence.jp} /> — {it.exampleSentence.en}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {dim === 'grammar' && (
        <>
          <h1>{level} Grammar</h1>
          <div className="browse-list">
            {grammar?.map((it) => {
              const isOpen = open === it.id
              return (
                <div key={it.id} className="browse-item">
                  <button className="grammar-head" onClick={() => setOpen(isOpen ? null : it.id)}>
                    <span className="grammar-title">{it.title}</span>
                    <span className="muted small">{it.meaning}</span>
                    <span className="chevron">{isOpen ? '▾' : '▸'}</span>
                  </button>
                  {isOpen && (
                    <div className="grammar-body">
                      <p>{it.explanation}</p>
                      <p className="formation"><strong>Formation:</strong> {it.formation}</p>
                      <ul>
                        {it.examples.map((ex, i) => (
                          <li key={i}>
                            <Furigana text={ex.sentence.replace('___', ex.answer)} />
                            <br />
                            <span className="muted small">{ex.translation}</span>
                          </li>
                        ))}
                      </ul>
                      <a
                        className="tofugu-link"
                        href={tofuguSearchUrl(it.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Look up {it.title} on Tofugu ↗
                      </a>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
