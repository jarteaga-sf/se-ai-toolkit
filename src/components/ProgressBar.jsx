import { useEffect, useState } from 'react'

export default function ProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(Math.min(scrollPercent, 100))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-[56px] left-0 right-0 z-50 h-[3px] bg-[var(--color-cloud-90)]">
      <div
        className="h-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-electric)] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
