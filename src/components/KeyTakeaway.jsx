export default function KeyTakeaway({ children }) {
  return (
    <div className="mt-10 border-l-3 border-[var(--color-accent)] bg-[var(--color-takeaway-bg)] rounded-r-lg px-6 py-5 shadow-[0_1px_4px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.03)]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)] mb-1.5">
        Key Takeaway
      </p>
      <p className="text-[17px] text-[var(--color-text)] font-semibold leading-[1.65]">
        {children}
      </p>
    </div>
  )
}
