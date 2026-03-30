import { useEffect, useRef } from 'react'
import gsap from 'gsap'

/**
 * Subtle floating gradient orbs + sparkle stars for page background.
 * GPU-composited, purely decorative.
 */
export default function AnimatedBackground() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const orbs = container.querySelectorAll('.bg-orb')
    const sparkles = container.querySelectorAll('.bg-sparkle')

    // Float orbs with slow, looping animations
    orbs.forEach((orb, i) => {
      gsap.to(orb, {
        y: `+=${20 + i * 10}`,
        x: `+=${10 + i * 5}`,
        duration: 6 + i * 2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })
    })

    // Gentle sparkle pulse
    sparkles.forEach((sparkle, i) => {
      gsap.to(sparkle, {
        opacity: 0.15,
        scale: 0.8,
        duration: 2 + i * 0.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: i * 0.3,
      })
    })

    return () => {
      gsap.killTweensOf(orbs)
      gsap.killTweensOf(sparkles)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Gradient orbs */}
      <div
        className="bg-orb absolute w-[400px] h-[400px] rounded-full opacity-[0.08] will-change-transform"
        style={{
          background: 'radial-gradient(circle, var(--color-cloud) 0%, transparent 70%)',
          top: '10%',
          right: '-5%',
        }}
      />
      <div
        className="bg-orb absolute w-[300px] h-[300px] rounded-full opacity-[0.06] will-change-transform"
        style={{
          background: 'radial-gradient(circle, var(--color-violet-light) 0%, transparent 70%)',
          top: '50%',
          left: '-3%',
        }}
      />
      <div
        className="bg-orb absolute w-[350px] h-[350px] rounded-full opacity-[0.05] will-change-transform"
        style={{
          background: 'radial-gradient(circle, var(--color-electric) 0%, transparent 70%)',
          bottom: '15%',
          right: '10%',
        }}
      />

      {/* Sparkle stars */}
      <div
        className="bg-sparkle absolute text-[var(--color-yellow)] opacity-30 text-[18px] will-change-transform"
        style={{ top: '20%', left: '15%' }}
      >
        {'\u2726'}
      </div>
      <div
        className="bg-sparkle absolute text-[var(--color-yellow)] opacity-25 text-[14px] will-change-transform"
        style={{ top: '35%', right: '20%' }}
      >
        {'\u2726'}
      </div>
      <div
        className="bg-sparkle absolute text-[var(--color-yellow)] opacity-20 text-[12px] will-change-transform"
        style={{ bottom: '30%', left: '25%' }}
      >
        {'\u2726'}
      </div>
    </div>
  )
}
