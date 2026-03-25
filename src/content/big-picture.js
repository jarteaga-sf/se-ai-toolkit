export const vibeCoding = {
  id: 'vibe-coding',
  label: 'The Big Picture',
  title: 'What',
  subtitle: 'The industry is changing. SEs need to be part of it.',
  slides: [
    {
      layout: 'quote',
      quote: 'Customers expect tailored demos, fast POCs, and solutions that fit their business. AI tools let any SE deliver that.',
      attribution: 'You don\'t need to be a developer. You need to know what your customer needs.',
    },
    {
      layout: 'comparison',
      left: { icon: 'PenLine', label: 'Manual Everything', description: 'Every demo, every tweak, every build -- done by hand, one at a time.' },
      right: { icon: 'Wand2', label: 'Directing Outcomes', description: 'You describe what the customer needs. The tool builds it.' },
      connector: '\u2192',
    },
    {
      layout: 'iconBullets',
      title: 'What this unlocks for SEs',
      bullets: [
        { visual: 'speed', title: 'Speed', description: 'Deliver a tailored POC before the next call -- not next quarter.' },
        { visual: 'credibility', title: 'Credibility', description: "Walk into a prospect's world with a demo built for their business." },
        { visual: 'independence', title: 'Independence', description: 'If you can describe what the customer needs, you can make it real.' },
      ],
    },
    {
      layout: 'statement',
      statement: 'Agentforce is the biggest bet we have. SEs who can build and demo agents drive customer activation.',
      supporting: 'These tools turn every SE into someone who can stand up a working agent -- not in weeks, but in a single session.',
    },
    {
      layout: 'takeaway',
      text: "You don't need to write code. You need to **describe what your customer needs clearly enough** that the tool can build it.",
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
        { name: 'Saleo', tagline: 'Their data. Your demo. No code.', bestFor: 'Personalize any demo to any prospect\'s industry in minutes. Your org stays clean.', role: 'Demo Layer', setup: 'easy', logo: 'saleo' },
        { name: 'MeshMesh', tagline: 'Built for Salesforce. Agent-first.', bestFor: 'Built a six-week POC in 1.5 hours. Cut demo guide prep by 98.95% -- from 2 days to 30 minutes.', role: 'Agent Builder', setup: 'moderate', logo: 'meshmesh' },
        { name: 'Cursor', tagline: 'A smart editor with a co-pilot.', bestFor: 'Cut custom demo prep from hours to minutes with built-in AI assistance.', role: 'Smart Editor', setup: 'moderate', logo: 'cursor' },
        { name: 'Claude Code', tagline: 'You describe. It builds.', bestFor: 'One SE built a full Agentforce agent -- 4 conversation topics, 500+ tests -- in about an hour.', role: 'Autonomous Builder', setup: 'advanced', logo: 'claude' },
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
        { icon: 'Bot', title: 'Describe, Don\'t Build', description: 'Tell the tool what you want. It figures out the steps, does the work, and checks itself.' },
        { icon: 'FileText', title: 'Context is Everything', description: 'The more the tool knows about your project, the better the output. A short setup doc goes a long way.' },
        { icon: 'Search', title: 'Your SE Knowledge Is the Edge', description: 'These tools are fast, but they don\'t know your customer. Your domain expertise is what makes the output great.' },
        { icon: 'TrendingUp', title: 'Customer Impact', description: 'The faster you build, the faster they activate. Tailored demos, POCs, and hands-on proof drive real adoption.' },
      ],
    },
    {
      layout: 'takeaway',
      text: "All four tools are worth exploring. **This session gives you the playbook to start using them today.**",
    },
  ],
}
