/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Google Analytics 4 Measurement ID (e.g. G-XXXXXXXXXX). Optional. */
  readonly VITE_GA_ID?: string
  /**
   * Google OAuth *Web application* client ID (e.g. 1234-abc.apps.googleusercontent.com).
   * Optional — without it, Google Drive sync is completely disabled.
   */
  readonly VITE_GOOGLE_CLIENT_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
