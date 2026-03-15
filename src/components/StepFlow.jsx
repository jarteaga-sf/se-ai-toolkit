function StepItem({ number, text }) {
  return (
    <div className="flex gap-3 items-start">
      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-border-light)] flex items-center justify-center text-[13px] font-semibold font-[var(--font-mono)] text-[var(--color-text-muted)]">
        {number}
      </span>
      <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed pt-0.5">{text}</p>
    </div>
  )
}

export default function StepFlow({ stepFlow }) {
  const hasPhases = stepFlow.phases != null

  if (!hasPhases) {
    return (
      <div className="my-8 bg-[var(--color-bg-white)] border border-[var(--color-border)] rounded-lg shadow-[var(--shadow-card)] p-5 space-y-3 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-md">
        {stepFlow.steps.map((step, i) => (
          <StepItem key={i} number={i + 1} text={step} />
        ))}
      </div>
    )
  }

  let stepCounter = 0
  return (
    <div className="my-8 space-y-4">
      {stepFlow.phases.map((phase, pi) => (
        <div key={pi} className="bg-[var(--color-bg-white)] border border-[var(--color-border)] rounded-lg shadow-[var(--shadow-card)] p-5 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-md">
          <h4 className="font-[var(--font-heading)] text-[16px] font-semibold text-[var(--color-text)] mb-3">{phase.label}</h4>
          <div className="space-y-3">
            {phase.steps.map((step, si) => {
              stepCounter++
              return <StepItem key={si} number={stepCounter} text={step} />
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
