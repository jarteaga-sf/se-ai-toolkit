import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button onClick={handleCopy} className="p-1 rounded hover:bg-[var(--color-border-light)] transition-colors cursor-pointer">
      {copied ? <Check size={12} className="text-[var(--color-terminal-green)]" /> : <Copy size={12} className="text-[var(--color-text-muted)]" />}
    </button>
  )
}

export default function QuickReference({ data }) {
  return (
    <div className="space-y-8">
      {/* When to Use Which */}
      <div>
        <h3 className="font-[var(--font-heading)] text-[20px] tracking-[-0.015em] mb-3">When to Use Which</h3>
        <div className="rounded-lg overflow-hidden shadow-[var(--shadow-card)]">
          <table className="w-full text-[15px]">
            <thead>
              <tr className="bg-[var(--color-border-light)]">
                <th className="text-left px-4 py-2 font-semibold text-[var(--color-text-secondary)]">Scenario</th>
                <th className="text-left px-4 py-2 font-semibold text-[var(--color-text-secondary)] whitespace-nowrap">Reach for</th>
              </tr>
            </thead>
            <tbody>
              {data.toolMatrix.map((row, i) => (
                <tr key={i} className={`border-t border-[var(--color-border)] ${i % 2 === 1 ? 'bg-[var(--color-border-light)]/50' : ''}`}>
                  <td className="px-4 py-2 text-[var(--color-text-secondary)]">{row.scenario}</td>
                  <td className="px-4 py-2 font-medium text-[var(--color-accent)] whitespace-nowrap">{row.tool}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Claude Code Commands */}
      <div>
        <h3 className="font-[var(--font-heading)] text-[20px] tracking-[-0.015em] mb-3">Claude Code Commands</h3>
        <div className="rounded-lg overflow-hidden shadow-[var(--shadow-card)]">
          <table className="w-full text-[15px]">
            <thead>
              <tr className="bg-[var(--color-border-light)]">
                <th className="text-left px-4 py-2 font-semibold text-[var(--color-text-secondary)]">Command</th>
                <th className="text-left px-4 py-2 font-semibold text-[var(--color-text-secondary)]">Description</th>
                <th className="text-left px-4 py-2 font-semibold text-[var(--color-text-secondary)] hidden sm:table-cell">When to Use</th>
              </tr>
            </thead>
            <tbody>
              {data.commands.map((row, i) => (
                <tr key={i} className={`border-t border-[var(--color-border)] ${i % 2 === 1 ? 'bg-[var(--color-border-light)]/50' : ''}`}>
                  <td className="px-4 py-2 font-[var(--font-mono)] text-[var(--color-accent)]">{row.command}</td>
                  <td className="px-4 py-2 text-[var(--color-text-secondary)]">{row.description}</td>
                  <td className="px-4 py-2 text-[var(--color-text-muted)] hidden sm:table-cell">{row.when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Keyboard Shortcuts side by side */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <h3 className="font-[var(--font-heading)] text-[20px] tracking-[-0.015em] mb-3">Claude Code Shortcuts</h3>
          <div className="space-y-2">
            {data.shortcuts.map((s, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2 bg-[var(--color-bg-white)] rounded-lg shadow-[var(--shadow-card)]">
                <kbd className="px-2 py-0.5 bg-[var(--color-border-light)] rounded text-[13px] font-[var(--font-mono)] font-semibold text-[var(--color-text)] whitespace-nowrap">{s.key}</kbd>
                <span className="text-[15px] text-[var(--color-text-secondary)]">{s.action}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-[var(--font-heading)] text-[20px] tracking-[-0.015em] mb-3">Cursor Shortcuts</h3>
          <div className="space-y-2">
            {data.cursorShortcuts.map((s, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2 bg-[var(--color-bg-white)] rounded-lg shadow-[var(--shadow-card)]">
                <kbd className="px-2 py-0.5 bg-[var(--color-border-light)] rounded text-[13px] font-[var(--font-mono)] font-semibold text-[var(--color-text)] whitespace-nowrap">{s.key}</kbd>
                <span className="text-[15px] text-[var(--color-text-secondary)]">{s.action}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Model Selection */}
      <div>
        <h3 className="font-[var(--font-heading)] text-[20px] tracking-[-0.015em] mb-3">Claude Model Selection</h3>
        <div className="space-y-2">
          {data.models.map((m, i) => (
            <div key={i} className="flex items-start gap-3 px-4 py-3 bg-[var(--color-bg-white)] rounded-lg shadow-[var(--shadow-card)]">
              <span className="font-[var(--font-mono)] text-[15px] font-semibold text-[var(--color-text)] whitespace-nowrap">{m.model}</span>
              <span className="text-[15px] text-[var(--color-text-secondary)]">{m.use}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Key File Paths */}
      <div>
        <h3 className="font-[var(--font-heading)] text-[20px] tracking-[-0.015em] mb-3">Key File Paths</h3>
        <div className="space-y-1.5">
          {data.paths.map((p, i) => (
            <div key={i} className="flex items-center gap-3 px-3 py-2">
              <code className="text-[15px] font-[var(--font-mono)] bg-[var(--color-terminal-bg)] text-[var(--color-terminal-text)] px-2 py-0.5 rounded">{p.path}</code>
              <span className="text-[15px] text-[var(--color-text-muted)]">{p.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
