export default function QuoteSlide({ quote, attribution, context, fullscreen }) {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-[900px] mx-auto px-8">
      {context && (
        <p className="text-[18px] text-[var(--color-text-muted)] leading-relaxed mb-8 max-w-[720px]">
          {context}
        </p>
      )}
      <blockquote className="relative">
        <span className="absolute -top-6 -left-4 text-[64px] leading-none text-[var(--color-accent)]/15 font-serif select-none">
          &ldquo;
        </span>
        <p className="text-[38px] leading-[1.35] font-bold text-[var(--color-heading)] tracking-[-0.02em]">
          {quote}
        </p>
      </blockquote>
      {attribution && (
        <p className="mt-8 text-[17px] text-[var(--color-accent)] font-bold">
          &mdash; {attribution}
        </p>
      )}
    </div>
  )
}
