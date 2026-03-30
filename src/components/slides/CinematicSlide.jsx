import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CinematicSlide({ statement, fullscreen }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const words = containerRef.current.querySelectorAll('.cine-word')

    // Dramatic word-by-word reveal with scale
    gsap.fromTo(words,
      { opacity: 0, y: 20, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        stagger: 0.06,
        ease: 'power3.out',
        delay: 0.2,
      }
    )
  }, [statement])

  const statementWords = statement.split(' ')

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center text-center max-w-[960px] mx-auto px-8">
      <h2 className="text-[64px] leading-[1.12] font-bold tracking-[-0.03em] text-white">
        {statementWords.map((word, i) => (
          <span key={i} className="cine-word inline-block mr-[0.3em]">
            {word}
          </span>
        ))}
      </h2>
    </div>
  )
}
