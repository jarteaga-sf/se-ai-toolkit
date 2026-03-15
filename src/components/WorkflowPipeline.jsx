import { ChevronRight } from 'lucide-react'
import { ClaudeLogo, CursorLogo, SaleoLogo } from './ToolLogos'

const logos = {
  claude: ClaudeLogo,
  cursor: CursorLogo,
  saleo: SaleoLogo,
}

export default function WorkflowPipeline({ pipeline }) {
  return (
    <div className="my-8 flex flex-col sm:flex-row items-stretch gap-3">
      {pipeline.map((phase, i) => {
        const Logo = logos[phase.logo]
        return (
          <div key={i} className="flex flex-col sm:flex-row items-stretch flex-1">
            <div className="bg-[var(--color-bg-white)] border border-[var(--color-border)] rounded-lg shadow-[var(--shadow-card)] p-5 flex-1 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-center gap-2.5 mb-2">
                {Logo && <Logo size={24} />}
                <span className="text-[14px] font-medium text-[var(--color-text-muted)]">{phase.tool}</span>
              </div>
              <h4 className="font-[var(--font-heading)] text-[18px] font-semibold text-[var(--color-text)] mb-1.5">{phase.phase}</h4>
              <p className="text-[14px] text-[var(--color-text-secondary)] leading-relaxed">{phase.description}</p>
            </div>
            {i < pipeline.length - 1 && (
              <div className="flex items-center justify-center py-1 sm:px-1 sm:py-0">
                <ChevronRight size={20} className="text-[var(--color-text-muted)] rotate-90 sm:rotate-0" />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
