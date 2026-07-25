import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { ensureSettings } from './db/seed'
import { initAnalytics } from './lib/analytics'
import { flushPendingSync, initSync } from './sync/sync'
import './styles.css'

initAnalytics()

// A queued sync would otherwise be lost when the tab is closed or backgrounded
// — the last few answers of a session are exactly what you want on the other
// device, so push them out on the way off the page.
window.addEventListener('pagehide', flushPendingSync)
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') flushPendingSync()
})

ensureSettings().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>,
  )
  // Pull down anything studied on another device. Deliberately after render
  // and unawaited: sync is optional and must never delay startup.
  void initSync()
})
