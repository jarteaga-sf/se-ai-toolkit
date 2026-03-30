function parseBold(text) {
  const parts = text.split(/(\*\*.*?\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-bold text-[var(--color-heading)]">{part.slice(2, -2)}</strong>
    }
    return part
  })
}

export default function ContestCtaSlide({ contest, takeaway, fullscreen }) {
  return (
    <div className="max-w-[700px] mx-auto px-8 w-full">
      {/* Contest card */}
      {contest && (
        <div className="rounded-2xl border-2 border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 p-8 text-center mb-8">
          <h2 className="text-[28px] font-bold text-[var(--color-heading)] mb-3">{contest.title}</h2>
          <p className="text-[17px] text-[var(--color-text-secondary)] leading-relaxed mb-4">{contest.description}</p>
          {contest.prize && (
            <p className="text-[15px] font-bold text-[var(--color-accent)]">{contest.prize}</p>
          )}
        </div>
      )}

      {/* Takeaway */}
      {takeaway && (
        <p className="text-[20px] text-[var(--color-text-prose)] leading-relaxed text-center font-medium">
          {parseBold(takeaway)}
        </p>
      )}
    </div>
  )
}
