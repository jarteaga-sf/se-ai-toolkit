import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Wrapper that fades in + slides up when it scrolls into view.
 */
export function AnimateOnScroll({ children, className = '', y = 30, duration = 0.8, delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    gsap.set(el, { y, opacity: 0 })

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease: 'power2.out',
        })
      },
    })

    return () => trigger.kill()
  }, [y, duration, delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

/**
 * Staggers all direct children in on scroll.
 */
export function StaggerChildren({ children, className = '', y = 24, stagger = 0.08, duration = 0.6 }) {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const items = container.querySelectorAll(':scope > *')
    if (!items.length) return

    gsap.set(items, { y, opacity: 0 })

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(items, {
          y: 0,
          opacity: 1,
          duration,
          stagger,
          ease: 'power2.out',
        })
      },
    })

    return () => trigger.kill()
  }, [y, stagger, duration])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

/**
 * Typewriter text that types out character by character.
 */
export function TypewriterText({ text, className = '', speed = 30, startDelay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.textContent = ''

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        let i = 0
        const timer = setTimeout(() => {
          const interval = setInterval(() => {
            el.textContent = text.slice(0, i + 1)
            i++
            if (i >= text.length) clearInterval(interval)
          }, speed)
        }, startDelay)
        return () => clearTimeout(timer)
      },
    })

    return () => trigger.kill()
  }, [text, speed, startDelay])

  return <span ref={ref} className={className} />
}
