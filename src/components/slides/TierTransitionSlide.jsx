import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function TierTransitionSlide({ label, supporting, fullscreen }) {
  const subtitleRef = useRef(null)
  const headingRef = useRef(null)
  const supportRef = useRef(null)

  useEffect(() => {
    // Pre-hide all elements immediately
    if (subtitleRef.current) gsap.set(subtitleRef.current, { opacity: 0, y: 20 })
    if (headingRef.current) gsap.set(headingRef.current, { opacity: 0, y: 30 })
    if (supportRef.current) gsap.set(supportRef.current, { opacity: 0, y: 20 })

    const tl = gsap.timeline({ delay: 0.2 })
    if (subtitleRef.current) {
      tl.to(subtitleRef.current,
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      )
    }
    if (headingRef.current) {
      tl.to(headingRef.current,
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.2'
      )
    }
    if (supportRef.current) {
      tl.to(supportRef.current,
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        '-=0.2'
      )
    }
  }, [label])

  return (
    <div className="flex flex-col items-center justify-center text-center max-w-[900px] mx-auto px-8">
      <p
        ref={subtitleRef}
        className="text-[15px] font-bold uppercase tracking-[0.15em] text-[var(--color-cloud-light)] mb-5"
      >
        Next Section
      </p>
      <h2
        ref={headingRef}
        className="text-[64px] font-bold text-white tracking-[-0.03em] mb-5"
      >
        {label}
      </h2>
      {supporting && (
        <p ref={supportRef} className="text-[24px] text-white/60 leading-relaxed">
          {supporting}
        </p>
      )}
    </div>
  )
}
