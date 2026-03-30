import { useState } from 'react'
import DecisionFlow from './DecisionFlow'
import { Sparkles } from 'lucide-react'

const tabs = [
  { id: 'when', label: 'When to Use Which' },
  { id: 'claude', label: 'Claude Code' },
  { id: 'cursor', label: 'Cursor' },
  { id: 'meshmesh', label: 'MeshMesh' },
  { id: 'saleo', label: 'Saleo' },
]

function ShortcutRow({ shortcut }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-[var(--color-bg-white)] rounded-xl border border-[var(--color-border)]/60">
      <kbd className="px-2.5 py-0.5 bg-[var(--color-surface)] border border-[var(--color-border)]/50 rounded-lg text-[13px] font-[var(--font-mono)] font-bold text-[var(--color-heading)] whitespace-nowrap">{shortcut.key}</kbd>
      <span className="text-[15px] text-[var(--color-text-secondary)]">{shortcut.action}</span>
    </div>
  )
}

function TipRow({ tip }) {
  return (
    <div className="flex items-start gap-3 px-4 py-3 bg-[var(--color-bg-white)] rounded-xl border border-[var(--color-border)]/60">
      <span className="font-bold text-[15px] text-[var(--color-heading)] whitespace-nowrap">{tip.label}</span>
      <span className="text-[15px] text-[var(--color-text-secondary)]">{tip.description}</span>
    </div>
  )
}

export default function QuickReference({ data }) {
  const [activeTab, setActiveTab] = useState('when')

  return (
    <div>
      <div className="flex bg-[var(--color-surface)] rounded-xl p-1 mb-6 flex-wrap gap-0.5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 text-[15px] px-3 py-2 rounded-lg font-bold transition-all cursor-pointer ${
              activeTab === tab.id
                ? 'bg-[var(--color-bg-white)] text-[var(--color-heading)] shadow-[var(--shadow-card)]'
                : 'text-[var(--color-text-muted)] hover:text-[var(--color-heading)]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'when' && (
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
      )}

      {activeTab === 'claude' && (
        <div className="space-y-8">
          <div>
            <h3 className="font-[var(--font-heading)] text-[20px] tracking-[-0.015em] mb-3">Commands</h3>
            <div className="rounded-xl overflow-hidden border border-[var(--color-border)]/60">
              <table className="w-full text-[15px]">
                <thead>
                  <tr className="bg-[var(--color-surface)]">
                    <th className="text-left px-4 py-2.5 font-bold text-[var(--color-heading)]">Command</th>
                    <th className="text-left px-4 py-2.5 font-bold text-[var(--color-heading)]">Description</th>
                    <th className="text-left px-4 py-2.5 font-bold text-[var(--color-heading)] hidden sm:table-cell">When to Use</th>
                  </tr>
                </thead>
                <tbody>
                  {data.commands.map((row, i) => (
                    <tr key={i} className={`border-t border-[var(--color-border)]/40 ${i % 2 === 1 ? 'bg-[var(--color-surface)]/50' : ''}`}>
                      <td className="px-4 py-2 font-[var(--font-mono)] text-[var(--color-accent)]">{row.command}</td>
                      <td className="px-4 py-2 text-[var(--color-text-secondary)]">{row.description}</td>
                      <td className="px-4 py-2 text-[var(--color-text-muted)] hidden sm:table-cell">{row.when}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="font-[var(--font-heading)] text-[20px] tracking-[-0.015em] mb-3">Shortcuts</h3>
            <div className="space-y-2">
              {data.shortcuts.map((s, i) => <ShortcutRow key={i} shortcut={s} />)}
            </div>
          </div>

          <div>
            <h3 className="font-[var(--font-heading)] text-[20px] tracking-[-0.015em] mb-3">Model Selection</h3>
            <div className="space-y-2">
              {data.models.map((m, i) => (
                <div key={i} className="flex items-start gap-3 px-4 py-3 bg-[var(--color-bg-white)] rounded-xl border border-[var(--color-border)]/60">
                  <span className="font-[var(--font-mono)] text-[15px] font-bold text-[var(--color-heading)] whitespace-nowrap">{m.model}</span>
                  <span className="text-[15px] text-[var(--color-text-secondary)]">{m.use}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-[var(--font-heading)] text-[20px] tracking-[-0.015em] mb-3">Tips</h3>
            <div className="space-y-2">
              {data.claudeCodeTips.map((tip, i) => <TipRow key={i} tip={tip} />)}
            </div>
          </div>

          <div>
            <h3 className="font-[var(--font-heading)] text-[20px] tracking-[-0.015em] mb-3">Key File Paths</h3>
            <div className="space-y-1.5">
              {data.paths.map((p, i) => (
                <div key={i} className="flex items-center gap-3 px-3 py-2">
                  <code className="text-[15px] font-[var(--font-mono)] bg-[var(--color-terminal-bg)] text-[var(--color-terminal-text)] px-2 py-0.5 rounded-lg">{p.path}</code>
                  <span className="text-[15px] text-[var(--color-text-muted)]">{p.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'cursor' && (
        <div className="space-y-8">
          <div>
            <h3 className="font-[var(--font-heading)] text-[20px] tracking-[-0.015em] mb-3">Shortcuts</h3>
            <div className="space-y-2">
              {data.cursorShortcuts.map((s, i) => <ShortcutRow key={i} shortcut={s} />)}
            </div>
          </div>

          <div>
            <h3 className="font-[var(--font-heading)] text-[20px] tracking-[-0.015em] mb-3">Tips</h3>
            <div className="space-y-2">
              {data.cursorTips.map((tip, i) => <TipRow key={i} tip={tip} />)}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'meshmesh' && (
        <div>
          <h3 className="font-[var(--font-heading)] text-[20px] tracking-[-0.015em] mb-3">Tips</h3>
          <div className="space-y-2">
            {data.meshmeshTips.map((tip, i) => <TipRow key={i} tip={tip} />)}
          </div>
        </div>
      )}

      {activeTab === 'saleo' && (
        <div>
          <h3 className="font-[var(--font-heading)] text-[20px] tracking-[-0.015em] mb-3">Tips</h3>
          <div className="space-y-2">
            {data.saleoTips.map((tip, i) => <TipRow key={i} tip={tip} />)}
          </div>
        </div>
      )}

      {/* Decision Flowchart */}
      <div className="mt-10 pt-8 border-t border-[var(--color-border)]/40">
        <DecisionFlow />
      </div>

      {/* Contest CTA */}
      {data.contest && (
        <div className="mt-10 rounded-2xl bg-gradient-to-br from-[#001E5B] via-[#022AC0] to-[#066AFE] p-6 md:p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles size={20} className="text-[var(--color-yellow)]" />
            <h3 className="text-[22px] md:text-[24px] font-bold text-white">{data.contest.title}</h3>
            <Sparkles size={20} className="text-[var(--color-yellow)]" />
          </div>
          <p className="text-[16px] text-[var(--color-cloud-light)] mb-5 max-w-[520px] mx-auto leading-relaxed">
            {data.contest.description}
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-accent)] text-white font-bold text-[15px] hover:bg-[var(--color-electric)] transition-colors cursor-pointer shadow-lg shadow-[var(--color-accent)]/25">
            {data.contest.cta}
          </button>
        </div>
      )}

      {/* Takeaway */}
      {data.takeaway && (
        <p className="mt-8 text-center text-[16px] text-[var(--color-text-muted)] font-medium italic">
          {data.takeaway}
        </p>
      )}
    </div>
  )
}
