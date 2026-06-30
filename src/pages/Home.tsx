import { useLiveQuery } from 'dexie-react-hooks'
import { useNavigate } from 'react-router-dom'
import { ensureLevelSeeded } from '../db/seed'
import { setSelectedLevel, toggleLevelEnabled, useSettings } from '../hooks/useSettings'
import { levelSummary } from '../study/session'
import { ALL_LEVELS, type JlptLevel } from '../types'

// Levels with content seeded. Others appear as "coming soon".
const POPULATED: JlptLevel[] = ['N5', 'N4', 'N3']

const BLURB: Record<JlptLevel, string> = {
  N5: 'Beginner',
  N4: 'Basic',
  N3: 'Intermediate',
  N2: 'Pre-advanced',
  N1: 'Advanced',
}

export function Home() {
  const navigate = useNavigate()
  const settings = useSettings()
  const newPerDay = settings?.newPerDay ?? 10
  const selected = settings?.selectedLevel
  const disabled = new Set(settings?.disabledLevels ?? [])

  const summaries = useLiveQuery(async () => {
    const now = Date.now()
    return Promise.all(POPULATED.map((level) => levelSummary(level, newPerDay, now)))
  }, [newPerDay])

  const byLevel = new Map((summaries ?? []).map((s) => [s.level, s]))
  const active = (summaries ?? []).filter((s) => !disabled.has(s.level))
  const totalDue = active.reduce((a, s) => a + s.due, 0)
  const totalNew = active.reduce((a, s) => a + s.new, 0)

  async function open(level: JlptLevel) {
    void ensureLevelSeeded(level) // warm the content cache while the dashboard renders
    await setSelectedLevel(level)
    navigate('/today')
  }

  return (
    <div className="page">
      <div className="home-hero">
        <h1>今日 · Today</h1>
        <p className="muted">
          {totalDue + totalNew > 0 ? (
            <>
              <strong className="hero-num">{totalDue}</strong> reviews due and{' '}
              <strong className="hero-num">{totalNew}</strong> new items on deck across your active levels.
            </>
          ) : (
            'Pick a level below to start studying.'
          )}
        </p>
      </div>

      <div className="dim-grid">
        {ALL_LEVELS.map((level) => {
          const enabled = POPULATED.includes(level)
          const off = disabled.has(level)
          const s = byLevel.get(level)
          const pct = s && s.total ? Math.round((s.seen / s.total) * 100) : 0
          const onDeck = s ? s.due + s.new : 0
          const clickable = enabled && !off
          return (
            <div
              key={level}
              className={`home-level ${enabled ? '' : 'disabled'} ${off ? 'off' : ''} ${selected === level ? 'active' : ''}`}
              role={clickable ? 'button' : undefined}
              onClick={() => clickable && open(level)}
            >
              <div className="home-level-head">
                <span className="home-level-name">{level}</span>
                <div className="home-level-meta">
                  <span className="home-level-blurb">{BLURB[level]}</span>
                  {enabled ? (
                    <span className="muted small">
                      {s ? `${s.seen}/${s.total} learned · ${s.mastered} mastered` : '…'}
                    </span>
                  ) : (
                    <span className="level-soon">Coming soon</span>
                  )}
                </div>
                <div className="home-level-right">
                  {clickable && onDeck > 0 && <span className="ondeck-badge">{onDeck}</span>}
                  {enabled && (
                    <button
                      className={`switch ${off ? '' : 'on'}`}
                      role="switch"
                      aria-checked={!off}
                      aria-label={`${off ? 'Enable' : 'Pause'} ${level}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleLevelEnabled(level)
                      }}
                    >
                      <span className="switch-track">
                        <span className="switch-knob" />
                      </span>
                      <span className="switch-label">{off ? 'Off' : 'On'}</span>
                    </button>
                  )}
                </div>
              </div>

              {clickable && (
                <>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${pct}%` }} />
                  </div>
                  <div className="dim-stats">
                    <span className="pill due">{s?.due ?? 0} due</span>
                    <span className="pill new">{s?.new ?? 0} new</span>
                    <span className="home-go">{selected === level ? 'Continue →' : 'Study →'}</span>
                  </div>
                </>
              )}

              {enabled && off && (
                <div className="muted small paused-note">Paused — hidden from Today. Toggle on to resume.</div>
              )}
            </div>
          )
        })}
      </div>

      <div className="bottom-actions">
        <button className="btn big ghost" onClick={() => navigate('/settings')}>
          ⚙ Settings
        </button>
      </div>
    </div>
  )
}
