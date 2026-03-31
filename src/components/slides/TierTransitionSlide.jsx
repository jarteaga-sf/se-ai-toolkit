import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function TierTransitionSlide({ label, supporting, fullscreen }) {
  const labelRef = useRef(null)
  const titleRef = useRef(null)
  const supportRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.15 })

    if (labelRef.current) {
      tl.fromTo(labelRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      )
    }
    if (titleRef.current) {
      tl.fromTo(titleRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.1'
      )
    }
    if (supportRef.current) {
      tl.fromTo(supportRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: 'power1.out' },
        '-=0.1'
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
        ref={titleRef}
        className="text-[clamp(28px,4.5vw,56px)] font-bold text-white tracking-[-0.03em] mb-5"
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
