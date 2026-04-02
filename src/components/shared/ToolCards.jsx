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

function ToolCard({ card }) {
  const Logo = logos[card.logo]
  const accent = toolAccents[card.logo] || 'var(--color-accent)'

  return (
    <div
      className="bg-[var(--color-bg-white)] border border-[var(--color-border)]/40 rounded-2xl shadow-[var(--shadow-card)] overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] flex flex-col"
      style={{ borderTop: `3px solid ${accent}` }}
    >
      {/* Logo + name */}
      <div className="pt-6 pb-2 flex flex-col items-center gap-2">
        {Logo && <Logo size={40} />}
        <h4 className="font-[var(--font-heading)] text-[17px] font-bold text-[var(--color-heading)]">
          {card.name}
        </h4>
      </div>
      {/* Tagline */}
      <div className="min-h-[48px] flex items-center justify-center px-5 pb-1">
        {card.tagline && (
          <p className="text-[13px] text-[var(--color-text-muted)] italic text-center leading-snug">{card.tagline}</p>
        )}
      </div>
      {/* Role badge */}
      <div className="flex items-center justify-center px-4 pb-3">
        {card.role && (
          <span
            className="text-[11px] font-bold uppercase tracking-[0.08em] px-3 py-1 rounded-full whitespace-nowrap"
            style={{
              backgroundColor: `${accent}15`,
              color: accent,
              border: `1px solid ${accent}30`,
            }}
          >
            {card.role}
          </span>
        )}
      </div>
      {/* SE Quote */}
      {card.quote && (
        <div className="mx-4 mb-5 mt-1 rounded-xl p-3.5 flex-1" style={{ backgroundColor: `${accent}08`, border: `1px solid ${accent}18` }}>
          <p className="text-[12px] text-[var(--color-text)] italic leading-[1.5]">
            &ldquo;{card.quote}&rdquo;
          </p>
          <p className="text-[10.5px] font-semibold mt-2" style={{ color: accent }}>
            — {card.attribution}
          </p>
        </div>
      )}
    </div>
  )
}

function GroupedToolCards({ cards }) {
  const groupMap = new Map()
  cards.forEach((card) => {
    if (!groupMap.has(card.group)) {
      groupMap.set(card.group, { label: card.groupLabel, cards: [] })
    }
    groupMap.get(card.group).cards.push(card)
  })
  const groups = Array.from(groupMap.values())

  return (
    <div className="flex gap-6 items-stretch w-full">
      {groups.map((group, gi) => (
        <div key={gi} className="flex-1 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-[var(--color-border)]/50" />
            <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
              {group.label}
            </span>
            <div className="flex-1 h-px bg-[var(--color-border)]/50" />
          </div>
          <div className="grid grid-cols-2 gap-4 flex-1">
            {group.cards.map((card, i) => (
              <ToolCard key={i} card={card} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function ToolCards({ cards }) {
  const hasGroups = cards.some((c) => c.group)
  if (hasGroups) return <GroupedToolCards cards={cards} />

  return (
    <div className={`grid grid-cols-2 ${cards.length === 4 ? 'lg:grid-cols-4' : 'sm:grid-cols-3'} gap-5 my-8 items-stretch`}>
      {cards.map((card, i) => (
        <ToolCard key={i} card={card} />
      ))}
    </div>
  )
}
