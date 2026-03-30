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
  const barRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    if (barRef.current) {
      gsap.set(barRef.current, { scaleY: 0, transformOrigin: 'top' })
      gsap.to(barRef.current, { scaleY: 1, duration: 0.45, ease: 'power2.out', delay: 0.2 })
    }
    if (textRef.current) {
      gsap.set(textRef.current, { opacity: 0 })
      gsap.to(textRef.current, { opacity: 1, duration: 0.5, delay: 0.5 })
    }
  }, [text])

  return (
    <div className="flex items-center justify-center max-w-[880px] mx-auto px-8">
      <div className="relative">
        <div ref={barRef} className="absolute left-0 top-0 bottom-0 w-1.5 rounded-full bg-[var(--color-accent)]" />
        <p ref={textRef} className="text-[32px] leading-[1.45] text-[var(--color-text-prose)] font-medium pl-10">
          {parseBold(text)}
        </p>
      </div>
    </div>
  )
}
