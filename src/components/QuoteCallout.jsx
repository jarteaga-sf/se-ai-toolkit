export default function QuoteCallout({ quote }) {
  return (
    <div className="my-8 border-l-3 border-[var(--color-accent)] bg-[var(--color-border-light)] rounded-r-lg px-6 py-5">
      <p className="text-[15px] italic text-[var(--color-text-secondary)] leading-relaxed">
        "{quote}"
      </p>
      <span className="text-[13px] text-[var(--color-text-muted)] mt-2 block">-- Salesforce SE</span>
    </div>
  )
}
