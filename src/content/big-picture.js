// ── Section 1: The Why — live presentation (5 slides) ────────────────────
// Establishes context, names the phenomenon, makes it personal.
// Presenter spends ~5 minutes here before transitioning to the tools.

export const theWhy = {
  id: 'the-why',
  tier: 'big-picture',
  tierLabel: 'The Big Picture',
  title: 'The Why',
  slides: [
    // Title — opening hook while waiting for everyone to join.
    {
      layout: 'title',
      title: 'The SE',
      accent: 'AI Toolkit',
      subtitle: 'Four tools. One mission. Better demos, faster.',
      badges: ['How I AI', 'Solutions Engineering', '2025'],
    },

    // Agenda — orient the audience before the hook.
    {
      layout: 'iconBullets',
      title: "Today's agenda",
      bullets: [
        { icon: 'TrendingUp', title: 'Why it matters', description: 'What AI is changing for buyers and SEs.' },
        { icon: 'Layers', title: 'The four tools', description: 'What each does and when to reach for it.' },
        { icon: 'Play', title: 'Cursor in action', description: 'Live walkthrough — getting started today.' },
        { icon: 'Calendar', title: "What's coming", description: 'Upcoming deep-dive sessions for each tool.' },
      ],
    },

    // Hook. No supporting text on screen. Presenter speaks the 57% stat.
    {
      layout: 'cinematic',
      statement: 'Your buyers did their homework.',
    },

    // The number that proves it. One stat. Let it land.
    {
      layout: 'bigStat',
      value: '57%',
      label: 'Through their decision before the first call',
      source: 'CEB / Gartner',
    },

    // The origin story. Karpathy names the thing.
    {
      layout: 'quote',
      context: 'OpenAI co-founder. Former head of AI at Tesla.',
      quote: 'You fully give in to the vibes, embrace exponentials, and forget that the code even exists.',
      attribution: 'Andrej Karpathy, coining "vibe coding" — February 2025',
    },

    // Define the concept. Covers thinking, designing, and building — not just building.
    {
      layout: 'illustratedConcept',
      title: 'Vibe Coding',
      subtitle: 'You describe the outcome. AI handles the implementation.',
      message: 'Describe the problem. Think through the solution. Build the proof.',
      illustration: 'vibeCoding',
    },

    // Make it personal. Thinking-first. Building is the third bullet, not the only angle.
    // Presenter tells the 60-second deck story verbally on bullet 3.
    {
      layout: 'iconBullets',
      title: 'Most of the value is in the thinking',
      bullets: [
        { icon: 'Search', title: "New to a customer's world", description: "30 minutes of context. Sound like you've been there." },
        { icon: 'MessageSquare', title: 'Prepping for a hard call', description: "Walk through the questions before they're asked." },
        { icon: 'Zap', title: "When it's time to build", description: 'Describe it. It handles the rest.' },
      ],
    },
  ],
}

// ── Section 2: The Tools — live presentation (8 slides) ──────────────────
// Concrete, immediate, tactical. Tools appear early so every subsequent
// stat and proof point connects to something the audience has already seen.
// Last slide (takeaway) is the explicit bridge to the live Cursor demo.

export const theTools = {
  id: 'the-tools',
  tier: 'big-picture',
  tierLabel: 'The Big Picture',
  title: 'The Tools',
  slides: [
    // Frame the difference upfront. No supporting text — presenter speaks it.
    {
      layout: 'statement',
      statement: 'One changes how fast you demo. The others change what you can build.',
    },

    // Which tool for what. Each named and differentiated.
    // Cursor vs Claude Code is intentionally distinct.
    {
      layout: 'iconBullets',
      title: 'Which one do you reach for?',
      bullets: [
        { logo: 'saleo', title: 'Saleo', description: 'Every demo. Personalize without touching the org.' },
        { logo: 'meshmesh', title: 'MeshMesh', description: 'Building on Salesforce. Agents, flows, custom orgs.' },
        { logo: 'cursor', title: 'Cursor', description: 'Editing existing code. AI inside your editor.' },
        { logo: 'claude', title: 'Claude Code', description: 'Starting from nothing. Describe it, it builds it.' },
      ],
    },

    // Field proof — validates the tools the audience just saw.
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

    // Credibility moment. 77% Gartner stat spoken by presenter, not shown.
    {
      layout: 'statement',
      statement: 'The SE who built it speaks differently.',
      supporting: 'Buyers feel it before the call ends.',
    },

    // Practical — how to actually get value from these tools.
    {
      layout: 'iconBullets',
      title: 'What makes these tools work',
      bullets: [
        { icon: 'FileText', title: 'Context beats generic', description: 'Tell it who the customer is.' },
        { icon: 'User', title: 'You know the deal', description: 'AI is fast. You know the room.' },
        { icon: 'TrendingUp', title: 'Build in the room', description: 'The demo that adapts wins.' },
      ],
    },

    // The bridge. Presenter says: "Let me show you what that looks like."
    // → live Cursor demo begins.
    {
      layout: 'takeaway',
      text: '**Start with one.** Build something real. Show a customer.',
    },
  ],
}

// ── Section 3: Go Deeper — take-home (5 slides) ───────────────────────────
// Audience navigates these on their own after the session.
// The stakes, the data, the Agentforce urgency — for those who want the
// full argument. Also a natural starting point when revisiting the link.

export const goDeeper = {
  id: 'go-deeper',
  tier: 'big-picture',
  tierLabel: 'The Big Picture',
  title: 'Go Deeper',
  slides: [
    // The shift. Now that the audience has seen the tools, this lands concretely.
    {
      layout: 'comparison',
      left: { icon: 'PenLine', label: 'Describing the Product', description: 'Slide decks. Canned demos.' },
      right: { icon: 'Wand2', label: 'Proving the Product', description: 'Built for them. In the room.' },
      connector: '\u2192',
    },

    // What it unlocks. Mini UIs reinforce the tools already seen.
    {
      layout: 'iconBullets',
      title: 'What this unlocks',
      bullets: [
        { visual: 'speed', title: 'Speed to Proof', description: 'POC before the next meeting.' },
        { visual: 'credibility', title: "The Builder's Edge", description: 'The SE who built it speaks differently.' },
        { visual: 'independence', title: 'Own the Build', description: 'No waiting. No dependencies.' },
      ],
    },

    // The buyer behavior data — lands harder now they can picture which tool creates it.
    {
      layout: 'bigStat',
      value: '2.4\u00d7',
      label: 'More likely to buy from sellers who build live',
      source: 'Harvard Business Review',
    },

    // Agentforce urgency. Dark. No supporting text on screen.
    {
      layout: 'cinematic',
      statement: 'Customers who see Agentforce built live are the ones who activate.',
    },

    // The closing window. Urgency for those who want the full argument.
    {
      layout: 'bigStat',
      value: '12\u201318 months',
      label: 'Window to build AI fluency before it is expected',
      source: 'Gartner, 2025',
    },
  ],
}
