export default function BigStatSlide({ value, label, source, fullscreen }) {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-[900px] mx-auto px-8">
      <p className="text-[120px] font-bold text-[var(--color-accent)] leading-[1] tracking-[-0.04em] mb-8">
        {value}
      </p>
      <p className="text-[28px] text-[var(--color-text-secondary)] leading-snug max-w-[640px] mb-6">
        {label}
      </p>
      {source && (
        <p className="text-[16px] text-[var(--color-text-muted)] italic tracking-wide">
          {source}
        </p>
      )}
    </div>
  )
}
