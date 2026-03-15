export default function FeatureCards({ features }) {
  return (
    <div className="space-y-3 my-8">
      {features.map((feature, i) => (
        <div
          key={i}
          className="bg-[var(--color-bg-white)] border border-[var(--color-border)] rounded-lg shadow-[var(--shadow-card)] px-5 py-4 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="flex items-center gap-3 mb-1.5">
            <kbd className="px-2 py-0.5 bg-[var(--color-border-light)] rounded text-[13px] font-[var(--font-mono)] font-semibold text-[var(--color-text)] whitespace-nowrap">
              {feature.shortcut}
            </kbd>
            <span className="font-semibold text-[16px] text-[var(--color-text)]">{feature.name}</span>
          </div>
          <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}
