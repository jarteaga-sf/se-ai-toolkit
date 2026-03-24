export const vibeCoding = {
  id: 'vibe-coding',
  label: 'The Big Picture',
  title: 'What',
  subtitle: 'The industry is changing. SEs need to be part of it.',
  slides: [
    {
      layout: 'quote',
      quote: 'Describe what you want, and AI writes the code.',
      attribution: 'You don\'t need to be a developer. You need to know what you want.',
    },
    {
      layout: 'comparison',
      left: { icon: 'PenLine', label: 'Writing Every Line', description: 'Full control, full effort. Every function, every file, every fix.' },
      right: { icon: 'Wand2', label: 'Directing Outcomes', description: 'You describe the goal. AI handles the how.' },
      connector: '\u2192',
    },
    {
      layout: 'iconBullets',
      title: 'What this unlocks for SEs',
      bullets: [
        { visual: 'speed', title: 'Speed', description: 'Idea to deployed component in a single session.' },
        { visual: 'credibility', title: 'Credibility', description: "Enter a prospect's company. Get a demo built for them." },
        { visual: 'independence', title: 'Independence', description: 'If you can describe it, you can ship it.' },
      ],
    },
    {
      layout: 'takeaway',
      text: "You don't need to write code. You need to **describe what you want clearly enough** that AI can build it.",
    },
  ],
}

export const whySesCare = {
  id: 'why-ses-care',
  label: 'The Big Picture',
  title: 'How',
  subtitle: 'Four tools. Different strengths. All worth knowing.',
  slides: [
    {
      layout: 'statement',
      statement: 'Three rockets. One running shoe.',
      supporting: 'Some tools give you 10-100x productivity. One gives you 20-30%. All are worth knowing.',
    },
    {
      layout: 'toolCards',
      cards: [
        { name: 'Saleo', tagline: 'Their data. Your demo. No code.', bestFor: 'Personalize any demo to any prospect\'s industry in minutes. Org stays clean.', role: 'Demo Layer', setup: 'easy', logo: 'saleo' },
        { name: 'MeshMesh', tagline: 'Salesforce-native. Agent-first.', bestFor: 'An AI-powered dev environment tuned for Salesforce — built a six-week POC in 1.5 hours.', role: 'Agent Dev Platform', setup: 'moderate', logo: 'meshmesh' },
        { name: 'Cursor', tagline: 'Your editor, with a co-pilot.', bestFor: 'Cut custom demo prep from hours to minutes with inline AI and Salesforce CLI.', role: 'AI-Powered IDE', setup: 'moderate', logo: 'cursor' },
        { name: 'Claude Code', tagline: 'You describe. It builds.', bestFor: 'One SE built a full Agentforce agent — 4 topics, 500+ tests — in about an hour.', role: 'Agentic Builder', setup: 'advanced', logo: 'claude' },
      ],
    },
    {
      layout: 'statement',
      statement: 'The engines are here. The gap is knowing how to drive them.',
      supporting: 'You have the tools. This session is about building the muscle to use them.',
    },
    {
      layout: 'iconBullets',
      title: 'What makes these tools click',
      bullets: [
        { icon: 'Bot', title: 'Agent Mode', description: 'Describe the goal, not the steps. The AI reads your project, writes code, runs commands, and checks its own work.' },
        { icon: 'FileText', title: 'Context is Everything', description: 'Rules files, project docs, and platform knowledge turn generic AI into a Salesforce expert.' },
        { icon: 'Search', title: 'Prompt with Precision', description: 'The better your input, the better the output. Domain experience is what separates signal from slop.' },
      ],
    },
    {
      layout: 'takeaway',
      text: "All four tools are worth exploring. **This session gives you the playbook to start using them today.**",
    },
  ],
}