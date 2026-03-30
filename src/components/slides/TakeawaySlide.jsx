import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function parseBold(text) {
  const parts = text.split(/(\*\*.*?\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-bold text-[var(--color-heading)]">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return part
  })
}

export default function TakeawaySlide({ text, fullscreen }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const bar = containerRef.current.querySelector('.accent-bar')
    const content = containerRef.current.querySelector('.takeaway-text')

    // Pre-hide immediately
    gsap.set(bar, { scaleY: 0, transformOrigin: 'top' })
    gsap.set(content, { opacity: 0, x: -20 })

    // Accent bar grows in from top
    gsap.to(bar,
      { scaleY: 1, duration: 0.5, ease: 'power2.out', delay: 0.1 }
    )

    // Text slides in from the left
    gsap.to(content,
      { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out', delay: 0.3 }
    )
  }, [text])

  return (
    <div className="flex items-center justify-center max-w-[880px] mx-auto px-8">
      <div ref={containerRef} className="relative">
        <div className="accent-bar absolute left-0 top-0 bottom-0 w-1.5 rounded-full bg-[var(--color-accent)]" />
        <p className="takeaway-text text-[32px] leading-[1.45] text-[var(--color-text-prose)] font-medium pl-10">
          {parseBold(text)}
        </p>
      </div>
    </div>
  )
}
