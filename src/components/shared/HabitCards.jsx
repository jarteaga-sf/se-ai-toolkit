import { GitBranch, Shield, Target, Crosshair, FileText, Database, ArrowRightLeft, Wrench, Bot, Layers, Settings, Gauge, PenLine, Search, Code, Users, Repeat, BarChart3, Briefcase, Zap, TrendingUp, Terminal, ExternalLink } from 'lucide-react'

const iconMap = {
  GitBranch,
  Shield,
  Target,
  Crosshair,
  FileText,
  Database,
  ArrowRightLeft,
  Wrench,
  Bot,
  Layers,
  Settings,
  Gauge,
  PenLine,
  Search,
  Code,
  Users,
  Repeat,
  BarChart3,
  Briefcase,
  Zap,
  TrendingUp,
  Terminal,
}

export default function HabitCards({ cards, fullscreen = false }) {
  return (
    <div className={`grid sm:grid-cols-2 gap-4 ${fullscreen ? '' : 'my-8'}`}>
      {cards.map((card, i) => {
        const Icon = iconMap[card.icon]
        return (
          <div
            key={i}
            className="bg-[var(--color-bg-white)] border border-[var(--color-border)]/60 rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
          >
            {Icon && (
              <div className="w-9 h-9 rounded-lg bg-[var(--color-surface)] flex items-center justify-center mb-3">
                <Icon size={18} className="text-[var(--color-accent)]" />
              </div>
            )}
            <div className="flex items-center gap-2 mb-1.5">
              <h4 className="font-[var(--font-heading)] text-[16px] font-bold text-[var(--color-heading)]">
                {card.title}
              </h4>
              {card.emerging && (
                <span className="text-[11px] font-bold text-[var(--color-accent)] border border-dashed border-[var(--color-accent)] rounded-full px-2 py-0.5 leading-none">
                  Emerging
                </span>
              )}
            </div>
            <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed">
              {card.description}
            </p>
            {card.link && (
              <a
                href={card.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-[14px] font-bold text-[var(--color-accent)] hover:text-[var(--color-electric)] hover:underline"
              >
                {card.link.label}
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        )
      })}
    </div>
  )
}
