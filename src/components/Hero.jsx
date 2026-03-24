import { useState, useEffect } from 'react'
import { ClaudeLogo, CursorLogo, SaleoLogo, MeshMeshLogo } from './ToolLogos'

const tools = [
  { Logo: SaleoLogo, name: 'Saleo', delay: 200 },
  { Logo: MeshMeshLogo, name: 'MeshMesh', delay: 400 },
  { Logo: CursorLogo, name: 'Cursor', delay: 600 },
  { Logo: ClaudeLogo, name: 'Claude Code', delay: 800 },
]

export default function Hero() {
  const [visible, setVisible] = useState([false, false, false, false])

  useEffect(() => {
    tools.forEach((tool, i) => {
      setTimeout(() => {
        setVisible((prev) => {
          const next = [...prev]
          next[i] = true
          return next
        })
      }, tool.delay)
    })
  }, [])

  return (
    <div className="pt-12 md:pt-20 pb-8 md:pb-12 px-6 md:px-10 flex justify-center">
      <div className="w-full max-w-[780px] text-center">
        <h1 className="text-[40px] md:text-[56px] leading-[1.05] tracking-[-0.035em] text-[var(--color-heading)] mb-4">
          Describe what you want. Watch it happen.
        </h1>
        <p className="text-[18px] md:text-[20px] text-[var(--color-text-muted)] font-[350] leading-[1.5] mb-6">
          An interactive guide to AI tools that turn a week of prep into an afternoon -- built for the "How I AI" session and your take-home reference.
        </p>
        <div className="flex justify-center mb-8">
          <div className="w-[120px] h-[2px] rounded-full bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-heading)] to-[var(--color-accent)] animate-pulse" />
        </div>
        <div className="flex items-center justify-center gap-8">
          {tools.map((tool, i) => (
            <div
              key={tool.name}
              className={`flex flex-col items-center gap-2 transition-all duration-500 ease-out ${
                visible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <tool.Logo size={40} />
              </div>
              <span className="text-[13px] font-medium text-[var(--color-text-secondary)]">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
