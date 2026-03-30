import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function TierTransitionSlide({ label, supporting, fullscreen }) {
  const labelRef = useRef(null)
  const supportRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 })
    if (labelRef.current) {
      tl.fromTo(labelRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      )
    }
    if (supportRef.current) {
      tl.fromTo(supportRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        '-=0.2'
      )
    }
  }, [label])

  return (
    <div className="flex flex-col items-center justify-center text-center max-w-[900px] mx-auto px-8">
      <p
        ref={labelRef}
        className="text-[15px] font-bold uppercase tracking-[0.15em] text-[var(--color-cloud-light)] mb-5"
      >
        Next Section
      </p>
      <h2
        ref={labelRef}
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
