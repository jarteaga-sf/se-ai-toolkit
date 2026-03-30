export default function KeyTakeaway({ children }) {
  return (
    <div className="mt-8 border-l-3 border-[var(--color-accent)] bg-[var(--color-takeaway-bg)] rounded-r-xl px-6 py-5">
      <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-accent)] mb-1.5">
        Key Takeaway
      </p>
      <p className="text-[17px] text-[var(--color-heading)] font-bold leading-[1.65]">
        {children}
      </p>
    </div>
  )
}
