import { useEffect, useState } from 'react'
import { useSyncStatus } from '../hooks/useSyncStatus'
import { connectDrive } from '../sync/sync'

// Drive sync has stopped and only a real click can restart it.
//
// Most pauses are just an expired access token and fix themselves on the user's
// next tap (see sync.ts), so this stays hidden while that's still pending —
// otherwise it would flash on screen roughly once an hour for no reason. It
// appears only once the automatic path is out of options, where the alternative
// is the user eventually noticing on their own that nothing has synced in days.
export function SyncAlert() {
  const status = useSyncStatus()
  const [busy, setBusy] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const stuck = status.needsReauth && !status.autoRetrying && !status.syncing

  // Clear the dismissal once sync is healthy again, so a later expiry is free
  // to warn afresh instead of being silenced by a tap from days ago.
  useEffect(() => {
    if (!stuck) setDismissed(false)
  }, [stuck])

  if (!stuck || dismissed) return null

  async function reconnect() {
    setBusy(true)
    try {
      await connectDrive()
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="sync-alert" role="status">
      <span className="sync-alert-text">
        Drive sync is paused — progress is being saved on this device only.
      </span>
      <button className="btn primary sync-alert-btn" disabled={busy} onClick={reconnect}>
        {busy ? 'Reconnecting…' : 'Reconnect'}
      </button>
      <button className="sync-alert-close" aria-label="Dismiss" onClick={() => setDismissed(true)}>
        ×
      </button>
    </div>
  )
}
