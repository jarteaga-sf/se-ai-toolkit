export default function StatementSlide({ statement, supporting, fullscreen, isDarkBg }) {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-[960px] mx-auto px-8">
      <h2
        className={`text-[56px] leading-[1.1] font-bold tracking-[-0.03em] mb-6 ${
          isDarkBg ? 'text-white' : 'text-[var(--color-heading)]'
        }`}
      >
        {statement}
      </h2>
      {supporting && (
        <p
          className={`text-[20px] leading-relaxed max-w-[640px] ${
            isDarkBg ? 'text-white/40' : 'text-[var(--color-text-muted)]'
          }`}
        >
          {supporting}
        </p>
      )}
    </div>
  )
}
