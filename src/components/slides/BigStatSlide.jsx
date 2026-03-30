export default function BigStatSlide({ value, label, source, fullscreen }) {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-[680px] mx-auto px-8">
      <p className="text-[88px] font-bold text-[var(--color-accent)] leading-[1] tracking-[-0.04em] mb-6">
        {value}
      </p>
      <p className="text-[22px] text-[var(--color-text-secondary)] leading-snug max-w-[480px] mb-5">
        {label}
      </p>
      {source && (
        <p className="text-[13px] text-[var(--color-text-muted)] italic tracking-wide">
          {source}
        </p>
      )}
    </div>
  )
}
