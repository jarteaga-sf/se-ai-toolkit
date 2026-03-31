import { useEffect, useRef } from 'react'
import { PenLine, Wand2, ArrowRight } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import gsap from 'gsap'

export default function ComparisonSlide({ left, right, connector, fullscreen }) {
  const LeftIcon = LucideIcons[left.icon] || PenLine
  const RightIcon = LucideIcons[right.icon] || Wand2
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const leftEl = el.querySelector('.comp-left')
    const connEl = el.querySelector('.comp-connector')
    const rightEl = el.querySelector('.comp-right')

    gsap.set(leftEl, { x: -40, opacity: 0 })
    gsap.set(connEl, { scale: 0, opacity: 0 })
    gsap.set(rightEl, { x: 40, opacity: 0 })

    gsap.to(leftEl, { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out', delay: 0.2 })
    gsap.to(rightEl, { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out', delay: 0.35 })
    gsap.to(connEl, { scale: 1, opacity: 1, duration: 0.35, ease: 'back.out(1.5)', delay: 0.5 })
  }, [left, right])

  return (
    <div ref={containerRef} className="flex items-center justify-center gap-6 max-w-[min(860px,85vw)] mx-auto px-8">
      {/* Left side — the "before" */}
      <div className="comp-left flex-1 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-white)] p-8 text-center shadow-[var(--shadow-card)]">
        <div className="w-14 h-14 rounded-2xl bg-[var(--color-border-light)] flex items-center justify-center mx-auto mb-5">
          <LeftIcon size={26} className="text-[var(--color-text-muted)]" strokeWidth={1.5} />
        </div>
        <h3 className="text-[clamp(16px,1.8vw,20px)] font-bold text-[var(--color-text-muted)] mb-2">{left.label}</h3>
        <p className="text-[clamp(13px,1.3vw,16px)] text-[var(--color-text-muted)] leading-relaxed">{left.description}</p>
      </div>

      {/* Connector — icon instead of text character */}
      <div className="comp-connector flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shadow-[0_4px_16px_rgba(1,118,211,0.3)]">
        <ArrowRight size={22} className="text-white" strokeWidth={2.5} />
      </div>

      {/* Right side — the "after", visually emphasized */}
      <div className="comp-right flex-1 rounded-2xl border-2 border-[var(--color-accent)]/40 bg-gradient-to-br from-[var(--color-accent)]/5 to-[var(--color-accent)]/10 p-8 text-center shadow-[var(--shadow-card)]">
        <div className="w-14 h-14 rounded-2xl bg-[var(--color-accent)]/15 flex items-center justify-center mx-auto mb-5">
          <RightIcon size={26} className="text-[var(--color-accent)]" strokeWidth={1.5} />
        </div>
        <h3 className="text-[clamp(16px,1.8vw,20px)] font-bold text-[var(--color-heading)] mb-2">{right.label}</h3>
        <p className="text-[clamp(13px,1.3vw,16px)] text-[var(--color-text-prose)] leading-relaxed">{right.description}</p>
      </div>
    </div>
  )
}
