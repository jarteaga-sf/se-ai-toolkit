import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import ProgressBar from './ProgressBar'

export default function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <>
      <Header />
      <ProgressBar />
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <main
        className={`pt-[56px] transition-[margin] duration-300 ease-out ${
          collapsed ? 'md:ml-[52px]' : 'md:ml-[200px]'
        }`}
      >
        {children}
      </main>
      {/* Vignette overlay — darkens edges to pull focus toward center content */}
      <div
        className="fixed inset-0 pointer-events-none z-30"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 55% 50%, transparent 0%, rgba(0,0,0,0.06) 100%)',
        }}
      />
    </>
  )
}
