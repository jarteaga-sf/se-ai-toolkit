export default function TierDivider({ label, id }) {
  return (
    <div id={id} className="flex items-center justify-center py-6 md:py-8 px-6">
      <div className="w-full max-w-[960px] flex items-center gap-4">
        <div className="flex-1 h-px bg-[var(--color-border)]" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-text-muted)] px-3 bg-[var(--color-bg)] relative">
          {label}
        </span>
        <div className="flex-1 h-px bg-[var(--color-border)]" />
      </div>
    </div>
  )
}
