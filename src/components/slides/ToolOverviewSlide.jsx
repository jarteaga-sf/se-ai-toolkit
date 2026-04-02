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

const cellBase = 'rounded-2xl bg-white shadow-[0_1px_4px_rgba(0,0,0,0.07)] border border-[#E8E8E8]/80 overflow-hidden'

function VisualPlaceholder({ accent }) {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: `linear-gradient(135deg, ${accent}0D 0%, ${accent}1A 100%)` }}
    >
      <span className="text-[11px] font-medium uppercase tracking-widest" style={{ color: `${accent}80` }}>
        Demo coming soon
      </span>
    </div>
  )
}

export default function ToolOverviewSlide({ toolId, title, tagline, examples, visual }) {
  const Logo = logos[toolId]
  const accent = toolAccents[toolId] || 'var(--color-accent)'

  return (
    <div
      className="grid gap-3 w-[860px]"
      style={{
        gridTemplateColumns: '1fr 1fr 2.5fr',
        gridTemplateRows: 'repeat(2, 150px)',
      }}
    >
      {/* Identity — compact, col 1, row 1 */}
      <div
        className={`${cellBase} bento-cell-1 flex items-center gap-3 px-5`}
        style={{ borderTop: `3px solid ${accent}` }}
      >
        {Logo && <Logo size={28} className="flex-shrink-0" />}
        <div className="min-w-0">
          <h2 className="text-[20px] font-bold text-[var(--color-heading)] tracking-[-0.02em] leading-tight">
            {title}
          </h2>
          <p className="text-[11.5px] font-semibold mt-0.5 leading-snug" style={{ color: accent }}>
            {tagline}
          </p>
        </div>
      </div>

      {/* Use case 1 — col 2, row 1 */}
      <div className={`${cellBase} bento-cell-2 flex items-center px-5 gap-3`}>
        <CheckCircle size={16} className="flex-shrink-0" style={{ color: accent }} />
        <p className="text-[14px] text-[var(--color-text)] leading-snug">{examples[0]}</p>
      </div>

      {/* Visual — col 3, rows 1-2 */}
      <div
        className={`${cellBase} bento-cell-3`}
        style={{ gridColumn: '3', gridRow: '1 / 3' }}
      >
        {visual ? (
          visual.endsWith('.mp4') || visual.endsWith('.webm') ? (
            <video
              src={visual}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={visual}
              alt={`${title} in action`}
              className="w-full h-full object-cover"
            />
          )
        ) : (
          <VisualPlaceholder accent={accent} />
        )}
      </div>

      {/* Use case 2 — col 1, row 2 */}
      <div className={`${cellBase} bento-cell-4 flex items-center px-5 gap-3`}>
        <CheckCircle size={16} className="flex-shrink-0" style={{ color: accent }} />
        <p className="text-[14px] text-[var(--color-text)] leading-snug">{examples[1]}</p>
      </div>

      {/* Use case 3 — col 2, row 2 */}
      <div className={`${cellBase} bento-cell-5 flex items-center px-5 gap-3`}>
        <CheckCircle size={16} className="flex-shrink-0" style={{ color: accent }} />
        <p className="text-[14px] text-[var(--color-text)] leading-snug">{examples[2]}</p>
      </div>
    </div>
  )
}
