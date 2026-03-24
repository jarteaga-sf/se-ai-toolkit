export const claudeCode = {
  id: 'claude-code',
  label: 'The Tools',
  title: 'Claude Code',
  subtitle: 'The autonomous builder. Describe the goal, it handles the steps.',
  tabs: [
    {
      label: 'Overview',
      content: {
        prose: [
          "Unlike tools that suggest one line at a time, Claude Code is an **autonomous agent** -- you describe a goal and it figures out the steps on its own. It reads your project files, writes code, runs commands, and iterates until the task is done.",
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
        takeaway: "Claude Code works best when you **describe the goal and the success condition**, not the step-by-step approach.",
      },
    },
    {
      label: 'Getting Started',
      content: {
        prose: [
          "**Install with one command.** Claude Code runs in your terminal. After installation, run `claude` in any project folder and it reads the project to get oriented.",
          "**The most important setup step** is creating a `CLAUDE.md` file in your project root. Run `/init` inside Claude and it generates one automatically.",
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
        habitCards: [
          { icon: 'GitBranch', title: 'Plan First', description: 'Use /plan before any multi-file change. See the full approach before anything gets modified.' },
          { icon: 'Shield', title: 'Manage Permissions', description: 'Use --sandbox to pre-approve safe ops. The real safety net is checkpoints -- Esc+Esc rolls back.' },
          { icon: 'Target', title: 'Stay Focused', description: 'One task per session. Use /compact when memory fills up, /clear for a fresh start.' },
          { icon: 'Crosshair', title: 'Prompt with Precision', description: '"Make it faster" is a question. "Get page load under 1 second" is a task.' },
        ],
        takeaway: "Install, run `/init` to generate CLAUDE.md, keep it short. **That's the whole setup.**",
      },
    },
  ],
}

export const meshmesh = {
  id: 'meshmesh',
  label: 'The Tools',
  title: 'MeshMesh',
  subtitle: 'The Salesforce-native builder. AI agents that know the platform.',
  tabs: [
    {
      label: 'Overview',
      content: {
        prose: [
          "MeshMesh is an **AI-powered agent development environment** built specifically for Salesforce. Unlike general-purpose coding tools, it understands the platform natively -- metadata, governor limits, Agentforce patterns, and deployment workflows are built into its context.",
          "Think of it as a **Salesforce-fluent contractor.** It doesn't need you to explain what a Flow is or how Named Credentials work. It already knows, and it uses that knowledge to build faster and with fewer mistakes.",
        ],
        terminal: {
          title: 'MeshMesh in Action',
          steps: [
            { type: 'command', content: 'meshmesh init --org my-demo-org' },
            { type: 'output', content: 'Connected to my-demo-org (Enterprise Edition)' },
            { type: 'output', content: '' },
            { type: 'output', content: '> build an Agentforce agent for customer onboarding with 4 topics' },
            { type: 'output', content: '' },
            { type: 'claude-thinking', content: 'Analyzing org schema, existing objects, Agentforce config...' },
            { type: 'output', content: '' },
            { type: 'claude-response', content: 'Created agent with 4 topics, 12 actions, and prompt templates. Running test suite...' },
            { type: 'output', content: '' },
            { type: 'claude-response', content: '500+ tests passing. Ready to deploy.' },
          ],
        },
        takeaway: "MeshMesh's Salesforce-native context means **less prompting, fewer hallucinations, and faster time to working code.**",
      },
    },
    {
      label: 'Getting Started',
      content: {
        prose: [
          "**Access requires procurement approval.** MeshMesh is a third-party tool that goes through the standard vendor approval process. Start the request early -- it can take time.",
        ],
        stepFlow: {
          steps: [
            'Request access through the Software Catalog (search "MeshMesh")',
            'Manager and legal approval (allow time for vendor review)',
            'Install and authenticate against your demo org',
            'MeshMesh reads your org metadata and is ready to build',
          ],
        },
        habitCards: [
          { icon: 'Shield', title: 'Start with Agentforce', description: 'MeshMesh shines brightest on agent builds -- topics, actions, and test suites in a single session.' },
          { icon: 'Target', title: 'Leverage Org Context', description: 'Point it at a real org. The more metadata it reads, the better its output matches your environment.' },
          { icon: 'GitBranch', title: 'Build, Then Hand Off', description: 'Use MeshMesh for the heavy construction, then switch to Cursor for precision edits and polish.' },
          { icon: 'Crosshair', title: 'Test Early, Test Often', description: 'MeshMesh generates tests alongside code. Run them before deploying -- catch issues before they reach the org.' },
        ],
        takeaway: "Start the procurement process now. **The approval timeline is the only thing between you and 10x faster Agentforce builds.**",
      },
    },
  ],
}

export const cursor = {
  id: 'cursor',
  label: 'The Tools',
  title: 'Cursor',
  subtitle: 'The Vessel -- your editor, supercharged with AI.',
  tabs: [
    {
      label: 'Overview',
      content: {
        prose: [
          "Think of it this way: **Cursor is the Vessel, Claude is the Mind.** Cursor is built on VS Code -- same look, same extensions -- but with AI woven into every editing action. You stay in control of the flow; the AI accelerates each step.",
          "Four features cover almost everything you'll need.",
        ],
        features: [
          { shortcut: 'Tab', name: 'Autocomplete', description: 'Suggests the next line or block based on your context. Tab to accept, keep typing to ignore.' },
          { shortcut: 'Cmd+K', name: 'Inline Edit', description: 'Select code, describe the change in plain language, review the diff in place.' },
          { shortcut: 'Cmd+L', name: 'Chat Panel', description: 'Ask questions about your codebase with @codebase context. Use for understanding, not editing.' },
          { shortcut: 'Cmd+Shift+I', name: 'Composer', description: 'Multi-file changes from a single prompt with visual diffs before applying.' },
        ],
        takeaway: "Cursor is the right choice when you're **already in a file and want to stay there**.",
      },
    },
    {
      label: 'Getting Started',
      content: {
        prose: [
          "**Three steps: license, install, connect.** Cursor is built on VS Code, so if you've used VS Code before, you'll feel right at home.",
        ],
        stepFlow: {
          phases: [
            {
              label: 'Request your license',
              steps: [
                'Go to the Software Catalog for DET and search "Cursor AI"',
                'Select it, click Next, write a short Business Justification, and Submit',
                'Your manager approves. You get setup instructions via email.',
              ],
            },
            {
              label: 'Install Cursor',
              steps: [
                'Mac: run dx install cursor in your terminal. It handles everything.',
                'Windows: download from cursor.com and run the installer.',
                'Select Privacy Mode during setup. Import your VS Code settings if you want.',
                'The Salesforce Internal DX extension gets installed automatically.',
              ],
            },
            {
              label: 'Connect to a demo org',
              steps: [
                'Open the integrated terminal inside Cursor.',
                'sf org login web -a my-demo-org -- authenticate via browser.',
                'sf project generate -n my-demo -- creates an SFDX project.',
                'Agent mode can now deploy directly to this org.',
              ],
            },
          ],
        },
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
        takeaway: "License. Install. Connect. **You can be up and running by the end of this call.**",
      },
    },
  ],
}

export const saleo = {
  id: 'saleo',
  label: 'The Tools',
  title: 'Saleo',
  subtitle: 'Show the right data for every prospect -- without touching real records.',
  tabs: [
    {
      label: 'Overview',
      content: {
        prose: [
          "Claude Code and Cursor help you build and refine technical assets. Saleo solves a different problem: **what the customer actually sees during a demo.**",
          "Saleo is a browser extension that intercepts your Salesforce org and replaces displayed data with a customized overlay. No real records are modified. The overlay exists only in your session.",
        ],
        stepFlow: {
          steps: [
            'Open Salesforce in Chrome with the Saleo extension active',
            'Saleo intercepts the page and replaces data with your overlay',
            'Prospect sees a tailored view while the underlying org stays unchanged',
            'Switch overlays mid-demo or save templates per prospect or vertical',
          ],
        },
        takeaway: "Saleo lets you **demo the right story without rebuilding the environment.**",
      },
    },
    {
      label: 'Getting Started',
      content: {
        prose: [
          "**Saleo is a Chrome extension** -- no coding environment, no CLI, no project scaffolding. Install it, connect to your Salesforce org, and start building overlays.",
        ],
        stepFlow: {
          steps: [
            'Request access through the Software Catalog (search "Saleo")',
            'Install the Saleo Chrome extension from the Chrome Web Store',
            'Log in and connect it to your Salesforce demo org',
            'Navigate to any Salesforce page -- Saleo detects the fields and lets you overlay custom data',
          ],
        },
        stepFlowSecondary: {
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
      },
    },
  ],
}

export const useCases = {
  id: 'use-cases',
  label: 'The Big Picture',
  title: 'Why',
  hideDivider: true,
  subtitle: 'Beyond demos -- ways SEs are using these tools today.',
  tabs: [
    {
      label: 'Claude Code',
      content: {
        habitCards: [
          { icon: 'FileText', title: 'RFP Responses', description: 'Give it the RFP. Get technical responses mapped to Salesforce capabilities.' },
          { icon: 'Database', title: 'Test Data', description: 'Generate realistic demo data for any vertical. Accounts, Contacts, Opps, Cases -- at scale.' },
          { icon: 'ArrowRightLeft', title: 'Migration Scripts', description: 'Prototype the data move from a prospect\'s legacy system to Salesforce.' },
          { icon: 'Wrench', title: 'Integration Prototypes', description: 'Scaffold a REST or SOAP integration to prove connectivity with their stack.' },
        ],
      },
    },
    {
      label: 'MeshMesh',
      content: {
        habitCards: [
          { icon: 'Bot', title: 'Agentforce Builds', description: 'Build a customer-specific agent in a single session. Onboarding, case routing, FAQ -- pick one and ship it.' },
          { icon: 'Layers', title: 'Industry Packages', description: 'Reusable Agentforce configs by vertical. Build once for healthcare, reuse for every healthcare prospect.' },
          { icon: 'Settings', title: 'SDO Customization', description: 'Tailor your SDO with industry-specific flows and automation. Describe it, deploy it.' },
          { icon: 'Gauge', title: 'Scale Proof Points', description: 'Prove Salesforce handles their volume. Real Apex, real benchmarks.' },
        ],
      },
    },
    {
      label: 'Cursor',
      content: {
        habitCards: [
          { icon: 'PenLine', title: 'LWC Tweaks', description: 'Modify a component for a specific customer. Select, describe, review the diff, done.' },
          { icon: 'Search', title: 'Codebase Ramp-Up', description: 'Inherited a project? Use @codebase to understand it in minutes, not hours.' },
          { icon: 'Code', title: 'Flow to Apex', description: 'When a prospect hits Flow limits, convert the logic to Apex with Composer.' },
          { icon: 'Users', title: 'Team Consistency', description: 'Share .cursorrules across the team so everyone gets consistent AI output.' },
        ],
      },
    },
    {
      label: 'Saleo',
      content: {
        habitCards: [
          { icon: 'Users', title: 'Multi-Persona Demos', description: 'Switch overlays mid-call. VP sees pipeline, rep sees tasks, admin sees config.' },
          { icon: 'Repeat', title: 'Vertical Templates', description: 'One template per industry. Every new prospect in that vertical takes minutes, not hours.' },
          { icon: 'Briefcase', title: 'Competitive Demos', description: 'Mirror what they see in their current tool. Salesforce feels familiar from day one.' },
          { icon: 'BarChart3', title: 'Exec Briefings', description: 'Show C-level KPIs using their publicly reported numbers. Real and relevant.' },
        ],
      },
    },
  ],
}
