import { ClaudeLogo, CursorLogo, SaleoLogo } from './ToolLogos'

const logos = {
  claude: ClaudeLogo,
  cursor: CursorLogo,
  saleo: SaleoLogo,
}

const accentColors = {
  claude: { bg: '#D97757', text: '#FFFFFF' },
  cursor: { bg: '#1A1A1A', text: '#FFFFFF' },
  saleo: { bg: '#7C3AED', text: '#FFFFFF' },
}

function InfoPill({ label, value }) {
  return (
    <div className="bg-[var(--color-border-light)]/80 rounded-lg px-4 py-3">
      <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-text-muted)]">{label}</span>
      <p className="text-[14px] text-[var(--color-text-secondary)] mt-1 leading-snug">{value}</p>
    </div>
  )
}

export default function ToolCards({ cards }) {
  return (
    <div className="grid sm:grid-cols-3 gap-4 my-8 items-stretch">
      {cards.map((card, i) => {
        const Logo = logos[card.logo]
        const accent = accentColors[card.logo] || { bg: '#64748B', text: '#FFFFFF' }
        return (
          <div
            key={i}
            className="bg-[var(--color-bg-white)] border border-[var(--color-border)] rounded-xl shadow-[var(--shadow-card)] overflow-hidden transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-md flex flex-col"
          >
            {/* Colored header band */}
            <div
              className="px-5 py-4 flex items-center gap-3"
              style={{ backgroundColor: accent.bg }}
            >
              {Logo && (
                <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Logo size={22} />
                </div>
              )}
              <h4
                className="font-[var(--font-heading)] text-[17px] font-semibold"
                style={{ color: accent.text }}
              >
                {card.name}
              </h4>
            </div>
            {/* Info grid — flex-1 + grid rows ensures equal pill heights across cards */}
            <div className="p-4 flex-1 grid grid-rows-3 gap-2">
              <InfoPill label="Where" value={card.where} />
              <InfoPill label="Best for" value={card.bestFor} />
              <InfoPill label="How" value={card.how} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
