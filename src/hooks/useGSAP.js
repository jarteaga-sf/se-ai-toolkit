import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Scroll-triggered fade-in animation for a single element.
 * Returns a ref to attach to the animated element.
 */
export function useScrollFadeIn({ y = 30, duration = 0.8, delay = 0, once = true } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    gsap.set(el, { y, opacity: 0 })

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once,
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
  }, [y, duration, delay, once])

  return ref
}

/**
 * Scroll-triggered stagger animation for a container's children.
 * Returns a ref to attach to the container element.
 */
export function useScrollStagger({ y = 24, stagger = 0.08, duration = 0.6, childSelector = ':scope > *', once = true } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const children = container.querySelectorAll(childSelector)
    if (!children.length) return

    gsap.set(children, { y, opacity: 0 })

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top 85%',
      once,
      onEnter: () => {
        gsap.to(children, {
          y: 0,
          opacity: 1,
          duration,
          stagger,
          ease: 'power2.out',
        })
      },
    })

    return () => trigger.kill()
  }, [y, stagger, duration, childSelector, once])

  return ref
}

/**
 * Animated counter that counts up from 0 to a target value.
 */
export function useCountUp(target, { duration = 1.5, delay = 0, suffix = '' } = {}) {
  const ref = useRef(null)
  const obj = useRef({ val: 0 })

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(obj.current, {
          val: target,
          duration,
          delay,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.round(obj.current.val) + suffix
          },
        })
      },
    })

    return () => trigger.kill()
  }, [target, duration, delay, suffix])

  return ref
}

/**
 * Parallax effect on scroll.
 */
export function useParallax({ speed = 0.15 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const trigger = gsap.to(el, {
      y: () => speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => trigger.scrollTrigger?.kill()
  }, [speed])

  return ref
}
