import { rmSync } from 'node:fs'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// The Capacitor build must NOT bundle the (large) listening audio into the
// APK — the native app downloads each file on first play from the deployed
// site and caches it on-device (see src/lib/audio.ts). Vite copies all of
// public/ into dist, so drop the audio directory after the bundle is written.
function stripBundledAudio(): Plugin {
  return {
    name: 'strip-bundled-audio',
    apply: 'build',
    closeBundle() {
      rmSync('dist/audio', { recursive: true, force: true })
    },
  }
}

// Build targets:
//  - dev/preview:        base '/'            (served at root)
//  - GitHub Pages build: base '/jlpt-study/' (project site lives under /<repo>/)
//  - Capacitor build:    base './'           (assets served from the app root in
//                        the native webview); PWA service worker is omitted.
// Set CAP_BUILD=1 for the Capacitor build (see the `build:cap` npm script).
export default defineConfig(({ command }) => {
  const isCapacitor = process.env.CAP_BUILD === '1'

  const plugins = [react()]
  if (isCapacitor) {
    plugins.push([stripBundledAudio()])
  } else {
    plugins.push(
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'icon.svg'],
        // The N1 content chunk (~1,225 kanji) exceeds workbox's 2 MiB default;
        // raise the limit so every level's chunk is precached for offline use.
        workbox: {
          maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
          // Listening audio is deliberately NOT precached (too big to force on
          // every visitor); each file is cached on first play so replays and
          // offline listening work afterwards.
          runtimeCaching: [
            {
              urlPattern: ({ url }) => url.pathname.includes('/audio/'),
              handler: 'CacheFirst',
              options: {
                cacheName: 'listening-audio',
                expiration: { maxEntries: 500 },
                cacheableResponse: { statuses: [0, 200] },
              },
            },
          ],
        },
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
