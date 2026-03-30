export default function TierTransitionSlide({ label, supporting, fullscreen }) {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-[900px] mx-auto px-8">
      <p className="text-[15px] font-bold uppercase tracking-[0.15em] text-[var(--color-cloud-light)] mb-5">
        Next Section
      </p>
      <h2 className="text-[56px] font-bold text-white tracking-[-0.03em] mb-5">
        {label}
      </h2>
      {supporting && (
        <p className="text-[24px] text-white/60 leading-relaxed">
          {supporting}
        </p>
      )}
    </div>
  )
}
