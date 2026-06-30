import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// GitHub Pages serves a project site under /<repo>/, so production builds need a
// matching base path. Dev/preview at the root keeps `base: '/'`.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/jlpt-study/' : '/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icon.svg'],
      // The bundled JLPT content pushes the main chunk past workbox's 2 MiB
      // default; allow precaching the larger bundle so the app stays offline.
      workbox: { maximumFileSizeToCacheInBytes: 6 * 1024 * 1024 },
      manifest: {
        name: 'JLPT Study',
        short_name: 'JLPT Study',
        description: 'Study for the JLPT: kanji, vocabulary, and grammar with spaced repetition.',
        theme_color: '#b91c1c',
        background_color: '#0f172a',
        display: 'standalone',
        // Relative so it resolves correctly whether served at / or /jlpt-study/.
        start_url: '.',
        icons: [
          { src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
          { src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'maskable' },
        ],
      },
    }),
  ],
}))
