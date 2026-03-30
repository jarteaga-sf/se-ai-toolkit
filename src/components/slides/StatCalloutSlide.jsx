import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function StatCalloutSlide({ stats, fullscreen }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const items = el.querySelectorAll('.stat-item')
    gsap.set(items, { opacity: 0, y: 20 })
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.12,
      ease: 'power2.out',
      delay: 0.2,
    })
  }, [stats])

  return (
    <div ref={containerRef} className="flex items-center justify-center gap-10 max-w-[900px] mx-auto px-8">
      {stats.map((stat, i) => {
        const isTextValue = isNaN(stat.value.replace(/[%x.→\s]/g, ''))
        return (
          <div key={i} className="stat-item flex-1 text-center">
            <p
              className={`font-bold text-[var(--color-accent)] mb-2 ${
                isTextValue ? 'text-[36px]' : 'text-[56px]'
              }`}
            >
              {stat.value}
            </p>
            <p className="text-[16px] text-[var(--color-text-secondary)] leading-snug mb-3">
              {stat.label}
            </p>
            {stat.source && (
              <p className="text-[12px] text-[var(--color-text-muted)] italic">
                {stat.source}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}
