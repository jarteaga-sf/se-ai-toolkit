function fakeTimestamp() {
  const hours = [9, 10, 11, 1, 2, 3, 4]
  const mins = [12, 27, 32, 45, 3, 58]
  const h = hours[Math.floor(Math.random() * hours.length)]
  const m = mins[Math.floor(Math.random() * mins.length)]
  const suffix = h >= 9 && h <= 11 ? 'AM' : 'PM'
  return `${h}:${String(m).padStart(2, '0')} ${suffix}`
}

const timestamps = {}

// Inner content only — card styling is provided by the parent bento cell
export default function SlackMessage({ quote, attribution, accent }) {
  if (!timestamps[attribution]) {
    timestamps[attribution] = fakeTimestamp()
  }
  const time = timestamps[attribution]

  return (
    <div className="w-full h-full flex flex-col justify-center px-5 py-4">
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-[13px] font-bold text-[#1D1C1D]">
          {attribution}
        </span>
        <span className="text-[11px] text-[#616061]">
          {time}
        </span>
      </div>
      <div
        className="border-l-[3px] pl-3"
        style={{ borderColor: accent }}
      >
        <p className="text-[13px] text-[#1D1C1D] leading-[1.46]">
          {quote}
        </p>
      </div>
    </div>
  )
}
