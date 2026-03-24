import { Zap, Search, MessageSquare, PenLine, Film, Wand2, Bot, Unlock, FileText, Terminal, Download, Shield, Puzzle, LogIn, FolderPlus, CheckCircle, Globe, ArrowRight, ArrowDown, X, Sparkles } from 'lucide-react'
import ToolCards from './ToolCards'

export const iconMap = { Zap, Search, MessageSquare, PenLine, Film, Wand2, Bot, Unlock, FileText, Terminal, Download, Shield, Puzzle, LogIn, FolderPlus, CheckCircle, Globe }

// --- Mini UI visuals for the "What this unlocks" slide ---

function SpeedVisual() {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* Mini terminal prompt */}
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
      <ArrowDown size={14} className="text-[var(--color-accent)]" />
      {/* Mini component preview */}
      <div className="w-[200px] rounded-lg border border-[var(--color-accent)]/30 bg-[var(--color-bg-white)] shadow-sm p-2.5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-semibold text-[var(--color-text)]">Acme Dashboard</span>
          <CheckCircle size={10} className="text-green-500" />
        </div>
        <div className="flex gap-1.5">
          <div className="flex-1 h-[28px] rounded bg-[var(--color-accent)]/10 flex items-center justify-center">
            <div className="flex items-end gap-0.5">
              <div className="w-[4px] h-[8px] rounded-sm bg-[var(--color-accent)]/40" />
              <div className="w-[4px] h-[14px] rounded-sm bg-[var(--color-accent)]/60" />
              <div className="w-[4px] h-[10px] rounded-sm bg-[var(--color-accent)]" />
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

function CredibilityVisual() {
  return (
    <div className="flex flex-col items-center gap-2">
      {/* Prospect input */}
      <div className="w-[190px] rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-white)] shadow-sm p-2.5">
        <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-[var(--color-border-light)] border border-[var(--color-border)]">
          <Search size={10} className="text-[var(--color-text-muted)]" />
          <span className="text-[10px] text-[var(--color-text)]">Mimecast</span>
          <Sparkles size={10} className="text-[var(--color-accent)] ml-auto" />
        </div>
      </div>
      <ArrowDown size={14} className="text-[var(--color-accent)]" />
      {/* Generated org data */}
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

function IndependenceVisual() {
  return (
    <div className="flex items-center gap-3">
      {/* Old way: manual SDO customization */}
      <div className="flex flex-col items-center gap-1.5">
        <div className="relative w-[90px] rounded-lg border border-[var(--color-border)] bg-[var(--color-border-light)] p-2 opacity-45">
          <span className="text-[8px] font-semibold text-[var(--color-text-muted)] mb-1 block">SDO Setup</span>
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
        <span className="text-[9px] font-semibold text-[var(--color-text-muted)]">Days of config</span>
      </div>
      <ArrowRight size={16} className="text-[var(--color-accent)]" />
      {/* New way: prompt it */}
      <div className="flex flex-col items-center gap-1.5">
        <div className="rounded-lg border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 p-2.5">
          <span className="text-[8px] font-semibold text-[var(--color-accent)] mb-1.5 block">Cursor</span>
          <div className="px-2 py-1.5 rounded bg-[var(--color-bg-white)] border border-[var(--color-border)] mb-2">
            <span className="text-[9px] text-[var(--color-text)] whitespace-nowrap">"Add healthcare flow to my SDO"</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle size={9} className="text-green-500" />
            <span className="text-[9px] font-semibold text-green-600">Deployed</span>
          </div>
        </div>
        <span className="text-[9px] font-semibold text-[var(--color-accent)]">One prompt</span>
      </div>
    </div>
  )
}

export const visualMap = {
  speed: SpeedVisual,
  credibility: CredibilityVisual,
  independence: IndependenceVisual,
}

export function QuoteSlide({ quote, attribution, context, fullscreen }) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-6 h-full">
      {context && (
        <p className={`text-[var(--color-text-secondary)] mb-6 max-w-[520px] ${
          fullscreen ? 'text-[20px] md:text-[22px] max-w-[700px]' : 'text-[16px] md:text-[17px]'
        }`}>{context}</p>
      )}
      <blockquote className={`leading-[1.15] tracking-[-0.02em] text-[var(--color-heading)] font-semibold ${
        fullscreen ? 'text-[42px] md:text-[56px] max-w-[800px]' : 'text-[32px] md:text-[42px] max-w-[620px]'
      }`}>
        "{quote}"
      </blockquote>
      {attribution && (
        <p className={`mt-6 text-[var(--color-text-muted)] font-medium max-w-[480px] ${
          fullscreen ? 'text-[18px] md:text-[20px] max-w-[600px]' : 'text-[15px] md:text-[16px]'
        }`}>{attribution}</p>
      )}
    </div>
  )
}

export function ComparisonSlide({ left, right, connector, fullscreen }) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-6">
      <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
        <div className="flex flex-col items-center text-center">
          <div className={`rounded-2xl bg-[var(--color-border-light)] flex items-center justify-center mb-4 ${
            fullscreen ? 'w-24 h-24' : 'w-18 h-18'
          }`}>
            {left.icon && (() => {
              const Icon = iconMap[left.icon]
              return Icon ? <Icon size={fullscreen ? 40 : 32} className="text-[var(--color-text-muted)]" /> : null
            })()}
          </div>
          <p className={`font-semibold text-[var(--color-text-muted)] line-through decoration-[var(--color-border)] decoration-2 ${
            fullscreen ? 'text-[28px] md:text-[32px]' : 'text-[22px] md:text-[24px]'
          }`}>{left.label}</p>
          <p className={`text-[var(--color-text-muted)] mt-1.5 ${
            fullscreen ? 'text-[18px] md:text-[20px] max-w-[280px]' : 'text-[15px] md:text-[16px] max-w-[220px]'
          }`}>{left.description}</p>
        </div>
        <div className={`text-[var(--color-accent)] font-light ${fullscreen ? 'text-[42px]' : 'text-[32px]'}`}>{connector || '\u2192'}</div>
        <div className="flex flex-col items-center text-center">
          <div className={`rounded-2xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-4 ${
            fullscreen ? 'w-24 h-24' : 'w-18 h-18'
          }`}>
            {right.icon && (() => {
              const Icon = iconMap[right.icon]
              return Icon ? <Icon size={fullscreen ? 40 : 32} className="text-[var(--color-accent)]" /> : null
            })()}
          </div>
          <p className={`font-semibold text-[var(--color-heading)] ${
            fullscreen ? 'text-[28px] md:text-[32px]' : 'text-[22px] md:text-[24px]'
          }`}>{right.label}</p>
          <p className={`text-[var(--color-text-secondary)] mt-1.5 ${
            fullscreen ? 'text-[18px] md:text-[20px] max-w-[280px]' : 'text-[15px] md:text-[16px] max-w-[220px]'
          }`}>{right.description}</p>
        </div>
      </div>
    </div>
  )
}

export function StatementSlide({ statement, supporting, fullscreen }) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-6 h-full">
      <p className={`leading-[1.2] tracking-[-0.015em] text-[var(--color-heading)] font-semibold ${
        fullscreen ? 'text-[38px] md:text-[50px] max-w-[720px]' : 'text-[28px] md:text-[38px] max-w-[580px]'
      }`}>
        {statement}
      </p>
      {supporting && (
        <p className={`mt-6 text-[var(--color-text-secondary)] leading-relaxed ${
          fullscreen ? 'text-[20px] md:text-[24px] max-w-[640px]' : 'text-[17px] md:text-[19px] max-w-[500px]'
        }`}>
          {supporting}
        </p>
      )}
    </div>
  )
}

export function IconBulletsSlide({ title, bullets, fullscreen }) {
  const hasVisuals = bullets.some((b) => b.visual)
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-6">
      {title && (
        <p className={`font-semibold text-[var(--color-heading)] text-center ${
          fullscreen ? 'text-[24px] md:text-[28px] mb-12' : 'text-[19px] md:text-[21px] mb-8'
        }`}>{title}</p>
      )}
      <div className={`grid w-full ${bullets.length === 4 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'} ${
        fullscreen
          ? (hasVisuals ? 'gap-12 max-w-[960px]' : (bullets.length === 4 ? 'gap-6 max-w-[720px]' : 'gap-6 max-w-[840px]'))
          : (bullets.length === 4 ? 'gap-6 max-w-[540px]' : 'gap-6 max-w-[640px]')
      }`}>
        {bullets.map((b, i) => {
          const Icon = iconMap[b.icon]
          const Visual = b.visual ? visualMap[b.visual] : null
          return (
            <div key={i} className={`flex flex-col items-center text-center ${fullscreen && hasVisuals ? 'px-2' : ''}`}>
              {Visual ? (
                <div className={`flex items-end justify-center ${fullscreen ? 'mb-5 min-h-[180px]' : 'mb-3 min-h-[140px]'}`}>
                  <Visual fullscreen={fullscreen} />
                </div>
              ) : Icon ? (
                <div className={`rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-3 ${
                  fullscreen ? 'w-16 h-16' : 'w-14 h-14'
                }`}>
                  <Icon size={fullscreen ? 30 : 26} className="text-[var(--color-accent)]" />
                </div>
              ) : null}
              <p className={`font-semibold text-[var(--color-text)] ${
                fullscreen ? 'text-[20px]' : 'text-[17px]'
              }`}>{b.title}</p>
              <p className={`text-[var(--color-text-secondary)] mt-1.5 leading-snug ${
                fullscreen ? 'text-[17px]' : 'text-[15px]'
              }`}>{b.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function ComponentSlide({ children }) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-2 py-6 w-full">
      {children}
    </div>
  )
}

export function CardsSlide({ cards, component: CardComponent }) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-2 py-6 w-full">
      <CardComponent cards={cards} />
    </div>
  )
}

export function TakeawaySlide({ text, fullscreen }) {
  const parts = text.split(/(\*\*.*?\*\*)/g)
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-6 h-full">
      <div className={`rounded-full bg-[var(--color-accent)] mb-6 ${fullscreen ? 'w-16 h-1.5' : 'w-12 h-1'}`} />
      <p className={`leading-[1.35] text-[var(--color-heading)] font-medium ${
        fullscreen ? 'text-[28px] md:text-[36px] max-w-[700px]' : 'text-[22px] md:text-[28px] max-w-[560px]'
      }`}>
        {parts.map((part, i) =>
          part.startsWith('**') && part.endsWith('**')
            ? <strong key={i} className="font-bold">{part.slice(2, -2)}</strong>
            : part
        )}
      </p>
      <p className={`mt-5 uppercase tracking-[0.1em] text-[var(--color-accent)] font-semibold ${
        fullscreen ? 'text-[14px]' : 'text-[13px]'
      }`}>Key Takeaway</p>
    </div>
  )
}

export function createSlideRenderers(fullscreen = false) {
  return {
    quote: (slide) => <QuoteSlide {...slide} fullscreen={fullscreen} />,
    comparison: (slide) => <ComparisonSlide {...slide} fullscreen={fullscreen} />,
    statement: (slide) => <StatementSlide {...slide} fullscreen={fullscreen} />,
    iconBullets: (slide) => <IconBulletsSlide {...slide} fullscreen={fullscreen} />,
    toolCards: (slide) => <CardsSlide cards={slide.cards} component={ToolCards} />,
    takeaway: (slide) => <TakeawaySlide text={slide.text} fullscreen={fullscreen} />,
  }
}
