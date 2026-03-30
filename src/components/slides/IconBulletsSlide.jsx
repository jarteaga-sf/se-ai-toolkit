import { useEffect, useRef } from 'react'
import * as LucideIcons from 'lucide-react'
import { ClaudeLogo, CursorLogo, SaleoLogo, MeshMeshLogo } from '../illustrations/ToolLogos'
import { SpeedVisual, CredibilityVisual, IndependenceVisual } from '../illustrations/SlideVisuals'
import gsap from 'gsap'

const visualMap = {
  speed: SpeedVisual,
  credibility: CredibilityVisual,
  independence: IndependenceVisual,
}

const logoMap = {
  saleo: SaleoLogo,
  meshmesh: MeshMeshLogo,
  cursor: CursorLogo,
  claude: ClaudeLogo,
}

export default function IconBulletsSlide({ title, bullets, fullscreen }) {
  const cols = bullets.length === 4 ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-3'
  const gridRef = useRef(null)

  useEffect(() => {
    if (!gridRef.current) return

    // Subtle floating animation on icon containers (looping — keep)
    const icons = gridRef.current.querySelectorAll('.icon-float')
    icons.forEach((icon, i) => {
      gsap.to(icon, {
        y: -4,
        duration: 1.8 + i * 0.3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: i * 0.2,
      })
    })

    // Subtle glow pulse on icon backgrounds (looping — keep)
    const iconBgs = gridRef.current.querySelectorAll('.icon-bg-pulse')
    iconBgs.forEach((bg, i) => {
      gsap.to(bg, {
        boxShadow: '0 0 16px rgba(0,176,255,0.15)',
        duration: 2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: i * 0.4,
      })
    })
  }, [])

  return (
    <div className="max-w-[1060px] mx-auto px-8">
      <h2 className="text-[38px] font-bold text-[var(--color-heading)] tracking-[-0.02em] text-center mb-10">
        {title}
      </h2>
      <div ref={gridRef} className={`grid ${cols} gap-6 items-stretch`}>
        {bullets.map((bullet, i) => {
          const Icon = bullet.icon ? LucideIcons[bullet.icon] : null
          const Visual = bullet.visual ? visualMap[bullet.visual] : null
          const LogoComp = bullet.logo ? logoMap[bullet.logo] : null

          return (
            <div
              key={i}
              className="flex flex-col items-center text-center rounded-2xl border border-[var(--color-border)]/60 bg-[var(--color-bg-white)] p-5 shadow-sm hover:shadow-md hover:border-[var(--color-accent)]/30 transition-all duration-300"
            >
              {/* Visual slot — fixed height ensures all cards align */}
              {Visual ? (
                <div className="icon-float h-[168px] w-full flex items-center justify-center overflow-hidden mb-4">
                  <Visual />
                </div>
              ) : LogoComp ? (
                <div className="icon-float h-[56px] flex items-center justify-center mb-4">
                  <LogoComp size={44} />
                </div>
              ) : Icon ? (
                <div className="icon-float h-[56px] flex items-center justify-center mb-4">
                  <div className="icon-bg-pulse w-11 h-11 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <Icon size={22} className="text-[var(--color-accent)]" />
                  </div>
                </div>
              ) : null}

              <h3 className="text-[18px] font-bold text-[var(--color-heading)] mb-2">
                {bullet.title}
              </h3>
              <p className="text-[16px] text-[var(--color-text-secondary)] leading-relaxed">
                {bullet.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
