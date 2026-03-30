import { useState } from 'react'
import { ArrowDown, RotateCcw } from 'lucide-react'

const toolColors = {
  Saleo: { bg: 'bg-[#8402AD]/10', border: 'border-[#8402AD]/30', text: 'text-[#8402AD]', accent: '#8402AD' },
  MeshMesh: { bg: 'bg-[#0176D3]/10', border: 'border-[#0176D3]/30', text: 'text-[#0176D3]', accent: '#0176D3' },
  Cursor: { bg: 'bg-[#06A59A]/10', border: 'border-[#06A59A]/30', text: 'text-[#06A59A]', accent: '#06A59A' },
  'Claude Code': { bg: 'bg-[#066AFE]/10', border: 'border-[#066AFE]/30', text: 'text-[#066AFE]', accent: '#066AFE' },
}

const tree = {
  id: 'start',
  question: 'What are you trying to do?',
  options: [
    {
      label: 'Personalize a demo for a prospect',
      next: {
        id: 'demo-type',
        question: 'Do you need to change the actual org, or just the data shown?',
        options: [
          { label: 'Just the data/visuals', result: 'Saleo', reason: 'Overlay personalized data without touching your org.' },
          { label: 'Build something custom in the org', next: {
            id: 'custom-build',
            question: 'How much needs to change?',
            options: [
              { label: 'Small tweaks (labels, fields, a component)', result: 'Cursor', reason: 'Quick inline edits with AI autocomplete.' },
              { label: 'Significant build (flows, agents, objects)', result: 'MeshMesh', reason: 'Salesforce-native builder that knows the platform.' },
            ]
          }},
        ],
      },
    },
    {
      label: 'Build a POC or Agentforce agent',
      result: 'MeshMesh',
      reason: 'Connects to your org and builds Salesforce-native solutions from natural language.',
    },
    {
      label: 'Generate demo data or RFP responses',
      result: 'Claude Code',
      reason: 'Autonomous builder that can generate data, analyze docs, and produce deliverables.',
    },
    {
      label: 'Understand or tweak existing code',
      result: 'Cursor',
      reason: 'AI-powered editor — ask questions in chat, make quick edits inline.',
    },
  ],
}

function ResultCard({ tool, reason, onReset }) {
  const colors = toolColors[tool]
  return (
    <div className={`rounded-xl border-2 ${colors.border} ${colors.bg} p-5 text-center`}>
      <p className={`text-[13px] font-bold uppercase tracking-wider ${colors.text} mb-2`}>Reach for</p>
      <p className={`text-[24px] font-bold text-[var(--color-heading)] mb-2`}>{tool}</p>
      <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed">{reason}</p>
      <button
        onClick={onReset}
        className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-bold text-[var(--color-accent)] hover:text-[var(--color-electric)] cursor-pointer transition-colors"
      >
        <RotateCcw size={14} />
        Start over
      </button>
    </div>
  )
}

function QuestionCard({ node, onAnswer }) {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-xl bg-[var(--color-bg-white)] border border-[var(--color-border)]/60 p-5 w-full max-w-[480px] shadow-sm">
        <p className="text-[17px] font-bold text-[var(--color-heading)] text-center mb-4">{node.question}</p>
        <div className="flex flex-col gap-2">
          {node.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => onAnswer(opt)}
              className="w-full text-left px-4 py-3 rounded-xl border border-[var(--color-border)]/50 bg-[var(--color-surface)]/50 hover:bg-[var(--color-accent)]/5 hover:border-[var(--color-accent)]/30 transition-all duration-200 cursor-pointer group"
            >
              <span className="text-[15px] text-[var(--color-text)] group-hover:text-[var(--color-heading)] font-medium">{opt.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function DecisionFlow() {
  const [path, setPath] = useState([])
  const [result, setResult] = useState(null)

  const currentNode = path.length === 0
    ? tree
    : path.reduce((node, idx) => node.options[idx].next, tree)

  const handleAnswer = (opt) => {
    if (opt.result) {
      setResult({ tool: opt.result, reason: opt.reason })
    } else if (opt.next) {
      const idx = currentNode.options.indexOf(opt)
      setPath([...path, idx])
    }
  }

  const reset = () => {
    setPath([])
    setResult(null)
  }

  return (
    <div className="my-6">
      <h3 className="font-[var(--font-heading)] text-[20px] tracking-[-0.015em] mb-4 text-center">
        Which tool should I use?
      </h3>

      {/* Breadcrumb trail */}
      {path.length > 0 && !result && (
        <div className="flex items-center justify-center gap-1 mb-4">
          <button
            onClick={reset}
            className="text-[13px] text-[var(--color-accent)] hover:underline cursor-pointer font-medium"
          >
            Start
          </button>
          {path.map((idx, i) => {
            const node = path.slice(0, i).reduce((n, j) => n.options[j].next, tree)
            return (
              <span key={i} className="flex items-center gap-1">
                <ArrowDown size={10} className="text-[var(--color-text-muted)] rotate-[-90deg]" />
                <span className="text-[13px] text-[var(--color-text-muted)]">{node.options[idx].label}</span>
              </span>
            )
          })}
        </div>
      )}

      {result ? (
        <ResultCard tool={result.tool} reason={result.reason} onReset={reset} />
      ) : (
        <QuestionCard node={currentNode} onAnswer={handleAnswer} />
      )}
    </div>
  )
}
