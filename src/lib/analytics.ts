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

const GA_ID = import.meta.env.VITE_GA_ID
let ready = false

export function initAnalytics(): void {
  if (ready || !import.meta.env.PROD || !GA_ID) return
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
