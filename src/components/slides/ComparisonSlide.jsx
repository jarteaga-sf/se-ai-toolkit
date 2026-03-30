import { PenLine, Wand2 } from 'lucide-react'
import * as LucideIcons from 'lucide-react'

export default function ComparisonSlide({ left, right, connector, fullscreen }) {
  const LeftIcon = LucideIcons[left.icon] || PenLine
  const RightIcon = LucideIcons[right.icon] || Wand2

  return (
    <div className="flex items-center justify-center gap-8 max-w-[800px] mx-auto px-8">
      {/* Left side */}
      <div className="flex-1 rounded-2xl border border-[var(--color-border)]/60 bg-[var(--color-bg-white)] p-6 text-center opacity-60">
        <div className="w-12 h-12 rounded-xl bg-[var(--color-border-light)] flex items-center justify-center mx-auto mb-4">
          <LeftIcon size={24} className="text-[var(--color-text-muted)]" />
        </div>
        <h3 className="text-[18px] font-bold text-[var(--color-heading)] mb-2">{left.label}</h3>
        <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed">{left.description}</p>
      </div>

      {/* Connector */}
      <span className="text-[32px] text-[var(--color-accent)] font-bold flex-shrink-0">{connector}</span>

      {/* Right side */}
      <div className="flex-1 rounded-2xl border-2 border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 p-6 text-center">
        <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
          <RightIcon size={24} className="text-[var(--color-accent)]" />
        </div>
        <h3 className="text-[18px] font-bold text-[var(--color-heading)] mb-2">{right.label}</h3>
        <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed">{right.description}</p>
      </div>
    </div>
  )
}
