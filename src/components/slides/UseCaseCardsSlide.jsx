import HabitCards from '../shared/HabitCards'

export default function UseCaseCardsSlide({ toolName, cards, fullscreen }) {
  return (
    <div className="max-w-[860px] mx-auto px-8 w-full">
      <h2 className="text-[32px] font-bold text-[var(--color-heading)] tracking-[-0.02em] text-center mb-2">
        {toolName}
      </h2>
      <p className="text-[16px] text-[var(--color-text-muted)] text-center mb-8">
        Real scenarios from the field
      </p>
      <HabitCards cards={cards} fullscreen />
    </div>
  )
}
