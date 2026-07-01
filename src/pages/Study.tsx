import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { useSettings } from '../hooks/useSettings'
import { trackEvent } from '../lib/analytics'
import type { Grade } from '../srs/sm2'
import { buildSession, recordGrade } from '../study/session'
import type { Question } from '../study/quiz'
import type { Dimension } from '../types'

const LABELS: Record<Dimension, string> = {
  kanji: 'Kanji',
  vocab: 'Vocabulary',
  grammar: 'Grammar',
}

export function Study() {
  const { dimension } = useParams<{ dimension: Dimension }>()
  const dim = dimension as Dimension
  const navigate = useNavigate()
  const settings = useSettings()
  const level = settings?.selectedLevel

  const [queue, setQueue] = useState<Question[] | null>(null)
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState<number | null>(null) // null = chose "I don't know"
  const [revealed, setRevealed] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)

  function load() {
    if (!level) return
    buildSession(level, dim, settings?.newPerDay ?? 10, Date.now()).then((q) => {
      setQueue(q)
      setIndex(0)
      setPicked(null)
      setRevealed(false)
      setCorrectCount(0)
      if (q.length > 0) trackEvent('study_start', { level, dimension: dim, queued: q.length })
    })
  }

  useEffect(load, [level, dim])

  if (!level || queue === null) return <div className="loading">Loading…</div>

  if (queue.length === 0) {
    return (
      <div className="page center">
        <h2>Nothing to study right now</h2>
        <p className="muted">You're caught up on {LABELS[dim]}. Come back when items are due.</p>
        <button className="btn primary" onClick={() => navigate('/')}>Back to today</button>
      </div>
    )
  }

  if (index >= queue.length) {
    return (
      <div className="page center">
        <h2>Session complete 🎉</h2>
        <p className="muted">{correctCount} / {queue.length} correct on first try.</p>
        <div className="row gap">
          <button className="btn primary" onClick={() => navigate('/')}>Back to today</button>
          <button className="btn ghost" onClick={load}>Study again</button>
        </div>
      </div>
    )
  }

  const q = queue[index]
  const total = queue.length
  const isCorrect = revealed && picked === q.correctIndex

  function answer(i: number | null) {
    if (revealed) return
    setPicked(i)
    setRevealed(true)
    if (i === q.correctIndex) setCorrectCount((c) => c + 1)
  }

  async function grade(g: Grade) {
    await recordGrade(q.itemId, level!, dim, g, Date.now())
    trackEvent('answer', { level: level!, dimension: dim, grade: g })
    if (index + 1 >= total) {
      trackEvent('study_complete', { level: level!, dimension: dim, total, correct: correctCount })
    }
    setPicked(null)
    setRevealed(false)
    setIndex((n) => n + 1)
  }

  return (
    <div className="page study">
      <div className="study-progress">
        <span className="muted small">{LABELS[dim]}</span>
        <span className="muted small">{index + 1} / {queue.length}</span>
      </div>
      <div className="study-progress-bar">
        <div className="study-progress-fill" style={{ width: `${(index / queue.length) * 100}%` }} />
      </div>

      <div className="question-card">
        <div className="q-sub">{q.modeLabel}</div>
        <div className={`q-prompt ${q.promptStyle}`}>{q.prompt}</div>
      </div>

      <div className="options">
        {q.options.map((opt, i) => {
          let cls = `option${q.optionStyle === 'kanji' ? ' kanji-opt' : ''}`
          if (revealed) {
            if (i === q.correctIndex) cls += ' correct'
            else if (i === picked) cls += ' wrong'
            else cls += ' dim'
          }
          return (
            <button key={i} className={cls} onClick={() => answer(i)} disabled={revealed}>
              {opt}
            </button>
          )
        })}
      </div>

      {!revealed && (
        <button className="btn ghost dont-know" onClick={() => answer(null)}>
          I don't know
        </button>
      )}

      {revealed && (
        <div className="reveal">
          <Reveal blocks={q.reveal} />
          {isCorrect ? (
            <>
              <p className="muted small grade-q">How hard was it to recall?</p>
              <div className="grade-row">
                <button className="btn grade hard" onClick={() => grade('hard')}>Hard</button>
                <button className="btn grade good" onClick={() => grade('good')}>Medium</button>
                <button className="btn grade easy" onClick={() => grade('easy')}>Easy</button>
              </div>
            </>
          ) : (
            <button className="btn grade again" onClick={() => grade('again')}>
              {picked === null ? 'Continue — review again soon' : 'Got it wrong — review again soon'}
            </button>
          )}
        </div>
      )}
    </div>
  )
}
