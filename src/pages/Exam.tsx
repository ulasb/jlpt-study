import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { FlagButton } from '../components/FlagButton'
import { AudioButton } from '../components/AudioButton'
import { db } from '../db/db'
import { ensureLevelSeeded } from '../db/seed'
import { useSettings } from '../hooks/useSettings'
import { trackEvent } from '../lib/analytics'
import {
  buildFullExam,
  examLength,
  scoreExam,
  TESTS_PER_LEVEL,
  type ExamPools,
  type ExamQuestion,
} from '../study/exam'
import {
  buildGrammarQuestion,
  buildKanjiQuestion,
  buildListeningQuestion,
  buildReadingQuestion,
  buildVocabQuestion,
} from '../study/quiz'
import type { JlptLevel } from '../types'

const QUICK_QUIZ_LENGTH = 15

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

async function loadPools(level: JlptLevel): Promise<ExamPools> {
  await ensureLevelSeeded(level)
  const [kanji, vocab, grammar, reading, listening] = await Promise.all([
    db.kanji.where('level').equals(level).toArray(),
    db.vocab.where('level').equals(level).toArray(),
    db.grammar.where('level').equals(level).toArray(),
    db.reading.where('level').equals(level).toArray(),
    db.listening.where('level').equals(level).toArray(),
  ])
  return { kanji, vocab, grammar, reading, listening }
}

// The old behavior: a short random mix across all dimensions.
function buildQuickQuiz(pools: ExamPools): ExamQuestion[] {
  const pool: ExamQuestion[] = [
    ...pools.kanji.map((k) => ({ ...buildKanjiQuestion(k, pools.kanji), paper: 'Quick quiz' })),
    ...pools.vocab.map((w) => ({ ...buildVocabQuestion(w, pools.vocab), paper: 'Quick quiz' })),
    ...pools.grammar.map((g) => ({ ...buildGrammarQuestion(g), paper: 'Quick quiz' })),
    ...pools.reading.map((r) => ({ ...buildReadingQuestion(r), paper: 'Quick quiz' })),
    ...pools.listening.map((l) => ({ ...buildListeningQuestion(l), paper: 'Quick quiz' })),
  ]
  return shuffle(pool).slice(0, Math.min(QUICK_QUIZ_LENGTH, pool.length))
}

export function Exam() {
  const navigate = useNavigate()
  const settings = useSettings()
  const level = settings?.selectedLevel

  const [pools, setPools] = useState<ExamPools | null>(null)
  // null = picker screen; 0 = quick quiz; 1..TESTS_PER_LEVEL = fixed test
  const [test, setTest] = useState<number | null>(null)
  const [questions, setQuestions] = useState<ExamQuestion[] | null>(null)
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [answers, setAnswers] = useState<boolean[]>([])

  useEffect(() => {
    setPools(null)
    setTest(null)
    setQuestions(null)
    if (level) loadPools(level).then(setPools)
  }, [level])

  function start(t: number) {
    if (!level || !pools) return
    setTest(t)
    setQuestions(t === 0 ? buildQuickQuiz(pools) : buildFullExam(level, t, pools))
    setIndex(0)
    setPicked(null)
    setRevealed(false)
    setAnswers([])
    trackEvent('exam_start', { level, test: t })
  }

  if (!level || pools === null) return <div className="loading">Loading…</div>

  // ---- Test picker ----------------------------------------------------------
  if (test === null || questions === null) {
    return (
      <div className="page">
        <h2>Mock exams · {level}</h2>
        <p className="muted">
          Ten fixed tests shaped like the real JLPT — 文字・語彙, 文法・読解, then 聴解 (
          {examLength(level)} questions). Retaking a test repeats the same paper.
        </p>
        <div className="exam-grid">
          {Array.from({ length: TESTS_PER_LEVEL }, (_, i) => (
            <button key={i} className="btn big" onClick={() => start(i + 1)}>
              Test {i + 1}
            </button>
          ))}
        </div>
        <button className="btn ghost" onClick={() => start(0)}>
          ⚡ Quick quiz ({QUICK_QUIZ_LENGTH} random questions)
        </button>
      </div>
    )
  }

  // ---- Result ---------------------------------------------------------------
  if (index >= questions.length) {
    const result = scoreExam(questions, answers)
    return (
      <div className="page center">
        <h2>{test === 0 ? 'Quick quiz result' : `Test ${test} result`}</h2>
        <div className={`score-ring ${result.pass ? 'pass' : 'fail'}`}>{result.pct}%</div>
        <p className="muted">
          {result.total} / {questions.length} correct —{' '}
          {result.pass ? 'Pass 🎉' : result.sectionalOk ? 'Keep practicing' : 'Failed on a sectional minimum'}
        </p>
        {test !== 0 && (
          <div className="paper-scores">
            {result.papers.map((p) => (
              <div key={p.paper} className="paper-score">
                <span className="paper-name">{p.paper}</span>
                <span className={`paper-pct ${p.correct / p.total >= 1 / 3 ? '' : 'bad'}`}>
                  {p.correct} / {p.total}
                </span>
              </div>
            ))}
            <p className="muted small">Pass: 60% overall and at least ⅓ in every section.</p>
          </div>
        )}
        <div className="row gap">
          <button className="btn primary" onClick={() => start(test)}>Retake</button>
          <button className="btn ghost" onClick={() => setTest(null)}>All tests</button>
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
    setAnswers((a) => [...a, i === q.correctIndex])
  }

  function next() {
    if (index + 1 >= total) {
      const score = answers.filter(Boolean).length
      const pct = Math.round((score / total) * 100)
      trackEvent('exam_complete', { level: level!, test: test!, total, score, pct })
    }
    setPicked(null)
    setRevealed(false)
    setIndex((n) => n + 1)
  }

  return (
    <div className="page study">
      <div className="study-progress">
        <span className="muted small">
          {test === 0 ? 'Quick quiz' : `Test ${test}`} · {level} · {q.paper}
        </span>
        <span className="muted small">{index + 1} / {total}</span>
      </div>
      <div className="study-progress-bar">
        <div className="study-progress-fill" style={{ width: `${(index / total) * 100}%` }} />
      </div>

      <div className="question-card">
        <div className="q-sub">{q.modeLabel}</div>
        {q.context && <div className={`q-context${q.contextStyle === 'passage' ? ' passage' : ''}`}>{q.context}</div>}
        {q.audio && <AudioButton src={q.audio} />}
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
            {index + 1 < total ? 'Next question' : 'See result'}
          </button>
          <FlagButton key={index} itemId={q.itemId} level={level} dimension={q.dimension} />
        </div>
      )}
    </div>
  )
}
