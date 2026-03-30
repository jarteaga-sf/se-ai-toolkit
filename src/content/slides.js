/**
 * Unified slide manifest for fullscreen presentation mode.
 *
 * Live presentation (~20 min of slides):
 *   Big Picture — The Why        (5 slides)
 *   Big Picture — The Tools      (7 slides)  ← no toolCards, it lives in Explore
 *   Big Picture — Go Deeper      (5 slides, take-home)
 *   Explore Each Tool            (5 slides: 4 overviews + toolCards summary)
 *   Getting Started with Cursor  (3 slides → bridge to live demo)
 *
 * Take-home (audience navigates via the link):
 *   Deep Dives — Saleo, MeshMesh, Claude Code
 *   Keep Going — Level Up, Cheat Sheet
 */

import { theWhy, theTools, goDeeper } from './big-picture'
import { claudeCode, cursor, saleo, meshmesh } from './tools'
import { levelUp, quickReference } from './action'

// ── Shared tool cards data ────────────────────────────────────────────────
// Defined once. Used in the Explore Each Tool summary slide only.
// toolCards was removed from Big Picture — this is its first and only appearance.

const toolCardsData = [
  {
    name: 'Saleo',
    tagline: 'Their data. Your demo. No code.',
    bestFor: 'Personalize any demo for any prospect in minutes. Your org stays clean.',
    role: 'Customer Demo Layer',
    setup: 'easy',
    logo: 'saleo',
  },
  {
    name: 'MeshMesh',
    tagline: 'Salesforce-native. No translation required.',
    bestFor: 'A six-week POC in 90 minutes. Demo guide prep down 98.95% — from 2 days to 30 minutes.',
    role: 'Native Builder — In Pilot',
    setup: 'moderate',
    logo: 'meshmesh',
  },
  {
    name: 'Cursor',
    tagline: 'AI built into the editor you already use.',
    bestFor: 'Cut custom demo prep from hours to minutes. Edit, iterate, and answer prospect asks live.',
    role: 'Smart Editor',
    setup: 'moderate',
    logo: 'cursor',
  },
  {
    name: 'Claude Code',
    tagline: 'You describe. It builds.',
    bestFor: 'One SE built a full Agentforce agent — 4 topics, 500+ tests — in about an hour. From scratch.',
    role: 'Autonomous Builder',
    setup: 'advanced',
    logo: 'claude',
  },
]

// ── Tool overview slides ──────────────────────────────────────────────────
// One slide per tool, easiest → hardest. Concise, SE-relatable examples.
// toolCards summary follows as the closing slide.

const toolOverviewSlides = [
  {
    layout: 'toolOverview',
    toolId: 'saleo',
    title: 'Saleo',
    tagline: 'Their data. Your demo. Zero risk.',
    differentiator: 'Personalizes what the prospect sees without changing a single real record.',
    examples: [
      "Swap in a prospect's company name, revenue, and pipeline stages — mid-call, in 30 seconds.",
      'Build one healthcare template. Reuse it for every healthcare prospect this quarter.',
      "Switch from the VP's pipeline view to the rep's task list without leaving the demo.",
    ],
  },
  {
    layout: 'toolOverview',
    toolId: 'meshmesh',
    title: 'MeshMesh',
    tagline: 'Salesforce-native. No translation required. (In Pilot)',
    differentiator: 'AI tool currently in pilot — already understands Salesforce objects, flows, and Agentforce patterns. You describe, it builds.',
    examples: [
      'Build a full Agentforce onboarding agent — 4 topics, 12 actions — in a single 90-minute session.',
      'Customize a demo org for a specific industry by describing the workflow, not configuring it field by field.',
      'Generate 500+ tests alongside your build so you can prove it works before the customer sees it.',
    ],
  },
  {
    layout: 'toolOverview',
    toolId: 'cursor',
    title: 'Cursor',
    tagline: 'AI built into the editor you already use.',
    differentiator: 'Edit, ask questions, and iterate on existing code — with AI helping at every step.',
    examples: [
      "Select a Lightning component, describe the change in plain English, see the diff before accepting.",
      "Inherited a project you didn't write? Ask what it does — understand it in seconds.",
      'Prospect asks for a live tweak mid-call. Make it in Cursor without breaking anything.',
    ],
  },
  {
    layout: 'toolOverview',
    toolId: 'claude',
    title: 'Claude Code',
    tagline: 'You describe. It builds.',
    differentiator: 'Reads your project, plans the approach, writes the code, runs it, and checks its own work.',
    examples: [
      'Describe an Agentforce agent end-to-end. Claude Code builds it, tests it, and deploys it.',
      'Paste in an RFP. Get technical responses mapped to Salesforce capabilities — ready to send.',
      'Generate realistic demo data for any vertical at scale: accounts, contacts, opportunities, all connected.',
    ],
  },
  {
    layout: 'toolCards',
    cards: toolCardsData,
  },
]

// ── Cursor getting started slides ─────────────────────────────────────────
// Sets the stage for the live demo. Pulls from cursor.tabs[1] (Getting Started).

const cursorGS = cursor.tabs[1].content

const cursorGettingStartedSlides = [
  // 1. Habits first — set the mindset before the steps
  {
    layout: 'habitCardsSlide',
    toolId: 'cursor',
    title: 'Four habits that make the difference',
    cards: cursorGS.habitCards,
  },

  // 2. The three steps — license, install, connect
  {
    layout: 'toolGettingStarted',
    toolId: 'cursor',
    title: 'Cursor',
    prose: [],
    stepFlow: cursorGS.stepFlow,
  },

  // 3. Cursor in action — Screen Studio recording
  // Drop the MP4 in /public/ as cursor-demo.mp4 when ready.
  {
    layout: 'videoDemoSlide',
    title: 'Cursor in Action',
    videoSrc: null,
    caption: 'Tab → Cmd+K → Cmd+L → Agent Mode — narrate along as it plays',
  },

  // 4. Solutions Enablement Plan — what's coming per tool
  {
    layout: 'iconBullets',
    title: "What's coming next",
    bullets: [
      { logo: 'saleo', title: 'Saleo', description: 'Full onboarding walkthrough.' },
      { logo: 'meshmesh', title: 'MeshMesh (Pilot)', description: 'Access + deep-dive session.' },
      { logo: 'cursor', title: 'Cursor', description: 'Hands-on workshop.' },
      { logo: 'claude', title: 'Claude Code', description: 'Advanced session.' },
    ],
  },

  // 5. Thank You — with the link. Deep Dives follow for self-serve.
  {
    layout: 'statement',
    statement: 'Thank you.',
    supporting: 'jarteaga-sf.github.io/se-ai-toolkit',
  },
]

// ── Converter: Tool → Deep-dive slides ────────────────────────────────────

function convertToolToSlides(tool) {
  const slides = []
  const overview = tool.tabs[0]?.content
  const gettingStarted = tool.tabs[1]?.content

  if (overview) {
    slides.push({
      layout: 'toolIntro',
      toolId: tool.id,
      title: tool.title,
      subtitle: tool.subtitle,
      leadParagraph: overview.prose?.[0] || '',
    })
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
    if (overview.takeaway) {
      slides.push({ layout: 'takeaway', text: overview.takeaway })
    }
  }

  if (gettingStarted) {
    slides.push({
      layout: 'toolGettingStarted',
      toolId: tool.id,
      title: tool.title,
      prose: gettingStarted.prose || [],
      stepFlow: gettingStarted.stepFlow,
      terminal: gettingStarted.terminal,
      stepFlowSecondary: gettingStarted.stepFlowSecondary,
    })
    if (gettingStarted.habitCards) {
      slides.push({
        layout: 'habitCardsSlide',
        toolId: tool.id,
        title: `${tool.title} — Best Practices`,
        cards: gettingStarted.habitCards,
      })
    }
    if (gettingStarted.takeaway) {
      slides.push({ layout: 'takeaway', text: gettingStarted.takeaway })
    }
  }

  return slides
}

// ── Converter: Level Up → Slides ──────────────────────────────────────────

function convertLevelUpToSlides(data) {
  return data.tabs.map((tab) => ({
    layout: 'levelUpTopic',
    title: tab.label,
    prose: tab.content.prose || [],
    cards: tab.content.habitCards || [],
    takeaway: tab.content.takeaway,
  }))
}

// ── Converter: Quick Reference → Slides ───────────────────────────────────

function convertQuickRefToSlides(data) {
  return [
    { layout: 'cheatSheetMatrix', toolMatrix: data.toolMatrix, title: 'When to Use Which Tool' },
    { layout: 'decisionFlowSlide', title: 'Which Tool Should I Use?' },
    { layout: 'contestCta', contest: data.contest, takeaway: data.takeaway },
  ]
}

// ── Slide Manifest ────────────────────────────────────────────────────────

export const slideManifest = [

  // ── LIVE: Big Picture (3 nav dots) ────────────────────────────────────
  {
    id: 'the-why',
    tier: 'big-picture',
    tierLabel: 'The Big Picture',
    title: 'The Why',
    icon: 'Lightbulb',
    slides: theWhy.slides,
    exploreContent: null,
  },
  {
    id: 'the-tools',
    tier: 'big-picture',
    tierLabel: 'The Big Picture',
    title: 'The Tools',
    icon: 'Layers',
    slides: theTools.slides,
    exploreContent: null,
  },
  {
    id: 'go-deeper',
    tier: 'big-picture',
    tierLabel: 'The Big Picture',
    title: 'Go Deeper',
    icon: 'ChevronRight',
    slides: goDeeper.slides,
    exploreContent: null,
  },

  // ── LIVE: Explore (2 nav dots) ────────────────────────────────────────
  {
    id: 'explore-transition',
    tier: 'transition',
    tierLabel: null,
    title: 'Explore Each Tool',
    icon: null,
    slides: [{ layout: 'tierTransition', label: 'Explore Each Tool', supporting: 'A closer look at all four — what they do, how they differ, and what you can build.' }],
    exploreContent: null,
  },
  {
    id: 'tool-overview',
    tier: 'explore',
    tierLabel: 'Explore',
    title: 'All Four Tools',
    icon: 'Layers',
    slides: toolOverviewSlides,
    exploreContent: null,
  },
  {
    id: 'cursor-getting-started',
    tier: 'explore',
    tierLabel: 'Explore',
    title: 'Cursor →',
    icon: 'cursor',
    slides: cursorGettingStartedSlides,
    exploreContent: { type: 'tool', data: cursor },
  },

  // ── TAKE-HOME: Deep Dives (3 nav dots) ────────────────────────────────
  {
    id: 'deep-dives-transition',
    tier: 'transition',
    tierLabel: null,
    title: 'Deep Dives',
    icon: null,
    slides: [{ layout: 'tierTransition', label: 'Deep Dives', supporting: 'Full walkthroughs for Saleo, MeshMesh, and Claude Code — at your own pace.' }],
    exploreContent: null,
  },
  {
    id: 'saleo',
    tier: 'deep-dives',
    tierLabel: 'Deep Dives',
    title: 'Saleo',
    icon: 'saleo',
    slides: convertToolToSlides(saleo),
    exploreContent: { type: 'tool', data: saleo },
  },
  {
    id: 'meshmesh',
    tier: 'deep-dives',
    tierLabel: 'Deep Dives',
    title: 'MeshMesh',
    icon: 'meshmesh',
    slides: convertToolToSlides(meshmesh),
    exploreContent: { type: 'tool', data: meshmesh },
  },
  {
    id: 'claude-code',
    tier: 'deep-dives',
    tierLabel: 'Deep Dives',
    title: 'Claude Code',
    icon: 'claude',
    slides: convertToolToSlides(claudeCode),
    exploreContent: { type: 'tool', data: claudeCode },
  },

  // ── TAKE-HOME: Keep Going (2 nav dots) ────────────────────────────────
  {
    id: 'keep-going-transition',
    tier: 'transition',
    tierLabel: null,
    title: 'Keep Going',
    icon: null,
    slides: [{ layout: 'tierTransition', label: 'Keep Going', supporting: 'Once you have the basics, these concepts unlock the next gear.' }],
    exploreContent: null,
  },
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

// ── Derived Helpers ───────────────────────────────────────────────────────

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

export const sectionStartMap = {}
let idx = 0
slideManifest.forEach((section) => {
  sectionStartMap[section.id] = idx
  idx += section.slides.length
})

export const navSections = slideManifest.filter((s) => s.tier !== 'transition')

export const totalSlides = allSlides.length
