import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function BigStatSlide({ value, label, source, fullscreen }) {
  const containerRef = useRef(null)
  const [displayValue, setDisplayValue] = useState(value)

  useEffect(() => {
    if (!containerRef.current) return

    const labelEl = containerRef.current.querySelector('.stat-label')
    const sourceEl = containerRef.current.querySelector('.stat-source')
    const valueEl = containerRef.current.querySelector('.stat-value')

    // Try to extract a number for count-up animation
    // Match: optional prefix, then a number (with optional decimal), then suffix
    const numMatch = value.match(/^([^\d]*?)(\d+(?:\.\d+)?)(.*)$/)

    if (numMatch) {
      const prefix = numMatch[1]   // e.g. "$" or "~" or ""
      const numStr = numMatch[2]   // e.g. "98.95" or "57" or "2.4"
      const suffix = numMatch[3]   // e.g. "%" or "×" or " minutes"
      const targetNum = parseFloat(numStr)

      // Determine decimal places to preserve formatting
      const decimalPart = numStr.includes('.') ? numStr.split('.')[1] : null
      const decimalPlaces = decimalPart ? decimalPart.length : 0
      const hasComma = numStr.includes(',')

      // Count-up animation
      setDisplayValue(prefix + '0' + suffix)
      const obj = { val: 0 }
      gsap.to(obj, {
        val: targetNum,
        duration: 1.2,
        ease: 'power2.out',
        delay: 0.3,
        onUpdate: () => {
          let formatted
          if (decimalPlaces > 0) {
            formatted = obj.val.toFixed(decimalPlaces)
          } else {
            const n = Math.round(obj.val)
            formatted = hasComma ? n.toLocaleString() : n.toString()
          }
          setDisplayValue(prefix + formatted + suffix)
        },
      })

      // Scale pop on the value
      gsap.set(valueEl, { scale: 0.85 })
      gsap.to(valueEl,
        { scale: 1, duration: 0.6, ease: 'back.out(1.5)', delay: 0.1 }
      )
    } else {
      // Non-numeric values (like "12–18 months") just display immediately
      setDisplayValue(value)
    }

    // Pre-hide label and source immediately
    gsap.set(labelEl, { opacity: 0, y: 15 })
    if (sourceEl) gsap.set(sourceEl, { opacity: 0 })

    // Label fades in
    gsap.to(labelEl,
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', delay: 0.8 }
    )

    // Source fades in
    if (sourceEl) {
      gsap.to(sourceEl,
        { opacity: 1, duration: 0.4, delay: 1.2 }
      )
    }
  }, [value])

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center text-center max-w-[900px] mx-auto px-8">
      <p className="stat-value text-[80px] font-bold text-[var(--color-accent)] leading-[1] tracking-[-0.04em] mb-6">
        {displayValue}
      </p>
      <p className="stat-label text-[24px] text-[var(--color-text-secondary)] leading-snug max-w-[640px] mb-5">
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
