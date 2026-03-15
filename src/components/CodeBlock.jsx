import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export default function CodeBlock({ children, language = '' }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const text = typeof children === 'string' ? children : children?.toString() || ''
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group rounded-lg bg-[var(--color-terminal-bg)] border border-[#2D2D2D] overflow-hidden my-4">
      {language && (
        <div className="px-4 py-1.5 text-xs text-[var(--color-terminal-dim)] border-b border-[#2D2D2D]">
          {language}
        </div>
      )}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity bg-[#2D2D2D] hover:bg-[#3D3D3D] cursor-pointer"
      >
        {copied ? (
          <Check size={14} className="text-[var(--color-terminal-green)]" />
        ) : (
          <Copy size={14} className="text-[var(--color-terminal-dim)]" />
        )}
      </button>
      <pre className="px-4 py-3 text-sm font-[var(--font-mono)] text-[var(--color-terminal-text)] overflow-x-auto leading-relaxed">
        <code>{children}</code>
      </pre>
    </div>
  )
}
