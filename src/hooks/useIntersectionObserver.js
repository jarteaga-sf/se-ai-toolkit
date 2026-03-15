import { useEffect, useRef, useState } from 'react'

export function useIntersectionObserver(options = {}) {
  const ref = useRef(null)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const optionsRef = useRef(options)
  const serialized = JSON.stringify(options)

  if (JSON.stringify(optionsRef.current) !== serialized) {
    optionsRef.current = options
  }

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true)
        }
      },
      { threshold: 0.2, ...optionsRef.current }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [hasIntersected, serialized])

  return { ref, isIntersecting, hasIntersected }
}

export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] || '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0.1 }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
