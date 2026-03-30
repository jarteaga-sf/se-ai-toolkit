import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'
import gsap from 'gsap'
import { createSlideRenderers } from './SlideLayouts'

const fullscreenRenderers = createSlideRenderers(true)

export default function PresentationDeck({ sections, onSlideChange, scrollTargetId }) {
  const allSlides = sections.flatMap((section, sIdx) =>
    section.slides.map((slide) => ({
      slide,
      sectionLabel: section.title,
      sectionId: section.id,
      sectionIndex: sIdx,
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
  const [scrollLocked, setScrollLocked] = useState(true)
  const [scale, setScale] = useState(1)
  const [showHint, setShowHint] = useState(true)
  const deckRef = useRef(null)
  const stageRef = useRef(null)
  const contentRef = useRef(null)
  const hintRef = useRef(null)
  const isLastSlide = current === allSlides.length - 1

  // Hide keyboard hint after first navigation or 4 seconds
  useEffect(() => {
    if (current > 0) {
      setShowHint(false)
      return
    }
    const timer = setTimeout(() => setShowHint(false), 4000)
    return () => clearTimeout(timer)
  }, [current])

  const next = useCallback(() => {
    if (isLastSlide) {
      setScrollLocked(false)
      const target = document.getElementById(scrollTargetId)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      setCurrent((c) => Math.min(c + 1, allSlides.length - 1))
    }
  }, [isLastSlide, allSlides.length, scrollTargetId])

  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), [])

  const goTo = useCallback((i) => setCurrent(i), [])

  const goToSection = useCallback((sectionId) => {
    const idx = sectionStartMap.current[sectionId]
    if (idx !== undefined) {
      setCurrent(idx)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setScrollLocked(true)
    }
  }, [])

  useEffect(() => {
    if (onSlideChange) {
      const item = allSlides[current]
      onSlideChange({
        index: current,
        sectionId: item.sectionId,
        sectionIndex: item.sectionIndex,
        deckActive: scrollLocked,
        goToSection,
      })
    }
  }, [current, scrollLocked, goToSection])

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

  useEffect(() => {
    if (!scrollLocked) return

    const handler = (e) => {
      e.preventDefault()
    }

    window.addEventListener('wheel', handler, { passive: false })
    window.addEventListener('touchmove', handler, { passive: false })

    return () => {
      window.removeEventListener('wheel', handler)
      window.removeEventListener('touchmove', handler)
    }
  }, [scrollLocked])

  useEffect(() => {
    if (!scrollLocked) return

    const handler = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setScrollLocked(false)
      }
    }

    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [scrollLocked])

  useEffect(() => {
    if (scrollLocked) return

    const handler = () => {
      if (window.scrollY === 0) {
        setScrollLocked(true)
      }
    }

    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [scrollLocked])

  // GSAP entrance animation for new slides
  useEffect(() => {
    const content = contentRef.current
    if (!content) return

    gsap.fromTo(content,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
    )
  }, [current])

  useEffect(() => {
    const stage = stageRef.current
    const content = contentRef.current
    if (!stage || !content) return

    const recalc = () => {
      content.style.transform = 'scale(1)'
      const contentW = content.scrollWidth
      const contentH = content.scrollHeight
      const { width: stageW, height: stageH } = stage.getBoundingClientRect()
      const availW = stageW - 140
      const availH = stageH - 60
      const s = Math.min(availW / contentW, availH / contentH, 1.2)
      const clamped = Math.max(0.4, s)
      content.style.transform = `scale(${clamped})`
      setScale(clamped)
    }

    const observer = new ResizeObserver(recalc)
    observer.observe(stage)
    recalc()

    return () => observer.disconnect()
  }, [current])

  const sectionGroups = []
  let slideIdx = 0
  sections.forEach((section) => {
    sectionGroups.push({
      label: section.title,
      startIdx: slideIdx,
      count: section.slides.length,
    })
    slideIdx += section.slides.length
  })

  const currentItem = allSlides[current]

  // Determine background style based on slide layout
  const getSlideBackground = () => {
    const layout = currentItem.slide.layout
    if (layout === 'quote') {
      return 'bg-[var(--color-surface)]'
    }
    if (layout === 'statement') {
      return 'bg-gradient-to-br from-[var(--color-heading)] to-[#032D60]'
    }
    if (layout === 'takeaway') {
      return 'bg-[var(--color-takeaway-bg)]'
    }
    if (layout === 'illustratedConcept' || layout === 'statCallout') {
      return 'bg-[var(--color-bg-white)]'
    }
    if (layout === 'spectrumSplit') {
      return 'bg-[var(--color-bg-white)]'
    }
    return 'bg-[var(--color-bg)]'
  }

  const isDarkBg = currentItem.slide.layout === 'statement'

  return (
    <div
      ref={deckRef}
      className={`relative w-full flex flex-col transition-colors duration-500 ${getSlideBackground()}`}
      style={{ minHeight: 'calc(100vh - 56px)' }}
    >
      {/* Section label - top left */}
      {currentItem.sectionLabel && (
        <div className="absolute top-5 left-6 z-10">
          <span className={`text-[11px] font-bold uppercase tracking-[0.12em] ${
            isDarkBg ? 'text-[var(--color-cloud-light)]' : 'text-[var(--color-accent)]'
          }`}>
            {currentItem.sectionLabel}
          </span>
        </div>
      )}

      {/* Slide content -- scaled to fit */}
      <div ref={stageRef} className="flex-1 flex items-center justify-center">
        <div
          ref={contentRef}
          key={current}
          className="animate-in fade-in duration-300"
          style={{
            transformOrigin: 'center center',
            padding: '24px 48px',
          }}
        >
          {fullscreenRenderers[currentItem.slide.layout]?.(currentItem.slide, { isDarkBg })}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        disabled={current === 0}
        className={`absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border shadow-sm flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-15 disabled:cursor-default hover:shadow-md z-10 ${
          isDarkBg
            ? 'bg-white/10 border-white/20 hover:bg-white/20'
            : 'bg-[var(--color-bg-white)]/80 border-[var(--color-border)] hover:bg-[var(--color-bg-white)]'
        }`}
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} className={isDarkBg ? 'text-white/70' : 'text-[var(--color-text-secondary)]'} />
      </button>

      {isLastSlide ? (
        <button
          onClick={next}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 shadow-sm flex items-center justify-center transition-all duration-200 cursor-pointer hover:shadow-md hover:bg-[var(--color-accent)]/20 z-10 animate-bounce"
          aria-label="Continue to content"
        >
          <ChevronDown size={22} className="text-[var(--color-accent)]" />
        </button>
      ) : (
        <button
          onClick={next}
          className={`absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border shadow-sm flex items-center justify-center transition-all duration-200 cursor-pointer hover:shadow-md z-10 ${
            isDarkBg
              ? 'bg-white/10 border-white/20 hover:bg-white/20'
              : 'bg-[var(--color-bg-white)]/80 border-[var(--color-border)] hover:bg-[var(--color-bg-white)]'
          }`}
          aria-label="Next slide"
        >
          <ChevronRight size={22} className={isDarkBg ? 'text-white/70' : 'text-[var(--color-text-secondary)]'} />
        </button>
      )}

      {/* Keyboard navigation hint */}
      {showHint && current === 0 && (
        <div
          ref={hintRef}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-heading)]/80 backdrop-blur-sm shadow-lg transition-opacity duration-500"
        >
          <kbd className="px-1.5 py-0.5 rounded bg-white/20 text-[11px] font-mono text-white/90 font-bold">←</kbd>
          <kbd className="px-1.5 py-0.5 rounded bg-white/20 text-[11px] font-mono text-white/90 font-bold">→</kbd>
          <span className="text-[12px] text-white/80 font-medium">to navigate</span>
        </div>
      )}

      {/* Bottom bar: grouped dots + counter */}
      <div className="flex items-center justify-center gap-1 pb-5 pt-2">
        <div className="flex items-center gap-1">
          {sectionGroups.map((group, gIdx) => (
            <div key={gIdx} className="flex items-center gap-1">
              {gIdx > 0 && (
                <div className={`w-px h-3 mx-1.5 ${isDarkBg ? 'bg-white/20' : 'bg-[var(--color-border)]'}`} />
              )}
              {Array.from({ length: group.count }).map((_, i) => {
                const slideIndex = group.startIdx + i
                return (
                  <button
                    key={slideIndex}
                    onClick={() => goTo(slideIndex)}
                    className={`rounded-full transition-all duration-200 cursor-pointer ${
                      slideIndex === current
                        ? isDarkBg
                          ? 'w-6 h-2 bg-[var(--color-cloud)]'
                          : 'w-6 h-2 bg-[var(--color-accent)]'
                        : isDarkBg
                          ? 'w-2 h-2 bg-white/30 hover:bg-white/50'
                          : 'w-2 h-2 bg-[var(--color-border)] hover:bg-[var(--color-text-muted)]'
                    }`}
                    aria-label={`Go to slide ${slideIndex + 1}`}
                  />
                )
              })}
            </div>
          ))}
        </div>
        <span className={`text-[12px] font-bold ml-3 ${isDarkBg ? 'text-white/50' : 'text-[var(--color-text-muted)]'}`}>
          {current + 1} / {allSlides.length}
        </span>
      </div>
    </div>
  )
}
