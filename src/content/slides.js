/**
 * Unified slide manifest for fullscreen presentation mode.
 * Imports from existing content files and converts everything to slide format.
 */
import { vibeCoding, whySesCare } from './big-picture'
import { claudeCode, cursor, saleo, meshmesh, useCases } from './tools'
import { levelUp, quickReference } from './action'

// ── Converter: Tool → Slides ──────────────────────────────────────────────

function convertToolToSlides(tool) {
  const slides = []
  const overview = tool.tabs[0]?.content
  const gettingStarted = tool.tabs[1]?.content

  if (overview) {
    // Slide 1: Tool Intro — title, subtitle, lead paragraph
    slides.push({
      layout: 'toolIntro',
      toolId: tool.id,
      title: tool.title,
      subtitle: tool.subtitle,
      leadParagraph: overview.prose?.[0] || '',
    })

    // Slide 2: Tool Content — remaining prose + quote + primary component
    slides.push({
      layout: 'toolContent',
      toolId: tool.id,
      title: tool.title,
      prose: overview.prose?.slice(1) || [],
      quote: overview.quote,
      terminal: overview.terminal,
      features: overview.features,
      stepFlow: overview.stepFlow,
    })

    // Slide 3: Overview Takeaway
    if (overview.takeaway) {
      slides.push({
        layout: 'takeaway',
        text: overview.takeaway,
      })
    }
  }

  if (gettingStarted) {
    // Slide 4: Getting Started — prose + step flow
    slides.push({
      layout: 'toolGettingStarted',
      toolId: tool.id,
      title: tool.title,
      prose: gettingStarted.prose || [],
      stepFlow: gettingStarted.stepFlow,
      terminal: gettingStarted.terminal,
      stepFlowSecondary: gettingStarted.stepFlowSecondary,
    })

    // Slide 5: Habit Cards (if present)
    if (gettingStarted.habitCards) {
      slides.push({
        layout: 'habitCardsSlide',
        toolId: tool.id,
        title: `${tool.title} — Best Practices`,
        cards: gettingStarted.habitCards,
      })
    }

    // Slide 6: Getting Started Takeaway
    if (gettingStarted.takeaway) {
      slides.push({
        layout: 'takeaway',
        text: gettingStarted.takeaway,
      })
    }
  }

  return slides
}

// ── Converter: Use Cases → Slides ─────────────────────────────────────────

function convertUseCasesToSlides(data) {
  return data.tabs.map((tab) => ({
    layout: 'useCaseCards',
    toolName: tab.label,
    cards: tab.content.habitCards,
  }))
}

// ── Converter: Level Up → Slides ──────────────────────────────────────────

function convertLevelUpToSlides(data) {
  const slides = []
  data.tabs.forEach((tab) => {
    slides.push({
      layout: 'levelUpTopic',
      title: tab.label,
      prose: tab.content.prose || [],
      cards: tab.content.habitCards || [],
      takeaway: tab.content.takeaway,
    })
  })
  return slides
}

// ── Converter: Quick Reference → Slides ───────────────────────────────────

function convertQuickRefToSlides(data) {
  return [
    {
      layout: 'cheatSheetMatrix',
      toolMatrix: data.toolMatrix,
      title: 'When to Use Which Tool',
    },
    {
      layout: 'decisionFlowSlide',
      title: 'Which Tool Should I Use?',
    },
    {
      layout: 'contestCta',
      contest: data.contest,
      takeaway: data.takeaway,
    },
  ]
}

// ── Build the full slide manifest ─────────────────────────────────────────

export const slideManifest = [
  // ── TIER: The Big Picture ──────────────────────────────────────────────
  {
    id: 'vibe-coding',
    tier: 'big-picture',
    tierLabel: 'The Big Picture',
    title: 'What',
    icon: 'Zap',
    slides: vibeCoding.slides,
    exploreContent: null, // Big Picture slides ARE the full content
  },
  {
    id: 'why-ses-care',
    tier: 'big-picture',
    tierLabel: 'The Big Picture',
    title: 'How',
    icon: 'Layers',
    slides: whySesCare.slides,
    exploreContent: null,
  },
  {
    id: 'use-cases',
    tier: 'big-picture',
    tierLabel: 'The Big Picture',
    title: 'Why',
    icon: 'Globe',
    slides: convertUseCasesToSlides(useCases),
    exploreContent: { type: 'tool', data: useCases },
  },

  // ── Tier Transition ────────────────────────────────────────────────────
  {
    id: 'tools-transition',
    tier: 'transition',
    tierLabel: null,
    title: 'The Tools',
    icon: null,
    slides: [{ layout: 'tierTransition', label: 'The Tools', supporting: 'Four tools. Different strengths. All available to you today.' }],
    exploreContent: null,
  },

  // ── TIER: The Tools ────────────────────────────────────────────────────
  {
    id: 'saleo',
    tier: 'tools',
    tierLabel: 'The Tools',
    title: 'Saleo',
    icon: 'saleo',
    slides: convertToolToSlides(saleo),
    exploreContent: { type: 'tool', data: saleo },
  },
  {
    id: 'meshmesh',
    tier: 'tools',
    tierLabel: 'The Tools',
    title: 'MeshMesh',
    icon: 'meshmesh',
    slides: convertToolToSlides(meshmesh),
    exploreContent: { type: 'tool', data: meshmesh },
  },
  {
    id: 'cursor',
    tier: 'tools',
    tierLabel: 'The Tools',
    title: 'Cursor',
    icon: 'cursor',
    slides: convertToolToSlides(cursor),
    exploreContent: { type: 'tool', data: cursor },
  },
  {
    id: 'claude-code',
    tier: 'tools',
    tierLabel: 'The Tools',
    title: 'Claude Code',
    icon: 'claude',
    slides: convertToolToSlides(claudeCode),
    exploreContent: { type: 'tool', data: claudeCode },
  },

  // ── Tier Transition ────────────────────────────────────────────────────
  {
    id: 'keep-going-transition',
    tier: 'transition',
    tierLabel: null,
    title: 'Keep Going',
    icon: null,
    slides: [{ layout: 'tierTransition', label: 'Keep Going', supporting: 'Once you have the basics, these concepts unlock the next gear.' }],
    exploreContent: null,
  },

  // ── TIER: Keep Going ───────────────────────────────────────────────────
  {
    id: 'level-up',
    tier: 'keep-going',
    tierLabel: 'Keep Going',
    title: 'Level Up',
    icon: 'TrendingUp',
    slides: convertLevelUpToSlides(levelUp),
    exploreContent: { type: 'tool', data: levelUp },
  },
  {
    id: 'quick-reference',
    tier: 'keep-going',
    tierLabel: 'Keep Going',
    title: 'Cheat Sheet',
    icon: 'BookOpen',
    slides: convertQuickRefToSlides(quickReference),
    exploreContent: { type: 'quickRef', data: quickReference },
  },
]

// ── Derived helpers ──────────────────────────────────────────────────────

/** Flat array of all slides with section metadata attached */
export const allSlides = slideManifest.flatMap((section, sIdx) =>
  section.slides.map((slide) => ({
    slide,
    sectionId: section.id,
    sectionTitle: section.title,
    sectionIndex: sIdx,
    tierLabel: section.tierLabel,
    tier: section.tier,
    exploreContent: section.exploreContent,
  }))
)

/** Section start index map (sectionId → first slide global index) */
export const sectionStartMap = {}
let idx = 0
slideManifest.forEach((section) => {
  sectionStartMap[section.id] = idx
  idx += section.slides.length
})

/** Navigable sections (excludes transitions) for DockNav */
export const navSections = slideManifest.filter((s) => s.tier !== 'transition')

/** Total slide count */
export const totalSlides = allSlides.length
