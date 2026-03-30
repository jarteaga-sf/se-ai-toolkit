import HabitCards from '../shared/HabitCards'

function parseBold(text) {
  const parts = text.split(/(\*\*.*?\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-semibold text-[var(--color-text)]">{part.slice(2, -2)}</strong>
    }
    return part
  })
}

export default function LevelUpTopicSlide({ title, prose, cards, takeaway, fullscreen }) {
  return (
    <div className="max-w-[860px] mx-auto px-8 w-full">
      <h2 className="text-[32px] font-bold text-[var(--color-heading)] tracking-[-0.02em] text-center mb-6">
        {title}
      </h2>

      {/* Prose */}
      {prose?.length > 0 && (
        <div className="space-y-4 mb-6 max-w-[700px] mx-auto">
          {prose.map((p, i) => (
            <p key={i} className="text-[17px] text-[var(--color-text-prose)] leading-[1.7] text-center">
              {parseBold(p)}
            </p>
          ))}
        </div>
      )}

      {/* Cards */}
      {cards?.length > 0 && <HabitCards cards={cards} fullscreen />}

      {/* Takeaway */}
      {takeaway && (
        <div className="mt-6 rounded-xl bg-[var(--color-takeaway-bg)] border border-[var(--color-accent)]/20 px-6 py-5 max-w-[700px] mx-auto">
          <p className="text-[16px] text-[var(--color-heading)] font-medium leading-relaxed text-center">
            {parseBold(takeaway)}
          </p>
        </div>
      )}
    </div>
  )
}
