import { useState, useEffect, useRef } from 'react'
import { ArrowRight, ArrowDown, MessageSquare, Bot, Wrench, CheckCircle, Zap, BookOpen, Users, Layers } from 'lucide-react'
import gsap from 'gsap'

/**
 * Endless typing code lines for the terminal
 */
const codeLines = [
  { color: '#C586C0', text: 'public class LeadScorer {' },
  { color: '#9CA3AF', text: '  // Engagement scoring logic' },
  { color: '#569CD6', text: '  public static Integer score(Lead l) {' },
  { color: '#D4D4D4', text: "    Integer s = 0;" },
  { color: '#D4D4D4', text: "    if (l.Email != null) s += 10;" },
  { color: '#D4D4D4', text: "    if (l.Company != null) s += 15;" },
  { color: '#6A9955', text: '    // Industry fit multiplier' },
  { color: '#D4D4D4', text: "    if (l.Industry == 'Tech') s *= 2;" },
  { color: '#D4D4D4', text: "    return Math.min(s, 100);" },
  { color: '#569CD6', text: '  }' },
  { color: '#C586C0', text: '}' },
  { color: '', text: '' },
  { color: '#C586C0', text: 'public class OpportunityRouter {' },
  { color: '#569CD6', text: '  public static void route(Opp o) {' },
  { color: '#D4D4D4', text: "    String region = o.Account.Region;" },
  { color: '#D4D4D4', text: "    Team t = TeamFinder.match(region);" },
  { color: '#D4D4D4', text: '    o.OwnerId = t.leadId;' },
  { color: '#D4D4D4', text: '    update o;' },
  { color: '#569CD6', text: '  }' },
  { color: '#C586C0', text: '}' },
]

function TypingTerminal() {
  const [lines, setLines] = useState([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const lineIdx = currentLine % codeLines.length
    const line = codeLines[lineIdx]

    if (currentChar <= line.text.length) {
      const timer = setTimeout(() => {
        if (currentChar === 0) {
          setLines(prev => [...prev.slice(-12), { ...line, typed: '' }])
        } else {
          setLines(prev => {
            const updated = [...prev]
            if (updated.length > 0) {
              updated[updated.length - 1] = { ...line, typed: line.text.slice(0, currentChar) }
            }
            return updated
          })
        }
        setCurrentChar(c => c + 1)
      }, line.text === '' ? 200 : 25 + Math.random() * 35)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setCurrentLine(l => l + 1)
        setCurrentChar(0)
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [currentLine, currentChar])

  return (
    <div className="w-full rounded-xl border border-[var(--color-border)]/60 bg-[var(--color-bg-white)] overflow-hidden">
      <div className="bg-[#1E1E1E] px-3 py-1.5 flex items-center gap-1.5">
        <div className="w-[6px] h-[6px] rounded-full bg-red-400/60" />
        <div className="w-[6px] h-[6px] rounded-full bg-yellow-400/60" />
        <div className="w-[6px] h-[6px] rounded-full bg-green-400/60" />
        <span className="text-[8px] font-mono text-[#666] ml-1">salesforce-org.cls</span>
      </div>
      <div ref={containerRef} className="px-3 py-2 bg-[#1E1E1E] h-[120px] overflow-hidden">
        {lines.map((line, i) => (
          <p key={i} className="text-[9px] font-mono leading-[1.6]" style={{ color: line.color || '#D4D4D4' }}>
            {line.typed || '\u00A0'}
            {i === lines.length - 1 && (
              <span className="inline-block w-[5px] h-[10px] bg-[#569CD6] ml-px animate-pulse" />
            )}
          </p>
        ))}
      </div>
    </div>
  )
}

/**
 * Rotating prompts that fade in/out (looping animation — keep)
 */
const prompts = [
  "Build a lead scoring system that ranks leads by engagement, company size, and industry fit",
  "Create an Apex trigger that routes opportunities to the right team based on region",
  "Generate a Lightning Web Component for customer health dashboards",
  "Build a case escalation flow that notifies managers after 4 hours",
  "Deploy a permission set for the new SE demo org with read-only access",
]

function RotatingPrompts() {
  const [currentPrompt, setCurrentPrompt] = useState(0)
  const promptRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (promptRef.current) {
        gsap.to(promptRef.current, {
          opacity: 0, y: -8, duration: 0.4,
          onComplete: () => {
            setCurrentPrompt(p => (p + 1) % prompts.length)
            gsap.fromTo(promptRef.current,
              { opacity: 0, y: 8 },
              { opacity: 1, y: 0, duration: 0.4 }
            )
          }
        })
      }
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full rounded-xl border-2 border-[var(--color-accent)]/30 bg-[var(--color-surface)] p-4">
      <div className="flex items-start gap-2.5">
        <MessageSquare size={16} className="text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
        <div>
          <p ref={promptRef} className="text-[13px] text-[var(--color-heading)] font-bold leading-snug min-h-[40px]">
            "{prompts[currentPrompt]}"
          </p>
          <div className="flex items-center gap-1.5 mt-2">
            <CheckCircle size={12} className="text-[var(--color-success)]" />
            <span className="text-[11px] text-[var(--color-success)] font-bold">Built, tested, deployed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Vibe Coding: Before/After — Endless typing terminal + rotating prompts
 */
export function VibeCodingIllustration() {
  return (
    <div className="flex flex-col items-center gap-6 w-[340px]">
      {/* Before: Animated typing terminal */}
      <TypingTerminal />

      <div className="flex items-center gap-2">
        <div className="h-px w-8 bg-[var(--color-border)]" />
        <span className="text-[11px] font-bold text-[var(--color-accent)] uppercase tracking-wider">becomes</span>
        <div className="h-px w-8 bg-[var(--color-border)]" />
      </div>

      {/* After: Rotating natural language prompts */}
      <RotatingPrompts />
    </div>
  )
}

/**
 * Agent Flow: User -> Agent -> Salesforce Tools -> Outcome
 * All visible immediately — no entrance animations
 */
export function AgentIllustration() {
  return (
    <div className="flex flex-col items-center gap-3 w-[320px]">
      {/* Flow diagram */}
      <div className="flex items-center gap-3 w-full">
        {/* You */}
        <div className="flex flex-col items-center gap-1 flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center">
            <MessageSquare size={18} className="text-[var(--color-heading)]" />
          </div>
          <span className="text-[10px] font-bold text-[var(--color-heading)]">You</span>
        </div>

        <ArrowRight size={14} className="text-[var(--color-accent)] flex-shrink-0" />

        {/* Agent */}
        <div className="flex flex-col items-center gap-1 flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 border-2 border-[var(--color-accent)]/30 flex items-center justify-center animate-pulse">
            <Bot size={18} className="text-[var(--color-accent)]" />
          </div>
          <span className="text-[10px] font-bold text-[var(--color-accent)]">Agent</span>
        </div>

        <ArrowRight size={14} className="text-[var(--color-accent)] flex-shrink-0" />

        {/* Tools */}
        <div className="flex flex-col items-center gap-1 flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-[var(--color-electric)]/10 border border-[var(--color-electric)]/30 flex items-center justify-center">
            <Wrench size={18} className="text-[var(--color-electric)]" />
          </div>
          <span className="text-[10px] font-bold text-[var(--color-electric)]">Tools</span>
        </div>

        <ArrowRight size={14} className="text-[var(--color-success)] flex-shrink-0" />

        {/* Result */}
        <div className="flex flex-col items-center gap-1 flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-[var(--color-success)]/10 border border-[var(--color-success)]/30 flex items-center justify-center">
            <CheckCircle size={18} className="text-[var(--color-success)]" />
          </div>
          <span className="text-[10px] font-bold text-[var(--color-success)]">Done</span>
        </div>
      </div>

      {/* Example card */}
      <div className="w-full rounded-xl bg-[var(--color-bg-white)] border border-[var(--color-border)]/60 p-3 mt-2">
        <p className="text-[11px] text-[var(--color-text-muted)] mb-1.5">Example</p>
        <p className="text-[12px] text-[var(--color-heading)] font-bold">"Route this case to the right team"</p>
        <div className="flex flex-col gap-1 mt-2">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            <span className="text-[10px] text-[var(--color-text-secondary)]">Reads case details</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            <span className="text-[10px] text-[var(--color-text-secondary)]">Checks team availability</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-success)]" />
            <span className="text-[10px] text-[var(--color-success)] font-bold">Assigns to Tier 2 Support</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Funnel illustration showing opportunity tiers mapped to tools.
 */
export function FunnelIllustration() {
  return (
    <div className="w-[480px] flex flex-col gap-3">
      {/* Tier 1 & 2 — 80% */}
      <div className="relative">
        <div className="rounded-xl bg-[var(--color-accent)]/8 border border-[var(--color-accent)]/20 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[13px] font-bold text-[var(--color-heading)]">Tier 1 & 2 Opportunities</span>
            <span className="text-[22px] font-bold text-[var(--color-accent)]">80%</span>
          </div>
          <p className="text-[12px] text-[var(--color-text-secondary)] mb-3">GCMO / Shared Orgs -- Holistic Demos</p>
          <div className="flex gap-2">
            <div className="flex-1 rounded-lg bg-[var(--color-bg-white)] border border-[var(--color-border)]/50 p-2.5 flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[var(--color-violet)]/10 flex items-center justify-center">
                <Zap size={14} className="text-[var(--color-violet)]" />
              </div>
              <div>
                <span className="text-[12px] font-bold text-[var(--color-heading)] block">Saleo</span>
                <span className="text-[10px] text-[var(--color-text-muted)]">Personalize demos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tier 3 — 20% */}
      <div className="relative">
        <div className="rounded-xl bg-[var(--color-electric)]/8 border border-[var(--color-electric)]/20 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[13px] font-bold text-[var(--color-heading)]">Tier 3 -- Custom</span>
            <span className="text-[22px] font-bold text-[var(--color-electric)]">20%</span>
          </div>
          <p className="text-[12px] text-[var(--color-text-secondary)] mb-3">SDO / IDO -- Custom Demos, POT, POC</p>
          <div className="flex gap-2">
            <div className="flex-1 rounded-lg bg-[var(--color-bg-white)] border border-[var(--color-border)]/50 p-2.5 flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center">
                <Bot size={14} className="text-[var(--color-accent)]" />
              </div>
              <div>
                <span className="text-[12px] font-bold text-[var(--color-heading)] block">MeshMesh</span>
                <span className="text-[10px] text-[var(--color-text-muted)]">Build Salesforce-native</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Internal Accelerators */}
      <div className="rounded-xl bg-[var(--color-deepcut-bg)] border border-[var(--color-border)]/40 p-3">
        <span className="text-[11px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider block mb-2">Internal Accelerators</span>
        <div className="flex gap-2">
          <div className="flex-1 rounded-lg bg-[var(--color-bg-white)] border border-[var(--color-border)]/50 p-2 flex items-center gap-2">
            <span className="text-[11px] font-bold text-[var(--color-heading)]">Cursor</span>
            <span className="text-[10px] text-[var(--color-text-muted)]">Edit & iterate</span>
          </div>
          <div className="flex-1 rounded-lg bg-[var(--color-bg-white)] border border-[var(--color-border)]/50 p-2 flex items-center gap-2">
            <span className="text-[11px] font-bold text-[var(--color-heading)]">Claude Code</span>
            <span className="text-[10px] text-[var(--color-text-muted)]">Build from scratch</span>
          </div>
        </div>
      </div>
    </div>
  )
}
