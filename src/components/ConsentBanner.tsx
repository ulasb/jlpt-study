import { useState } from 'react'
import { analyticsAvailable, getConsent, setConsent, type Consent } from '../lib/analytics'

// Shown only when analytics is configured (prod + Measurement ID) and the user
// hasn't chosen yet. No cookies are set until "Accept".
export function ConsentBanner() {
  const [decided, setDecided] = useState(() => getConsent() !== null)

  if (!analyticsAvailable() || decided) return null

  function choose(consent: Consent) {
    setConsent(consent)
    setDecided(true)
  }

  return (
    <div className="consent" role="dialog" aria-label="Cookie consent">
      <p className="consent-text">
        JLPT Study uses cookies for anonymous usage analytics to help improve the app. No
        personal data is sold. You can change this later in Settings.
      </p>
      <div className="consent-actions">
        <button className="btn ghost" onClick={() => choose('denied')}>
          Decline
        </button>
        <button className="btn primary" onClick={() => choose('granted')}>
          Accept
        </button>
      </div>
    </div>
  )
}
