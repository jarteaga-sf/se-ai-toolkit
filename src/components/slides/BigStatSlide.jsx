import { useEffect, useState } from 'react'
import gsap from 'gsap'

export default function BigStatSlide({ value, label, source, fullscreen }) {
  const [displayValue, setDisplayValue] = useState(value)

  useEffect(() => {
    // Try to extract a number for count-up animation (content animation — keep)
    const numMatch = value.match(/^([^\d]*?)(\d+(?:\.\d+)?)(.*)$/)

    if (numMatch) {
      const prefix = numMatch[1]
      const numStr = numMatch[2]
      const suffix = numMatch[3]
      const targetNum = parseFloat(numStr)

      const decimalPart = numStr.includes('.') ? numStr.split('.')[1] : null
      const decimalPlaces = decimalPart ? decimalPart.length : 0
      const hasComma = numStr.includes(',')

      setDisplayValue(prefix + '0' + suffix)
      const obj = { val: 0 }
      gsap.to(obj, {
        val: targetNum,
        duration: 1.2,
        ease: 'power2.out',
        delay: 0.15,
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
    } else {
      setDisplayValue(value)
    }
  }, [value])

  return (
    <div className="flex flex-col items-center justify-center text-center max-w-[min(900px,80vw)] mx-auto px-8">
      <p className="text-[clamp(40px,7vw,80px)] font-bold text-[var(--color-accent)] leading-[1] tracking-[-0.04em] mb-6">
        {displayValue}
      </p>
      <p className="text-[clamp(16px,2.2vw,24px)] text-[var(--color-text-secondary)] leading-snug max-w-[min(640px,70vw)] mb-5">
        {label}
      </p>
      {source && (
        <p className="text-[clamp(13px,1.4vw,16px)] text-[var(--color-text-muted)] italic tracking-wide">
          {source}
        </p>
      )}
    </div>
  )
}
