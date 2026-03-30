import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CinematicSlide({ statement, fullscreen }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const words = el.querySelectorAll('.cinematic-word')
    gsap.set(words, { opacity: 0, y: 10 })
    gsap.to(words, {
      opacity: 1,
      y: 0,
      duration: 0.45,
      stagger: 0.08,
      ease: 'power2.out',
      delay: 0.2,
    })
  }, [statement])

  const statementWords = statement.split(' ')

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center text-center max-w-[960px] mx-auto px-8"
    >
      <h2 className="text-[56px] leading-[1.12] font-bold tracking-[-0.03em] text-white">
        {statementWords.map((word, i) => (
          <span key={i} className="cinematic-word inline-block mr-[0.3em]">
            {word}
          </span>
        ))}
      </h2>
    </div>
  )
}
