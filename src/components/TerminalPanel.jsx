import { useState, useEffect, useRef } from 'react'
import { Copy, Check, ChevronDown } from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

function TerminalLine({ step, visible }) {
  const baseClasses = 'transition-all duration-300'
  const visibilityClasses = visible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-1'

  const renderContent = () => {
    switch (step.type) {
      case 'command':
        return (
          <div className={`${baseClasses} ${visibilityClasses}`}>
            <span className="text-[var(--color-terminal-green)]">~/project $ </span>
            <span className="text-[var(--color-terminal-text)]">{step.content}</span>
          </div>
        )
      case 'output':
        return (
          <div className={`${baseClasses} ${visibilityClasses} text-[var(--color-terminal-text)]`}>
            {step.content}
          </div>
        )
      case 'claude-thinking':
        return (
          <div className={`${baseClasses} ${visibilityClasses} text-[var(--color-terminal-dim)] italic`}>
            {step.content}
          </div>
        )
      case 'claude-response':
        return (
          <div className={`${baseClasses} ${visibilityClasses} text-[var(--color-terminal-text)]`}>
            <span className="text-[var(--color-terminal-blue)]">Claude: </span>
            {step.content}
          </div>
        )
      case 'file-change':
        return (
          <div className={`${baseClasses} ${visibilityClasses}`}>
            {step.content.split('\n').map((line, i) => {
              if (line.startsWith('+'))
                return <div key={i} className="bg-[var(--color-diff-add)] text-[#4EC9B0]">{line}</div>
              if (line.startsWith('-'))
                return <div key={i} className="bg-[var(--color-diff-remove)] text-[#F44747]">{line}</div>
              return <div key={i} className="text-[var(--color-terminal-dim)]">{line}</div>
            })}
          </div>
        )
      case 'divider':
        return (
          <div className={`${baseClasses} ${visibilityClasses} text-[var(--color-terminal-dim)] my-1`}>
            {'─'.repeat(40)}
          </div>
        )
      default:
        return (
          <div className={`${baseClasses} ${visibilityClasses} text-[var(--color-terminal-text)]`}>
            {step.content}
          </div>
        )
    }
  }

  return <div className="leading-relaxed">{renderContent()}</div>
}

export default function TerminalPanel({ title, steps, expandable = false }) {
  const { ref, hasIntersected } = useIntersectionObserver()
  const [visibleLines, setVisibleLines] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const [copied, setCopied] = useState(false)
  const animatedRef = useRef(false)

  const displaySteps = expandable && !expanded ? steps.slice(0, 8) : steps
  const hasMore = expandable && steps.length > 8

  useEffect(() => {
    if (hasIntersected && !animatedRef.current) {
      animatedRef.current = true
      let count = 0
      const interval = setInterval(() => {
        count++
        setVisibleLines(count)
        if (count >= steps.length) clearInterval(interval)
      }, steps[count]?.delay || 80)
      return () => clearInterval(interval)
    }
  }, [hasIntersected, steps])

  const handleCopy = () => {
    const text = steps
      .map((s) => {
        if (s.type === 'command') return `$ ${s.content}`
        return s.content
      })
      .join('\n')
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div ref={ref} className="rounded-lg bg-[var(--color-terminal-bg)] border border-[#2D2D2D] overflow-hidden my-8 shadow-lg">
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#181818] border-b border-[#2D2D2D]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <span className="text-xs text-[var(--color-terminal-dim)] ml-2 font-[var(--font-mono)]">
            {title}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="p-1 rounded hover:bg-[#2D2D2D] transition-colors cursor-pointer"
        >
          {copied ? (
            <Check size={14} className="text-[var(--color-terminal-green)]" />
          ) : (
            <Copy size={14} className="text-[var(--color-terminal-dim)]" />
          )}
        </button>
      </div>
      <div className="px-4 py-3 font-[var(--font-mono)] text-[15px] space-y-0.5 min-h-[120px]">
        {displaySteps.map((step, i) => (
          <TerminalLine
            key={i}
            step={step}
            visible={i < visibleLines}
          />
        ))}
      </div>
      {hasMore && !expanded && (
        <button
          onClick={() => {
            setExpanded(true)
            setVisibleLines(steps.length)
          }}
          className="flex items-center gap-1 px-4 py-2 text-xs text-[var(--color-terminal-dim)] hover:text-[var(--color-terminal-text)] transition-colors w-full border-t border-[#2D2D2D] cursor-pointer"
        >
          <ChevronDown size={12} />
          Show full output ({steps.length - 8} more lines)
        </button>
      )}
    </div>
  )
}
