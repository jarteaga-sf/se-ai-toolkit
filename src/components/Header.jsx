import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Header() {
  const headerRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Animate header background on scroll
  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    gsap.to(header, {
      backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
      duration: 0.3,
      ease: 'power2.out',
    })
  }, [scrolled])

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 h-[56px] flex items-center px-6 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--color-header-bg)]/95 shadow-lg'
          : 'bg-[var(--color-header-bg)] shadow-md'
      }`}
      style={{ backdropFilter: scrolled ? 'blur(20px)' : 'none' }}
    >
      <div className="flex items-center gap-3">
        <img
          src="https://assets.meshmesh.io/system/salesforce-with-type-logo.svg"
          alt="Salesforce"
          className="h-[22px] brightness-0 invert"
        />
        <div className="w-px h-5 bg-white/25" />
        <span className="text-[15px] font-bold text-white/90 tracking-tight">
          The SE AI Toolkit
        </span>
      </div>
    </header>
  )
}
