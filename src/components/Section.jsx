import { useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Section({ id, label, title, subtitle, first = false, hideDivider = false, compact = false, children }) {
  const sectionRef = useRef(null)
  const cardRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    const card = cardRef.current
    if (!section || !card) return

    // Initial state
    gsap.set(section, { y: first ? 0 : 40, opacity: first ? 1 : 0 })

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        if (hasAnimated.current) return
        hasAnimated.current = true
        gsap.to(section, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
        })
      },
    })

    // Progressive opacity based on scroll position
    const opacityTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        const progress = self.progress
        // Peak opacity at center of viewport
        const centerDist = Math.abs(progress - 0.5) * 2
        const opacity = Math.max(0.3, 1 - centerDist * 0.6)
        card.style.opacity = opacity
      },
    })

    return () => {
      trigger.kill()
      opacityTrigger.kill()
    }
  }, [first])

  return (
    <>
      <section
        id={id}
        ref={sectionRef}
        className={`${first ? 'pt-14 md:pt-16' : 'pt-16 md:pt-20'} pb-16 md:pb-20 px-6 md:px-10 flex items-start justify-center`}
      >
        <div className="w-full max-w-[960px]">
          <div
            ref={cardRef}
            className="bg-[var(--color-bg-white)] rounded-2xl border border-[var(--color-border)]/40 shadow-[var(--shadow-card)] p-8 md:p-10 transition-shadow duration-500 ease-out hover:shadow-[var(--shadow-soft)]"
          >
            {compact ? (
              <div className="mb-2">
                {label && (
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                    {label}
                  </span>
                )}
              </div>
            ) : (
              <>
                {label && (
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-accent)] mb-2">
                    {label}
                  </p>
                )}
                <h2 className="text-[32px] md:text-[40px] leading-[1.1] tracking-[-0.025em] text-[var(--color-heading)] mb-3">
                  {title}
                </h2>
                {subtitle && (
                  <p className="text-[18px] md:text-[19px] text-[var(--color-text-muted)] mb-10 leading-[1.55] font-[350]">
                    {subtitle}
                  </p>
                )}
              </>
            )}
            {children}
          </div>
        </div>
      </section>
      {!hideDivider && (
        <div className="flex justify-center">
          <hr className="w-16 border-t border-[var(--color-border)]/50" />
        </div>
      )}
    </>
  )
}
