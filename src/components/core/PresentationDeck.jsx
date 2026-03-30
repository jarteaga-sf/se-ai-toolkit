import { useState, useEffect, useCallback, useRef } from 'react'
import gsap from 'gsap'
import { createSlideRenderers } from '../slides'

const fullscreenRenderers = createSlideRenderers(true)

export default function PresentationDeck({ sections, onSlideChange, onNavReady }) {
  const allSlides = sections.flatMap((section, sIdx) =>
    section.slides.map((slide) => ({
      slide,
      sectionLabel: section.tierLabel,
      sectionTitle: section.title,
      sectionId: section.id,
      sectionIndex: sIdx,
      tier: section.tier,
      exploreContent: section.exploreContent,
    }))
  )

  const sectionStartMap = useRef({})
  if (Object.keys(sectionStartMap.current).length === 0) {
    let idx = 0
    sections.forEach((section) => {
      sectionStartMap.current[section.id] = idx
      idx += section.slides.length
    })
  }

  const [current, setCurrent] = useState(0)
  const [scale, setScale] = useState(1)
  const stageRef = useRef(null)
  const contentRef = useRef(null)
  const prevSlide = useRef(0)

  const next = useCallback(() => {
    setCurrent((c) => Math.min(c + 1, allSlides.length - 1))
  }, [allSlides.length])

  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), [])

  const goTo = useCallback((i) => setCurrent(i), [])

  const goToSection = useCallback((sectionId) => {
    const idx = sectionStartMap.current[sectionId]
    if (idx !== undefined) setCurrent(idx)
  }, [])

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
  }, [current])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        next()
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        prev()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, prev])

  // Make content visible instantly on slide change — individual components handle their own entrance animations
  useEffect(() => {
    const content = contentRef.current
    if (!content) return
    prevSlide.current = current
    // Show wrapper immediately — no wrapper-level fade to avoid double-animation with component animations
    gsap.set(content, { opacity: 1, x: 0 })
  }, [current])

  // Auto-scale content to fit viewport
  useEffect(() => {
    const stage = stageRef.current
    const content = contentRef.current
    if (!stage || !content) return

    const recalc = () => {
      // Measure at scale(1) without causing a visible flash — hide during measurement
      content.style.visibility = 'hidden'
      content.style.transform = 'scale(1)'
      const contentW = content.scrollWidth
      const contentH = content.scrollHeight
      const { width: stageW, height: stageH } = stage.getBoundingClientRect()
      const availW = stageW - 32
      const availH = stageH - 16
      const s = Math.min(availW / contentW, availH / contentH, 2.0)
      const clamped = Math.max(0.4, s)
      content.style.transform = `scale(${clamped})`
      content.style.visibility = ''
      setScale(clamped)
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
    if (layout === 'quote') return 'bg-[var(--color-surface)]'
    if (layout === 'statement') return 'bg-gradient-to-br from-[#001E5B] via-[#022AC0] to-[#066AFE]'
    if (layout === 'cinematic') return 'bg-gradient-to-br from-[#001E5B] via-[#022AC0] to-[#066AFE]'
    if (layout === 'takeaway') return 'bg-[var(--color-takeaway-bg)]'
    if (layout === 'bigStat') return 'bg-[var(--color-bg-white)]'
    if (layout === 'videoDemoSlide') return 'bg-[var(--color-bg-white)]'
    if (layout === 'illustratedConcept' || layout === 'statCallout') return 'bg-[var(--color-bg-white)]'
    if (layout === 'spectrumSplit') return 'bg-[var(--color-bg-white)]'
    // New layouts
    if (layout === 'tierTransition') return 'bg-gradient-to-br from-[#001E5B] via-[#022AC0] to-[#066AFE]'
    if (layout === 'toolIntro') return 'bg-[var(--color-bg-white)]'
    if (layout === 'toolContent') return 'bg-[var(--color-bg)]'
    if (layout === 'toolGettingStarted') return 'bg-[var(--color-bg)]'
    if (layout === 'habitCardsSlide') return 'bg-[var(--color-bg)]'
    if (layout === 'useCaseCards') return 'bg-[var(--color-bg)]'
    if (layout === 'levelUpTopic') return 'bg-[var(--color-bg)]'
    if (layout === 'cheatSheetMatrix') return 'bg-[var(--color-bg-white)]'
    if (layout === 'decisionFlowSlide') return 'bg-[var(--color-bg-white)]'
    if (layout === 'contestCta') return 'bg-[var(--color-bg)]'
    return 'bg-[var(--color-bg)]'
  }

  const isDarkBg = ['statement', 'tierTransition', 'cinematic'].includes(currentItem.slide.layout)

  return (
    <div
      className={`relative w-full h-full flex flex-col pointer-events-none ${getSlideBackground()}`}
    >
      {/* Salesforce logo + section label - top left */}
      <div className="absolute top-7 left-10 z-10 pointer-events-auto flex items-center gap-4">
        <img
          src="https://assets.meshmesh.io/system/salesforce-with-type-logo.svg"
          alt="Salesforce"
          className={`h-10 w-auto ${
            isDarkBg ? 'brightness-0 invert' : ''
          }`}
        />
      </div>

      {/* Slide content -- scaled to fit */}
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
          {fullscreenRenderers[currentItem.slide.layout]?.(currentItem.slide, { isDarkBg })}
        </div>
      </div>
    </div>
  )
}
