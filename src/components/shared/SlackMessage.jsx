import { Quote } from 'lucide-react'

// Quote card — inner content only, card styling provided by parent bento cell
export default function SlackMessage({ quote, attribution, accent }) {
  return (
    <div className="w-full h-full flex flex-col p-4">
      <Quote size={18} className="flex-shrink-0 mb-2" style={{ color: accent }} />
      <p className="text-[12.5px] text-[var(--color-text)] leading-[1.5] italic flex-1">
        {quote}
      </p>
      <p className="text-[11px] font-semibold mt-2 flex-shrink-0" style={{ color: accent }}>
        — {attribution}
      </p>
    </div>
  )
}
