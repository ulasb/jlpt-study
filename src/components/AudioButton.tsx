import { useEffect, useRef, useState } from 'react'

// Play/stop button for pre-generated audio (see scripts/gen-audio.mjs).
// Fetched lazily on first tap and runtime-cached by the service worker, so
// replays and offline listening work after the first play.
export function AudioButton({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [state, setState] = useState<'idle' | 'playing' | 'error'>('idle')

  // Stop and reset when the question changes or the component unmounts.
  useEffect(() => {
    setState('idle')
    return () => {
      audioRef.current?.pause()
      audioRef.current = null
    }
  }, [src])

  if (state === 'error') {
    return <div className="speak-unavailable muted small">Audio unavailable for this item.</div>
  }

  function toggle() {
    if (state === 'playing') {
      audioRef.current?.pause()
      if (audioRef.current) audioRef.current.currentTime = 0
      setState('idle')
      return
    }
    if (!audioRef.current) {
      const audio = new Audio(import.meta.env.BASE_URL + src)
      audio.onended = () => setState('idle')
      audio.onerror = () => setState('error')
      audioRef.current = audio
    }
    audioRef.current.currentTime = 0
    audioRef.current
      .play()
      .then(() => setState('playing'))
      .catch(() => setState('error'))
  }

  return (
    <button className={`speak-btn ${state === 'playing' ? 'playing' : ''}`} onClick={toggle}>
      {state === 'playing' ? '■ Stop' : '▶ Play audio'}
    </button>
  )
}
