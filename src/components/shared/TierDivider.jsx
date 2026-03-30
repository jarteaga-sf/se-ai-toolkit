export default function TierDivider({ label, id }) {
  return (
    <div id={id} className="flex items-center justify-center py-8 md:py-10 px-6">
      <div className="w-full max-w-[960px] flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent" />
        <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[var(--color-heading)] px-4 py-1.5 bg-[var(--color-surface)] rounded-full border border-[var(--color-border)]/50">
          {label}
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent" />
      </div>
    </div>
  )
}
