import { ClaudeLogo, CursorLogo, SaleoLogo, MeshMeshLogo } from '../illustrations/ToolLogos'

const logos = {
  claude: ClaudeLogo,
  cursor: CursorLogo,
  saleo: SaleoLogo,
  meshmesh: MeshMeshLogo,
}

// --- Per-tool accent colors (top border) ---
const toolAccents = {
  saleo: '#8402AD',
  meshmesh: '#0176D3',
  cursor: '#06A59A',
  claude: '#066AFE',
}

// --- Per-tool mini visuals ---

function TerminalVisual() {
  return (
    <div className="w-full h-[148px] rounded-lg overflow-hidden border border-[var(--color-border)]/50 shadow-sm flex flex-col">
      <div className="bg-[#1E1E1E] px-3 py-1.5 flex items-center gap-1.5">
        <div className="w-[7px] h-[7px] rounded-full bg-red-400/70" />
        <div className="w-[7px] h-[7px] rounded-full bg-yellow-400/70" />
        <div className="w-[7px] h-[7px] rounded-full bg-green-400/70" />
      </div>
      <div className="bg-[#1E1E1E] px-3 pb-3 pt-1 flex flex-col gap-1.5 flex-1">
        <p className="text-[10px] font-mono text-[#E5E7EB]">
          <span className="text-[#6EE7B7]">&gt;</span> Build a lead scoring flow
        </p>
        <div className="border-l-2 border-[#D97706]/60 pl-2 flex flex-col gap-0.5">
          <p className="text-[10px] font-mono text-[#D97706]">
            Created LeadScoringFlow.flow
          </p>
          <p className="text-[10px] font-mono text-[#D97706]">
            Added 4 scoring criteria
          </p>
          <p className="text-[10px] font-mono text-[#D97706]">
            Deployed to org
          </p>
        </div>
        <p className="text-[10px] font-mono text-[#E5E7EB]">
          <span className="text-[#6EE7B7]">&gt;</span> Now add email alerts<span className="inline-block w-[5px] h-[12px] bg-[#6EE7B7]/70 ml-0.5 align-middle animate-pulse" />
        </p>
      </div>
    </div>
  )
}

function EditorVisual() {
  return (
    <div className="w-full h-[148px] rounded-lg overflow-hidden border border-[var(--color-border)]/50 shadow-sm flex flex-col">
      <div className="bg-[#252526] px-2 py-1 flex items-center gap-0.5">
        <div className="px-2.5 py-1 rounded-t text-[10px] font-mono text-[#E5E7EB] bg-[#1E1E1E]">
          scoreCard.js
        </div>
        <div className="flex-1" />
        <div className="px-1.5 py-0.5 text-[8px] font-mono text-[#9CA3AF] bg-[#1E1E1E] rounded">
          Agent
        </div>
      </div>
      <div className="flex flex-1">
        <div className="bg-[#1E1E1E] px-2.5 py-2 flex-1 border-r border-[#333]">
          <p className="text-[9px] font-mono">
            <span className="text-[#C586C0]">const</span>{' '}
            <span className="text-[#9CDCFE]">score</span>{' '}
            <span className="text-[#D4D4D4]">=</span>{' '}
            <span className="text-[#DCDCAA]">calcScore</span>
            <span className="text-[#D4D4D4]">(lead);</span>
          </p>
          <div className="rounded bg-[#264F78]/40 px-1 py-0.5 -mx-1 mt-0.5">
            <p className="text-[9px] font-mono text-[#6B9955] italic">
              if (score &gt; 80) notify(rep);
            </p>
          </div>
        </div>
        <div className="bg-[#181818] px-2 py-2 w-[40%] flex flex-col gap-1 overflow-hidden">
          <p className="text-[7px] font-mono text-[#9CA3AF] truncate">
            Add a threshold
          </p>
          <p className="text-[7px] font-mono text-[#7C9FE0] leading-snug">
            Added threshold check.
          </p>
        </div>
      </div>
    </div>
  )
}

function BrowserVisual() {
  return (
    <div className="w-full h-[148px] rounded-lg overflow-hidden border border-[var(--color-border)]/50 shadow-sm flex flex-col">
      <div className="bg-[#F1F1F1] px-3 py-1.5 flex items-center gap-2">
        <div className="flex gap-1">
          <div className="w-[7px] h-[7px] rounded-full bg-[#ccc]" />
          <div className="w-[7px] h-[7px] rounded-full bg-[#ccc]" />
          <div className="w-[7px] h-[7px] rounded-full bg-[#ccc]" />
        </div>
        <div className="flex-1 bg-white rounded px-2 py-0.5">
          <span className="text-[9px] text-[#999]">salesforce.com/lightning/...</span>
        </div>
      </div>
      <div className="bg-white px-3 py-2.5 flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-bold text-[var(--color-heading)]">Acme Corp</span>
          <span className="text-[9px] text-[#999]">Account</span>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-[#666]">Revenue</span>
            <span className="text-[10px] font-bold text-[var(--color-violet)] bg-[var(--color-violet)]/10 px-1.5 py-0.5 rounded">$4.2M</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-[#666]">Industry</span>
            <span className="text-[10px] font-bold text-[var(--color-violet)] bg-[var(--color-violet)]/10 px-1.5 py-0.5 rounded">Healthcare</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-[#666]">Open Opps</span>
            <span className="text-[10px] font-bold text-[var(--color-violet)] bg-[var(--color-violet)]/10 px-1.5 py-0.5 rounded">12</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function AgentBuilderVisual() {
  return (
    <div className="w-full h-[148px] rounded-lg overflow-hidden border border-[var(--color-border)]/50 shadow-sm flex flex-col">
      <div className="bg-[var(--color-heading)] px-3 py-1.5 flex items-center gap-2">
        <div className="flex gap-1">
          <div className="w-[7px] h-[7px] rounded-full bg-white/30" />
          <div className="w-[7px] h-[7px] rounded-full bg-white/30" />
          <div className="w-[7px] h-[7px] rounded-full bg-white/30" />
        </div>
        <span className="text-[9px] font-mono text-white/70">MeshMesh</span>
      </div>
      <div className="bg-[var(--color-surface)] px-3 py-2.5 flex-1">
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-[8px] h-[8px] rounded-full bg-[var(--color-accent)]" />
          <span className="text-[10px] font-bold text-[var(--color-heading)]">Agentforce Agent</span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between px-2 py-1 rounded-lg bg-white border border-[var(--color-border)]/50">
            <span className="text-[9px] text-[var(--color-text-muted)]">Topics</span>
            <span className="text-[9px] font-bold text-[var(--color-heading)]">4</span>
          </div>
          <div className="flex items-center justify-between px-2 py-1 rounded-lg bg-white border border-[var(--color-border)]/50">
            <span className="text-[9px] text-[var(--color-text-muted)]">Actions</span>
            <span className="text-[9px] font-bold text-[var(--color-heading)]">12</span>
          </div>
          <div className="flex items-center justify-between px-2 py-1 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0]">
            <span className="text-[9px] text-[#065F46]">Tests passing</span>
            <span className="text-[9px] font-bold text-[#065F46]">500+</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const setupLevels = {
  easy: { label: 'Easy setup', dots: 1, color: '#06A59A' },
  moderate: { label: 'Moderate setup', dots: 2, color: '#FCC003' },
  advanced: { label: 'Advanced setup', dots: 3, color: '#747474' },
}

function SetupLevel({ level }) {
  const { label, dots, color } = setupLevels[level]
  return (
    <div className="px-4 pb-4 pt-1 mt-auto border-t border-[var(--color-border)]/40 mx-4 flex items-center justify-center gap-2">
      <div className="flex gap-1">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="w-[6px] h-[6px] rounded-full"
            style={{
              backgroundColor: n <= dots ? color : 'transparent',
              border: `1.5px solid ${n <= dots ? color : '#d1d5db'}`,
            }}
          />
        ))}
      </div>
      <span className="text-[11px] text-[var(--color-text-muted)]">{label}</span>
    </div>
  )
}

const miniVisuals = {
  claude: TerminalVisual,
  cursor: EditorVisual,
  saleo: BrowserVisual,
  meshmesh: AgentBuilderVisual,
}

export default function ToolCards({ cards }) {
  return (
    <div className={`grid grid-cols-2 ${cards.length === 4 ? 'lg:grid-cols-4' : 'sm:grid-cols-3'} gap-5 my-8 items-stretch`}>
      {cards.map((card, i) => {
        const Logo = logos[card.logo]
        const Visual = miniVisuals[card.logo]
        const accent = toolAccents[card.logo] || 'var(--color-accent)'
        return (
          <div
            key={i}
            className="bg-[var(--color-bg-white)] border border-[var(--color-border)]/40 rounded-2xl shadow-[var(--shadow-card)] overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] flex flex-col"
            style={{ borderTop: `3px solid ${accent}` }}
          >
            {/* Logo + name */}
            <div className="pt-5 pb-1 flex flex-col items-center gap-1.5">
              {Logo && <Logo size={40} />}
              <h4 className="font-[var(--font-heading)] text-[17px] font-bold text-[var(--color-heading)]">
                {card.name}
              </h4>
            </div>
            {/* Tagline */}
            <div className="h-[44px] flex items-start justify-center px-4">
              {card.tagline && (
                <p className="text-[13px] text-[var(--color-text-muted)] italic text-center">{card.tagline}</p>
              )}
            </div>
            {/* Role badge */}
            <div className="h-[32px] flex items-center justify-center px-4">
              {card.role && (
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.08em] px-3 py-1 rounded-full whitespace-nowrap"
                  style={{
                    backgroundColor: `${accent}15`,
                    color: accent,
                    border: `1px solid ${accent}30`,
                  }}
                >
                  {card.role}
                </span>
              )}
            </div>
            {/* Mini visual */}
            <div className="px-4 pt-3 pb-4 h-[180px] flex items-center overflow-hidden">
              <div className="w-full overflow-hidden rounded-lg">
                {Visual && <Visual />}
              </div>
            </div>
            {/* Proof point */}
            <div className="px-4 pb-4 h-[80px] flex items-center">
              <p className="text-[13px] text-[var(--color-text)] leading-snug text-center w-full">
                {card.bestFor}
              </p>
            </div>
            {/* Setup level */}
            {card.setup && <SetupLevel level={card.setup} />}
          </div>
        )
      })}
    </div>
  )
}
