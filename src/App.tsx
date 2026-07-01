import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { ConsentBanner } from './components/ConsentBanner'
import { useSettings } from './hooks/useSettings'
import { trackPageview } from './lib/analytics'
import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'
import { Study } from './pages/Study'
import { Browse } from './pages/Browse'
import { Exam } from './pages/Exam'
import { Settings } from './pages/Settings'

export default function App() {
  const settings = useSettings()
  const navigate = useNavigate()
  const location = useLocation()

  // Report a page_view on every route change (SPA hash routing).
  useEffect(() => {
    trackPageview(location.pathname)
  }, [location.pathname])

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
          {/* Level-scoped pages read selectedLevel reactively and show a brief
              loading state until it's set — no route-level redirect, which would
              race the settings write right after picking a level on Home. */}
          <Route path="/" element={<Home />} />
          <Route path="/today" element={<Dashboard />} />
          <Route path="/study/:dimension" element={<Study />} />
          <Route path="/browse/:dimension" element={<Browse />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/settings" element={<Settings />} />
          {/* Legacy path → home (home now also serves level selection). */}
          <Route path="/level" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <ConsentBanner />
    </div>
  )
}
