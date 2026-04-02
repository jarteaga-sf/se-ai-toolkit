import TerminalPanel from '../shared/TerminalPanel'
import FeatureCards from '../shared/FeatureCards'
import StepFlow from '../shared/StepFlow'
import { ClaudeLogo, CursorLogo, SaleoLogo, MeshMeshLogo } from '../illustrations/ToolLogos'

const logos = {
  claude: ClaudeLogo,
  cursor: CursorLogo,
  saleo: SaleoLogo,
  meshmesh: MeshMeshLogo,
}

function parseBold(text) {
  const parts = text.split(/(\*\*.*?\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-semibold text-[var(--color-text)]">{part.slice(2, -2)}</strong>
    }
    return part
  })
}

export default function ToolContentSlide({ toolId, title, prose, quote, terminal, features, stepFlow }) {
  const Logo = logos[toolId]

  return (
    <div className="max-w-[800px] mx-auto px-8 w-full">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        {Logo && <Logo size={28} />}
        <h2 className="text-[28px] font-bold text-[var(--color-heading)] tracking-[-0.02em]">{title}</h2>
      </div>

      {/* Prose */}
      {prose?.length > 0 && (
        <div className="space-y-4 mb-6">
          {prose.map((p, i) => (
            <p key={i} className="text-[17px] text-[var(--color-text-prose)] leading-[1.7]">
              {parseBold(p)}
            </p>
          ))}
        </div>
      )}

      {/* Quote */}
      {quote && (
        <blockquote className="border-l-3 border-[var(--color-accent)] pl-5 my-6">
          <p className="text-[17px] text-[var(--color-text-secondary)] italic leading-relaxed">"{quote}"</p>
        </blockquote>
      )}

      {/* Terminal */}
      {terminal && (
        <TerminalPanel
          title={terminal.title}
          steps={terminal.steps}
          expandable={terminal.expandable}
          fullscreen
        />
      )}

      {/* Features */}
      {features && <FeatureCards features={features} fullscreen />}

      {/* Step Flow */}
      {stepFlow && <StepFlow stepFlow={stepFlow} />}
    </div>
  )
}
