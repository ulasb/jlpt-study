// Provider-agnostic analytics wrapper. Currently backed by Google Analytics 4.
// Disabled unless a Measurement ID is configured (VITE_GA_ID) AND this is a
// production build — so dev never sends data and nothing loads without an ID.
//
// To swap providers later, only this file changes: reimplement init/track*.

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

type EventParams = Record<string, string | number | boolean>
export type Consent = 'granted' | 'denied'

const GA_ID = import.meta.env.VITE_GA_ID
const CONSENT_KEY = 'analytics-consent'
let ready = false

// Analytics is only relevant when a Measurement ID is configured in a prod build.
export function analyticsAvailable(): boolean {
  return import.meta.env.PROD && !!GA_ID
}

export function getConsent(): Consent | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY)
    return v === 'granted' || v === 'denied' ? v : null
  } catch {
    return null
  }
}

// Record the user's choice. Granting also loads GA immediately; denying keeps
// it unloaded. (Revoking a prior grant takes effect on next load — GA can't be
// unloaded once running.)
export function setConsent(consent: Consent): void {
  try {
    localStorage.setItem(CONSENT_KEY, consent)
  } catch {
    /* ignore */
  }
  if (consent === 'granted') initAnalytics()
}

export function initAnalytics(): void {
  // No cookies / no GA load until the user has explicitly consented.
  if (ready || !analyticsAvailable() || getConsent() !== 'granted') return
  ready = true

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag() {
    // GA expects the raw arguments object pushed onto the dataLayer.
    window.dataLayer!.push(arguments)
  }
  window.gtag = gtag as (...args: unknown[]) => void
  window.gtag('js', new Date())
  // We drive page_view manually (SPA + hash routing), so disable the automatic one.
  window.gtag('config', GA_ID, { send_page_view: false })
  // Record the current page now (on load for returning users, or right after
  // consent) — route-change page_views only fire on subsequent navigation.
  trackPageview(window.location.hash.replace(/^#/, '') || '/')
}

export function trackPageview(path: string): void {
  window.gtag?.('event', 'page_view', {
    page_path: path,
    page_title: document.title,
    page_location: window.location.href,
  })
}

export function trackEvent(name: string, params?: EventParams): void {
  window.gtag?.('event', name, params ?? {})
}
