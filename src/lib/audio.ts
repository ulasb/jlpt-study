import { Capacitor } from '@capacitor/core'

// Where listening audio lives when it isn't bundled with the app. The native
// (Capacitor) build ships WITHOUT public/audio (see vite.config.ts) to keep
// the APK small; files are downloaded from the deployed site on first play
// and cached in the app's data directory for offline replays.
const REMOTE_BASE = 'https://ulasb.github.io/jlpt-study/'

// De-duplicate concurrent resolutions of the same file (e.g. rapid re-taps
// while the first download is still in flight).
const inFlight = new Map<string, Promise<string>>()

// Resolve an app-relative audio path ("audio/listening/n5/foo.m4a") to a
// playable URL. Web: same-origin URL (service worker runtime-caches it).
// Native: local file URL, downloading it first if not cached yet.
export function resolveAudioSrc(path: string): Promise<string> {
  if (!Capacitor.isNativePlatform()) {
    return Promise.resolve(import.meta.env.BASE_URL + path)
  }
  let p = inFlight.get(path)
  if (!p) {
    p = nativeAudioSrc(path).finally(() => inFlight.delete(path))
    inFlight.set(path, p)
  }
  return p
}

async function nativeAudioSrc(path: string): Promise<string> {
  const { Filesystem, Directory } = await import('@capacitor/filesystem')
  try {
    const { uri } = await Filesystem.getUri({ path, directory: Directory.Data })
    await Filesystem.stat({ path, directory: Directory.Data })
    return Capacitor.convertFileSrc(uri)
  } catch {
    // not cached yet — fall through to download
  }
  const { path: savedPath } = await Filesystem.downloadFile({
    url: REMOTE_BASE + path,
    path,
    directory: Directory.Data,
    recursive: true,
  })
  if (!savedPath) throw new Error(`download failed: ${path}`)
  const { uri } = await Filesystem.getUri({ path, directory: Directory.Data })
  return Capacitor.convertFileSrc(uri)
}
