import { VibeCodingIllustration, AgentIllustration, FunnelIllustration } from '../illustrations/ConceptIllustrations'

const illustrationMap = {
  vibeCoding: VibeCodingIllustration,
  agent: AgentIllustration,
  funnel: FunnelIllustration,
}

export default function IllustratedConceptSlide({ title, subtitle, message, illustration }) {
  const Illustration = illustrationMap[illustration]

  return (
    <div className="flex flex-col items-center justify-center max-w-[min(1060px,90vw)] mx-auto px-8">
      {/* Title — centered at top */}
      <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-[var(--color-heading)] tracking-[-0.02em] mb-2 leading-[1.15] text-center">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[clamp(14px,1.5vw,17px)] text-[var(--color-text-secondary)] leading-relaxed mb-8 text-center max-w-[600px]">
          {subtitle}
        </p>
      )}
      {!subtitle && <div className="mb-8" />}

      {/* Content row — message + illustration side-by-side */}
      <div className="flex items-center justify-center gap-10 w-full">
        {message && (
          <div className="flex-1 max-w-[420px] rounded-xl bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20 px-6 py-5">
            <p className="text-[clamp(14px,1.4vw,17px)] text-[var(--color-heading)] font-medium leading-relaxed">
              {message}
            </p>
          </div>
        )}

        {Illustration && (
          <div className="flex-shrink-0">
            <Illustration />
          </div>
        )}
      </div>
    </div>
  )
}
