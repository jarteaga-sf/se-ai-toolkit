import { useState, useCallback } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import ProgressBar from './ProgressBar'
import AnimatedBackground from './AnimatedBackground'

export default function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false)
  const [presentationSlide, setPresentationSlide] = useState({ deckActive: true })

  const handleSlideChange = useCallback((info) => {
    setPresentationSlide(info)
  }, [])

  return (
    <>
      <AnimatedBackground />
      <Header />
      <ProgressBar />
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
        presentationSlide={presentationSlide}
      />
      <main
        className={`pt-[56px] transition-[margin] duration-300 ease-out ${
          collapsed ? 'md:ml-[52px]' : 'md:ml-[200px]'
        }`}
      >
        {typeof children === 'function' ? children({ onSlideChange: handleSlideChange }) : children}
      </main>
    </>
  )
}
