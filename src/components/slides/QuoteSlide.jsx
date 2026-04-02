import { useState, useEffect } from 'react'

function TypewriterQuote({ text, onDone }) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setDone(false)
    let intervalId = null
    const delay = setTimeout(() => {
      let i = 0
      intervalId = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(intervalId)
          setDone(true)
          if (onDone) onDone()
        }
      }, 22)
    }, 300)
    return () => {
      clearTimeout(delay)
      if (intervalId) clearInterval(intervalId)
    }
  }, [text, onDone])

  return (
    <>
      {displayed}
      {!done && (
        <span className="inline-block w-[8px] h-[0.85em] bg-[var(--color-accent)] ml-0.5 align-middle animate-pulse" />
      )}
    </>
  )
}

export default function QuoteSlide({ quote, attribution, context }) {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-[min(900px,80vw)] mx-auto px-8">
      {context && (
        <p className="text-[clamp(14px,1.6vw,18px)] text-[var(--color-text-muted)] leading-relaxed mb-8 max-w-[min(720px,70vw)]">
          {context}
        </p>
      )}
      <blockquote className="relative">
        <span className="absolute -top-6 -left-4 text-[clamp(40px,5vw,64px)] leading-none text-[var(--color-accent)]/15 font-serif select-none">
          &ldquo;
        </span>
        <p className="text-[clamp(22px,3.5vw,38px)] leading-[1.35] font-bold text-[var(--color-heading)] tracking-[-0.02em]">
          <TypewriterQuote text={quote} />
        </p>
      </blockquote>
      {attribution && (
        <p className="mt-8 text-[clamp(13px,1.5vw,17px)] text-[var(--color-accent)] font-bold">
          &mdash; {attribution}
        </p>
      )}
    </div>
  )
}
