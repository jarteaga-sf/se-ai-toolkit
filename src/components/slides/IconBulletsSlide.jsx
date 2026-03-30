import * as LucideIcons from 'lucide-react'
import { ClaudeLogo, CursorLogo, SaleoLogo, MeshMeshLogo } from '../illustrations/ToolLogos'
import { SpeedVisual, CredibilityVisual, IndependenceVisual } from '../illustrations/SlideVisuals'

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

  return (
    <div className="max-w-[1060px] mx-auto px-8">
      <h2 className="text-[38px] font-bold text-[var(--color-heading)] tracking-[-0.02em] text-center mb-10">
        {title}
      </h2>
      <div className={`grid ${cols} gap-6 items-stretch`}>
        {bullets.map((bullet, i) => {
          const Icon = bullet.icon ? LucideIcons[bullet.icon] : null
          const Visual = bullet.visual ? visualMap[bullet.visual] : null
          const LogoComp = bullet.logo ? logoMap[bullet.logo] : null

          return (
            <div
              key={i}
              className="flex flex-col items-center text-center rounded-2xl border border-[var(--color-border)]/60 bg-[var(--color-bg-white)] p-5 shadow-sm"
            >
              {/* Visual slot — fixed height ensures all cards align */}
              {Visual ? (
                <div className="h-[168px] w-full flex items-center justify-center overflow-hidden mb-4">
                  <Visual />
                </div>
              ) : LogoComp ? (
                <div className="h-[56px] flex items-center justify-center mb-4">
                  <LogoComp size={44} />
                </div>
              ) : Icon ? (
                <div className="h-[56px] flex items-center justify-center mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
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
