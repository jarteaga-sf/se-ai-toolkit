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
      return (
        <strong key={i} className="font-semibold text-[var(--color-heading)]">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return part
  })
}

export default function ToolIntroSlide({ toolId, title, subtitle, leadParagraph, fullscreen }) {
  const Logo = logos[toolId]

  return (
    <div className="flex flex-col items-center justify-center text-center max-w-[700px] mx-auto px-8">
      {Logo && (
        <div className="mb-5">
          <Logo size={64} />
        </div>
      )}
      <h2 className="text-[42px] font-bold text-[var(--color-heading)] tracking-[-0.02em] mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[20px] text-[var(--color-accent)] font-medium mb-6">
          {subtitle}
        </p>
      )}
      {leadParagraph && (
        <p className="text-[18px] text-[var(--color-text-secondary)] leading-relaxed max-w-[580px]">
          {parseBold(leadParagraph)}
        </p>
      )}
    </div>
  )
}
