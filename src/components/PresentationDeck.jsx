import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'
import { createSlideRenderers } from './SlideLayouts'

const fullscreenRenderers = createSlideRenderers(true)

export default function PresentationDeck({ sections, onSlideChange, scrollTargetId }) {
  // Flatten all section slides (no hero)
  const allSlides = sections.flatMap((section, sIdx) =>
    section.slides.map((slide) => ({
      slide,
      sectionLabel: section.title,
      sectionId: section.id,
      sectionIndex: sIdx,
    }))
  )

  // Build a map of sectionId -> first slide index for that section
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
  const deckRef = useRef(null)
  const stageRef = useRef(null)
  const contentRef = useRef(null)
  const isLastSlide = current === allSlides.length - 1

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

  // Report current slide to parent for sidebar highlighting
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

  // Global keyboard navigation
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

  // Scroll lock
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

  // Unlock deck when programmatic scroll (e.g. sidebar click) moves past it
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

  // Re-engage scroll lock when user scrolls back to top
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

  // Scale slide content to fit available space
  useEffect(() => {
    const stage = stageRef.current
    const content = contentRef.current
    if (!stage || !content) return

    const recalc = () => {
      // Temporarily remove scale to measure natural content size
      content.style.transform = 'scale(1)'
      const contentW = content.scrollWidth
      const contentH = content.scrollHeight
      const { width: stageW, height: stageH } = stage.getBoundingClientRect()
      // Generous margins: 120px for arrows + padding on sides, 60px vertical
      const availW = stageW - 140
      const availH = stageH - 60
      const s = Math.min(availW / contentW, availH / contentH, 1.2)
      const clamped = Math.max(0.4, s)
      content.style.transform = `scale(${clamped})`
      setScale(clamped)
    }

    // Recalc on stage resize
    const observer = new ResizeObserver(recalc)
    observer.observe(stage)

    // Also recalc when slide changes (content size may differ)
    recalc()

    return () => observer.disconnect()
  }, [current])

  // Compute section boundaries for dot grouping
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

  return (
    <div
      ref={deckRef}
      className="relative w-full bg-[var(--color-bg)] flex flex-col"
      style={{ minHeight: 'calc(100vh - 56px)' }}
    >
      {/* Section label - top left */}
      {currentItem.sectionLabel && (
        <div className="absolute top-5 left-6 z-10">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
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
          {fullscreenRenderers[currentItem.slide.layout]?.(currentItem.slide)}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        disabled={current === 0}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[var(--color-bg-white)]/80 border border-[var(--color-border)] shadow-sm flex items-center justify-center transition-opacity duration-200 cursor-pointer disabled:opacity-15 disabled:cursor-default hover:shadow-md hover:bg-[var(--color-bg-white)] z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} className="text-[var(--color-text-secondary)]" />
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
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[var(--color-bg-white)]/80 border border-[var(--color-border)] shadow-sm flex items-center justify-center transition-opacity duration-200 cursor-pointer hover:shadow-md hover:bg-[var(--color-bg-white)] z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={22} className="text-[var(--color-text-secondary)]" />
        </button>
      )}

      {/* Bottom bar: grouped dots + counter */}
      <div className="flex items-center justify-center gap-1 pb-5 pt-2">
        <div className="flex items-center gap-1">
          {sectionGroups.map((group, gIdx) => (
            <div key={gIdx} className="flex items-center gap-1">
              {gIdx > 0 && (
                <div className="w-px h-3 bg-[var(--color-border)] mx-1.5" />
              )}
              {Array.from({ length: group.count }).map((_, i) => {
                const slideIndex = group.startIdx + i
                return (
                  <button
                    key={slideIndex}
                    onClick={() => goTo(slideIndex)}
                    className={`rounded-full transition-all duration-200 cursor-pointer ${
                      slideIndex === current
                        ? 'w-6 h-2 bg-[var(--color-accent)]'
                        : 'w-2 h-2 bg-[var(--color-border)] hover:bg-[var(--color-text-muted)]'
                    }`}
                    aria-label={`Go to slide ${slideIndex + 1}`}
                  />
                )
              })}
            </div>
          ))}
        </div>
        <span className="text-[12px] text-[var(--color-text-muted)] font-medium ml-3">
          {current + 1} / {allSlides.length}
        </span>
      </div>
    </div>
  )
}
