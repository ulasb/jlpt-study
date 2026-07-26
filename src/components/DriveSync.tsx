import { useEffect, useState } from 'react'
import { useSyncStatus } from '../hooks/useSyncStatus'
import { syncConfigured } from '../sync/googleAuth'
import { connectDrive, disconnectDrive, syncNow } from '../sync/sync'

function relativeTime(at: number, now: number): string {
  const mins = Math.round((now - at) / 60_000)
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins} min ago`
  const hours = Math.round(mins / 60)
  if (hours < 24) return `${hours} h ago`
  return new Date(at).toLocaleDateString()
}

// The "Sync with Google Drive" block in Settings. Renders nothing at all when
// the build has no OAuth client ID configured.
export function DriveSync() {
  const status = useSyncStatus()
  const [busy, setBusy] = useState(false)
  // Re-render the "last synced" label on a slow tick so it doesn't go stale.
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 30_000)
    return () => clearInterval(id)
  }, [])

  if (!syncConfigured()) return null

  // Native build: Google refuses OAuth inside an embedded WebView, so say so
  // plainly rather than offering a button that would fail.
  if (!status.available) {
    return (
      <div className="setting-row">
        <div>
          <strong>Sync with Google Drive</strong>
          <div className="muted small">
            Not available in the Android app — Google only allows sign-in from a real browser.
            Open the web version to sync this device.
          </div>
        </div>
      </div>
    )
  }

  async function run(action: () => Promise<void>) {
    setBusy(true)
    try {
      await action()
    } finally {
      setBusy(false)
    }
  }

  async function disconnect() {
    if (!confirm('Stop syncing on this device? Your progress stays here and in Drive.')) return
    await run(disconnectDrive)
  }

  const working = busy || status.syncing

  if (!status.email) {
    return (
      <div className="setting-row">
        <div>
          <strong>Sync with Google Drive</strong>
          <div className="muted small">
            Sign in to save your progress and continue on your other devices. Stored in a private
            app folder — this app can't see the rest of your Drive.
          </div>
          {status.error && <div className="sync-error small">{status.error}</div>}
        </div>
        <button className="btn primary" disabled={working} onClick={() => run(connectDrive)}>
          {working ? 'Connecting…' : 'Sign in'}
        </button>
      </div>
    )
  }

  return (
    <div className="setting-row">
      <div>
        <strong>Sync with Google Drive</strong>
        <div className="muted small">
          Signed in as {status.email}
          {status.lastSyncedAt && !status.syncing && ` · synced ${relativeTime(status.lastSyncedAt, now)}`}
          {status.syncing && ' · syncing…'}
        </div>
        {status.error && <div className="sync-error small">{status.error}</div>}
        {/* Token expired with no click to open a popup with — not a failure,
            just needs one tap. Shown plainly instead of as an error. While a
            tap-triggered retry is still pending, say so: it will very likely
            have resolved itself before the user reaches for this button. */}
        {status.needsReauth && !status.error && (
          <div className="muted small">
            {status.autoRetrying
              ? 'Access expired — renewing itself as you use the app.'
              : 'Reconnect to resume syncing.'}
          </div>
        )}
        <button className="btn ghost small-btn" disabled={working} onClick={disconnect}>
          Disconnect
        </button>
      </div>
      {status.needsReauth ? (
        <button className="btn primary" disabled={working} onClick={() => run(connectDrive)}>
          Reconnect
        </button>
      ) : (
        <button className="btn ghost" disabled={working} onClick={() => run(syncNow)}>
          {status.syncing ? 'Syncing…' : 'Sync now'}
        </button>
      )}
    </div>
  )
}
