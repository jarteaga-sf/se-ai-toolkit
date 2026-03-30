import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ClaudeLogo, CursorLogo, SaleoLogo, MeshMeshLogo } from '../illustrations/ToolLogos'

const logos = {
  claude: ClaudeLogo,
  cursor: CursorLogo,
  saleo: SaleoLogo,
  meshmesh: MeshMeshLogo,
}

function parseBold(text) {
  const parts = text.split(/(\*\*.*?\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-[var(--color-heading)]">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return part
  })
}

export default function ToolIntroSlide({ toolId, title, subtitle, leadParagraph, fullscreen }) {
  const containerRef = useRef(null)
  const Logo = logos[toolId]

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const children = el.querySelectorAll('.tool-intro-item')
    gsap.fromTo(children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out', delay: 0.15 }
    )
  }, [toolId])

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center text-center max-w-[700px] mx-auto px-8">
      {Logo && (
        <div className="tool-intro-item mb-5">
          <Logo size={64} />
        </div>
      )}
      <h2 className="tool-intro-item text-[42px] font-bold text-[var(--color-heading)] tracking-[-0.02em] mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="tool-intro-item text-[20px] text-[var(--color-accent)] font-medium mb-6">
          {subtitle}
        </p>
      )}
      {leadParagraph && (
        <p className="tool-intro-item text-[18px] text-[var(--color-text-secondary)] leading-relaxed max-w-[580px]">
          {parseBold(leadParagraph)}
        </p>
      )}
    </div>
  )
}
