import { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react'
import { ClaudeLogo, CursorLogo, SaleoLogo, MeshMeshLogo } from './ToolLogos'

const toolLogos = {
  saleo: SaleoLogo,
  meshmesh: MeshMeshLogo,
  cursor: CursorLogo,
  claude: ClaudeLogo,
}

export default function DockNav({
  current,
  total,
  sections,
  sectionStartMap,
  onPrev,
  onNext,
  onGoToSection,
  isDarkBg,
  hasExploreContent,
  onExplore,
}) {
  const [visible, setVisible] = useState(true)
  const [hoveredSection, setHoveredSection] = useState(null)
  const hideTimer = useRef(null)
  const dockRef = useRef(null)

  // Auto-hide after 3s of inactivity
  const resetHideTimer = useCallback(() => {
    setVisible(true)
    clearTimeout(hideTimer.current)
    hideTimer.current = setTimeout(() => setVisible(false), 3000)
  }, [])

  // Show on first/last slide always
  useEffect(() => {
    if (current === 0 || current === total - 1) {
      setVisible(true)
      clearTimeout(hideTimer.current)
    } else {
      resetHideTimer()
    }
  }, [current, total, resetHideTimer])

  // Show on mouse near bottom
  useEffect(() => {
    const handleMouse = (e) => {
      if (e.clientY > window.innerHeight - 80) {
        setVisible(true)
        clearTimeout(hideTimer.current)
      } else if (e.clientY < window.innerHeight - 120) {
        resetHideTimer()
      }
    }
    window.addEventListener('mousemove', handleMouse, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouse)
      clearTimeout(hideTimer.current)
    }
  }, [resetHideTimer])

  // Show on keyboard nav
  useEffect(() => {
    const handler = () => resetHideTimer()
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [resetHideTimer])

  // Group sections by tier for divider rendering
  const tiers = []
  let currentTier = null
  sections.forEach((section) => {
    if (section.tier !== currentTier) {
      tiers.push({ tier: section.tier, sections: [] })
      currentTier = section.tier
    }
    tiers[tiers.length - 1].sections.push(section)
  })

  // Determine which section is active
  const getActiveSection = () => {
    let activeId = null
    for (const section of sections) {
      const start = sectionStartMap[section.id]
      if (start !== undefined && current >= start) {
        activeId = section.id
      }
    }
    return activeId
  }

  const activeSectionId = getActiveSection()

  return (
    <div
      ref={dockRef}
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className={`flex items-center gap-1.5 px-3 py-2 rounded-2xl border shadow-lg backdrop-blur-xl ${
        isDarkBg
          ? 'bg-white/10 border-white/15'
          : 'bg-[var(--color-heading)]/75 border-[var(--color-heading)]/30'
      }`}>
        {/* Prev button */}
        <button
          onClick={onPrev}
          disabled={current === 0}
          className="p-1.5 rounded-lg transition-colors cursor-pointer disabled:opacity-20 disabled:cursor-default hover:bg-white/15"
          aria-label="Previous slide"
        >
          <ChevronLeft size={16} className="text-white/80" />
        </button>

        {/* Section dots grouped by tier */}
        <div className="flex items-center gap-0.5 px-1">
          {tiers.map((tierGroup, tIdx) => (
            <div key={tIdx} className="flex items-center gap-0.5">
              {tIdx > 0 && (
                <div className="w-px h-3.5 mx-1 bg-white/20" />
              )}
              {tierGroup.sections.map((section) => {
                const isActive = section.id === activeSectionId
                const Logo = toolLogos[section.icon]
                return (
                  <div
                    key={section.id}
                    className="relative"
                    onMouseEnter={() => setHoveredSection(section.id)}
                    onMouseLeave={() => setHoveredSection(null)}
                  >
                    <button
                      onClick={() => onGoToSection(section.id)}
                      className={`rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center ${
                        isActive
                          ? 'w-7 h-3 bg-[var(--color-accent)]'
                          : 'w-3 h-3 bg-white/25 hover:bg-white/50'
                      }`}
                      aria-label={`Go to ${section.title}`}
                    >
                      {Logo && isActive && (
                        <Logo size={10} />
                      )}
                    </button>
                    {/* Tooltip */}
                    {hoveredSection === section.id && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-lg bg-[var(--color-heading)] text-white text-[11px] font-bold whitespace-nowrap shadow-lg pointer-events-none">
                        {section.title}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[var(--color-heading)]" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={onNext}
          disabled={current === total - 1}
          className="p-1.5 rounded-lg transition-colors cursor-pointer disabled:opacity-20 disabled:cursor-default hover:bg-white/15"
          aria-label="Next slide"
        >
          <ChevronRight size={16} className="text-white/80" />
        </button>

        {/* Divider */}
        <div className="w-px h-4 bg-white/20 mx-0.5" />

        {/* Slide counter */}
        <span className="text-[11px] font-bold text-white/50 tabular-nums px-1 min-w-[40px] text-center">
          {current + 1} / {total}
        </span>

        {/* Explore button (if content available) */}
        {hasExploreContent && (
          <>
            <div className="w-px h-4 bg-white/20 mx-0.5" />
            <button
              onClick={onExplore}
              className="p-1.5 rounded-lg transition-colors cursor-pointer hover:bg-white/15"
              aria-label="Explore section"
              title="Explore (E)"
            >
              <BookOpen size={14} className="text-white/70" />
            </button>
          </>
        )}
      </div>
    </div>
  )
}
