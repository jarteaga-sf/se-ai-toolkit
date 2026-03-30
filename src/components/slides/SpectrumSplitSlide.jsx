import { FunnelIllustration } from '../illustrations/ConceptIllustrations'

export default function SpectrumSplitSlide({ title, message, fullscreen }) {
  return (
    <div className="flex flex-col items-center justify-center max-w-[900px] mx-auto px-8">
      <h2 className="text-[32px] font-bold text-[var(--color-heading)] tracking-[-0.02em] text-center mb-3">
        {title}
      </h2>
      {message && (
        <p className="text-[17px] text-[var(--color-text-secondary)] text-center mb-8 max-w-[600px]">
          {message}
        </p>
      )}
      <FunnelIllustration />
    </div>
  )
}
