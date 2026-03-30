export default function CheatSheetSlide({ toolMatrix, title, fullscreen }) {
  return (
    <div className="max-w-[700px] mx-auto px-8 w-full">
      <h2 className="text-[32px] font-bold text-[var(--color-heading)] tracking-[-0.02em] text-center mb-8">
        {title}
      </h2>
      <div className="rounded-xl overflow-hidden border border-[var(--color-border)]/60 shadow-sm">
        <table className="w-full text-[16px]">
          <thead>
            <tr className="bg-[var(--color-surface)]">
              <th className="text-left px-5 py-3 font-bold text-[var(--color-heading)]">Scenario</th>
              <th className="text-left px-5 py-3 font-bold text-[var(--color-heading)] whitespace-nowrap">Reach for</th>
            </tr>
          </thead>
          <tbody>
            {toolMatrix.map((row, i) => (
              <tr
                key={i}
                className={`border-t border-[var(--color-border)]/40 ${
                  i % 2 === 1 ? 'bg-[var(--color-surface)]/50' : ''
                }`}
              >
                <td className="px-5 py-3 text-[var(--color-text-secondary)]">{row.scenario}</td>
                <td className="px-5 py-3 font-bold text-[var(--color-accent)] whitespace-nowrap">{row.tool}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
