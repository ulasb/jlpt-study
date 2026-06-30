import { useLiveQuery } from 'dexie-react-hooks'
import { useNavigate } from 'react-router-dom'
import { useSettings } from '../hooks/useSettings'
import { dimensionProgress, queueStats } from '../study/session'
import type { Dimension, JlptLevel } from '../types'

const DIMENSIONS: { key: Dimension; label: string; icon: string }[] = [
  { key: 'kanji', label: 'Kanji', icon: '漢' },
  { key: 'vocab', label: 'Vocabulary', icon: 'ア' },
  { key: 'grammar', label: 'Grammar', icon: '文' },
]

function DimensionCard({ level, dim }: { level: JlptLevel; dim: (typeof DIMENSIONS)[number] }) {
  const navigate = useNavigate()
  const settings = useSettings()
  const newPerDay = settings?.newPerDay ?? 10

  const stats = useLiveQuery(
    () => queueStats(level, dim.key, newPerDay, Date.now()),
    [level, dim.key, newPerDay],
  )
  const progress = useLiveQuery(() => dimensionProgress(level, dim.key), [level, dim.key])

  const pct = progress && progress.total ? Math.round((progress.seen / progress.total) * 100) : 0

  return (
    <div className="dim-card">
      <div className="dim-head">
        <span className="dim-icon">{dim.icon}</span>
        <div>
          <h3>{dim.label}</h3>
          <span className="muted small">
            {progress ? `${progress.seen}/${progress.total} seen · ${progress.mastered} mastered` : '…'}
          </span>
        </div>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>

      <div className="dim-stats">
        <span className="pill due">{stats?.due ?? 0} due</span>
        <span className="pill new">{stats?.new ?? 0} new</span>
      </div>

      <div className="dim-actions">
        <button
          className="btn primary"
          disabled={!stats || stats.total === 0}
          onClick={() => navigate(`/study/${dim.key}`)}
        >
          {stats && stats.total > 0 ? `Study (${stats.total})` : 'All done'}
        </button>
        <button className="btn ghost" onClick={() => navigate(`/browse/${dim.key}`)}>
          Browse
        </button>
      </div>
    </div>
  )
}

export function Dashboard() {
  const navigate = useNavigate()
  const settings = useSettings()
  const level = settings?.selectedLevel
  if (!level) return null

  return (
    <div className="page">
      <button className="back" onClick={() => navigate('/')}>← All levels</button>
      <h1>{level} · Today</h1>
      <p className="muted">Review what's due and learn new items across all three dimensions.</p>

      <div className="dim-grid">
        {DIMENSIONS.map((dim) => (
          <DimensionCard key={dim.key} level={level} dim={dim} />
        ))}
      </div>

      <div className="bottom-actions">
        <button className="btn big" onClick={() => navigate('/exam')}>
          📝 Sample exam
        </button>
        <button className="btn big ghost" onClick={() => navigate('/settings')}>
          ⚙ Settings
        </button>
      </div>
    </div>
  )
}
