import { useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'
import { CursorLogo } from '../illustrations/ToolLogos'

function isGif(src) {
  return src && src.toLowerCase().endsWith('.gif')
}

export default function VideoDemoSlide({ title, stepLabel, videoSrc, caption, fullscreen }) {
  const videoRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  function togglePlayback() {
    const player = videoRef.current
    if (!player) return

    if (player.paused) {
      player.play()
      setIsPaused(false)
    } else {
      player.pause()
      setIsPaused(true)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center max-w-[860px] mx-auto px-8 w-full">
      {(stepLabel || title) && (
        <div className="mb-4 text-center">
          {stepLabel && (
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)] mb-1.5">
              {stepLabel}
            </p>
          )}
          {title && (
            <h2 className="text-[22px] font-bold text-[var(--color-heading)] tracking-[-0.02em] leading-snug">
              {title}
            </h2>
          )}
        </div>
      )}

      {/* Floating card — no border, diffuse shadow */}
      <div
        className="w-full rounded-2xl overflow-hidden aspect-video flex items-center justify-center relative group"
        style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.22), 0 8px 24px rgba(0,0,0,0.14)' }}
      >
        {videoSrc && isGif(videoSrc) ? (
          <img
            src={videoSrc}
            alt={title || 'Cursor demo'}
            className="w-full h-full object-cover"
          />
        ) : videoSrc ? (
          <>
            <video
              ref={videoRef}
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              onClick={togglePlayback}
              className="w-full h-full object-cover cursor-pointer"
            />
            <button
              type="button"
              onClick={togglePlayback}
              className="absolute right-3 bottom-3 rounded-md border border-white/30 bg-black/60 px-2.5 py-1.5 text-white opacity-0 transition-opacity group-hover:opacity-100"
              aria-label={isPaused ? 'Play video' : 'Pause video'}
            >
              {isPaused ? <Play size={14} /> : <Pause size={14} />}
            </button>
          </>
        ) : (
          <div className="w-full h-full bg-[#141414] flex flex-col items-center justify-center gap-4 opacity-40">
            <CursorLogo size={52} />
            <p className="text-[var(--color-terminal-text)] text-[14px] font-[var(--font-mono)]">
              recording coming soon
            </p>
            <p className="text-[var(--color-terminal-dim)] text-[12px] font-[var(--font-mono)]">
              Drop GIF here when ready
            </p>
          </div>
        )}
      </div>

      {caption && (
        <p className="mt-4 text-[13px] text-[var(--color-text-muted)] italic text-center">
          {caption}
        </p>
      )}
    </div>
  )
}
