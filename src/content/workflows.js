export const section3 = {
  id: 'claude-code-overview',
  label: 'Build & Code',
  title: 'Claude Code',
  subtitle: 'An AI agent that reads your project, writes code, runs commands, and checks its own work.',
  prose: [
    "Now that you know *when* to reach for Claude Code, let's look at *how* it works. Unlike tools that suggest one line at a time, Claude Code is an **autonomous agent** — you give it a goal, and it figures out the steps. It reads your project files, writes or modifies code, runs terminal commands like tests or builds, and iterates until the task is done.",
    "You're not pasting snippets into a chat window or accepting one-line suggestions. You're delegating a task and reviewing the result.",
    "The best mental model: **a capable contractor who works fast and needs clear direction.** Tell it what you want and how you'll know it worked. It handles the how.",
  ],
  terminal: {
    title: 'Claude Code in Action',
    steps: [
      { type: 'command', content: 'cd ~/projects/demo-integration && claude' },
      { type: 'output', content: '' },
      { type: 'claude-thinking', content: 'Scanning project: 24 files, React + Node, no tests yet...' },
      { type: 'output', content: '' },
      { type: 'claude-response', content: 'This is a Salesforce integration with a React frontend. What would you like to work on?' },
      { type: 'output', content: '' },
      { type: 'output', content: '> add input validation to the contact form and write tests for it' },
      { type: 'output', content: '' },
      { type: 'claude-thinking', content: 'Reading ContactForm.jsx... Reading existing test patterns...' },
      { type: 'output', content: '' },
      { type: 'claude-response', content: 'Added validation for 5 fields. Created ContactForm.test.js with 8 test cases. All passing.' },
    ],
  },
  takeaway: "Claude Code works best when you **describe the goal and the success condition**, not the step-by-step approach. Let it figure out the how.",
}

export const section4 = {
  id: 'claude-code-setup',
  label: 'Build & Code',
  title: 'Getting Started',
  subtitle: 'Install, configure, and run your first task. Under 5 minutes.',
  prose: [
    "**Install with one command.** Claude Code runs in your terminal. After installation, run `claude` in any project folder and it reads the project to get oriented.",
    "**The most important setup step** is creating a `CLAUDE.md` file in your project root. Claude reads this at the start of every session — it tells Claude what the project does, how to run it, and any rules to follow. Run `/init` inside Claude and it generates a solid starting version from your project structure.",
    "Keep CLAUDE.md **under 200 lines**. More instructions don't mean better results — they dilute Claude's attention. Cover the what, the how-to-run, and the key constraints. Skip the obvious.",
  ],
  terminal: {
    title: 'Setup',
    steps: [
      { type: 'command', content: 'npm install -g @anthropic-ai/claude-code' },
      { type: 'output', content: 'claude-code installed successfully' },
      { type: 'output', content: '' },
      { type: 'command', content: 'cd ~/projects/demo-app && claude' },
      { type: 'output', content: 'Logged in as jane@salesforce.com' },
      { type: 'output', content: '' },
      { type: 'command', content: '/init' },
      { type: 'claude-thinking', content: 'Reading project structure...' },
      { type: 'claude-response', content: 'Generated CLAUDE.md:' },
      { type: 'output', content: '' },
      { type: 'file-change', content: '+ # Demo App\n+ \n+ ## What This Is\n+ A Salesforce integration demo with React frontend\n+ \n+ ## How to Run\n+ - `npm run dev` -- start local server\n+ - `npm test` -- run tests\n+ \n+ ## Conventions\n+ - Components use PascalCase\n+ - API calls go in src/api/' },
    ],
    expandable: true,
  },
  deepCut: {
    title: 'Three levels of instructions',
    content: "**CLAUDE.md** is for project-level context (what is this, how does it run). **~/.claude/CLAUDE.md** is for personal preferences that apply across all projects. **Skills** are reference files Claude loads only when relevant — good for specialized team workflows. Start with project CLAUDE.md. Add the others if you find yourself repeating the same context across sessions."
  },
  takeaway: "Install, run `/init` to generate CLAUDE.md, keep it short. That's the whole setup.",
}

export const section5 = {
  id: 'claude-code-workflows',
  label: 'Build & Code',
  title: 'Claude Code Workflows',
  subtitle: 'The habits that separate good results from great ones.',
  prose: [
    "**Plan first, build second.** Plan Mode (Shift+Tab twice, or `/plan`) is the single most important habit to build. In Plan Mode, Claude reads everything but won't change anything — you see the full approach before a file gets modified. For anything beyond a one-file change, start here.",
    "**Manage permissions thoughtfully.** By default, Claude asks before every file change or command, which creates approval fatigue. Use `claude --sandbox` or `/permissions` to pre-approve safe operations. The real safety net isn't permissions — it's **checkpoints**: Claude saves state before every change, and Esc+Esc rolls it back.",
    "**Watch your context window.** Context is Claude's working memory, and it fills up during long sessions. When it does, quality drops. Check it with `/context`, free up space with `/compact`, and for new tasks use `/clear` to start fresh with a one-sentence summary of what you're building.",
    "**Prompt with precision.** Be specific about the goal and how success is measured. \"Make it faster\" is a question. \"The page loads in 3.2 seconds — get it under 1\" is a task. Use `/model` to switch between Opus 4.6 for complex problems and Sonnet 4.6 for everyday work.",
  ],
  terminal: {
    title: 'Plan Mode in Action',
    steps: [
      { type: 'output', content: '> /plan' },
      { type: 'output', content: '[Plan Mode -- read only, no changes]' },
      { type: 'output', content: '' },
      { type: 'output', content: '> add Salesforce OAuth to this app' },
      { type: 'output', content: '' },
      { type: 'claude-thinking', content: 'Reading auth patterns, existing routes, config files...' },
      { type: 'output', content: '' },
      { type: 'claude-response', content: "Here's my plan:" },
      { type: 'output', content: '1. Add OAuth config to .env.example' },
      { type: 'output', content: '2. Create src/auth/salesforce.js (new)' },
      { type: 'output', content: '3. Update server.js to add /auth and /callback routes' },
      { type: 'output', content: '4. Update 2 existing pages to use auth state' },
      { type: 'output', content: '' },
      { type: 'output', content: 'New files: 1 | Changed files: 3 | Shall I proceed?' },
    ],
  },
  takeaway: "Plan first. Keep sessions focused on one task. Read what changed before approving. **That's 80% of being good at this.**",
}

export const section6 = {
  id: 'cursor-overview',
  label: 'Build & Code',
  title: 'Cursor',
  subtitle: 'VS Code with AI built in. For when you want to stay in your editor.',
  prose: [
    "Where Claude Code is an autonomous agent you hand tasks to, Cursor is an AI copilot that sits inside your editor. It's a fork of VS Code — same look, same extensions, same settings — but with AI woven into every editing action.",
    "The core idea: **you stay in control of the editing flow, and the AI accelerates each step.** You're always looking at the code, always deciding what changes to accept. Cursor makes you faster without taking the wheel.",
    "There are four features that cover almost everything. **Tab** autocompletes as you type — context-aware, often suggesting 5-10 lines at a time. **Cmd+K** applies an inline edit to selected code from a plain-language description. **Cmd+L** opens a chat panel with `@codebase` access for questions. And **Composer** (Cmd+Shift+I) handles multi-file changes with visual diffs before applying.",
  ],
  features: [
    { shortcut: 'Tab', name: 'Autocomplete', description: 'Suggests the next line or block based on your context. Tab to accept, keep typing to ignore. Low-cost to try, high-value when it lands.' },
    { shortcut: 'Cmd+K', name: 'Inline Edit', description: 'Select code, describe the change in plain language, review the diff in place. The fastest path for targeted edits.' },
    { shortcut: 'Cmd+Shift+I', name: 'Composer', description: 'Multi-file changes from a single prompt with visual diffs. Use for refactors, API migrations, or anything spanning 2+ files.' },
  ],
  takeaway: "Cursor is the right choice when you're **already in a file and want to stay there**. For multi-step tasks that require running commands, Claude Code is the better fit.",
}
