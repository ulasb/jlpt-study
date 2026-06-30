import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// Build targets:
//  - dev/preview:        base '/'            (served at root)
//  - GitHub Pages build: base '/jlpt-study/' (project site lives under /<repo>/)
//  - Capacitor build:    base './'           (assets served from the app root in
//                        the native webview); PWA service worker is omitted.
// Set CAP_BUILD=1 for the Capacitor build (see the `build:cap` npm script).
export default defineConfig(({ command }) => {
  const isCapacitor = process.env.CAP_BUILD === '1'

  const plugins = [react()]
  if (!isCapacitor) {
    plugins.push(
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'icon.svg'],
        manifest: {
          name: 'JLPT Study',
          short_name: 'JLPT Study',
          description: 'Study for the JLPT: kanji, vocabulary, and grammar with spaced repetition.',
          theme_color: '#b91c1c',
          background_color: '#0f172a',
          display: 'standalone',
          // Relative so it resolves whether served at / or /jlpt-study/.
          start_url: '.',
          icons: [
            { src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
            { src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'maskable' },
          ],
        },
      }),
    )
  }

  return {
    base: command === 'build' ? (isCapacitor ? './' : '/jlpt-study/') : '/',
    plugins,
  }
})
