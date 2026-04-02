import { CheckCircle } from 'lucide-react'
import { ClaudeLogo, CursorLogo, SaleoLogo, MeshMeshLogo } from '../illustrations/ToolLogos'

const logos = {
  claude: ClaudeLogo,
  cursor: CursorLogo,
  saleo: SaleoLogo,
  meshmesh: MeshMeshLogo,
}

const toolAccents = {
  saleo: '#8402AD',
  meshmesh: '#0176D3',
  cursor: '#06A59A',
  claude: '#066AFE',
}

export default function ToolOverviewSlide({ toolId, title, tagline, differentiator, examples, seVoice, fullscreen }) {
  const Logo = logos[toolId]
  const accent = toolAccents[toolId] || 'var(--color-accent)'

  return (
    <div className="flex items-center gap-12 max-w-[900px] mx-auto px-8">

      {/* Left — identity */}
      <div className="flex-shrink-0 w-[300px]">
        {Logo && (
          <div className="mb-5">
            <Logo size={52} />
          </div>
        )}
        <h2 className="text-[38px] font-bold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1] mb-3">
          {title}
        </h2>
        <p className="text-[15px] font-semibold mb-4" style={{ color: accent }}>
          {tagline}
        </p>
        {differentiator && (
          <p className="text-[14px] text-[var(--color-text-muted)] leading-relaxed">
            {differentiator}
          </p>
        )}
        {seVoice && (
          <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
            <p className="text-[13px] text-[var(--color-text-muted)] italic leading-relaxed">
              &ldquo;{seVoice.quote}&rdquo;
            </p>
            <p className="text-[11px] text-[var(--color-accent)] mt-1.5 font-medium">
              — {seVoice.attribution}
            </p>
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="w-px self-stretch bg-[var(--color-border)] opacity-60" />

      {/* Right — examples */}
      <div className="flex-1">
        <p
          className="text-[10px] font-bold uppercase tracking-[0.14em] mb-5"
          style={{ color: accent }}
        >
          What you can do
        </p>
        <div className="flex flex-col gap-5">
          {examples.map((ex, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle
                size={16}
                className="flex-shrink-0 mt-0.5"
                style={{ color: accent }}
              />
              <p className="text-[16px] text-[var(--color-text)] leading-snug">
                {ex}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
