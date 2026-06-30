import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { useSettings } from './hooks/useSettings'
import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'
import { Study } from './pages/Study'
import { Browse } from './pages/Browse'
import { Exam } from './pages/Exam'
import { Settings } from './pages/Settings'

export default function App() {
  const settings = useSettings()
  const navigate = useNavigate()

  // Wait for settings to load to avoid a flash of the wrong screen.
  if (settings === undefined) return <div className="loading">Loading…</div>

  const hasLevel = !!settings?.selectedLevel

  return (
    <div className="app">
      <header className="topbar">
        <button className="brand" onClick={() => navigate('/')}>
          <span className="brand-mark">語</span> JLPT Study
        </button>
        {hasLevel && (
          <button className="level-chip" onClick={() => navigate('/today')}>
            {settings!.selectedLevel}
          </button>
        )}
      </header>
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today" element={hasLevel ? <Dashboard /> : <Navigate to="/" replace />} />
          <Route path="/study/:dimension" element={hasLevel ? <Study /> : <Navigate to="/" replace />} />
          <Route path="/browse/:dimension" element={hasLevel ? <Browse /> : <Navigate to="/" replace />} />
          <Route path="/exam" element={hasLevel ? <Exam /> : <Navigate to="/" replace />} />
          <Route path="/settings" element={<Settings />} />
          {/* Legacy path → home (home now also serves level selection). */}
          <Route path="/level" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}
