import { useEffect, useRef } from 'react'
import { ArrowDown, Search, CheckCircle, Sparkles, X } from 'lucide-react'
import gsap from 'gsap'

export function SpeedVisual() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const terminal = ref.current.querySelector('.speed-terminal')
    const arrow = ref.current.querySelector('.speed-arrow')
    const result = ref.current.querySelector('.speed-result')
    const bars = ref.current.querySelectorAll('.speed-bar')

    // Sequential entrance: terminal → arrow → result
    gsap.fromTo(terminal,
      { opacity: 0, y: -15 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', delay: 0.2 }
    )
    gsap.fromTo(arrow,
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)', delay: 0.5 }
    )
    gsap.fromTo(result,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', delay: 0.7 }
    )

    // Animate chart bars growing
    bars.forEach((bar, i) => {
      const targetH = bar.dataset.h
      gsap.fromTo(bar,
        { height: 0 },
        { height: targetH, duration: 0.5, ease: 'power2.out', delay: 0.9 + i * 0.1 }
      )
    })
  }, [])

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="speed-terminal w-[200px] rounded-lg overflow-hidden border border-[var(--color-border)] shadow-sm">
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
      <div className="speed-arrow">
        <ArrowDown size={14} className="text-[var(--color-accent)]" />
      </div>
      <div className="speed-result w-[200px] rounded-lg border border-[var(--color-accent)]/30 bg-[var(--color-bg-white)] shadow-sm p-2.5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-semibold text-[var(--color-text)]">Acme Dashboard</span>
          <CheckCircle size={10} className="text-green-500" />
        </div>
        <div className="flex gap-1.5">
          <div className="flex-1 h-[28px] rounded bg-[var(--color-accent)]/10 flex items-center justify-center">
            <div className="flex items-end gap-0.5">
              <div className="speed-bar w-[4px] rounded-sm bg-[var(--color-accent)]/40" data-h="8px" />
              <div className="speed-bar w-[4px] rounded-sm bg-[var(--color-accent)]/60" data-h="14px" />
              <div className="speed-bar w-[4px] rounded-sm bg-[var(--color-accent)]" data-h="10px" />
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
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const search = ref.current.querySelector('.cred-search')
    const arrow = ref.current.querySelector('.cred-arrow')
    const result = ref.current.querySelector('.cred-result')
    const rows = ref.current.querySelectorAll('.cred-row')

    gsap.fromTo(search,
      { opacity: 0, y: -15 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', delay: 0.2 }
    )
    gsap.fromTo(arrow,
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)', delay: 0.5 }
    )
    gsap.fromTo(result,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', delay: 0.7 }
    )

    // Data rows stagger in
    gsap.fromTo(rows,
      { opacity: 0, x: -10 },
      { opacity: 1, x: 0, duration: 0.3, stagger: 0.1, ease: 'power2.out', delay: 1.0 }
    )
  }, [])

  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <div className="cred-search w-[190px] rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-white)] shadow-sm p-2.5">
        <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-[var(--color-border-light)] border border-[var(--color-border)]">
          <Search size={10} className="text-[var(--color-text-muted)]" />
          <span className="text-[10px] text-[var(--color-text)]">Mimecast</span>
          <Sparkles size={10} className="text-[var(--color-accent)] ml-auto" />
        </div>
      </div>
      <div className="cred-arrow">
        <ArrowDown size={14} className="text-[var(--color-accent)]" />
      </div>
      <div className="cred-result w-[190px] rounded-lg border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/5 shadow-sm p-2.5">
        <span className="text-[10px] font-semibold text-[var(--color-text)]">Demo org ready</span>
        <div className="flex flex-col gap-1 mt-1.5">
          <div className="cred-row flex items-center justify-between">
            <span className="text-[9px] text-[var(--color-text-secondary)]">Support Cases</span>
            <span className="text-[9px] font-semibold text-[var(--color-accent)]">12</span>
          </div>
          <div className="cred-row flex items-center justify-between">
            <span className="text-[9px] text-[var(--color-text-secondary)]">Products</span>
            <span className="text-[9px] font-semibold text-[var(--color-accent)]">8</span>
          </div>
          <div className="cred-row flex items-center justify-between">
            <span className="text-[9px] text-[var(--color-text-secondary)]">Contacts</span>
            <span className="text-[9px] font-semibold text-[var(--color-accent)]">24</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function IndependenceVisual() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const oldWay = ref.current.querySelector('.indep-old')
    const xMark = ref.current.querySelector('.indep-x')
    const arrow = ref.current.querySelector('.indep-arrow')
    const newWay = ref.current.querySelector('.indep-new')
    const deployed = ref.current.querySelector('.indep-deployed')

    // Old way fades in with slight shake
    gsap.fromTo(oldWay,
      { opacity: 0 },
      { opacity: 0.45, duration: 0.4, delay: 0.2 }
    )

    // X mark slashes in
    gsap.fromTo(xMark,
      { opacity: 0, scale: 0, rotation: -90 },
      { opacity: 1, scale: 1, rotation: 0, duration: 0.4, ease: 'back.out(2)', delay: 0.6 }
    )

    gsap.fromTo(arrow,
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)', delay: 0.9 }
    )

    gsap.fromTo(newWay,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', delay: 1.1 }
    )

    // Deployed badge pops in
    gsap.fromTo(deployed,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)', delay: 1.5 }
    )
  }, [])

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="indep-old relative w-[160px] rounded-lg border border-[var(--color-border)] bg-[var(--color-border-light)] p-2.5">
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
        <X size={32} className="indep-x absolute inset-0 m-auto text-red-400/70" strokeWidth={2.5} />
      </div>
      <div className="indep-arrow">
        <ArrowDown size={14} className="text-[var(--color-accent)]" />
      </div>
      <div className="indep-new w-[160px] rounded-lg border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 p-2.5">
        <span className="text-[9px] font-semibold text-[var(--color-accent)] mb-1.5 block">Cursor</span>
        <div className="px-2 py-1.5 rounded bg-[var(--color-bg-white)] border border-[var(--color-border)] mb-2">
          <span className="text-[9px] text-[var(--color-text)]">"Add healthcare flow to my SDO"</span>
        </div>
        <div className="indep-deployed flex items-center gap-1">
          <CheckCircle size={9} className="text-green-500" />
          <span className="text-[9px] font-semibold text-green-600">Deployed</span>
        </div>
      </div>
    </div>
  )
}
