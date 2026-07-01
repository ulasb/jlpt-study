import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../db/db'
import { setNewPerDay, useSettings } from '../hooks/useSettings'
import { analyticsAvailable, getConsent, setConsent, type Consent } from '../lib/analytics'

export function Settings() {
  const navigate = useNavigate()
  const settings = useSettings()
  const [consent, setConsentState] = useState<Consent | null>(() => getConsent())
  if (!settings) return null

  function chooseConsent(v: Consent) {
    setConsent(v)
    setConsentState(v)
  }

  async function resetProgress() {
    const level = settings?.selectedLevel
    if (!level) return
    if (!confirm(`Reset your ${level} progress? Content stays; your ${level} review history is cleared.`)) return
    await db.reviews.where('level').equals(level).delete()
  }

  return (
    <div className="page">
      <button className="back" onClick={() => navigate('/')}>← Home</button>
      <h1>Settings</h1>

      <div className="setting-row">
        <div>
          <strong>Level</strong>
          <div className="muted small">Currently {settings.selectedLevel ?? 'none'}</div>
        </div>
        <button className="btn ghost" onClick={() => navigate('/')}>Change</button>
      </div>

      <div className="setting-row">
        <div>
          <strong>New items per day</strong>
          <div className="muted small">How many unseen items each study session introduces</div>
        </div>
        <div className="stepper">
          <button className="btn ghost" onClick={() => setNewPerDay(Math.max(1, settings.newPerDay - 5))}>−</button>
          <span className="stepper-val">{settings.newPerDay}</span>
          <button className="btn ghost" onClick={() => setNewPerDay(settings.newPerDay + 5)}>+</button>
        </div>
      </div>

      {analyticsAvailable() && (
        <div className="setting-row">
          <div>
            <strong>Usage analytics</strong>
            <div className="muted small">
              {consent === 'granted'
                ? 'Enabled — anonymous usage stats help improve the app.'
                : 'Disabled — no analytics cookies are set.'}
              {consent === 'granted' ? ' Turning off applies next launch.' : ''}
            </div>
          </div>
          <div className="stepper">
            <button
              className={`btn ${consent !== 'granted' ? 'primary' : 'ghost'}`}
              onClick={() => chooseConsent('denied')}
            >
              Off
            </button>
            <button
              className={`btn ${consent === 'granted' ? 'primary' : 'ghost'}`}
              onClick={() => chooseConsent('granted')}
            >
              On
            </button>
          </div>
        </div>
      )}

      <div className="setting-row">
        <div>
          <strong>Reset progress</strong>
          <div className="muted small">Clears your SRS review history for {settings.selectedLevel ?? 'the current level'} only</div>
        </div>
        <button className="btn danger" onClick={resetProgress}>Reset</button>
      </div>
    </div>
  )
}
