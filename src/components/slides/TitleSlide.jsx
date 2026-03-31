export default function TitleSlide({ title, accent, subtitle, badges, fullscreen }) {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-[960px] mx-auto px-8">
      {/* Logo + divider */}
      <div className="flex items-center gap-4 mb-12">
        <img
          src="https://assets.meshmesh.io/system/salesforce-with-type-logo.svg"
          alt="Salesforce"
          className="h-10 w-auto brightness-0 invert"
        />
        <div className="w-px h-8 bg-white/25" />
        <span className="text-[18px] font-bold text-white/80 tracking-wide">
          Solutions Center of Excellence
        </span>
      </div>

      {/* Main headline */}
      <h1 className="text-[clamp(36px,5.5vw,64px)] leading-[1.08] font-bold tracking-[-0.03em] text-white mb-5">
        {title}{' '}
        {accent && (
          <span className="text-[var(--color-yellow)]">{accent}</span>
        )}
      </h1>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-[22px] leading-relaxed text-white/60 max-w-[640px] mb-10">
          {subtitle}
        </p>
      )}

      {/* Badge row */}
      {badges && badges.length > 0 && (
        <div className="flex items-center gap-3">
          {badges.map((badge, i) => (
            <span
              key={i}
              className="px-5 py-2 rounded-full text-[14px] font-medium text-white/70"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
