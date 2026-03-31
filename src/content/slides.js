/**
 * Unified slide manifest for fullscreen presentation mode.
 *
 * Live presentation (~20 min of slides):
 *   The Why           (6 slides)  — hook fast, prove thesis early, earn the tools section
 *   The Toolkit       (9 slides)  — one pass through all 4 tools + how to use them
 *   Cursor →          (9 slides)  — scenario, setup, habits, 4 demos, close
 *
 * Take-home (audience navigates via the link):
 *   Go Deeper         (6 slides)  — Karpathy/Vibe Coding + proof points + stats
 *   Deep Dives        — Use Cases, Saleo, MeshMesh, Claude Code full walkthroughs
 *   Keep Going        — Level Up, Cheat Sheet
 */

import { theWhy, theTools, goDeeper } from './big-picture'
import { claudeCode, cursor, saleo, meshmesh, useCases } from './tools'
import { levelUp, quickReference } from './action'

// ── Shared tool cards data ────────────────────────────────────────────────

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
]

// ── Cursor getting started slides ─────────────────────────────────────────

const cursorGS = cursor.tabs[1].content

const cursorGettingStartedSlides = [
  // Set the scene before showing the tool
  {
    layout: 'cinematic',
    statement: 'You just got off a call. The prospect wants a custom component. The org belongs to someone who left. You have two days.',
  },
  // Setup first — answer "how do I get this?" before "how do I use it well?"
  {
    layout: 'toolGettingStarted',
    toolId: 'cursor',
    title: 'Cursor',
    prose: [],
    stepFlow: cursorGS.stepFlow,
  },
  {
    layout: 'habitCardsSlide',
    toolId: 'cursor',
    title: 'Four habits that make the difference',
    cards: cursorGS.habitCards,
  },
  {
    layout: 'videoDemoSlide',
    stepLabel: 'Part 1 of 4',
    title: 'You walk into the room.',
    videoSrc: '/se-ai-toolkit/gifs/CursorBigPicture.gif',
    caption: 'Open the inherited project. Explore before you build. Cursor reads everything inside.',
  },
  {
    layout: 'videoDemoSlide',
    stepLabel: 'Part 2 of 4',
    title: 'You figure out what you have — then build what you need.',
    videoSrc: null,
    caption: 'Ask mode to understand. Plan mode to design. Agent mode to build. @ to give it the right context.',
  },
  {
    layout: 'videoDemoSlide',
    stepLabel: 'Part 3 of 4',
    title: 'You make it Salesforce-ready.',
    videoSrc: null,
    caption: 'Org Browser, inline edits with Cmd+K, codebase search. No tab-switching.',
  },
  {
    layout: 'videoDemoSlide',
    stepLabel: 'Part 4 of 4',
    title: 'You set it up so next time is even faster.',
    videoSrc: null,
    caption: 'Rules lock in your standards. The browser keeps docs in one window. Memory picks up where you left off.',
  },
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
  {
    layout: 'statement',
    statement: 'Thank you.',
    supporting: 'Bookmark the site and use it before your next demo. Request your license in the SE Enablement Slack channel.',
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

  // ── LIVE: The Why (6 slides) ─────────────────────────────────────────
  // Hook immediately, prove the thesis early, earn the tools section.
  // Agenda spoken verbally. Karpathy/Vibe Coding moved to take-home.
  {
    id: 'the-why',
    tier: 'big-picture',
    tierLabel: 'The Big Picture',
    title: 'The Why',
    icon: 'Lightbulb',
    slides: [
      theWhy.slides[0], // Title
      theWhy.slides[2], // Cinematic hook — moved up, no agenda detour
      theWhy.slides[3], // 57% stat
      goDeeper.slides[0], // Comparison: Describing → Proving (thesis, moved up)
      theWhy.slides[6], // Most of the value is in the thinking
      {
        layout: 'bigStat',
        value: '2.4\u00d7',
        label: 'More likely to buy from sellers who build live',
        source: 'Harvard Business Review',
      },
    ],
    exploreContent: null,
  },

  // ── LIVE: The Toolkit (9 slides) ─────────────────────────────────────
  // ONE pass through all 4 tools. "What makes tools work" restored from
  // dead code as bridge between tool cards and urgency. 2.4x moved to
  // The Why. "SE built it" kept as a spoken line, not its own slide.
  {
    id: 'the-toolkit',
    tier: 'big-picture',
    tierLabel: 'The Big Picture',
    title: 'The Toolkit',
    icon: 'Layers',
    slides: [
      // Opening frame — briefly addresses "why not ChatGPT/Copilot?"
      {
        layout: 'statement',
        statement: 'One changes how fast you demo. The others change what you can build.',
      },
      // Tool overviews — one slide per tool
      ...toolOverviewSlides,
      // Side-by-side decision anchor
      { layout: 'toolCards', cards: toolCardsData },
      // HOW to get value — restored from theTools (previously dead code)
      theTools.slides[5],
      // Urgency window
      {
        layout: 'bigStat',
        value: '12\u201318 months',
        label: 'Window to build AI fluency before it is expected',
        source: 'Gartner, 2025',
      },
      {
        layout: 'takeaway',
        text: '**Start with one.** Build something real. Show a customer.',
      },
    ],
    exploreContent: null,
  },

  // ── LIVE: Cursor → (9 slides) ───────────────────────────────────────
  // Scenario → setup → habits → 4 demos → what's next → close.
  {
    id: 'cursor-getting-started',
    tier: 'big-picture',
    tierLabel: 'The Big Picture',
    title: 'Cursor \u2192',
    icon: 'cursor',
    slides: cursorGettingStartedSlides,
    exploreContent: { type: 'tool', data: cursor },
  },

  // ── TAKE-HOME: Go Deeper (6 slides) ─────────────────────────────────
  // Karpathy/Vibe Coding mental model + proof points for those who want the full argument.
  {
    id: 'go-deeper-transition',
    tier: 'transition',
    tierLabel: null,
    title: 'Go Deeper',
    icon: null,
    slides: [{ layout: 'tierTransition', label: 'Go Deeper', supporting: 'Additional proof points — the data behind the tools.' }],
    exploreContent: null,
  },
  {
    id: 'go-deeper',
    tier: 'go-deeper',
    tierLabel: 'Go Deeper',
    title: 'Proof Points',
    icon: 'ChevronRight',
    slides: [
      goDeeper.slides[1], // "What this unlocks" iconBullets
      // Karpathy + Vibe Coding moved here from live flow — better fit for
      // technically curious audience who want the mental model
      theWhy.slides[4], // Karpathy quote
      theWhy.slides[5], // Vibe Coding illustrated concept
      {
        layout: 'bigStat',
        value: '90 minutes',
        label: 'To build what used to take six weeks',
        source: 'SE field report',
      },
      {
        layout: 'bigStat',
        value: '98.95%',
        label: 'Less time spent on demo guide prep',
        source: 'MeshMesh case study',
      },
      goDeeper.slides[3], // Agentforce activation cinematic
    ],
    exploreContent: null,
  },

  // ── TAKE-HOME: Deep Dives (4 nav dots) ────────────────────────────────
  {
    id: 'deep-dives-transition',
    tier: 'transition',
    tierLabel: null,
    title: 'Deep Dives',
    icon: null,
    slides: [{ layout: 'tierTransition', label: 'Deep Dives', supporting: 'Full walkthroughs for each tool — plus real SE use cases across all four.' }],
    exploreContent: null,
  },
  // Use cases surfaced here — previously dead code, now the opening section
  // of Deep Dives. Answers "what would I actually use this for?" for skeptics.
  {
    id: 'use-cases',
    tier: 'deep-dives',
    tierLabel: 'Deep Dives',
    title: 'Use Cases',
    icon: 'Zap',
    slides: convertLevelUpToSlides(useCases),
    exploreContent: { type: 'tool', data: useCases },
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
