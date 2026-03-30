import { CursorLogo } from '../illustrations/ToolLogos'

export default function VideoDemoSlide({ title, videoSrc, caption, fullscreen }) {
  return (
    <div className="flex flex-col items-center justify-center max-w-[860px] mx-auto px-8 w-full">
      {title && (
        <h2 className="text-[26px] font-bold text-[var(--color-heading)] tracking-[-0.02em] mb-5 text-center">
          {title}
        </h2>
      )}

      {/* Mac screen chrome */}
      <div className="w-full rounded-xl overflow-hidden border border-[#2D2D2D] shadow-2xl">
        {/* Titlebar */}
        <div className="bg-[#1E1E1E] px-4 py-2.5 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 flex justify-center">
            <span className="text-[12px] text-[#9CA3AF] font-[var(--font-mono)]">Cursor</span>
          </div>
        </div>

        {/* Video / placeholder area */}
        <div className="bg-[#141414] aspect-video flex items-center justify-center">
          {videoSrc ? (
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center gap-4 opacity-35">
              <CursorLogo size={52} />
              <p className="text-[var(--color-terminal-text)] text-[14px] font-[var(--font-mono)]">
                cursor-demo.mp4
              </p>
              <p className="text-[var(--color-terminal-dim)] text-[12px] font-[var(--font-mono)]">
                Drop Screen Studio recording here when ready
              </p>
            </div>
          )}
        </div>
      </div>

      {caption && (
        <p className="mt-4 text-[13px] text-[var(--color-text-muted)] italic text-center">
          {caption}
        </p>
      )}
    </div>
  )
}
