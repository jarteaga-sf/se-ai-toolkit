import { useEffect, useRef } from 'react'
import { Zap, Search, MessageSquare, PenLine, Film, Wand2, Bot, Unlock, FileText, Terminal, Download, Shield, Puzzle, LogIn, FolderPlus, CheckCircle, Globe, ArrowRight, ArrowDown, X, Sparkles, TrendingUp, BookOpen, Users, Layers } from 'lucide-react'
import gsap from 'gsap'
import ToolCards from './ToolCards'
import HabitCards from './HabitCards'
import StepFlow from './StepFlow'
import TerminalPanel from './TerminalPanel'
import FeatureCards from './FeatureCards'
import DecisionFlow from './DecisionFlow'
import QuickReference from './QuickReference'
import { ClaudeLogo, CursorLogo, SaleoLogo, MeshMeshLogo } from './ToolLogos'
import { VibeCodingIllustration, AgentIllustration, FunnelIllustration } from './ConceptIllustrations'

export const iconMap = { Zap, Search, MessageSquare, PenLine, Film, Wand2, Bot, Unlock, FileText, Terminal, Download, Shield, Puzzle, LogIn, FolderPlus, CheckCircle, Globe, TrendingUp }

// ── Tool accent colors & logo map ─────────────────────────────────────────
const toolAccents = {
  saleo: '#8402AD',
  meshmesh: '#0176D3',
  cursor: '#06A59A',
  'claude-code': '#066AFE',
}

const toolLogoMap = {
  saleo: SaleoLogo,
  meshmesh: MeshMeshLogo,
  cursor: CursorLogo,
  'claude-code': ClaudeLogo,
}

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
    <div className="flex flex-col items-center gap-3">
      {/* Old way: manual SDO customization */}
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
      <ArrowDown size={14} className="text-[var(--color-accent)]" />
      {/* New way: prompt it */}
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

export const visualMap = {
  speed: SpeedVisual,
  credibility: CredibilityVisual,
  independence: IndependenceVisual,
}

export function QuoteSlide({ quote, attribution, context, fullscreen }) {
  const quoteRef = useRef(null)
  const attrRef = useRef(null)

  useEffect(() => {
    const el = quoteRef.current
    if (!el) return

    const words = el.querySelectorAll('.quote-word')
    gsap.set(words, { opacity: 0, y: 8 })
    gsap.to(words, {
      opacity: 1,
      y: 0,
      duration: 0.35,
      stagger: 0.04,
      ease: 'power2.out',
      delay: 0.15,
    })

    if (attrRef.current) {
      gsap.fromTo(attrRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, delay: 0.15 + words.length * 0.04 + 0.2, ease: 'power2.out' }
      )
    }
  }, [quote])

  const quoteWords = quote.split(' ')

  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-6 h-full">
      {context && (
        <p className={`text-[var(--color-text-secondary)] mb-6 max-w-[520px] ${
          fullscreen ? 'text-[20px] md:text-[22px] max-w-[700px]' : 'text-[16px] md:text-[17px]'
        }`}>{context}</p>
      )}
      <blockquote
        ref={quoteRef}
        className={`leading-[1.15] tracking-[-0.02em] text-[var(--color-heading)] font-semibold ${
          fullscreen ? 'text-[42px] md:text-[56px] max-w-[800px]' : 'text-[32px] md:text-[42px] max-w-[620px]'
        }`}
      >
        "{quoteWords.map((word, i) => (
          <span key={i} className="quote-word inline-block mr-[0.3em]">{word}</span>
        ))}"
      </blockquote>
      {attribution && (
        <p
          ref={attrRef}
          className={`mt-6 text-[var(--color-text-muted)] font-medium max-w-[480px] ${
            fullscreen ? 'text-[18px] md:text-[20px] max-w-[600px]' : 'text-[15px] md:text-[16px]'
          }`}
        >
          {attribution}
        </p>
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

export function StatementSlide({ statement, supporting, fullscreen, isDarkBg }) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-6 h-full">
      <p className={`leading-[1.2] tracking-[-0.015em] font-bold ${
        isDarkBg ? 'text-white' : 'text-[var(--color-heading)]'
      } ${
        fullscreen ? 'text-[38px] md:text-[50px] max-w-[720px]' : 'text-[28px] md:text-[38px] max-w-[580px]'
      }`}>
        {statement}
      </p>
      {supporting && (
        <p className={`mt-6 leading-relaxed ${
          isDarkBg ? 'text-[var(--color-cloud-light)]' : 'text-[var(--color-text-secondary)]'
        } ${
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
            <div key={i} className={`flex flex-col items-center text-center overflow-hidden ${fullscreen && hasVisuals ? 'px-2' : ''}`}>
              {Visual ? (
                <div className={`flex items-end justify-center ${fullscreen ? 'mb-5 h-[200px]' : 'mb-3 h-[160px]'}`}>
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

/**
 * Stat callout slide — 3 big numbers with supporting text.
 */
export function StatCalloutSlide({ stats, fullscreen }) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-6">
      <div className={`grid grid-cols-3 w-full ${
        fullscreen ? 'gap-8 max-w-[900px]' : 'gap-6 max-w-[680px]'
      }`}>
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <span className={`font-bold text-[var(--color-accent)] leading-none tracking-tight ${
              fullscreen ? 'text-[56px] md:text-[72px]' : 'text-[40px] md:text-[52px]'
            }`}>{stat.value}</span>
            <p className={`mt-3 text-[var(--color-heading)] font-semibold leading-snug ${
              fullscreen ? 'text-[18px] md:text-[20px] max-w-[260px]' : 'text-[15px] md:text-[17px] max-w-[200px]'
            }`}>{stat.label}</p>
            {stat.source && (
              <p className={`mt-1.5 text-[var(--color-text-muted)] italic ${
                fullscreen ? 'text-[13px]' : 'text-[11px]'
              }`}>{stat.source}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * Illustrated concept: text on left, animated illustration on right.
 */
export function IllustratedConceptSlide({ title, subtitle, message, illustration, fullscreen }) {
  const illustrations = {
    vibeCoding: VibeCodingIllustration,
    agent: AgentIllustration,
  }
  const Illustration = illustrations[illustration]

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 h-full px-6 py-6">
      {/* Text side */}
      <div className={`flex flex-col max-w-[400px] ${fullscreen ? '' : 'max-w-[320px]'}`}>
        <h3 className={`font-bold text-[var(--color-heading)] leading-tight tracking-tight ${
          fullscreen ? 'text-[32px] md:text-[40px]' : 'text-[24px] md:text-[28px]'
        }`}>{title}</h3>
        {subtitle && (
          <p className={`mt-3 text-[var(--color-text-secondary)] leading-relaxed ${
            fullscreen ? 'text-[19px]' : 'text-[16px]'
          }`}>{subtitle}</p>
        )}
        {message && (
          <p className={`mt-4 text-[var(--color-accent)] font-bold ${
            fullscreen ? 'text-[17px]' : 'text-[15px]'
          }`}>{message}</p>
        )}
      </div>
      {/* Illustration side */}
      <div className="flex items-center justify-center">
        {Illustration && <Illustration />}
      </div>
    </div>
  )
}

/**
 * Spectrum/Funnel split: opportunity tiers mapped to tools.
 */
export function SpectrumSplitSlide({ title, message, fullscreen }) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-6">
      {title && (
        <p className={`font-bold text-[var(--color-heading)] text-center mb-8 ${
          fullscreen ? 'text-[24px] md:text-[28px]' : 'text-[19px] md:text-[21px]'
        }`}>{title}</p>
      )}
      <FunnelIllustration />
      {message && (
        <p className={`mt-8 text-center text-[var(--color-text-secondary)] max-w-[560px] ${
          fullscreen ? 'text-[17px]' : 'text-[15px]'
        }`}>{message}</p>
      )}
    </div>
  )
}

// ── NEW LAYOUTS: Tool Slides ──────────────────────────────────────────────

/**
 * Tool Intro — hero slide for each tool with logo, title, subtitle, lead paragraph.
 */
export function ToolIntroSlide({ toolId, title, subtitle, leadParagraph, fullscreen }) {
  const accent = toolAccents[toolId] || 'var(--color-accent)'
  const Logo = toolLogoMap[toolId]
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const children = el.querySelectorAll('.tool-intro-anim')
    gsap.fromTo(children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out', delay: 0.1 }
    )
  }, [toolId])

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center text-center px-6 py-6 h-full">
      {Logo && (
        <div className="tool-intro-anim mb-6">
          <Logo size={fullscreen ? 72 : 56} />
        </div>
      )}
      <h2 className={`tool-intro-anim font-bold text-[var(--color-heading)] leading-tight tracking-tight ${
        fullscreen ? 'text-[44px] md:text-[56px]' : 'text-[32px] md:text-[40px]'
      }`}>{title}</h2>
      {subtitle && (
        <p className={`tool-intro-anim mt-3 font-medium ${
          fullscreen ? 'text-[22px] md:text-[26px] max-w-[640px]' : 'text-[18px] md:text-[20px] max-w-[480px]'
        }`} style={{ color: accent }}>{subtitle}</p>
      )}
      {leadParagraph && (
        <p className={`tool-intro-anim mt-6 text-[var(--color-text-secondary)] leading-relaxed max-w-[560px] ${
          fullscreen ? 'text-[19px] md:text-[21px] max-w-[680px]' : 'text-[16px] md:text-[17px]'
        }`}>{leadParagraph}</p>
      )}
      <div className="tool-intro-anim mt-8 rounded-full h-1" style={{ width: 64, backgroundColor: accent }} />
    </div>
  )
}

/**
 * Tool Content — prose paragraphs + optional quote + terminal/features.
 */
function RichText({ text }) {
  const parts = text.split(/(\*\*.*?\*\*|`[^`]+`)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-semibold text-[var(--color-text)]">{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i} className="font-[var(--font-mono)] text-[0.9em] bg-[var(--color-border-light)] px-1.5 py-0.5 rounded">{part.slice(1, -1)}</code>
    }
    return part
  })
}

export function ToolContentSlide({ toolId, title, prose, quote, terminal, features, stepFlow, fullscreen }) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-4 overflow-hidden">
      <div className={`w-full ${fullscreen ? 'max-w-[860px]' : 'max-w-[640px]'}`}>
        {/* Prose */}
        {prose && prose.length > 0 && (
          <div className={`space-y-4 mb-6 ${fullscreen ? 'text-[18px]' : 'text-[15px]'} text-[var(--color-text-prose)] leading-[1.7]`}>
            {prose.slice(0, 2).map((p, i) => (
              <p key={i}><RichText text={p} /></p>
            ))}
          </div>
        )}
        {/* Quote */}
        {quote && (
          <div className="border-l-3 border-[var(--color-accent)] bg-[var(--color-surface)] rounded-r-xl px-5 py-4 mb-6">
            <p className={`italic text-[var(--color-text-secondary)] leading-relaxed ${
              fullscreen ? 'text-[17px]' : 'text-[14px]'
            }`}>"{quote}"</p>
          </div>
        )}
        {/* Terminal */}
        {terminal && (
          <div className="max-h-[280px] overflow-hidden">
            <TerminalPanel title={terminal.title} steps={terminal.steps.slice(0, 6)} />
          </div>
        )}
        {/* Features */}
        {features && (
          <div className="max-h-[260px] overflow-hidden">
            <FeatureCards features={features.slice(0, 3)} />
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * Tool Getting Started — step flow + optional secondary flow.
 */
export function ToolGettingStartedSlide({ toolId, title, prose, stepFlow, terminal, stepFlowSecondary, fullscreen }) {
  const accent = toolAccents[toolId] || 'var(--color-accent)'
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-4 overflow-hidden">
      <p className={`font-bold text-center mb-2 ${
        fullscreen ? 'text-[14px]' : 'text-[12px]'
      }`} style={{ color: accent }}>GETTING STARTED</p>
      <h3 className={`font-bold text-[var(--color-heading)] text-center mb-6 ${
        fullscreen ? 'text-[28px] md:text-[34px]' : 'text-[22px] md:text-[26px]'
      }`}>{title}</h3>
      <div className={`w-full ${fullscreen ? 'max-w-[760px]' : 'max-w-[560px]'}`}>
        {prose && prose.length > 0 && (
          <p className={`text-[var(--color-text-secondary)] leading-relaxed mb-5 text-center ${
            fullscreen ? 'text-[17px]' : 'text-[15px]'
          }`}><RichText text={prose[0]} /></p>
        )}
        {stepFlow && <StepFlow stepFlow={stepFlow} />}
        {terminal && (
          <div className="max-h-[200px] overflow-hidden mt-4">
            <TerminalPanel title={terminal.title} steps={terminal.steps.slice(0, 5)} />
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * Habit Cards slide — fullscreen grid of best practice cards.
 */
export function HabitCardsSlide({ toolId, title, cards, fullscreen }) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-4 overflow-hidden">
      {title && (
        <h3 className={`font-bold text-[var(--color-heading)] text-center mb-6 ${
          fullscreen ? 'text-[26px] md:text-[32px]' : 'text-[20px] md:text-[24px]'
        }`}>{title}</h3>
      )}
      <div className={`w-full ${fullscreen ? 'max-w-[900px]' : 'max-w-[640px]'}`}>
        <HabitCards cards={cards} fullscreen />
      </div>
    </div>
  )
}

// ── NEW LAYOUTS: Use Cases ────────────────────────────────────────────────

/**
 * Use Case Cards — tool name header + habit cards grid.
 */
export function UseCaseCardsSlide({ toolName, cards, fullscreen }) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-4 overflow-hidden">
      <p className={`uppercase tracking-[0.12em] font-bold text-[var(--color-accent)] mb-2 ${
        fullscreen ? 'text-[14px]' : 'text-[12px]'
      }`}>Use Cases</p>
      <h3 className={`font-bold text-[var(--color-heading)] text-center mb-6 ${
        fullscreen ? 'text-[28px] md:text-[34px]' : 'text-[22px] md:text-[26px]'
      }`}>{toolName}</h3>
      <div className={`w-full ${fullscreen ? 'max-w-[900px]' : 'max-w-[640px]'}`}>
        <HabitCards cards={cards} fullscreen />
      </div>
    </div>
  )
}

// ── NEW LAYOUTS: Level Up ─────────────────────────────────────────────────

/**
 * Level Up Topic — title + condensed prose + habit cards.
 */
export function LevelUpTopicSlide({ title, prose, cards, takeaway, fullscreen }) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-4 overflow-hidden">
      <p className={`uppercase tracking-[0.12em] font-bold text-[var(--color-accent)] mb-2 ${
        fullscreen ? 'text-[14px]' : 'text-[12px]'
      }`}>Level Up</p>
      <h3 className={`font-bold text-[var(--color-heading)] text-center mb-4 ${
        fullscreen ? 'text-[28px] md:text-[34px]' : 'text-[22px] md:text-[26px]'
      }`}>{title}</h3>
      {prose && prose.length > 0 && (
        <p className={`text-[var(--color-text-secondary)] leading-relaxed text-center mb-5 ${
          fullscreen ? 'text-[17px] max-w-[640px]' : 'text-[15px] max-w-[480px]'
        }`}><RichText text={prose[0]} /></p>
      )}
      {cards && cards.length > 0 && (
        <div className={`w-full ${fullscreen ? 'max-w-[900px]' : 'max-w-[640px]'}`}>
          <HabitCards cards={cards} fullscreen />
        </div>
      )}
    </div>
  )
}

// ── NEW LAYOUTS: Tier Transition ──────────────────────────────────────────

/**
 * Tier Transition — big centered tier name with gradient accent.
 */
export function TierTransitionSlide({ label, supporting, fullscreen }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    gsap.fromTo(el.querySelector('.tier-label'),
      { opacity: 0, y: 30, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out', delay: 0.1 }
    )
    gsap.fromTo(el.querySelector('.tier-line'),
      { scaleX: 0 },
      { scaleX: 1, duration: 0.5, ease: 'power2.out', delay: 0.4 }
    )
    if (el.querySelector('.tier-supporting')) {
      gsap.fromTo(el.querySelector('.tier-supporting'),
        { opacity: 0 },
        { opacity: 1, duration: 0.5, delay: 0.6, ease: 'power2.out' }
      )
    }
  }, [label])

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center text-center px-6 py-6 h-full">
      <div className="tier-line w-20 h-1 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-cloud)] mb-8" />
      <h2 className={`tier-label font-bold text-white leading-tight tracking-tight ${
        fullscreen ? 'text-[48px] md:text-[64px]' : 'text-[36px] md:text-[48px]'
      }`}>{label}</h2>
      {supporting && (
        <p className={`tier-supporting mt-6 text-[var(--color-cloud-light)] leading-relaxed max-w-[480px] ${
          fullscreen ? 'text-[20px] md:text-[22px] max-w-[600px]' : 'text-[16px] md:text-[18px]'
        }`}>{supporting}</p>
      )}
    </div>
  )
}

// ── NEW LAYOUTS: Quick Reference ──────────────────────────────────────────

/**
 * Cheat Sheet Matrix — scenario/tool table.
 */
export function CheatSheetMatrixSlide({ toolMatrix, title, fullscreen }) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-4 overflow-hidden">
      <p className={`uppercase tracking-[0.12em] font-bold text-[var(--color-accent)] mb-2 ${
        fullscreen ? 'text-[14px]' : 'text-[12px]'
      }`}>Cheat Sheet</p>
      <h3 className={`font-bold text-[var(--color-heading)] text-center mb-6 ${
        fullscreen ? 'text-[28px] md:text-[34px]' : 'text-[22px] md:text-[26px]'
      }`}>{title}</h3>
      <div className={`w-full rounded-xl overflow-hidden border border-[var(--color-border)]/60 ${
        fullscreen ? 'max-w-[720px]' : 'max-w-[540px]'
      }`}>
        <table className={`w-full ${fullscreen ? 'text-[16px]' : 'text-[14px]'}`}>
          <thead>
            <tr className="bg-[var(--color-surface)]">
              <th className="text-left px-4 py-2.5 font-bold text-[var(--color-heading)]">Scenario</th>
              <th className="text-left px-4 py-2.5 font-bold text-[var(--color-heading)] whitespace-nowrap">Reach for</th>
            </tr>
          </thead>
          <tbody>
            {toolMatrix.map((row, i) => (
              <tr key={i} className={`border-t border-[var(--color-border)]/40 ${i % 2 === 1 ? 'bg-[var(--color-surface)]/50' : ''}`}>
                <td className="px-4 py-2.5 text-[var(--color-text-secondary)]">{row.scenario}</td>
                <td className="px-4 py-2.5 font-bold text-[var(--color-accent)] whitespace-nowrap">{row.tool}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/**
 * Decision Flow slide — interactive tool selector.
 */
export function DecisionFlowSlide({ title, fullscreen }) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-4 overflow-hidden">
      <div className={`w-full ${fullscreen ? 'max-w-[560px]' : 'max-w-[480px]'}`}>
        <DecisionFlow />
      </div>
    </div>
  )
}

/**
 * Contest CTA slide — gradient background call-to-action.
 */
export function ContestCtaSlide({ contest, takeaway, fullscreen }) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-6 h-full">
      {contest && (
        <div className="rounded-2xl bg-gradient-to-br from-[var(--color-heading)] to-[#032D60] p-8 md:p-10 max-w-[600px] w-full">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles size={22} className="text-[var(--color-yellow)]" />
            <h3 className={`font-bold text-white ${
              fullscreen ? 'text-[26px] md:text-[30px]' : 'text-[22px] md:text-[24px]'
            }`}>{contest.title}</h3>
            <Sparkles size={22} className="text-[var(--color-yellow)]" />
          </div>
          <p className={`text-[var(--color-cloud-light)] leading-relaxed mb-6 max-w-[440px] mx-auto ${
            fullscreen ? 'text-[18px]' : 'text-[16px]'
          }`}>{contest.description}</p>
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-accent)] text-white font-bold text-[15px] hover:bg-[var(--color-electric)] transition-colors cursor-pointer shadow-lg shadow-[var(--color-accent)]/25">
            {contest.cta}
          </button>
        </div>
      )}
      {takeaway && (
        <p className={`mt-8 text-[var(--color-text-muted)] font-medium italic max-w-[480px] ${
          fullscreen ? 'text-[17px]' : 'text-[15px]'
        }`}>{takeaway}</p>
      )}
    </div>
  )
}

// ── Slide renderer factory ────────────────────────────────────────────────

export function createSlideRenderers(fullscreen = false) {
  return {
    // Existing Big Picture layouts
    quote: (slide, opts) => <QuoteSlide {...slide} fullscreen={fullscreen} />,
    comparison: (slide, opts) => <ComparisonSlide {...slide} fullscreen={fullscreen} />,
    statement: (slide, opts) => <StatementSlide {...slide} fullscreen={fullscreen} isDarkBg={opts?.isDarkBg} />,
    iconBullets: (slide, opts) => <IconBulletsSlide {...slide} fullscreen={fullscreen} />,
    toolCards: (slide, opts) => <CardsSlide cards={slide.cards} component={ToolCards} />,
    takeaway: (slide, opts) => <TakeawaySlide text={slide.text} fullscreen={fullscreen} />,
    statCallout: (slide, opts) => <StatCalloutSlide {...slide} fullscreen={fullscreen} />,
    illustratedConcept: (slide, opts) => <IllustratedConceptSlide {...slide} fullscreen={fullscreen} />,
    spectrumSplit: (slide, opts) => <SpectrumSplitSlide {...slide} fullscreen={fullscreen} />,

    // New Tool layouts
    toolIntro: (slide, opts) => <ToolIntroSlide {...slide} fullscreen={fullscreen} />,
    toolContent: (slide, opts) => <ToolContentSlide {...slide} fullscreen={fullscreen} />,
    toolGettingStarted: (slide, opts) => <ToolGettingStartedSlide {...slide} fullscreen={fullscreen} />,
    habitCardsSlide: (slide, opts) => <HabitCardsSlide {...slide} fullscreen={fullscreen} />,

    // Use Cases
    useCaseCards: (slide, opts) => <UseCaseCardsSlide {...slide} fullscreen={fullscreen} />,

    // Level Up
    levelUpTopic: (slide, opts) => <LevelUpTopicSlide {...slide} fullscreen={fullscreen} />,

    // Tier transitions
    tierTransition: (slide, opts) => <TierTransitionSlide {...slide} fullscreen={fullscreen} />,

    // Quick Reference
    cheatSheetMatrix: (slide, opts) => <CheatSheetMatrixSlide {...slide} fullscreen={fullscreen} />,
    decisionFlowSlide: (slide, opts) => <DecisionFlowSlide {...slide} fullscreen={fullscreen} />,
    contestCta: (slide, opts) => <ContestCtaSlide {...slide} fullscreen={fullscreen} />,
  }
}
