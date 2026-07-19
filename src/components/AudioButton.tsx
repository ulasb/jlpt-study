import { useEffect, useRef, useState } from 'react'
import { resolveAudioSrc } from '../lib/audio'

// Play/stop button for pre-generated audio (see scripts/gen-audio.mjs).
// Audio is fetched lazily on first tap: on the web it's runtime-cached by the
// service worker; in the native app it's downloaded from the deployed site
// and cached on-device (see src/lib/audio.ts). Either way, replays and
// offline listening work after the first play.
export function AudioButton({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [state, setState] = useState<'idle' | 'loading' | 'playing' | 'error'>('idle')

  // Stop and reset when the question changes or the component unmounts.
  useEffect(() => {
    setState('idle')
    return () => {
      audioRef.current?.pause()
      audioRef.current = null
    }
  }, [src])

  if (state === 'error') {
    return (
      <div className="speak-unavailable muted small">
        Audio unavailable — check your connection and try the next question.
      </div>
    )
  }

  async function toggle() {
    if (state === 'loading') return
    if (state === 'playing') {
      audioRef.current?.pause()
      if (audioRef.current) audioRef.current.currentTime = 0
      setState('idle')
      return
    }
    try {
      if (!audioRef.current) {
        setState('loading')
        const url = await resolveAudioSrc(src)
        const audio = new Audio(url)
        audio.onended = () => setState('idle')
        audio.onerror = () => setState('error')
        audioRef.current = audio
      }
      audioRef.current.currentTime = 0
      await audioRef.current.play()
      setState('playing')
    } catch {
      setState('error')
    }
  }

  return (
    <button className={`speak-btn ${state === 'playing' ? 'playing' : ''}`} onClick={toggle} disabled={state === 'loading'}>
      {state === 'playing' ? '■ Stop' : state === 'loading' ? '… Loading' : '▶ Play audio'}
    </button>
  )
}
