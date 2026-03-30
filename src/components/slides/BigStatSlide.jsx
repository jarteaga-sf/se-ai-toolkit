import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function BigStatSlide({ value, label, source, fullscreen }) {
  const containerRef = useRef(null)
  const [displayValue, setDisplayValue] = useState('')

  useEffect(() => {
    if (!containerRef.current) return

    const labelEl = containerRef.current.querySelector('.stat-label')
    const sourceEl = containerRef.current.querySelector('.stat-source')
    const valueEl = containerRef.current.querySelector('.stat-value')

    // Try to extract a number for count-up animation
    const numMatch = value.match(/^([^\d]*)(\d+)([\d.,]*)(.*)$/)

    if (numMatch) {
      const prefix = numMatch[1]  // e.g. "$" or ""
      const mainNum = parseInt(numMatch[2] + numMatch[3].replace(/[.,]/g, ''), 10)
      const suffix = numMatch[4]  // e.g. "%" or "x" or "+"
      const hasComma = numMatch[3].includes(',')

      // Count-up animation
      setDisplayValue(prefix + '0' + suffix)
      const obj = { val: 0 }
      gsap.to(obj, {
        val: mainNum,
        duration: 1.2,
        ease: 'power2.out',
        delay: 0.2,
        onUpdate: () => {
          const n = Math.round(obj.val)
          const formatted = hasComma ? n.toLocaleString() : n.toString()
          setDisplayValue(prefix + formatted + suffix)
        },
      })

      // Scale pop on the value
      gsap.fromTo(valueEl,
        { scale: 0.7, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.5)', delay: 0.1 }
      )
    } else {
      // Non-numeric values just pop in
      setDisplayValue(value)
      gsap.fromTo(valueEl,
        { scale: 0.7, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.5)', delay: 0.2 }
      )
    }

    // Label fades in
    gsap.fromTo(labelEl,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', delay: 0.8 }
    )

    // Source fades in
    if (sourceEl) {
      gsap.fromTo(sourceEl,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, delay: 1.2 }
      )
    }
  }, [value])

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center text-center max-w-[900px] mx-auto px-8">
      <p className="stat-value text-[120px] font-bold text-[var(--color-accent)] leading-[1] tracking-[-0.04em] mb-8">
        {displayValue || value}
      </p>
      <p className="stat-label text-[28px] text-[var(--color-text-secondary)] leading-snug max-w-[640px] mb-6">
        {label}
      </p>
      {source && (
        <p className="stat-source text-[16px] text-[var(--color-text-muted)] italic tracking-wide">
          {source}
        </p>
      )}
    </div>
  )
}
