import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { FlagButton } from '../components/FlagButton'
import { db } from '../db/db'
import { ensureLevelSeeded } from '../db/seed'
import { useSettings } from '../hooks/useSettings'
import { trackEvent } from '../lib/analytics'
import {
  buildGrammarQuestion,
  buildKanjiQuestion,
  buildVocabQuestion,
  type Question,
} from '../study/quiz'
import type { JlptLevel } from '../types'

const EXAM_LENGTH = 15

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

async function buildExam(level: JlptLevel): Promise<Question[]> {
  await ensureLevelSeeded(level)
  const [kanji, vocab, grammar] = await Promise.all([
    db.kanji.where('level').equals(level).toArray(),
    db.vocab.where('level').equals(level).toArray(),
    db.grammar.where('level').equals(level).toArray(),
  ])
  const pool: Question[] = [
    ...kanji.map((k) => buildKanjiQuestion(k, kanji)),
    ...vocab.map((w) => buildVocabQuestion(w, vocab)),
    ...grammar.map((g) => buildGrammarQuestion(g)),
  ]
  return shuffle(pool).slice(0, Math.min(EXAM_LENGTH, pool.length))
}

export function Exam() {
  const navigate = useNavigate()
  const settings = useSettings()
  const level = settings?.selectedLevel

  const [questions, setQuestions] = useState<Question[] | null>(null)
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [score, setScore] = useState(0)

  function start() {
    if (!level) return
    buildExam(level).then((q) => {
      setQuestions(q)
      setIndex(0)
      setPicked(null)
      setRevealed(false)
      setScore(0)
      if (q.length > 0) trackEvent('exam_start', { level })
    })
  }

  useEffect(start, [level])

  if (!level || questions === null) return <div className="loading">Loading…</div>

  if (index >= questions.length) {
    const pct = Math.round((score / questions.length) * 100)
    const pass = pct >= 60
    return (
      <div className="page center">
        <h2>Exam result</h2>
        <div className={`score-ring ${pass ? 'pass' : 'fail'}`}>{pct}%</div>
        <p className="muted">
          {score} / {questions.length} correct — {pass ? 'Pass 🎉' : 'Keep practicing'}
        </p>
        <div className="row gap">
          <button className="btn primary" onClick={start}>Retake</button>
          <button className="btn ghost" onClick={() => navigate('/')}>Back to today</button>
        </div>
      </div>
    )
  }

  const q = questions[index]
  const total = questions.length

  function answer(i: number | null) {
    if (revealed) return
    setPicked(i)
    setRevealed(true)
    if (i === q.correctIndex) setScore((s) => s + 1)
  }

  function next() {
    if (index + 1 >= total) {
      const pct = Math.round((score / total) * 100)
      trackEvent('exam_complete', { level: level!, total, score, pct })
    }
    setPicked(null)
    setRevealed(false)
    setIndex((n) => n + 1)
  }

  return (
    <div className="page study">
      <div className="study-progress">
        <span className="muted small">Sample exam · {level}</span>
        <span className="muted small">{index + 1} / {questions.length}</span>
      </div>
      <div className="study-progress-bar">
        <div className="study-progress-fill" style={{ width: `${(index / questions.length) * 100}%` }} />
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
          <button className="btn primary" onClick={next}>
            {index + 1 < questions.length ? 'Next question' : 'See result'}
          </button>
          <FlagButton key={index} itemId={q.itemId} level={level} dimension={q.dimension} />
        </div>
      )}
    </div>
  )
}
