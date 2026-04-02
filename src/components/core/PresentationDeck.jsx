import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { createSlideRenderers } from '../slides'

const fullscreenRenderers = createSlideRenderers(true)

export default function PresentationDeck({ sections, onSlideChange, onNavReady }) {
  const allSlides = useMemo(() => sections.flatMap((section, sIdx) =>
    section.slides.map((slide) => ({
      slide,
      sectionLabel: section.tierLabel,
      sectionTitle: section.title,
      sectionId: section.id,
      sectionIndex: sIdx,
      tier: section.tier,
      exploreContent: section.exploreContent,
    }))
  ), [sections])

  const sectionStartMap = useMemo(() => {
    const map = {}
    let idx = 0
    sections.forEach((section) => {
      map[section.id] = idx
      idx += section.slides.length
    })
    return map
  }, [sections])

  const [current, setCurrent] = useState(0)
  const stageRef = useRef(null)
  const contentRef = useRef(null)
  const prevSlide = useRef(0)

  const next = useCallback(() => {
    setCurrent((c) => Math.min(c + 1, allSlides.length - 1))
  }, [allSlides.length])

  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), [])

  const goTo = useCallback((i) => setCurrent(i), [])

  const goToSection = useCallback((sectionId) => {
    const idx = sectionStartMap[sectionId]
    if (idx !== undefined) setCurrent(idx)
  }, [sectionStartMap])

  // Expose nav functions to parent via onNavReady
  useEffect(() => {
    if (onNavReady) {
      onNavReady({ next, prev, goTo, goToSection })
    }
  }, [onNavReady, next, prev, goTo, goToSection])

  // Notify parent of slide changes
  useEffect(() => {
    if (onSlideChange) {
      const item = allSlides[current]
      onSlideChange({
        index: current,
        total: allSlides.length,
        sectionId: item.sectionId,
        sectionIndex: item.sectionIndex,
        tier: item.tier,
        exploreContent: item.exploreContent,
      })
    }
  }, [current, allSlides, onSlideChange])

  // Track previous slide for direction
  useEffect(() => {
    prevSlide.current = current
  }, [current])

  // Auto-scale content to fit viewport
  useEffect(() => {
    const stage = stageRef.current
    const content = contentRef.current
    if (!stage || !content) return

    const recalc = () => {
      // Measure at scale(1) — use opacity:0 so child CSS animations aren't skipped
      content.style.opacity = '0'
      content.style.transform = 'scale(1)'
      const contentW = content.scrollWidth
      const contentH = content.scrollHeight
      const { width: stageW, height: stageH } = stage.getBoundingClientRect()
      const availW = stageW - 32
      const availH = stageH - 16
      const s = Math.min(availW / contentW, availH / contentH, 2.0)
      const clamped = Math.max(0.4, s)
      content.style.transform = `scale(${clamped})`
      content.style.opacity = ''
    }

    const observer = new ResizeObserver(recalc)
    observer.observe(stage)
    recalc()

    return () => observer.disconnect()
  }, [current])

  const currentItem = allSlides[current]

  // Determine background style based on slide layout
  const getSlideBackground = () => {
    const layout = currentItem.slide.layout
    if (layout === 'title') return 'bg-gradient-to-br from-[#001E5B] via-[#022AC0] to-[#066AFE]'
    if (layout === 'quote') return 'bg-[var(--color-surface)]'
    if (layout === 'statement') return 'bg-gradient-to-br from-[#001E5B] via-[#022AC0] to-[#066AFE]'
    if (layout === 'cinematic') return 'bg-gradient-to-br from-[#001E5B] via-[#022AC0] to-[#066AFE]'
    if (layout === 'takeaway') return 'bg-[var(--color-takeaway-bg)]'
    if (layout === 'bigStat') return 'bg-[var(--color-bg-white)]'
    if (layout === 'illustratedConcept') return 'bg-[var(--color-bg-white)]'
    // New layouts
    if (layout === 'tierTransition') return 'bg-gradient-to-br from-[#001E5B] via-[#022AC0] to-[#066AFE]'
    if (layout === 'toolIntro') return 'bg-[var(--color-bg-white)]'
    if (layout === 'toolContent') return 'bg-[var(--color-bg)]'
    if (layout === 'toolGettingStarted') return 'bg-[var(--color-bg)]'
    if (layout === 'habitCardsSlide') return 'bg-[var(--color-bg)]'
    if (layout === 'levelUpTopic') return 'bg-[var(--color-bg)]'
    if (layout === 'cheatSheetMatrix') return 'bg-[var(--color-bg-white)]'
    if (layout === 'decisionFlowSlide') return 'bg-[var(--color-bg-white)]'
    if (layout === 'contestCta') return 'bg-[var(--color-bg)]'
    return 'bg-[var(--color-bg)]'
  }

  const isDarkBg = ['title', 'statement', 'tierTransition', 'cinematic'].includes(currentItem.slide.layout)

  return (
    <div
      className={`relative w-full h-full flex flex-col pointer-events-none ${getSlideBackground()}`}
    >
      {/* Salesforce logo — part of flex flow so stageRef height is always correct.
          Hidden on title slide which renders its own branding. */}
      {currentItem.slide.layout !== 'title' ? (
        <div className="flex-shrink-0 h-16 px-10 flex items-center pointer-events-auto z-10">
          <img
            src="https://assets.meshmesh.io/system/salesforce-with-type-logo.svg"
            alt="Salesforce"
            className={`h-10 w-auto ${isDarkBg ? 'brightness-0 invert' : ''}`}
          />
        </div>
      ) : (
        <div className="flex-shrink-0 h-16" />
      )}

      {/* Slide content — scaled to fit the remaining space below the logo */}
      <div ref={stageRef} className="flex-1 flex items-center justify-center pointer-events-none">
        <div
          ref={contentRef}
          key={current}
          className="pointer-events-auto"
          style={{
            transformOrigin: 'center center',
            padding: '12px 20px',
          }}
        >
          <div className="slide-enter">
            {fullscreenRenderers[currentItem.slide.layout]?.(currentItem.slide, { isDarkBg })}
          </div>
        </div>
      </div>
    </div>
  )
}
