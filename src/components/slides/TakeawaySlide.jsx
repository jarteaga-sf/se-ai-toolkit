function parseBold(text) {
  const parts = text.split(/(\*\*.*?\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-bold text-[var(--color-heading)]">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return part
  })
}

export default function TakeawaySlide({ text, fullscreen }) {
  return (
    <div className="flex items-center justify-center max-w-[700px] mx-auto px-8">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-[var(--color-accent)]" />
        <p className="text-[26px] leading-[1.45] text-[var(--color-text-prose)] font-medium pl-8">
          {parseBold(text)}
        </p>
      </div>
    </div>
  )
}
