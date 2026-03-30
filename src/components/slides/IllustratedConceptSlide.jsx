import { VibeCodingIllustration, AgentIllustration, FunnelIllustration } from '../illustrations/ConceptIllustrations'

const illustrationMap = {
  vibeCoding: VibeCodingIllustration,
  agent: AgentIllustration,
  funnel: FunnelIllustration,
}

export default function IllustratedConceptSlide({ title, subtitle, message, illustration, fullscreen }) {
  const Illustration = illustrationMap[illustration]

  return (
    <div className="flex items-center justify-center gap-12 max-w-[960px] mx-auto px-8">
      {/* Text */}
      <div className="flex-1 max-w-[420px]">
        <h2 className="text-[36px] font-bold text-[var(--color-heading)] tracking-[-0.02em] mb-4 leading-[1.15]">
          {title}
        </h2>
        <p className="text-[17px] text-[var(--color-text-secondary)] leading-relaxed mb-6">
          {subtitle}
        </p>
        {message && (
          <div className="rounded-xl bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20 px-5 py-4">
            <p className="text-[15px] text-[var(--color-heading)] font-medium leading-relaxed">
              {message}
            </p>
          </div>
        )}
      </div>

      {/* Illustration */}
      {Illustration && (
        <div className="flex-shrink-0">
          <Illustration />
        </div>
      )}
    </div>
  )
}
