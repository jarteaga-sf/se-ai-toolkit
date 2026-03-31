import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function StatementSlide({ statement, supporting, fullscreen, isDarkBg }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const words = el.querySelectorAll('.stmt-word')
    const supportEl = el.querySelector('.stmt-supporting')

    gsap.set(words, { opacity: 0, y: 8 })
    gsap.to(words, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.07,
      ease: 'power2.out',
      delay: 0.2,
    })

    if (supportEl) {
      const supportDelay = 0.2 + words.length * 0.07 + 0.2
      gsap.set(supportEl, { opacity: 0 })
      gsap.to(supportEl, { opacity: 1, duration: 0.5, delay: supportDelay })
    }
  }, [statement])

  const statementWords = statement.split(' ')

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center text-center max-w-[min(960px,85vw)] mx-auto px-8"
    >
      <h2
        className={`text-[clamp(28px,5vw,56px)] leading-[1.1] font-bold tracking-[-0.03em] mb-6 ${
          isDarkBg ? 'text-white' : 'text-[var(--color-heading)]'
        }`}
      >
        {statementWords.map((word, i) => (
          <span key={i} className="stmt-word inline-block mr-[0.3em]">
            {word}
          </span>
        ))}
      </h2>
      {supporting && (
        <p
          className={`stmt-supporting text-[clamp(14px,1.8vw,20px)] leading-relaxed max-w-[min(640px,70vw)] ${
            isDarkBg ? 'text-white/40' : 'text-[var(--color-text-muted)]'
          }`}
        >
          {supporting}
        </p>
      )}
    </div>
  )
}
