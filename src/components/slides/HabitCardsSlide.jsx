import HabitCards from '../shared/HabitCards'
import { ClaudeLogo, CursorLogo, SaleoLogo, MeshMeshLogo } from '../illustrations/ToolLogos'

const logos = {
  claude: ClaudeLogo,
  cursor: CursorLogo,
  saleo: SaleoLogo,
  meshmesh: MeshMeshLogo,
}

export default function HabitCardsSlideComponent({ toolId, title, cards, fullscreen }) {
  const Logo = logos[toolId]

  return (
    <div className="max-w-[800px] mx-auto px-8 w-full">
      <div className="flex items-center gap-3 mb-6">
        {Logo && <Logo size={28} />}
        <h2 className="text-[28px] font-bold text-[var(--color-heading)] tracking-[-0.02em]">{title}</h2>
      </div>
      <HabitCards cards={cards} fullscreen />
    </div>
  )
}
