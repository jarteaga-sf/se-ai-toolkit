import { CheckCircle } from 'lucide-react'
import { ClaudeLogo, CursorLogo, SaleoLogo, MeshMeshLogo } from '../illustrations/ToolLogos'
import SlackMessage from '../shared/SlackMessage'

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

export default function ToolOverviewSlide({ toolId, title, tagline, examples, seVoice }) {
  const Logo = logos[toolId]
  const accent = toolAccents[toolId] || 'var(--color-accent)'

  return (
    <div
      className="grid gap-3 w-[820px]"
      style={{
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: 'repeat(3, 110px)',
      }}
    >
      {/* Identity cell — spans rows 1-2 */}
      <div
        className={`${cellBase} bento-cell-1 flex flex-col justify-center px-7`}
        style={{
          gridRow: '1 / 3',
          borderTop: `3px solid ${accent}`,
        }}
      >
        {Logo && <Logo size={40} className="mb-3" />}
        <h2 className="text-[32px] font-bold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1] mb-2">
          {title}
        </h2>
        <p className="text-[14px] font-semibold" style={{ color: accent }}>
          {tagline}
        </p>
      </div>

      {/* Use case 1 */}
      <div className={`${cellBase} bento-cell-2 flex items-center px-5 gap-3`}>
        <CheckCircle size={18} className="flex-shrink-0" style={{ color: accent }} />
        <p className="text-[15px] text-[var(--color-text)] leading-snug">{examples[0]}</p>
      </div>

      {/* Use case 2 */}
      <div className={`${cellBase} bento-cell-3 flex items-center px-5 gap-3`}>
        <CheckCircle size={18} className="flex-shrink-0" style={{ color: accent }} />
        <p className="text-[15px] text-[var(--color-text)] leading-snug">{examples[1]}</p>
      </div>

      {/* Slack message cell — row 3, col 1 */}
      {seVoice && (
        <div
          className={`${cellBase} bento-cell-5`}
          style={{ borderLeft: `3px solid ${accent}` }}
        >
          <SlackMessage
            quote={seVoice.quote}
            attribution={seVoice.attribution}
            accent={accent}
          />
        </div>
      )}

      {/* Use case 3 */}
      <div className={`${cellBase} bento-cell-4 flex items-center px-5 gap-3`}>
        <CheckCircle size={18} className="flex-shrink-0" style={{ color: accent }} />
        <p className="text-[15px] text-[var(--color-text)] leading-snug">{examples[2]}</p>
      </div>
    </div>
  )
}
