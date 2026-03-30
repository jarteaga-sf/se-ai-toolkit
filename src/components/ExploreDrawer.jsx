import { useState, useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import gsap from 'gsap'
import TerminalPanel from './TerminalPanel'
import FeatureCards from './FeatureCards'
import StepFlow from './StepFlow'
import HabitCards from './HabitCards'
import QuoteCallout from './QuoteCallout'
import DecisionFlow from './DecisionFlow'

function RichText({ text }) {
  const parts = text.split(/(\*\*.*?\*\*|`[^`]+`)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-semibold text-[var(--color-text)]">{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i} className="font-[var(--font-mono)] text-[0.9em] bg-[var(--color-border-light)] px-1.5 py-0.5 rounded">{part.slice(1, -1)}</code>
    }
    return part
  })
}

function Prose({ paragraphs }) {
  if (!paragraphs?.length) return null
  return (
    <div className="space-y-5 text-[var(--color-text-prose)] leading-[1.7]">
      {paragraphs.map((p, i) => (
        <p key={i} className={i === 0 ? 'text-[18px]' : 'text-[17px]'}><RichText text={p} /></p>
      ))}
    </div>
  )
}

function TabContent({ content }) {
  return (
    <>
      <Prose paragraphs={content.prose} />
      {content.quote && <QuoteCallout quote={content.quote} />}
      {content.terminal && (
        <TerminalPanel
          title={content.terminal.title}
          steps={content.terminal.steps}
          expandable={content.terminal.expandable}
        />
      )}
      {content.features && <FeatureCards features={content.features} />}
      {content.stepFlow && <StepFlow stepFlow={content.stepFlow} />}
      {content.stepFlowSecondary && <StepFlow stepFlow={content.stepFlowSecondary} />}
      {content.habitCards && <HabitCards cards={content.habitCards} />}
      {content.takeaway && (
        <div className="my-8 rounded-xl bg-[var(--color-takeaway-bg)] border border-[var(--color-accent)]/20 px-6 py-5">
          <p className="text-[16px] text-[var(--color-heading)] font-medium leading-relaxed">
            <RichText text={content.takeaway} />
          </p>
          <p className="mt-2 text-[12px] uppercase tracking-[0.08em] text-[var(--color-accent)] font-bold">Key Takeaway</p>
        </div>
      )}
    </>
  )
}

function ToolExploreContent({ data }) {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div>
      {/* Tab bar */}
      <div className="flex bg-[var(--color-surface)] rounded-xl p-1 mb-6 gap-0.5">
        {data.tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`flex-1 text-[15px] px-3 py-2 rounded-lg font-bold transition-all cursor-pointer ${
              activeTab === i
                ? 'bg-[var(--color-bg-white)] text-[var(--color-heading)] shadow-[var(--shadow-card)]'
                : 'text-[var(--color-text-muted)] hover:text-[var(--color-heading)]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <TabContent content={data.tabs[activeTab].content} />
    </div>
  )
}

function QuickRefExploreContent({ data }) {
  return (
    <div className="space-y-8">
      {/* Tool Matrix */}
      <div>
        <h3 className="font-[var(--font-heading)] text-[20px] tracking-[-0.015em] mb-3">When to Use Which</h3>
        <div className="rounded-xl overflow-hidden border border-[var(--color-border)]/60">
          <table className="w-full text-[15px]">
            <thead>
              <tr className="bg-[var(--color-surface)]">
                <th className="text-left px-4 py-2.5 font-bold text-[var(--color-heading)]">Scenario</th>
                <th className="text-left px-4 py-2.5 font-bold text-[var(--color-heading)] whitespace-nowrap">Reach for</th>
              </tr>
            </thead>
            <tbody>
              {data.toolMatrix.map((row, i) => (
                <tr key={i} className={`border-t border-[var(--color-border)]/40 ${i % 2 === 1 ? 'bg-[var(--color-surface)]/50' : ''}`}>
                  <td className="px-4 py-2 text-[var(--color-text-secondary)]">{row.scenario}</td>
                  <td className="px-4 py-2 font-bold text-[var(--color-accent)] whitespace-nowrap">{row.tool}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Decision Flow */}
      <DecisionFlow />

      {/* Takeaway */}
      {data.takeaway && (
        <p className="text-center text-[16px] text-[var(--color-text-muted)] font-medium italic">
          {data.takeaway}
        </p>
      )}
    </div>
  )
}

export default function ExploreDrawer({ content, onClose }) {
  const drawerRef = useRef(null)
  const backdropRef = useRef(null)

  useEffect(() => {
    // Animate in
    if (backdropRef.current) {
      gsap.fromTo(backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      )
    }
    if (drawerRef.current) {
      gsap.fromTo(drawerRef.current,
        { x: '100%' },
        { x: '0%', duration: 0.4, ease: 'power3.out' }
      )
    }
  }, [])

  const handleClose = () => {
    // Animate out then call onClose
    if (backdropRef.current) {
      gsap.to(backdropRef.current, { opacity: 0, duration: 0.25 })
    }
    if (drawerRef.current) {
      gsap.to(drawerRef.current, {
        x: '100%',
        duration: 0.3,
        ease: 'power2.in',
        onComplete: onClose,
      })
    } else {
      onClose()
    }
  }

  // Escape key
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <div
        ref={backdropRef}
        onClick={handleClose}
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
      />

      {/* Drawer panel */}
      <div
        ref={drawerRef}
        className="absolute right-0 top-0 h-full w-[75vw] max-w-[800px] bg-[var(--color-bg-white)] shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)]/50">
          <h2 className="text-[20px] font-bold text-[var(--color-heading)]">
            {content.data.title || 'Explore'}
          </h2>
          <button
            onClick={handleClose}
            className="p-2 rounded-lg hover:bg-[var(--color-surface)] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X size={20} className="text-[var(--color-text-muted)]" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {content.type === 'tool' && <ToolExploreContent data={content.data} />}
          {content.type === 'quickRef' && <QuickRefExploreContent data={content.data} />}
        </div>
      </div>
    </div>
  )
}
