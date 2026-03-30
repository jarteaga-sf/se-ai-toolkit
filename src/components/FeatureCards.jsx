export default function FeatureCards({ features }) {
  return (
    <div className="space-y-3 my-8">
      {features.map((feature, i) => (
        <div
          key={i}
          className="bg-[var(--color-bg-white)] border border-[var(--color-border)]/60 rounded-xl px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
        >
          <div className="flex items-center gap-3 mb-1.5">
            <kbd className="px-2.5 py-0.5 bg-[var(--color-surface)] border border-[var(--color-border)]/50 rounded-lg text-[13px] font-[var(--font-mono)] font-bold text-[var(--color-heading)] whitespace-nowrap">
              {feature.shortcut}
            </kbd>
            <span className="font-bold text-[16px] text-[var(--color-heading)]">{feature.name}</span>
          </div>
          <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}
