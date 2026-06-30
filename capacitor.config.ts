import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.ulasb.jlptstudy',
  appName: 'JLPT Study',
  // Capacitor copies this folder into the native app. Produce it with the
  // Capacitor-targeted build (`npm run build:cap`, which sets base './').
  webDir: 'dist',
}

export default config
