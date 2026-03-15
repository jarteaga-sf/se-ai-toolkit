import { Menu, X, PanelLeftClose, PanelLeft } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { useActiveSection } from '@/hooks/useIntersectionObserver'

const tiers = [
  {
    label: 'Start Here',
    sections: [
      { id: 'why-ai-tools', title: 'Why This Matters' },
      { id: 'tools-at-a-glance', title: 'The 3 Tools' },
      { id: 'when-to-use-which', title: 'When to Use Which' },
    ],
  },
  {
    label: 'Build & Code',
    sections: [
      { id: 'claude-code-overview', title: 'Claude Code' },
      { id: 'claude-code-setup', title: 'Getting Started' },
      { id: 'claude-code-workflows', title: 'Claude Code Workflows' },
      { id: 'cursor-overview', title: 'Cursor' },
    ],
  },
  {
    label: 'Demo & Present',
    sections: [
      { id: 'cursor-workflows', title: 'Cursor Workflows' },
      { id: 'saleo-overview', title: 'Saleo' },
      { id: 'saleo-workflows', title: 'Building Better Demos' },
    ],
  },
  {
    label: 'Go Deeper',
    sections: [
      { id: 'combining-tools', title: 'Using Them Together' },
      { id: 'best-practices', title: 'What Works, What Doesn\'t' },
      { id: 'quick-reference', title: 'Cheat Sheet' },
    ],
  },
]

const allSectionIds = tiers.flatMap((t) => t.sections.map((s) => s.id))

export { tiers, allSectionIds }

export default function Sidebar({ collapsed = false, onToggle }) {
  const [open, setOpen] = useState(false)
  const [scrollFaded, setScrollFaded] = useState(false)
  const [hovered, setHovered] = useState(false)
  const activeId = useActiveSection(allSectionIds)
  const scrollTimer = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollFaded(true)
      clearTimeout(scrollTimer.current)
      scrollTimer.current = setTimeout(() => setScrollFaded(false), 1200)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimer.current)
    }
  }, [])

  const handleClick = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setOpen(false)
    }
  }

  const sidebarOpacity = scrollFaded && !hovered && !collapsed ? 'opacity-10' : 'opacity-100'

  const nav = (
    <nav className="py-4 px-3">
      {tiers.map((tier) => (
        <div key={tier.label} className="mb-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-muted)] px-2 mb-1.5">
            {tier.label}
          </p>
          <ul className="space-y-0.5">
            {tier.sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => handleClick(section.id)}
                  className={`w-full text-left text-[13px] px-2 py-1.5 rounded transition-colors cursor-pointer ${
                    activeId === section.id
                      ? 'text-[var(--color-accent)] bg-[var(--color-accent)]/8 border-l-2 border-[var(--color-accent)] pl-3 font-medium'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-heading)] hover:bg-[var(--color-border-light)]'
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`hidden md:flex fixed left-0 top-[56px] h-[calc(100vh-56px)] bg-[var(--color-bg-sidebar)] border-r border-[var(--color-border)] overflow-y-auto z-40 transition-all duration-500 ease-out flex-col ${
          collapsed ? 'w-[52px]' : 'w-[200px]'
        } ${sidebarOpacity}`}
      >
        {!collapsed && nav}
        <button
          onClick={onToggle}
          className={`p-2 rounded-md hover:bg-[var(--color-border-light)] transition-colors cursor-pointer text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] ${
            collapsed ? 'mx-auto mt-3' : 'mx-3 mb-4 mt-auto self-start'
          }`}
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <PanelLeft size={18} /> : <PanelLeftClose size={18} />}
        </button>
      </aside>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-[68px] left-3 z-50 p-2 rounded-lg bg-[var(--color-bg-white)] border border-[var(--color-border)] shadow-sm cursor-pointer"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Mobile drawer */}
      {open && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-black/20 z-40"
            onClick={() => setOpen(false)}
          />
          <aside className="md:hidden fixed left-0 top-0 w-[280px] h-full bg-[var(--color-bg-white)] border-r border-[var(--color-border)] overflow-y-auto z-50 shadow-xl">
            {nav}
          </aside>
        </>
      )}
    </>
  )
}
