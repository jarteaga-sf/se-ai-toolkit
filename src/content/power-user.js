export const section7 = {
  id: 'cursor-workflows',
  label: 'Demo & Present',
  title: 'Cursor Workflows',
  subtitle: 'How to get the most out of each feature in practice.',
  prose: [
    "You've seen what Cursor's four features do. Here's how to use them well.",
    "**Tab autocomplete** gets better the more context it has. If you're writing a new function, add a brief comment first — it steers the suggestions. Treat Tab like a fast pair programmer who's read your codebase: sometimes it nails the next 10 lines, sometimes you ignore it and keep typing. The key is it costs nothing to try.",
    "**Cmd+K** is highest-leverage for editing existing code. Rather than manually refactoring, select the block and describe what you want in plain language: \"add error handling for null response\", \"convert to async/await\", \"rename variables to match our convention\". The diff appears inline — accept or reject without leaving the file.",
    "**Cmd+L** (chat) is for questions, not edits. Use `@codebase` to ask about project structure, `@filename` to pull in specific files as context. Save Cmd+L for understanding; use Cmd+K for changing.",
    "**Composer** is the bridge between Cursor and Claude Code territory. When a change touches multiple files, Composer shows you exactly what changes in each file before applying. Reach for it when Cmd+K feels too small but Claude Code feels like overkill.",
  ],
  keyboardRef: {
    shortcuts: [
      { key: 'Tab', action: 'Accept autocomplete suggestion' },
      { key: 'Cmd+K', action: 'Inline edit on selected code' },
      { key: 'Cmd+L', action: 'Open chat panel' },
      { key: 'Cmd+Shift+I', action: 'Open Composer (multi-file)' },
      { key: 'Cmd+Shift+K', action: 'Delete line (AI-aware)' },
    ],
    contextKeys: [
      { key: '@codebase', action: 'Search across the whole project' },
      { key: '@filename', action: 'Pull in a specific file' },
      { key: '@docs', action: 'Reference linked documentation' },
    ],
  },
  takeaway: "Cmd+K for edits. Composer for multi-file changes. Chat for questions. **Tab for everything in between.**",
}

export const section8 = {
  id: 'saleo-overview',
  label: 'Demo & Present',
  title: 'Saleo',
  subtitle: 'Show the right data for every prospect — without touching real records.',
  prose: [
    "Claude Code and Cursor help you build and refine technical assets. Saleo solves a different problem entirely: **what the customer actually sees during a demo.**",
    "Saleo is a browser extension that sits between you and your Salesforce org. When you're running a demo, it intercepts the page and replaces displayed data with a customized overlay — prospect-specific names, numbers, pipeline stages, whatever tells the right story.",
    "The underlying org doesn't change. No real records are modified. No sandbox rebuild required. The overlay exists only in your session, and you control exactly what gets shown.",
    "This solves the demo data problem every SE knows: your sandbox has generic or outdated data, you don't have time to manually configure it for each prospect, and using real customer data is off the table. Saleo also supports **AI-assisted data generation** — describe a prospect's industry and deal context, and it suggests realistic data overlays that match the story you're telling.",
  ],
  stepFlow: {
    steps: [
      'Open Salesforce in Chrome with the Saleo extension active',
      'Saleo intercepts the page and replaces data with your overlay (e.g. Acme Corp becomes Contoso Ltd, $48K becomes $1.2M)',
      'Prospect sees a tailored view while the underlying org stays unchanged',
      'Switch overlays mid-demo or save templates per prospect or vertical',
    ],
  },
  takeaway: "Saleo lets you **demo the right story without rebuilding the environment**. The org is your stage; Saleo sets the scene.",
}

export const section9 = {
  id: 'saleo-workflows',
  label: 'Demo & Present',
  title: 'Building Better Demos',
  subtitle: 'How to use Saleo before, during, and after a discovery call.',
  prose: [
    "**Before the call:** create a prospect-specific overlay template. Pull in the prospect's industry, company name, relevant deal sizes, and any named accounts that would resonate. Save it as a named template you can activate in seconds.",
    "**During the demo:** activate your overlay at the start. If the conversation pivots — the prospect raises a new use case or asks about a specific scenario — adjust the overlay in real time or switch to a different saved template without leaving the screen.",
    "**After the call:** duplicate the template and update it for the next meeting or technical deep-dive. Templates build on each other, and you accumulate a library organized by vertical or deal type.",
    "**Why not just rebuild the sandbox?** You can — and sometimes you should, especially for live integration demos where the prospect needs to interact with real functionality. But for visual storytelling, where the goal is showing the right data in the right context, Saleo gets you there in minutes instead of hours.",
  ],
  stepFlow: {
    phases: [
      {
        label: 'Before the call',
        steps: [
          'Open Saleo dashboard',
          'Duplicate nearest vertical template',
          'Update: company name, ARR, pipeline stages, key accounts',
          'Save as "Contoso - Enterprise - March 2026"',
        ],
      },
      {
        label: 'During the demo',
        steps: [
          'Activate overlay from extension',
          'Prospect asks about a different scenario',
          'Switch template or adjust overlay field live',
        ],
      },
      {
        label: 'After the call',
        steps: [
          'Duplicate. Update for next session. Archive the rest.',
        ],
      },
    ],
  },
  takeaway: "Build a template library organized by vertical. **The second prospect in an industry costs a fraction of the first.**",
}

export const section10 = {
  id: 'combining-tools',
  label: 'Go Deeper',
  title: 'Using Them Together',
  subtitle: 'Each tool is useful alone. Together, they cover the full SE workflow.',
  prose: [
    "Now that you know each tool individually, here's where the real leverage is: **chaining them together.** Each tool hands off to the next at the point where it has an advantage.",
    "**Example: building a prospect-specific integration demo.** Start in Claude Code to scaffold the integration — it reads the existing codebase, generates the connection logic, writes tests, and verifies they pass. Move to Cursor to refine the output — Cmd+K on specific functions, adjust variable names, clean up edge cases while staying in the editor. Then switch to Saleo to make the demo environment match the prospect — overlay the right names, numbers, and use cases.",
    "**Example: preparing for a technical deep-dive.** Use Claude Code to generate a technical summary of your integration. Use Cursor to draft inline comments and documentation while reading the code. Load Saleo with the prospect's vertical data so the live demo is ready the moment the call starts.",
    "Notice the pattern: **build, refine, present.** Claude Code handles the heavy construction. Cursor handles the precision work. Saleo handles the final mile.",
  ],
  pipeline: [
    { phase: 'Build', tool: 'Claude Code', logo: 'claude', description: 'Scaffold the integration, write tests, verify they pass. Autonomous multi-step execution.' },
    { phase: 'Refine', tool: 'Cursor', logo: 'cursor', description: 'Cmd+K on specific functions, adjust variable names, clean up code — all inline.' },
    { phase: 'Present', tool: 'Saleo', logo: 'saleo', description: 'Overlay prospect-specific data so the demo shows their brand, their numbers, their workflow.' },
  ],
  takeaway: "**Build with Claude Code. Refine with Cursor. Present with Saleo.** The handoffs are fast once you know the flow.",
}

export const section11 = {
  id: 'best-practices',
  label: 'Go Deeper',
  title: 'What Works, What Doesn\'t',
  subtitle: 'Patterns that hold across all three tools — and mistakes to avoid.',
  prose: [
    "**The universal rule:** start with a clear goal and a clear success condition. \"Make it better\" is not a task. \"The dropdown doesn't filter correctly when no option is selected — fix it\" is. Specificity compounds — the more precisely you describe what you want, the less back-and-forth you need. This applies equally to Claude Code prompts, Cursor inline edits, and Saleo template descriptions.",
    "**Claude Code habits that pay off:** plan before building, keep sessions focused on one task, and keep CLAUDE.md concise. A 50-line file that Claude actually follows beats a 300-line one it has to guess at. Read the diff before approving — always.",
    "**Cursor habits that pay off:** use Tab liberally (it's free to ignore), use Cmd+K whenever you can see the code you want to change, and save Composer for changes that genuinely span multiple files. Don't use chat for tasks that Cmd+K can handle in seconds.",
    "**Saleo habits that pay off:** build templates as you go and organize by vertical, not by prospect. Don't recreate from scratch each time — duplicate and update. Use AI-assisted data generation for unfamiliar industries.",
    "**What to avoid across the board:** approving AI output without reviewing it, using a heavy tool when a light one would do, and treating AI-generated work as finished. It's a fast first draft, not a final product. Your judgment is the last mile.",
  ],
  takeaway: "**Clear input, specific success criteria, review before approving.** The rest is tool-specific mechanics you'll pick up fast.",
}

export const section12 = {
  id: 'quick-reference',
  label: 'Go Deeper',
  title: 'Cheat Sheet',
  subtitle: 'Everything from this guide, condensed into one reference.',
  toolMatrix: [
    { scenario: 'Build a script or automation from scratch', tool: 'Claude Code' },
    { scenario: 'Edit code while staying in your editor', tool: 'Cursor (Cmd+K)' },
    { scenario: 'Refactor across many files autonomously', tool: 'Claude Code' },
    { scenario: 'Multi-file change with visual diffs', tool: 'Cursor Composer' },
    { scenario: 'Understand an unfamiliar codebase', tool: 'Claude Code' },
    { scenario: 'Quick inline suggestion as you type', tool: 'Cursor (Tab)' },
    { scenario: 'Prep prospect-specific demo data', tool: 'Saleo' },
    { scenario: 'Demo a Salesforce workflow without real data', tool: 'Saleo' },
  ],
  commands: [
    { command: '/plan', description: 'Plan without changing anything', when: 'Before big changes' },
    { command: '/init', description: 'Generate CLAUDE.md', when: 'New project' },
    { command: '/model', description: 'Switch between Sonnet and Opus', when: 'Balancing speed vs. depth' },
    { command: '/context', description: 'Check memory usage', when: 'Long sessions' },
    { command: '/compact', description: 'Free up memory', when: 'Memory getting full' },
    { command: '/clear', description: 'Start fresh', when: 'New task' },
    { command: '/permissions', description: 'Pre-approve safe operations', when: 'Reducing pop-ups' },
    { command: '/doctor', description: 'Fix problems', when: 'Something seems off' },
  ],
  shortcuts: [
    { key: 'Shift+Tab x2', action: 'Enter Plan Mode' },
    { key: 'Esc x2', action: 'Undo last change' },
    { key: 'Up', action: 'Repeat last prompt' },
    { key: 'Ctrl+R', action: 'Search past prompts' },
  ],
  cursorShortcuts: [
    { key: 'Tab', action: 'Accept autocomplete' },
    { key: 'Cmd+K', action: 'Inline edit on selection' },
    { key: 'Cmd+L', action: 'Open chat panel' },
    { key: 'Cmd+Shift+I', action: 'Open Composer' },
  ],
  models: [
    { model: 'Opus 4.6', use: 'Hard problems, architecture decisions, tricky bugs' },
    { model: 'Sonnet 4.6', use: 'Everyday work — fast and capable' },
    { model: 'Haiku 4.5', use: 'Quick answers, small edits' },
  ],
  paths: [
    { path: '~/.claude/CLAUDE.md', description: 'Personal instructions (all projects)' },
    { path: './CLAUDE.md', description: 'Project-level instructions' },
    { path: '.claude/commands/', description: 'Custom slash commands' },
    { path: '.claude/settings.json', description: 'Project-specific settings' },
  ],
  takeaway: 'Bookmark this section. Come back to it.',
}
