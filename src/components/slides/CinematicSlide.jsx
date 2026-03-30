export default function CinematicSlide({ statement, fullscreen }) {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-[760px] mx-auto px-8">
      <h2 className="text-[54px] leading-[1.12] font-bold tracking-[-0.03em] text-white">
        {statement}
      </h2>
    </div>
  )
}
