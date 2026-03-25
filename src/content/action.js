export const levelUp = {
  id: 'level-up',
  label: 'Keep Going',
  title: 'Level Up',
  subtitle: 'Once you have the basics, these concepts unlock the next gear.',
  tabs: [
    {
      label: 'Skills',
      content: {
        prose: [
          "Skills are **pre-built knowledge packages** that make AI tools instant experts in specific areas. Instead of explaining Salesforce concepts to the AI every time, you install a skill and it already knows.",
          "Think of it like hiring a contractor who shows up with specialized training. A Salesforce development skill means the AI already knows about objects, fields, triggers, and deployment. An Agentforce skill means it knows topics, actions, and test patterns. **You stop teaching and start building.**",
        ],
        habitCards: [
          { icon: 'Layers', title: 'Salesforce Development', description: 'Covers Apex patterns, LWC structure, deployment commands, and platform best practices. The AI writes platform-aware code from the start.' },
          { icon: 'Bot', title: 'Agentforce Building', description: 'Topics, actions, prompt templates, and test suites. The AI knows the agent architecture so you don\'t have to spell it out.' },
          { icon: 'Shield', title: 'Security & Sharing', description: 'Permission sets, field-level security, sharing rules, and org-wide defaults. The AI flags security gaps before they become problems.' },
          { icon: 'Search', title: 'Finding & Installing', description: 'Browse the skill library, install with one command, and the AI uses the right skill automatically when the topic comes up.', link: { label: 'Browse the Skill Library', url: 'https://jarteaga-sf.github.io/sf-skills-site/' } },
        ],
        takeaway: "Skills turn a general-purpose AI into a **Salesforce specialist.** Install once, benefit every session.",
      },
    },
    {
      label: 'MCP Servers',
      content: {
        prose: [
          "MCP (Model Context Protocol) servers are **connectors that let AI tools talk directly to external services** -- your Salesforce org, documentation sites, databases, and more. Without MCP, you copy-paste context. With MCP, the AI reads it directly.",
          "The difference is dramatic. Instead of describing your org's data model, the AI can **read your actual objects, fields, and relationships.** Instead of guessing about an API, it can pull in the real documentation. The AI goes from working with what you tell it to working with what it can see.",
        ],
        habitCards: [
          { icon: 'Database', title: 'Salesforce Org Connector', description: 'The AI reads your org\'s objects, fields, and configuration directly. It builds solutions that match your actual setup, not a guess.' },
          { icon: 'FileText', title: 'Documentation Access', description: 'Connect to Salesforce docs, internal wikis, or API references. The AI pulls in accurate information instead of relying on its training data.' },
          { icon: 'Wrench', title: 'How It Works', description: 'An MCP server runs locally on your machine and acts as a bridge. The AI sends requests to the server, the server talks to the external service, and results come back.' },
          { icon: 'Zap', title: 'Getting Started', description: 'Most MCP servers are one config file to set up. Point it at your org or service, restart the AI tool, and the connection is live.' },
        ],
        takeaway: "MCP servers let the AI **see your real environment** instead of guessing. One config file to set up, permanent improvement in output quality.",
      },
    },
    {
      label: 'Custom Commands',
      content: {
        prose: [
          "Custom commands are **reusable prompts saved as files** that you or your team can run with a single slash. Instead of typing the same detailed prompt every time you need demo data or a code review, you save it once and call it by name.",
          "This is how SE teams scale their AI usage. One person figures out the perfect prompt for generating industry-specific demo data, saves it as `/demo-data`, and now everyone on the team has it. **Build your team's playbook once, everyone uses it forever.**",
        ],
        habitCards: [
          { icon: 'Terminal', title: 'Example: /demo-data', description: 'A saved prompt that generates realistic Accounts, Contacts, and Opportunities for a specific industry. One command, consistent output every time.' },
          { icon: 'GitBranch', title: 'Example: /deploy-check', description: 'Runs tests, checks for common issues, and deploys to your connected org. A reliable, repeatable workflow in one command.' },
          { icon: 'Users', title: 'Share Across the Team', description: 'Custom commands live in a project folder. Check them into your repository and every team member gets the same commands automatically.' },
          { icon: 'Code', title: 'How to Create One', description: 'Write a markdown file in .claude/commands/ with your prompt template. Use $ARGUMENTS for dynamic inputs. That\'s it -- one file, one command.' },
        ],
        takeaway: "Custom commands turn your best prompts into **team-wide tools.** Write once, use everywhere.",
      },
    },
    {
      label: 'Context Files',
      content: {
        prose: [
          "Context files are **short docs that tell the AI how your project works.** Claude Code uses CLAUDE.md. Cursor uses .cursorrules. Same idea: give the AI a cheat sheet about your project so it stops giving generic answers.",
          "Five minutes of writing a context file saves hours of correcting the AI. Without one, every session starts from zero. With one, the AI already knows your project structure, your conventions, and what not to touch. **The AI goes from generic to project-aware instantly.**",
        ],
        habitCards: [
          { icon: 'FileText', title: 'What to Include', description: 'Project purpose, tech stack, key conventions, how to run/test, and anything the AI should never change. Keep it short -- a page is plenty.' },
          { icon: 'Zap', title: 'Auto-Generate It', description: 'In Claude Code, type /init and it reads your project and writes a context file for you. Review it, tweak it, done.' },
          { icon: 'Target', title: 'Keep It Current', description: 'Update your context file when conventions change. An outdated file is worse than no file -- it teaches the AI the wrong habits.' },
          { icon: 'Users', title: 'Team Consistency', description: 'Check the context file into your repo. Every team member\'s AI sessions follow the same rules and conventions automatically.' },
        ],
        takeaway: "A context file is the **highest-leverage five minutes** you can spend. Write it once, and every AI session gets better.",
      },
    },
  ],
}

export const quickReference = {
  id: 'quick-reference',
  label: 'Keep Going',
  title: 'Cheat Sheet',
  subtitle: 'The quick-reference you bookmark and come back to.',
  toolMatrix: [
    { scenario: 'Build an Agentforce agent for a specific customer', tool: 'MeshMesh' },
    { scenario: 'Generate realistic demo data for any vertical', tool: 'Claude Code' },
    { scenario: 'Respond to an RFP with Salesforce-mapped answers', tool: 'Claude Code' },
    { scenario: 'Tweak a demo component before a customer call', tool: 'Cursor (Cmd+K)' },
    { scenario: 'Build a POC from discovery notes', tool: 'Claude Code' },
    { scenario: 'Customize your demo org for a specific industry', tool: 'MeshMesh' },
    { scenario: 'Understand code you inherited from another SE', tool: 'Cursor (Cmd+L)' },
    { scenario: 'Prospect wants to see their own data in the demo', tool: 'Saleo' },
    { scenario: 'Show multiple personas in one demo (VP, rep, admin)', tool: 'Saleo' },
    { scenario: 'Build and deploy something from a single prompt', tool: 'Claude Code' },
  ],
  commands: [
    { command: '/plan', description: 'See the full approach before anything changes', when: 'Before big changes' },
    { command: '/init', description: 'Generate a project context file (CLAUDE.md)', when: 'New project' },
    { command: '/model', description: 'Switch between models (faster vs. smarter)', when: 'Balancing speed vs. depth' },
    { command: '/cost', description: 'See how many tokens you\'ve used this session', when: 'Tracking usage' },
    { command: '/compact', description: 'Summarize conversation to free up memory', when: 'Long sessions' },
    { command: '/clear', description: 'Wipe the conversation and start fresh', when: 'New task' },
    { command: '/permissions', description: 'Pre-approve operations so Claude asks less', when: 'Reducing confirmation prompts' },
    { command: '/doctor', description: 'Diagnose setup or connection issues', when: 'Something seems off' },
  ],
  shortcuts: [
    { key: 'Esc', action: 'Stop the current generation' },
    { key: 'Esc x2', action: 'Undo the last file change' },
    { key: 'Up arrow', action: 'Bring back your last prompt' },
  ],
  cursorShortcuts: [
    { key: 'Tab', action: 'Accept AI autocomplete suggestion' },
    { key: 'Cmd+K', action: 'Quick edit -- select code, describe the change' },
    { key: 'Cmd+L', action: 'Open chat -- ask questions about your project' },
    { key: 'Cmd+Shift+I', action: 'Big changes -- multi-file edits from one prompt' },
  ],
  models: [
    { model: 'Opus 4.6', use: 'Complex tasks, architecture decisions, tricky debugging' },
    { model: 'Sonnet 4.6', use: 'Everyday work -- fast, capable, and cost-effective' },
    { model: 'Haiku 4.5', use: 'Quick lookups, simple edits, short answers' },
  ],
  paths: [
    { path: '~/.claude/CLAUDE.md', description: 'Your personal instructions (loaded in every project)' },
    { path: './CLAUDE.md', description: 'Project-specific instructions (checked into repo)' },
    { path: '.claude/commands/', description: 'Custom slash commands (shareable with team)' },
    { path: '.claude/settings.json', description: 'Project-specific settings and permissions' },
  ],
  claudeCodeTips: [
    { label: 'Start with a clear goal', description: '"Make it better" is vague. "Build an onboarding agent with 3 topics" is a task the tool can run with.' },
    { label: 'Use /plan for big changes', description: 'See the full approach before anything changes. Catches misunderstandings early and saves time.' },
    { label: 'Treat output as a first draft', description: 'Review, test, and refine before showing to a customer. Fast doesn\'t mean finished.' },
  ],
  cursorTips: [
    { label: 'Use Tab freely', description: 'It costs nothing to ignore a suggestion -- just keep typing. Accept what helps, skip the rest.' },
    { label: 'Ask before editing', description: 'Use Cmd+L to ask about code before changing it. Understanding first, edits second.' },
    { label: 'Review before accepting', description: 'Always read the changes. The tool is fast, but not always right.' },
  ],
  meshmeshTips: [
    { label: 'Start with one agent', description: 'Pick a single use case -- onboarding, FAQ, case routing -- and build that first. Don\'t try to do everything at once.' },
    { label: 'Connect a real org', description: 'MeshMesh reads your org\'s structure. The more it knows about your actual setup, the more accurate the output.' },
    { label: 'Run the tests', description: 'MeshMesh generates tests alongside every build. Always run them before deploying or showing to a customer.' },
    { label: 'Hand off to Cursor', description: 'Use MeshMesh for the heavy construction, then switch to Cursor for small tweaks, label changes, and polish.' },
  ],
  saleoTips: [
    { label: 'Organize by vertical', description: 'Build one template per industry. The second prospect in that vertical takes minutes instead of hours.' },
    { label: 'Name with a pattern', description: 'Use "Company - Segment - Date" (e.g., "Contoso - Enterprise - March 2026") so templates are easy to find and manage.' },
    { label: 'Switch personas live', description: 'Change the active template mid-call. Show the VP a pipeline view, then switch to the rep\'s task view instantly.' },
    { label: 'Always duplicate', description: 'Never start from scratch. Duplicate the nearest existing template and update it. Faster and more consistent.' },
  ],
  takeaway: 'Bookmark this page. Come back to it before your next demo.',
  contest: {
    title: 'AI Use Case Showcase',
    description: 'Built something with these tools? Share it. Best submissions get featured in upcoming enablement sessions and earn bragging rights across the team.',
    cta: 'Submit Your Use Case',
  },
}
