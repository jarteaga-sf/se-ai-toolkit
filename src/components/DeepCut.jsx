import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function DeepCut({ title, children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="mt-8 rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-deepcut-bg)]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-3.5 text-left cursor-pointer"
      >
        <span className="text-[15px] font-semibold text-[var(--color-text-secondary)] tracking-[-0.01em]">
          Deep Cut: {title}
        </span>
        <ChevronDown
          size={16}
          className={`text-[var(--color-text-muted)] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 text-[15px] text-[var(--color-text-secondary)] leading-[1.65]">
          {children}
        </div>
      )}
    </div>
  )
}
