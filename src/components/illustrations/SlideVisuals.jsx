import { ArrowDown, Search, CheckCircle, Sparkles, X } from 'lucide-react'

export function SpeedVisual() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-[200px] rounded-lg overflow-hidden border border-[var(--color-border)] shadow-sm">
        <div className="bg-[#1E1E1E] px-3 py-1.5 flex items-center gap-1.5">
          <div className="w-[7px] h-[7px] rounded-full bg-red-400/70" />
          <div className="w-[7px] h-[7px] rounded-full bg-yellow-400/70" />
          <div className="w-[7px] h-[7px] rounded-full bg-green-400/70" />
        </div>
        <div className="bg-[#1E1E1E] px-3 pb-2.5">
          <p className="text-[10px] font-mono text-[#9CA3AF]">$ cursor</p>
          <p className="text-[10px] font-mono text-[#E5E7EB] mt-0.5">"Build an LWC dashboard for Acme"</p>
        </div>
      </div>
      <div>
        <ArrowDown size={14} className="text-[var(--color-accent)]" />
      </div>
      <div className="w-[200px] rounded-lg border border-[var(--color-accent)]/30 bg-[var(--color-bg-white)] shadow-sm p-2.5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-semibold text-[var(--color-text)]">Acme Dashboard</span>
          <CheckCircle size={10} className="text-green-500" />
        </div>
        <div className="flex gap-1.5">
          <div className="flex-1 h-[28px] rounded bg-[var(--color-accent)]/10 flex items-center justify-center">
            <div className="flex items-end gap-0.5">
              <div className="w-[4px] rounded-sm bg-[var(--color-accent)]/40" style={{ height: '8px' }} />
              <div className="w-[4px] rounded-sm bg-[var(--color-accent)]/60" style={{ height: '14px' }} />
              <div className="w-[4px] rounded-sm bg-[var(--color-accent)]" style={{ height: '10px' }} />
            </div>
          </div>
          <div className="flex-1 h-[28px] rounded bg-[var(--color-accent)]/10 flex items-center justify-center">
            <span className="text-[9px] font-semibold text-[var(--color-accent)]">$1.2M</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CredibilityVisual() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-[190px] rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-white)] shadow-sm p-2.5">
        <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-[var(--color-border-light)] border border-[var(--color-border)]">
          <Search size={10} className="text-[var(--color-text-muted)]" />
          <span className="text-[10px] text-[var(--color-text)]">Mimecast</span>
          <Sparkles size={10} className="text-[var(--color-accent)] ml-auto" />
        </div>
      </div>
      <div>
        <ArrowDown size={14} className="text-[var(--color-accent)]" />
      </div>
      <div className="w-[190px] rounded-lg border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/5 shadow-sm p-2.5">
        <span className="text-[10px] font-semibold text-[var(--color-text)]">Demo org ready</span>
        <div className="flex flex-col gap-1 mt-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-[var(--color-text-secondary)]">Support Cases</span>
            <span className="text-[9px] font-semibold text-[var(--color-accent)]">12</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-[var(--color-text-secondary)]">Products</span>
            <span className="text-[9px] font-semibold text-[var(--color-accent)]">8</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-[var(--color-text-secondary)]">Contacts</span>
            <span className="text-[9px] font-semibold text-[var(--color-accent)]">24</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function IndependenceVisual() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-[160px] rounded-lg border border-[var(--color-border)] bg-[var(--color-border-light)] p-2.5 opacity-45">
        <span className="text-[9px] font-semibold text-[var(--color-text-muted)] mb-1.5 block">SDO Setup</span>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <div className="w-[6px] h-[6px] rounded-full border border-[var(--color-text-muted)]/40" />
            <span className="text-[8px] text-[var(--color-text-muted)]">Connect SFDX</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-[6px] h-[6px] rounded-full border border-[var(--color-text-muted)]/40" />
            <span className="text-[8px] text-[var(--color-text-muted)]">Install Brix</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-[6px] h-[6px] rounded-full border border-[var(--color-text-muted)]/40" />
            <span className="text-[8px] text-[var(--color-text-muted)]">Wire flows</span>
          </div>
        </div>
        <X size={32} className="absolute inset-0 m-auto text-red-400/70" strokeWidth={2.5} />
      </div>
      <div>
        <ArrowDown size={14} className="text-[var(--color-accent)]" />
      </div>
      <div className="w-[160px] rounded-lg border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 p-2.5">
        <span className="text-[9px] font-semibold text-[var(--color-accent)] mb-1.5 block">Cursor</span>
        <div className="px-2 py-1.5 rounded bg-[var(--color-bg-white)] border border-[var(--color-border)] mb-2">
          <span className="text-[9px] text-[var(--color-text)]">"Add healthcare flow to my SDO"</span>
        </div>
        <div className="flex items-center gap-1">
          <CheckCircle size={9} className="text-green-500" />
          <span className="text-[9px] font-semibold text-green-600">Deployed</span>
        </div>
      </div>
    </div>
  )
}
