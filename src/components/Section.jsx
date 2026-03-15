import { useEffect, useRef, useCallback } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function Section({ id, label, title, subtitle, first = false, children }) {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0,
    rootMargin: '0px 0px -35% 0px',
  })

  const visible = first || hasIntersected
  const cardRef = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!visible || !el) return

    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!cardRef.current) return
        const ratio = entry.intersectionRatio
        // More aggressive fade: 0.12 at edges, need ~60% visible to reach full opacity
        const opacity = Math.max(0.12, Math.min(1, ratio * 1.8))
        cardRef.current.style.opacity = opacity
      },
      { threshold: thresholds }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [visible])

  const setRefs = useCallback(
    (node) => {
      ref.current = node
    },
    [ref]
  )

  return (
    <>
      <section
        id={id}
        ref={setRefs}
        className={`${first ? 'pt-8 md:pt-10' : 'pt-16 md:pt-20'} pb-16 md:pb-20 px-6 md:px-10 flex items-start justify-center transition-[opacity,transform] duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 will-change-[opacity,transform]'
        }`}
      >
        <div className="w-full max-w-[780px]">
          <div
            ref={cardRef}
            className="bg-[var(--color-bg-white)] rounded-xl border border-[var(--color-border)]/40 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_6px_24px_rgba(0,0,0,0.03)] p-8 md:p-10 transition-opacity duration-500 ease-out"
          >
            {label && (
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--color-accent)] mb-2">
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
            {children}
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <hr className="w-16 border-t border-[var(--color-border)]/50" />
      </div>
    </>
  )
}
