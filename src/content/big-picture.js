// ── Section 1: The Why — live presentation (5 slides) ────────────────────
// Establishes context, names the phenomenon, makes it personal.
// Presenter spends ~5 minutes here before transitioning to the tools.

export const theWhy = {
  id: 'the-why',
  tier: 'big-picture',
  tierLabel: 'The Big Picture',
  title: 'The Why',
  slides: [
    // Title — holding slide while waiting for everyone to join.
    {
      layout: 'title',
      title: 'The SE',
      accent: 'AI Toolkit',
      subtitle: 'From prep to proof — faster.',
      badges: ['How I AI', 'Solutions Engineering', '2026'],
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

    // SE pain + customer pain in one line. Let it sit.
    {
      layout: 'cinematic',
      statement: 'You prepped for three hours. They showed up with their minds nearly made.',
    },

    // The number that proves the hook.
    {
      layout: 'bigStat',
      value: '80%',
      label: 'of the buying journey happens before they talk to you',
      source: 'Gartner, 2024',
    },

    // The origin story. Karpathy names the thing.
    {
      layout: 'quote',
      quote: 'You fully give in to the vibes, embrace exponentials, and forget that the code even exists.',
      attribution: 'Andrej Karpathy',
      context: 'Founding member of OpenAI. Former head of AI at Tesla.',
    },

    // Define the concept. Covers thinking, designing, and building — not just building.
    {
      layout: 'illustratedConcept',
      title: 'Vibe Coding',
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

// ── Section 3: Start Here — take-home (4 slides) ──────────────────────────
// First thing SEs see when they return to the link after the session.
// Purpose: bridge from "I'm interested" to "I'm doing it."
// No more stats or proof points — they're already convinced.
// Give them a starting point and teach them to prompt well.

export const startHere = {
  id: 'start-here',
  tier: 'start-here',
  tierLabel: 'Start Here',
  title: 'Start Here',
  slides: [
    // Four personas → four starting points. Removes decision paralysis.
    {
      layout: 'iconBullets',
      title: 'Pick your starting point',
      bullets: [
        {
          logo: 'saleo',
          title: 'You run demos every week',
          description: 'Start with Saleo. Install the Chrome extension, duplicate a vertical template, and personalize one demo before your next call. Done in 20 minutes.',
        },
        {
          logo: 'meshmesh',
          title: 'You build on Salesforce',
          description: 'Start with MeshMesh. Request access, connect your demo org, and describe one Agentforce use case. Built in a single session.',
        },
        {
          logo: 'claude',
          title: 'You want to build from scratch',
          description: 'Start with Claude Code. One install command, then ask it to generate demo data for your next vertical. From zero to usable in under an hour.',
        },
        {
          logo: 'cursor',
          title: 'You already work in code',
          description: 'Start with Cursor. Open any existing project in Ask mode and describe what you want to understand. You\'ll know the codebase in minutes.',
        },
      ],
    },

    // The highest-leverage skill: prompting. Four elements every SE needs.
    {
      layout: 'levelUpTopic',
      title: 'How to prompt well',
      prose: [
        'The biggest gap between SEs who get real value from AI tools and those who don\'t isn\'t the tool — **it\'s the prompt.** A vague ask gets a generic answer. A specific ask with the right context gets something you can actually use.',
        'Every effective prompt has four elements. You don\'t need all four every time, but knowing which one is missing explains why the output isn\'t landing.',
      ],
      cards: [
        { icon: 'Users', title: 'Context', description: 'Who is the customer? What industry? What deal stage? "Write demo data" vs "Write demo data for a mid-market healthcare insurer with $20M ARR" returns completely different output.' },
        { icon: 'Target', title: 'Task', description: '"Summarize this RFP" is a request. "Summarize this RFP in 5 bullet points focused on integration requirements and any mention of Salesforce competitors" is a task.' },
        { icon: 'FileText', title: 'Output Format', description: 'Tell it what you want back — bullet list, table, code, JSON, plain prose. If you don\'t specify, the AI picks. It won\'t always pick what you need.' },
        { icon: 'Shield', title: 'Constraints', description: 'What should it avoid? "Don\'t mention competitors. Keep it under 200 words. Use language a VP of Sales would understand." Constraints cut the noise.' },
      ],
      takeaway: 'You already know the deal and the customer. **That\'s the context the AI can\'t get on its own.** Put it in the prompt.',
    },

    // What those four elements look like in real SE scenarios.
    {
      layout: 'levelUpTopic',
      title: 'Prompting in practice',
      prose: [
        'The same four elements look different depending on what you\'re doing. Here\'s what a weak prompt and a strong one look like across the most common SE scenarios.',
      ],
      cards: [
        { icon: 'FileText', title: 'Demo prep', description: 'Weak: "Build me a demo." Strong: "Build a demo for a mid-market healthcare insurer. They care about case routing and agent handoffs. Show a patient calling in and getting fully resolved without a transfer."' },
        { icon: 'Database', title: 'Demo data', description: 'Weak: "Generate demo data." Strong: "Generate 15 healthcare insurance accounts: realistic names, $10M–$200M ARR, 2–4 open opps each, a mix of healthy and at-risk account health scores."' },
        { icon: 'Wrench', title: 'RFP response', description: 'Weak: "Write an RFP response." Strong: "Here\'s the RFP. Map each technical requirement to a specific Salesforce product. Flag anything we can\'t do natively. Output as a table."' },
        { icon: 'Search', title: 'Code understanding', description: 'Weak: "Explain this code." Strong: "I\'m an SE who inherited this project. What does this component do, what data does it read, and where would I change it to add a filter by account type?"' },
      ],
      takeaway: 'Notice what\'s constant in every strong prompt: **who you are, who the customer is, and what the output needs to look like.** That\'s the formula.',
    },

    // Three universal setup habits before any first session.
    {
      layout: 'levelUpTopic',
      title: 'Three things to do before your first session',
      prose: [
        'Before you start building with any of these tools, three setup habits will save you hours later. None of them take more than 15 minutes. All of them make every session that follows better.',
      ],
      cards: [
        { icon: 'FileText', title: 'Write a context file', description: 'For Claude Code: create a CLAUDE.md in your project folder. For Cursor: create a .cursorrules file. Tell it your tech stack, your conventions, and what not to touch. Ten minutes, permanent improvement.' },
        { icon: 'Target', title: 'Define the goal first', description: 'Finish this sentence before you type anything: "I want a _____ that does _____ for _____." Vague starting points produce vague outputs. Specific ones produce usable ones.' },
        { icon: 'Eye', title: 'Read before you accept', description: 'Every AI output is a first draft. Read it. Adapt it. The tool is fast — your judgment is what makes it customer-ready. Never approve anything blindly.' },
        { icon: 'Zap', title: 'Start small, ship fast', description: 'Build one thing first. One demo template. One Agentforce agent. One set of demo data. Get one win, then the next. Don\'t try to rebuild your whole workflow in a single session.' },
      ],
      takeaway: 'Context file. Clear goal. Review habit. **Get these three right and every session after this one runs better.**',
    },
  ],
}
