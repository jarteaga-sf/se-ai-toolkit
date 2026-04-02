/**
 * Unified slide manifest for fullscreen presentation mode.
 *
 * Live presentation (~12 min of slides + live Cursor demo):
 *   The Why           (5 slides)  — SE pain hook, 80% stat, thesis, non-dev reassurance
 *   The Toolkit       (8 slides)  — landscape, 4 tools (Cursor last), SE proof, principles, CTA
 *   Cursor →          (6 slides)  — scenario, setup, observation framework → HANDOFF → habits, close
 *
 * Take-home (audience navigates via the link):
 *   Start Here        (4 slides)  — Pick your starting point, prompting skills, setup habits
 *   Playbooks         (6 slides)  — Task-based guides: demo, POC, RFP, code, data, call prep
 *   Tool Guides       — Saleo, Cursor workflows, MeshMesh, Claude Code deep dives
 *   Keep Going        — Level Up (Skills, MCP, Commands, Context Files), Cheat Sheet
 */

import { theWhy, theTools, startHere } from './big-picture'
import { claudeCode, cursor, saleo, meshmesh, playbooks } from './tools'
import { levelUp, quickReference } from './action'

// ── Shared tool cards data ────────────────────────────────────────────────

const toolCardsData = [
  {
    name: 'Saleo',
    tagline: 'Their data. Your demo. No code.',
    bestFor: 'Personalize any demo in minutes. Zero code. Your org stays clean.',
    role: 'Demo Personalization',
    setup: 'easy',
    logo: 'saleo',
  },
  {
    name: 'MeshMesh',
    tagline: 'Salesforce-native. No translation required.',
    bestFor: 'Configure Salesforce-native solutions — Agentforce, flows, custom objects — without writing code. In pilot.',
    role: 'Native Configurator',
    setup: 'moderate',
    logo: 'meshmesh',
  },
  {
    name: 'Cursor',
    tagline: 'One editor for the whole deal cycle.',
    bestFor: 'Discovery notes, RFx responses, solution design, demo builds — one AI editor for the entire deal.',
    role: 'AI Editor',
    setup: 'moderate',
    logo: 'cursor',
  },
  {
    name: 'Claude Code',
    tagline: 'You describe. It builds.',
    bestFor: 'Builds from scratch: architecture docs, presentation decks, full agent deployments. Describe the goal, it handles the steps.',
    role: 'Autonomous Builder',
    setup: 'advanced',
    logo: 'claude',
  },
]

// ── Tool overview slides ──────────────────────────────────────────────────

// Reordered: Saleo → MeshMesh → Claude Code → Cursor (last, bridges to demo)
const toolOverviewSlides = [
  {
    layout: 'toolOverview',
    toolId: 'saleo',
    title: 'Saleo',
    tagline: 'Their data. Your demo. Zero risk.',
    examples: [
      'Swap in prospect data mid-call. 30 seconds.',
      'One industry template. Reuse it all quarter.',
      "VP view to rep view. One click, no tab switch.",
    ],
    seVoice: {
      quote: 'I used it on a retail call last week — swapped in their ops data in under a minute. Completely different demo.',
      attribution: 'SE, Retail vertical',
    },
  },
  {
    layout: 'toolOverview',
    toolId: 'meshmesh',
    title: 'MeshMesh',
    tagline: 'Salesforce-native. No translation required. (In Pilot)',
    examples: [
      'Describe the workflow. It builds the org.',
      'Wire Agentforce topics and actions. No Apex.',
      'Auto-generated test suites with every build.',
    ],
    seVoice: {
      quote: 'Described the Agentforce workflow I needed. It built the topics, actions, and wired the flows — without me touching a single metadata file.',
      attribution: 'SE, pilot user',
    },
  },
  {
    layout: 'toolOverview',
    toolId: 'claude',
    title: 'Claude Code',
    tagline: 'You describe. It builds.',
    examples: [
      'RFP in. Technical responses out. Ready to send.',
      'Describe the agent. It builds, tests, and deploys.',
      'Presentation deck: 2 minutes, not 2 hours.',
    ],
    seVoice: {
      quote: 'Gave it our discovery notes and the customer\'s 10-K. It drafted the full architecture readback in under 5 minutes. I spent the rest of the time making it mine.',
      attribution: 'Principal SE',
    },
  },
  {
    layout: 'toolOverview',
    toolId: 'cursor',
    title: 'Cursor',
    tagline: 'One editor for the whole deal cycle.',
    examples: [
      'Discovery to solution design to build. One project.',
      'Discovery notes in. Architecture readback out.',
      'Live change mid-call. Describe, review, accept. Done.',
    ],
    seVoice: {
      quote: 'I run the whole deal cycle in one Cursor project — discovery notes, RFx responses, solution design, the actual build. 70% docs, 30% code.',
      attribution: 'Principal SE',
    },
  },
]

// ── Cursor getting started slides ─────────────────────────────────────────

const cursorGS = cursor.tabs[2].content

// Pre-handoff: scenario → setup → observation framework for the live demo
const cursorPreHandoffSlides = [
  {
    layout: 'cinematic',
    statement: 'You just got your Cursor license. You open it for the first time. Now what?',
  },
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
    title: 'What to watch for',
    cards: [
      { icon: 'Eye', title: 'Watch it autocomplete', description: 'It suggests code before you type it. Just press Tab.' },
      { icon: 'Layers', title: 'Watch the three modes', description: 'Ask to understand. Plan to design. Agent to build.' },
      { icon: 'AtSign', title: 'Watch the @ trick', description: 'It pulls in files and docs without copy-pasting. That\'s what separates this from ChatGPT.' },
      { icon: 'Shield', title: 'Watch the review step', description: 'Every change is shown before it\'s committed. Nothing happens without your approval.' },
    ],
  },
]

// Post-demo: habits (now they land), what's next, close/CTA
const cursorPostDemoSlides = [
  {
    layout: 'habitCardsSlide',
    toolId: 'cursor',
    title: 'Four habits that make the difference',
    cards: cursorGS.habitCards,
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
    layout: 'takeaway',
    text: 'The next time you open Cursor — **you\'ll know the first move.**',
  },
]

// Cursor workflow walkthroughs — replace the incomplete video demo slides.
// Three scenarios: Ask mode → Plan+Agent mode → rules file setup.
const cursorWorkflowSlides = [
  {
    layout: 'toolContent',
    toolId: 'cursor',
    title: 'Workflow 1 — Understand what you have',
    prose: [
      'You inherit a project. Or you open something you built months ago and can\'t remember how it works. **Ask mode is your starting point — never start editing code you haven\'t understood.**',
      'The prompt is always the same: "I just inherited this project. Give me a one-page summary: what it does, how it\'s structured, which files matter most, and what I\'d change to [your goal]."',
    ],
    terminal: {
      title: 'Ask Mode in Action',
      steps: [
        { type: 'output', content: '// Open Cursor → Cmd+L → switch to Ask mode' },
        { type: 'output', content: '' },
        { type: 'output', content: '> I just inherited this Salesforce demo project. Give me a one-page summary: what it does, how it\'s structured, which files matter most, and what I\'d need to change to add a healthcare vertical.' },
        { type: 'output', content: '' },
        { type: 'claude-thinking', content: 'Reading AccountDashboard.jsx, CaseList.jsx, AgentflowPanel.jsx...' },
        { type: 'claude-response', content: 'This is an LWC project connected to a Salesforce demo org. 3 main components: AccountDashboard (pipeline overview), CaseList (open cases by priority), AgentflowPanel (Agentforce agent UI).' },
        { type: 'output', content: '' },
        { type: 'claude-response', content: 'For a healthcare vertical: update industry labels in AccountDashboard.js, add healthcare case types to CaseList, adjust agent topic descriptions in AgentflowPanel. No structural changes needed.' },
      ],
    },
    quote: 'Ten minutes in Ask mode. I knew the whole project — files, dependencies, what to change. That used to take me half a day.',
  },
  {
    layout: 'toolContent',
    toolId: 'cursor',
    title: 'Workflow 2 — Build what you need',
    prose: [
      'Once you understand the project, you build. **Plan mode shows you the full approach before anything changes. Agent mode executes it.** Together, they mean no surprises.',
      'The sequence is always: Plan → review → Agent → review the diff → accept. Skip any step and you\'re flying blind.',
    ],
    terminal: {
      title: 'Plan Then Build',
      steps: [
        { type: 'output', content: '> [Plan mode] I need to add a "Contract Value" field to AccountDashboard. Show me the full approach before touching anything.' },
        { type: 'output', content: '' },
        { type: 'claude-response', content: 'Plan: (1) Add contractValue to AccountDashboard.js data fetch, (2) Update template to display it, (3) Add label to metadata. No existing tests affected. 3 files total.' },
        { type: 'output', content: '' },
        { type: 'output', content: '> [Agent mode] Execute the plan.' },
        { type: 'output', content: '' },
        { type: 'claude-thinking', content: 'Updating AccountDashboard.js, AccountDashboard.html, AccountDashboard.js-meta.xml...' },
        { type: 'claude-response', content: 'Done. 3 files changed. Contract Value now displays in the header. Review the diff below — run npm test to confirm no regressions.' },
      ],
    },
    quote: 'Prospect asked for a live change mid-call. Described it in Agent mode. Reviewed the diff. Accepted. Done before they finished the sentence.',
  },
  {
    layout: 'toolContent',
    toolId: 'cursor',
    title: 'Workflow 3 — Set it up so next time is faster',
    prose: [
      'The compounding habit: after every project, spend five minutes making the next session better. A rules file means you never re-explain your conventions.',
      '**Write it once. Every future session in that project inherits it automatically.**',
    ],
    terminal: {
      title: 'Lock In Your Standards',
      steps: [
        { type: 'command', content: 'touch .cursorrules' },
        { type: 'output', content: '' },
        { type: 'file-change', content: '+ # Salesforce Demo Project\n+ \n+ ## Stack\n+ - LWC + Apex + Salesforce CLI\n+ - Connected to: my-demo-org.salesforce.com\n+ \n+ ## Conventions\n+ - Components use PascalCase\n+ - Never modify .force-app/main/classes directly\n+ - Deploy with: sf project deploy start\n+ \n+ ## Do not touch\n+ - CustomerDataPackage/ (managed, read-only)' },
        { type: 'output', content: '' },
        { type: 'claude-response', content: 'Rules loaded. These conventions apply automatically to every session in this project — no need to repeat them.' },
      ],
    },
    quote: 'I wrote the rules file once. Three months later every project in Cursor just works — consistent code, consistent deployments, no re-explaining.',
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

  // tabs[2+] — optional extra tabs (e.g. "Prompting Tips", "Tips & Patterns")
  // Each generates a levelUpTopic slide if it has prose or habitCards.
  const extraTabs = tool.tabs.slice(2)
  for (const tab of extraTabs) {
    if (tab.content.prose?.length || tab.content.habitCards?.length) {
      slides.push({
        layout: 'levelUpTopic',
        title: tab.label,
        prose: tab.content.prose || [],
        cards: tab.content.habitCards || [],
        takeaway: tab.content.takeaway,
      })
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

  // ── LIVE: The Why (5 slides) ──────────────────────────────────────────
  // SE pain first, then customer behavior, then thesis, then non-dev reassurance.
  {
    id: 'the-why',
    tier: 'big-picture',
    tierLabel: 'The Big Picture',
    title: 'The Why',
    icon: 'Lightbulb',
    slides: [
      theWhy.slides[0], // Title (updated subtitle: "From prep to proof — faster.")
      theWhy.slides[2], // Cinematic: "You prepped for three hours..."
      theWhy.slides[3], // BigStat: 80% (Gartner, 2024)
      // Describing → Proving — the core thesis slide (inlined from former goDeeper)
      {
        layout: 'comparison',
        left: { icon: 'PenLine', label: 'Describing the Product', description: 'Slide decks. Canned demos. Two days of prep.' },
        right: { icon: 'Wand2', label: 'Proving the Product', description: 'Built for them. Before the call. Ready when they are.' },
        connector: '\u2192',
      },
      {
        layout: 'bigStat',
        value: '63%',
        label: 'of people using AI coding tools today are not developers',
        source: 'State of Vibe Coding, 2026',
      },
    ],
    exploreContent: null,
  },

  // ── LIVE: The Toolkit (8 slides) ────────────────────────────────────
  // ToolCards opens → 4 tools (Cursor last) → SE proof → principles → CTA
  {
    id: 'the-toolkit',
    tier: 'big-picture',
    tierLabel: 'The Big Picture',
    title: 'The Toolkit',
    icon: 'Layers',
    slides: [
      // Landscape orientation — all 4 at once before diving in
      { layout: 'toolCards', cards: toolCardsData },
      // Tool overviews — Saleo, MeshMesh, Claude Code, Cursor (last = bridge to demo)
      ...toolOverviewSlides,
      // The stack in action — combined workflow story
      {
        layout: 'iconBullets',
        title: 'The Stack in Action',
        bullets: [
          { logo: 'claude', title: 'Claude Code writes it', description: 'RFP responses, agent builds, presentation decks — describe the goal, it handles the steps.' },
          { logo: 'meshmesh', title: 'MeshMesh configures it', description: 'Wires the Salesforce metadata, flows, and Agentforce setup — no code required.' },
          { logo: 'saleo', title: 'Saleo personalizes it', description: 'Their data in the demo. Their company, their pipeline, their use case.' },
        ],
      },
      // Principles — grounded with examples. Bullet 1 includes data guardrail.
      {
        layout: 'iconBullets',
        title: 'What makes these tools work',
        bullets: [
          { icon: 'FileText', title: 'Start with context', description: 'The more specific you are about the industry, the business model, and the deal — the better. Use what\u2019s publicly available.' },
          { icon: 'User', title: 'You know the deal', description: 'AI is fast. You know the room. Your judgment is the thing AI can\u2019t replace — it just runs faster now.' },
          { icon: 'TrendingUp', title: 'Make it yours', description: 'Review everything. Adapt the output. The tool gives you a first draft in minutes — you make it customer-ready.' },
        ],
      },
      {
        layout: 'takeaway',
        text: '**Start with one.** Build something real. Show a customer.',
      },
    ],
    exploreContent: null,
  },

  // ── LIVE: Cursor → Pre-handoff (3 slides) ───────────────────────────
  // Scenario → setup → observation framework → HANDOFF to demoing SE
  {
    id: 'cursor-getting-started',
    tier: 'big-picture',
    tierLabel: 'The Big Picture',
    title: 'Cursor \u2192',
    icon: 'cursor',
    slides: cursorPreHandoffSlides,
    exploreContent: { type: 'tool', data: cursor },
  },

  // ── LIVE: Cursor → Post-demo (3 slides) ─────────────────────────────
  // Presenter returns after live demo: habits, what's next, close/CTA
  {
    id: 'cursor-close',
    tier: 'big-picture',
    tierLabel: 'The Big Picture',
    title: 'Close',
    icon: 'CheckCircle',
    slides: cursorPostDemoSlides,
    exploreContent: null,
  },

  // ── TAKE-HOME: Start Here (4 slides) ─────────────────────────────────
  // First stop after the live session. Purpose: bridge from "interested"
  // to "doing it." Pick a starting point + learn to prompt well.
  {
    id: 'start-here-transition',
    tier: 'transition',
    tierLabel: null,
    title: 'Start Here',
    icon: null,
    slides: [{ layout: 'tierTransition', label: 'Start Here', supporting: 'Pick your tool, learn to prompt well, and get your first win.' }],
    exploreContent: null,
  },
  {
    id: 'start-here',
    tier: 'start-here',
    tierLabel: 'Start Here',
    title: 'Start Here',
    icon: 'Zap',
    slides: startHere.slides,
    exploreContent: null,
  },

  // ── TAKE-HOME: Playbooks (6 slides) ──────────────────────────────────
  // Task-based guides organized by what the SE is actually trying to do.
  // One slide per playbook, each with prose + step cards + real prompts.
  {
    id: 'playbooks-transition',
    tier: 'transition',
    tierLabel: null,
    title: 'Playbooks',
    icon: null,
    slides: [{ layout: 'tierTransition', label: 'Playbooks', supporting: 'Step-by-step guides for the six things SEs do most.' }],
    exploreContent: null,
  },
  {
    id: 'playbooks',
    tier: 'playbooks',
    tierLabel: 'Playbooks',
    title: 'Playbooks',
    icon: 'BookOpen',
    slides: convertLevelUpToSlides(playbooks),
    exploreContent: { type: 'tool', data: playbooks },
  },

  // ── TAKE-HOME: Tool Guides (4 nav dots) ──────────────────────────────
  // Full deep dives per tool, ordered by accessibility gradient:
  // Saleo (easiest) → Cursor → MeshMesh → Claude Code (most advanced).
  // Each now includes Overview + Getting Started + Prompting Tips/Patterns.
  {
    id: 'tool-guides-transition',
    tier: 'transition',
    tierLabel: null,
    title: 'Tool Guides',
    icon: null,
    slides: [{ layout: 'tierTransition', label: 'Tool Guides', supporting: 'Full deep dives — from setup to advanced patterns.' }],
    exploreContent: null,
  },
  {
    id: 'saleo',
    tier: 'tool-guides',
    tierLabel: 'Tool Guides',
    title: 'Saleo',
    icon: 'saleo',
    slides: convertToolToSlides(saleo),
    exploreContent: { type: 'tool', data: saleo },
  },
  {
    id: 'cursor-workflows',
    tier: 'tool-guides',
    tierLabel: 'Tool Guides',
    title: 'Cursor',
    icon: 'cursor',
    slides: cursorWorkflowSlides,
    exploreContent: { type: 'tool', data: cursor },
  },
  {
    id: 'meshmesh',
    tier: 'tool-guides',
    tierLabel: 'Tool Guides',
    title: 'MeshMesh',
    icon: 'meshmesh',
    slides: convertToolToSlides(meshmesh),
    exploreContent: { type: 'tool', data: meshmesh },
  },
  {
    id: 'claude-code',
    tier: 'tool-guides',
    tierLabel: 'Tool Guides',
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
