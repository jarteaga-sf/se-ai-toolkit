export default function StatCalloutSlide({ stats, fullscreen }) {
  return (
    <div className="flex items-center justify-center gap-10 max-w-[900px] mx-auto px-8">
      {stats.map((stat, i) => {
        const isTextValue = isNaN(stat.value.replace(/[%x.→\s]/g, ''))
        return (
          <div key={i} className="flex-1 text-center">
            <p
              className={`font-bold text-[var(--color-accent)] mb-2 ${
                isTextValue ? 'text-[36px]' : 'text-[56px]'
              }`}
            >
              {stat.value}
            </p>
            <p className="text-[16px] text-[var(--color-text-secondary)] leading-snug mb-3">
              {stat.label}
            </p>
            {stat.source && (
              <p className="text-[12px] text-[var(--color-text-muted)] italic">
                {stat.source}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}
