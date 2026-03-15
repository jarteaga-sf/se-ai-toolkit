export default function KeyboardReference({ keyboardRef }) {
  return (
    <div className="space-y-6 my-8">
      <div>
        <h4 className="font-[var(--font-heading)] text-[18px] mb-2 text-[var(--color-text)]">Shortcuts</h4>
        <div className="space-y-2">
          {keyboardRef.shortcuts.map((s, i) => (
            <div key={i} className="flex items-center gap-2 px-3 py-2 bg-[var(--color-bg-white)] rounded-lg shadow-[var(--shadow-card)]">
              <kbd className="px-2 py-0.5 bg-[var(--color-border-light)] rounded text-[13px] font-[var(--font-mono)] font-semibold text-[var(--color-text)] whitespace-nowrap">{s.key}</kbd>
              <span className="text-[15px] text-[var(--color-text-secondary)]">{s.action}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-[var(--font-heading)] text-[18px] mb-2 text-[var(--color-text)]">@ Context References</h4>
        <div className="space-y-2">
          {keyboardRef.contextKeys.map((s, i) => (
            <div key={i} className="flex items-center gap-2 px-3 py-2 bg-[var(--color-bg-white)] rounded-lg shadow-[var(--shadow-card)]">
              <kbd className="px-2 py-0.5 bg-[var(--color-border-light)] rounded text-[13px] font-[var(--font-mono)] font-semibold text-[var(--color-text)] whitespace-nowrap">{s.key}</kbd>
              <span className="text-[15px] text-[var(--color-text-secondary)]">{s.action}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
