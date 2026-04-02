import ToolCards from '../shared/ToolCards'

export default function ToolCardsSlide({ cards }) {
  return (
    <div className="max-w-[1000px] mx-auto px-4 w-full">
      <ToolCards cards={cards} />
    </div>
  )
}
