import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function QuoteSlide({ quote, attribution, context, fullscreen }) {
  const quoteRef = useRef(null)

  useEffect(() => {
    const el = quoteRef.current
    if (!el) return

    const words = el.querySelectorAll('.quote-word')
    gsap.set(words, { opacity: 0.15 })
    gsap.to(words, {
      opacity: 1,
      duration: 0.4,
      stagger: 0.06,
      ease: 'power2.out',
      delay: 0.3,
    })
  }, [quote])

  const quoteWords = quote.split(' ')

  return (
    <div className="flex flex-col items-center justify-center text-center max-w-[900px] mx-auto px-8">
      {context && (
        <p className="text-[18px] text-[var(--color-text-muted)] leading-relaxed mb-8 max-w-[720px]">
          {context}
        </p>
      )}
      <blockquote ref={quoteRef} className="relative">
        <span className="absolute -top-8 -left-5 text-[88px] leading-none text-[var(--color-accent)]/15 font-serif select-none">
          &ldquo;
        </span>
        <p className="text-[38px] leading-[1.35] font-bold text-[var(--color-heading)] tracking-[-0.02em]">
          {quoteWords.map((word, i) => (
            <span key={i} className="quote-word inline-block mr-[0.3em]">
              {word}
            </span>
          ))}
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
