import { useNavigate } from 'react-router-dom'
import { ALL_LEVELS, type JlptLevel } from '../types'
import { setSelectedLevel, useSettings } from '../hooks/useSettings'

// Levels with content seeded. Others are shown but disabled until populated.
const POPULATED: JlptLevel[] = ['N5', 'N4', 'N3']

const BLURB: Record<JlptLevel, string> = {
  N5: 'Beginner',
  N4: 'Basic',
  N3: 'Intermediate',
  N2: 'Pre-advanced',
  N1: 'Advanced',
}

export function LevelSelect() {
  const navigate = useNavigate()
  const settings = useSettings()

  async function choose(level: JlptLevel) {
    await setSelectedLevel(level)
    navigate('/')
  }

  return (
    <div className="page">
      <h1>Choose your level</h1>
      <p className="muted">Pick the JLPT level you want to study. You can switch any time.</p>
      <div className="level-grid">
        {ALL_LEVELS.map((level) => {
          const enabled = POPULATED.includes(level)
          const active = settings?.selectedLevel === level
          return (
            <button
              key={level}
              className={`level-card ${enabled ? '' : 'disabled'} ${active ? 'active' : ''}`}
              disabled={!enabled}
              onClick={() => enabled && choose(level)}
            >
              <span className="level-name">{level}</span>
              <span className="level-blurb">{BLURB[level]}</span>
              {!enabled && <span className="level-soon">Coming soon</span>}
              {active && <span className="level-soon">Selected</span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}
