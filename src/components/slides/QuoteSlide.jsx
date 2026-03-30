import { useState, useEffect } from 'react'

function TypewriterQuote({ text, onDone }) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setDone(false)
    const delay = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
          if (onDone) onDone()
        }
      }, 22)
      return () => clearInterval(interval)
    }, 300)
    return () => clearTimeout(delay)
  }, [text])

  return (
    <>
      {displayed}
      {!done && (
        <span className="inline-block w-[8px] h-[0.85em] bg-[var(--color-accent)] ml-0.5 align-middle animate-pulse" />
      )}
    </>
  )
}

export default function QuoteSlide({ quote, attribution, context, fullscreen }) {
  const [attributionVisible, setAttributionVisible] = useState(false)

  useEffect(() => {
    setAttributionVisible(false)
  }, [quote])

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
          <TypewriterQuote text={quote} onDone={() => setAttributionVisible(true)} />
        </p>
      </blockquote>
      {attribution && (
        <p
          className={`mt-8 text-[17px] text-[var(--color-accent)] font-bold transition-opacity duration-700 ${
            attributionVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          &mdash; {attribution}
        </p>
      )}
    </div>
  )
}
