import { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react'
import { ClaudeLogo, CursorLogo, SaleoLogo, MeshMeshLogo } from '../illustrations/ToolLogos'

const toolLogos = {
  saleo: SaleoLogo,
  meshmesh: MeshMeshLogo,
  cursor: CursorLogo,
  claude: ClaudeLogo,
}

const tierDisplayNames = {
  'big-picture': 'Big Picture',
  'explore': 'Explore',
  'deep-dives': 'Deep Dives',
  'keep-going': 'Keep Going',
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

  const resetHideTimer = useCallback(() => {
    setVisible(true)
    clearTimeout(hideTimer.current)
    hideTimer.current = setTimeout(() => setVisible(false), 3000)
  }, [])

  useEffect(() => {
    if (current === 0 || current === total - 1) {
      setVisible(true)
      clearTimeout(hideTimer.current)
    } else {
      resetHideTimer()
    }
  }, [current, total, resetHideTimer])

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

  useEffect(() => {
    const handler = () => resetHideTimer()
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [resetHideTimer])

  // Section state helpers
  const isSectionCompleted = (section) => {
    const start = sectionStartMap[section.id]
    if (start === undefined) return false
    return current >= start + section.slides.length
  }

  const isSectionUpcoming = (section) => {
    const start = sectionStartMap[section.id]
    return start !== undefined && current < start
  }

  // Group sections by tier
  const tiers = []
  let currentTier = null
  sections.forEach((section) => {
    if (section.tier !== currentTier) {
      tiers.push({ tier: section.tier, sections: [] })
      currentTier = section.tier
    }
    tiers[tiers.length - 1].sections.push(section)
  })

  // Active section
  const getActiveSection = () => {
    let activeId = null
    for (const section of sections) {
      const start = sectionStartMap[section.id]
      if (start !== undefined && current >= start) activeId = section.id
    }
    return activeId
  }

  const activeSectionId = getActiveSection()
  const activeSectionTitle = sections.find((s) => s.id === activeSectionId)?.title

  // Next section after active
  const activeSectionIdx = sections.findIndex((s) => s.id === activeSectionId)
  const nextSection = activeSectionIdx >= 0 ? sections[activeSectionIdx + 1] : null
  const isNearSectionEnd = (() => {
    const activeSection = sections.find((s) => s.id === activeSectionId)
    if (!activeSection) return false
    const start = sectionStartMap[activeSectionId]
    const end = start + activeSection.slides.length
    return current >= end - 2
  })()

  return (
    <div
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className={`flex items-center gap-3 px-4 py-3 rounded-2xl border shadow-lg backdrop-blur-xl ${
        isDarkBg
          ? 'bg-white/10 border-white/15'
          : 'bg-[var(--color-heading)]/75 border-[var(--color-heading)]/30'
      }`}>

        {/* Prev */}
        <button
          onClick={onPrev}
          disabled={current === 0}
          className="p-1.5 rounded-lg transition-colors cursor-pointer disabled:opacity-20 disabled:cursor-default hover:bg-white/15"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} className="text-white/80" />
        </button>

        {/* Tier groups with labels above dots */}
        <div className="flex items-center gap-0.5 px-1">
          {tiers.map((tierGroup, tIdx) => {
            const tierName = tierDisplayNames[tierGroup.tier] || tierGroup.tier
            const tierIsActive = tierGroup.sections.some((s) => s.id === activeSectionId)
            const tierIsCompleted = tierGroup.sections.every((s) => isSectionCompleted(s))
            const tierIsUpcoming = tierGroup.sections.every((s) => isSectionUpcoming(s))

            return (
              <div key={tIdx} className="flex items-center gap-0.5">
                {tIdx > 0 && (
                  <div className="w-px h-10 mx-2.5 bg-white/15" />
                )}
                <div className="flex flex-col items-center gap-1.5">

                  {/* Tier label — always visible, brightness reflects state */}
                  <span className={`text-[10px] font-bold uppercase tracking-[0.12em] whitespace-nowrap transition-all duration-300 ${
                    tierIsActive
                      ? 'text-white/70'
                      : tierIsCompleted
                      ? 'text-white/40'
                      : 'text-white/18'
                  }`}>
                    {tierName}
                  </span>

                  {/* Section dots */}
                  <div className="flex items-center gap-1">
                    {tierGroup.sections.map((section) => {
                      const isActive = section.id === activeSectionId
                      const isCompleted = isSectionCompleted(section)
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
                            className={`rounded-full transition-all duration-250 cursor-pointer flex items-center justify-center ${
                              isActive
                                ? 'w-9 h-4 bg-[var(--color-accent)]'
                                : isCompleted
                                ? 'w-4 h-4 bg-white/60 hover:bg-white/80'
                                : 'w-4 h-4 bg-white/18 hover:bg-white/35'
                            }`}
                            aria-label={`Go to ${section.title}`}
                          >
                            {Logo && isActive && <Logo size={12} />}
                          </button>

                          {/* Tooltip on hover */}
                          {hoveredSection === section.id && (
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-[var(--color-heading)] text-white text-[13px] font-bold whitespace-nowrap shadow-lg pointer-events-none">
                              {isCompleted ? '✓ ' : ''}{section.title}
                              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[var(--color-heading)]" />
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>

                </div>
              </div>
            )
          })}
        </div>

        {/* Next */}
        <button
          onClick={onNext}
          disabled={current === total - 1}
          className="p-1.5 rounded-lg transition-colors cursor-pointer disabled:opacity-20 disabled:cursor-default hover:bg-white/15"
          aria-label="Next slide"
        >
          <ChevronRight size={20} className="text-white/80" />
        </button>

        <div className="w-px h-6 bg-white/15 mx-0.5" />

        {/* Section context — shows current + upcoming when near a boundary */}
        <div className="flex items-center gap-1.5 px-1">
          {activeSectionTitle && (
            <span className="text-[13px] font-bold text-white/55 max-w-[100px] truncate">
              {activeSectionTitle}
            </span>
          )}
          {isNearSectionEnd && nextSection && (
            <>
              <span className="text-[12px] text-white/25">→</span>
              <span className="text-[13px] text-white/30 max-w-[85px] truncate">
                {nextSection.title}
              </span>
            </>
          )}
        </div>

        <div className="w-px h-6 bg-white/15 mx-0.5" />

        {/* Slide counter */}
        <span className="text-[13px] font-bold text-white/45 tabular-nums min-w-[42px] text-center">
          {current + 1}/{total}
        </span>

        {/* Explore drawer button */}
        {hasExploreContent && (
          <>
            <div className="w-px h-6 bg-white/15 mx-0.5" />
            <button
              onClick={onExplore}
              className="p-1.5 rounded-lg transition-colors cursor-pointer hover:bg-white/15"
              aria-label="Explore section"
              title="Explore (E)"
            >
              <BookOpen size={18} className="text-white/60" />
            </button>
          </>
        )}
      </div>
    </div>
  )
}
