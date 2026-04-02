import { useState, useEffect, useCallback, useRef } from 'react'
import AnimatedBackground from './AnimatedBackground'
import PresentationDeck from './PresentationDeck'
import DockNav from './DockNav'
import ExploreDrawer from './ExploreDrawer'
import { sectionStartMap, navSections, totalSlides } from '@/content/slides'

export default function PresentationShell({ sections }) {
  const [slideInfo, setSlideInfo] = useState({
    index: 0,
    total: totalSlides,
    sectionId: null,
    tier: null,
    exploreContent: null,
  })
  const [drawerOpen, setDrawerOpen] = useState(false)
  const navRef = useRef(null)

  const handleSlideChange = useCallback((info) => {
    setSlideInfo(info)
    // Close drawer on slide change
    setDrawerOpen(false)
  }, [])

  const handleNavReady = useCallback((nav) => {
    navRef.current = nav
  }, [])

  const handleExplore = useCallback(() => {
    if (slideInfo.exploreContent) {
      setDrawerOpen(true)
    }
  }, [slideInfo.exploreContent])

  // Centralized keyboard handling to avoid conflicting global listeners.
  useEffect(() => {
    const isEditableTarget = (target) => {
      if (!target || !(target instanceof HTMLElement)) return false
      if (target.isContentEditable) return true
      const tag = target.tagName
      return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT'
    }

    const handler = (e) => {
      if (isEditableTarget(e.target)) return

      if (!drawerOpen && (e.key === 'ArrowRight' || e.key === 'ArrowDown')) {
        e.preventDefault()
        navRef.current?.next()
        return
      }
      if (!drawerOpen && (e.key === 'ArrowLeft' || e.key === 'ArrowUp')) {
        e.preventDefault()
        navRef.current?.prev()
        return
      }
      if (e.key === 'e' || e.key === 'E') {
        if (slideInfo.exploreContent && !drawerOpen) {
          e.preventDefault()
          setDrawerOpen(true)
        }
      }
      if (e.key === 'Escape' && drawerOpen) {
        e.preventDefault()
        setDrawerOpen(false)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [slideInfo.exploreContent, drawerOpen])

  const isDarkBg = slideInfo.tier === 'transition'

  return (
    <>
      {/* Full-viewport background + deck */}
      <div className="fixed inset-0 z-0 w-screen h-screen overflow-hidden bg-[var(--color-bg)] pointer-events-none">
        <AnimatedBackground isDark={isDarkBg} />

        {/* Main deck */}
        <div className="relative w-full h-full pointer-events-none">
          <PresentationDeck
            sections={sections}
            onSlideChange={handleSlideChange}
            onNavReady={handleNavReady}
          />
        </div>
      </div>

      {/* Bottom dock navigation — rendered outside the shell for clean z-stacking */}
      <DockNav
        current={slideInfo.index}
        total={slideInfo.total}
        sections={navSections}
        sectionStartMap={sectionStartMap}
        onPrev={() => navRef.current?.prev()}
        onNext={() => navRef.current?.next()}
        onGoToSection={(id) => navRef.current?.goToSection(id)}
        isDarkBg={isDarkBg}
        hasExploreContent={!!slideInfo.exploreContent}
        onExplore={handleExplore}
      />

      {/* Explore drawer for take-home mode */}
      {drawerOpen && slideInfo.exploreContent && (
        <ExploreDrawer
          content={slideInfo.exploreContent}
          onClose={() => setDrawerOpen(false)}
        />
      )}
    </>
  )
}
