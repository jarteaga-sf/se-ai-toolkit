import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function StatementSlide({ statement, supporting, fullscreen, isDarkBg }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const words = containerRef.current.querySelectorAll('.stmt-word')
    const supportEl = containerRef.current.querySelector('.stmt-supporting')

    // Typewriter-style word reveal with stagger
    gsap.fromTo(words,
      { opacity: 0, y: 12 },
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
        stagger: 0.045,
        ease: 'power2.out',
        delay: 0.15,
      }
    )

    // Supporting text fades in after the statement
    if (supportEl) {
      gsap.fromTo(supportEl,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          delay: 0.15 + words.length * 0.045 + 0.2,
        }
      )
    }
  }, [statement])

  const statementWords = statement.split(' ')

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center text-center max-w-[960px] mx-auto px-8">
      <h2
        className={`text-[56px] leading-[1.1] font-bold tracking-[-0.03em] mb-6 ${
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
          className={`stmt-supporting text-[20px] leading-relaxed max-w-[640px] ${
            isDarkBg ? 'text-white/40' : 'text-[var(--color-text-muted)]'
          }`}
        >
          {supporting}
        </p>
      )}
    </div>
  )
}
