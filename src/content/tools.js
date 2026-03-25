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
          "Claude Code is the tool you reach for when you need to **build something from scratch.** An Agentforce agent. A batch of demo data. An RFP response mapped to Salesforce capabilities. You describe what you need in plain English, and it builds it -- start to finish, on its own.",
          "**SEs are using it to:** build working Agentforce agents in under an hour, generate realistic demo data for any vertical, prototype integrations during discovery calls, and draft technical RFP responses overnight.",
          "You don't manage the steps. You describe the outcome and review what it produces. **The POC starts during the call, not after it.**",
        ],
        quote: "I spent a couple hours building a fully functional Agentforce patient support agent, basically just using my voice/natural language. Instead of spending days wrestling with prompt engineering, topic and action building, and testing, I simply described what I wanted.",
        terminal: {
          title: 'What It Looks Like',
          steps: [
            { type: 'command', content: 'claude' },
            { type: 'output', content: '' },
            { type: 'claude-response', content: 'This is a Salesforce project connected to a demo org. What would you like to build?' },
            { type: 'output', content: '' },
            { type: 'output', content: '> build an Agentforce agent for customer onboarding with welcome email and case creation topics' },
            { type: 'output', content: '' },
            { type: 'claude-thinking', content: 'Reading your org... Creating topics, actions, and templates...' },
            { type: 'output', content: '' },
            { type: 'claude-response', content: 'Done. Created 2 topics, 6 actions, and templates. Deployed to your org -- 48 tests passing.' },
          ],
        },
        takeaway: "Reach for Claude Code when you need to **build something from nothing.** Describe the goal, review the output.",
      },
    },
    {
      label: 'Getting Started',
      content: {
        prose: [
          "**One line to install -- even if you've never used a terminal before.** Open the terminal app on your Mac, paste the install command, and you're ready. Then type `claude` in any project folder to start.",
          "**The most important setup step** is letting Claude learn about your project. Type `/init` and it generates a short description automatically -- this helps it give you better results.",
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
            { type: 'claude-response', content: 'Generated project description:' },
            { type: 'output', content: '' },
            { type: 'file-change', content: '+ # Demo App\n+ \n+ ## What This Is\n+ A Salesforce demo project\n+ \n+ ## How to Run\n+ - npm run dev -- start local server\n+ - npm test -- run tests\n+ \n+ ## Conventions\n+ - Components use PascalCase\n+ - API calls go in src/api/' },
          ],
          expandable: true,
        },
        habitCards: [
          { icon: 'GitBranch', title: 'Plan First', description: 'Type /plan before any big change. See the full approach before anything gets modified.' },
          { icon: 'Shield', title: 'You Stay in Control', description: 'Claude asks before making changes. If something goes wrong, press Esc twice -- it rolls back instantly.' },
          { icon: 'Target', title: 'Stay Focused', description: 'One task at a time. If it starts losing the thread, start a new conversation. Short and focused beats long and sprawling.' },
          { icon: 'Crosshair', title: 'Be Specific', description: '"Make it faster" is vague. "Get page load under 1 second" is clear. The more specific your ask, the better the result.' },
        ],
        takeaway: "Install, type `/init` to set up your project, and start asking for what you need. **That's the whole setup.**",
      },
    },
  ],
}

export const meshmesh = {
  id: 'meshmesh',
  label: 'The Tools',
  title: 'MeshMesh',
  subtitle: 'The Salesforce-native builder. AI that already knows the platform.',
  tabs: [
    {
      label: 'Overview',
      content: {
        prose: [
          "MeshMesh is the tool you reach for when you need to **build something on Salesforce, fast.** It already understands the platform -- objects, rules, Agentforce patterns -- so you skip the explaining and go straight to building.",
          "**SEs are using it to:** stand up Agentforce agents in a single session, customize demo orgs for specific industries, build reusable demo packages by vertical, and create test suites that prove things work at scale.",
          "One SE cut demo guide prep from 2 full days to 30 minutes. Another built a six-week POC in 90 minutes. **Customers activate instead of waiting weeks for a follow-up.**",
        ],
        quote: "What took back and forth with Cursor took 3 prompts... it built me multiple components and inserted seed data correctly. It even tested the seed data itself.",
        terminal: {
          title: 'What a Session Looks Like',
          steps: [
            { type: 'command', content: 'meshmesh init --org my-demo-org' },
            { type: 'output', content: 'Connected to my-demo-org' },
            { type: 'output', content: '' },
            { type: 'output', content: '> build an Agentforce agent for customer onboarding with 4 topics' },
            { type: 'output', content: '' },
            { type: 'claude-thinking', content: 'Reading your org structure and existing setup...' },
            { type: 'output', content: '' },
            { type: 'claude-response', content: 'Done. Agent with 4 topics, 12 actions, and templates. 500+ tests passing. Ready to deploy.' },
          ],
        },
        takeaway: "Reach for MeshMesh when the build is **Salesforce-native and you want it done in one sitting.**",
      },
    },
    {
      label: 'Getting Started',
      content: {
        prose: [
          "**Start the access request now so you're ready when you need it.** MeshMesh goes through the standard vendor approval process. The setup itself is fast -- the approval timeline is the only wait.",
        ],
        stepFlow: {
          steps: [
            'Request access through the Software Catalog (search "MeshMesh")',
            'Manager and legal approval (allow time for vendor review)',
            'Install and connect to your demo org',
            'MeshMesh reads your org and is ready to build',
          ],
        },
        habitCards: [
          { icon: 'Shield', title: 'Start with One Agent', description: 'Pick one use case -- onboarding, FAQ, case routing -- and build that first. Don\'t try to boil the ocean.' },
          { icon: 'Target', title: 'Let It Read Your Org', description: 'Point it at a real org. The more it knows about your setup, the better its output.' },
          { icon: 'GitBranch', title: 'Build, Then Polish', description: 'Use MeshMesh for the heavy building, then switch to Cursor for small tweaks and refinements.' },
          { icon: 'Crosshair', title: 'Test Before You Show', description: 'MeshMesh generates tests alongside your build. Run them before showing anything to a customer.' },
        ],
        takeaway: "Start the access request now. **The approval timeline is the only thing between you and 10x faster Agentforce builds.**",
      },
    },
  ],
}

export const cursor = {
  id: 'cursor',
  label: 'The Tools',
  title: 'Cursor',
  subtitle: 'A smart editor with AI built in.',
  tabs: [
    {
      label: 'Overview',
      content: {
        prose: [
          "Cursor is the tool you reach for when you need to **edit, tweak, or understand existing code.** It's a smart editor -- you work inside your files like normal, but AI is there to help at every step.",
          "**SEs are using it to:** customize demo components for specific prospects, understand code they inherited in minutes instead of hours, iterate on a customer's ask live during a call, and turn point-and-click automation into code when prospects hit limits.",
          "Four shortcuts cover almost everything. **Customer confidence goes up when you can iterate in real time.**",
        ],
        quote: "This innovative approach slashes custom demo preparation time by hours each month, freeing up valuable time that translates into days saved over the year.",
        features: [
          { shortcut: 'Tab', name: 'Autocomplete', description: 'Suggests the next line as you type. Press Tab to accept, keep typing to ignore.' },
          { shortcut: 'Cmd+K', name: 'Quick Edit', description: 'Select some code, describe what you want changed in plain English, and see the change instantly.' },
          { shortcut: 'Cmd+L', name: 'Ask a Question', description: 'Ask questions about your project. Great for understanding code you didn\'t write.' },
          { shortcut: 'Cmd+Shift+I', name: 'Big Changes', description: 'Describe a change that spans multiple files. Review everything before accepting.' },
        ],
        takeaway: "Reach for Cursor when you need to **tweak something that already exists** or iterate live on a prospect's request.",
      },
    },
    {
      label: 'Getting Started',
      content: {
        prose: [
          "**Three steps: license, install, connect.** If you've used any code editor before, Cursor will feel like home. If you haven't, that's OK too -- the setup walks you through everything.",
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
                'Select Privacy Mode during setup. Import settings from a previous editor if you want.',
                'The Salesforce extension gets installed automatically.',
              ],
            },
            {
              label: 'Connect to a demo org',
              steps: [
                'Open the built-in terminal inside Cursor.',
                'Log in to your Salesforce org through the browser.',
                'Create a new project folder for your demo.',
                'Cursor can now deploy directly to your org.',
              ],
            },
          ],
        },
        habitCards: [
          { icon: 'Zap', title: 'Start with Tab', description: 'Just start typing. Cursor suggests the next line automatically. Press Tab to accept, keep typing to ignore. Zero effort.' },
          { icon: 'Target', title: 'Use Agent Mode', description: 'Open the chat panel (Cmd+L) and switch to Agent. It can read files, write code, and run commands -- all from one prompt.' },
          { icon: 'FileText', title: 'Give It Context', description: 'Type @ in the chat to pull in files, docs, or your whole project. The more context, the better the output.' },
          { icon: 'Shield', title: 'Review Before Accepting', description: 'Cursor shows you exactly what changed before you accept. Read the changes. Never approve blindly.' },
        ],
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
          "Saleo is the tool you reach for when you need your **demo to look like the prospect's business.** Their company name, their industry metrics, their pipeline stages -- all shown on screen without changing a single real record.",
          "**SEs are using it to:** personalize demos in minutes instead of hours, switch between prospect views mid-call, build reusable templates by industry, and show exec-level dashboards with publicly reported numbers.",
          "No coding. No complexity. **Demos land harder when the prospect sees their own world.**",
        ],
        quote: "The customer had last-minute requests and Saleo let me quickly build exactly what they wanted. From customized stage names to new buttons and activity panel updates, the demo was highly personalized and very well received.",
        stepFlow: {
          steps: [
            'Open Salesforce in Chrome with the Saleo extension active',
            'Saleo replaces the displayed data with your custom version',
            'Prospect sees a tailored view while the real org stays unchanged',
            'Switch views mid-demo or save templates per prospect or vertical',
          ],
        },
        takeaway: "Reach for Saleo when you need the **demo to feel like it was built for this prospect.** No code, no risk.",
      },
    },
    {
      label: 'Getting Started',
      content: {
        prose: [
          "**Saleo is a Chrome extension** -- no coding, no downloads, no setup headaches. Install it, connect to your Salesforce org, and start customizing what prospects see.",
        ],
        stepFlow: {
          steps: [
            'Request access through the Software Catalog (search "Saleo")',
            'Install the Saleo Chrome extension from the Chrome Web Store',
            'Log in and connect it to your Salesforce demo org',
            'Navigate to any Salesforce page -- Saleo detects the fields and lets you customize the data',
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
                'Activate your custom view from the extension',
                'Prospect asks about a different scenario',
                'Switch template or adjust a field live',
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
  label: 'Use Cases',
  title: 'Why',
  hideDivider: true,
  subtitle: 'Beyond demos -- ways SEs are using these tools today.',
  tabs: [
    {
      label: 'Claude Code',
      content: {
        habitCards: [
          { icon: 'FileText', title: 'RFP Responses', description: 'Give it the RFP document. Get technical responses mapped to Salesforce capabilities.' },
          { icon: 'Database', title: 'Demo Data', description: 'Generate realistic demo data for any vertical. Accounts, Contacts, Opportunities, Cases -- at scale.' },
          { icon: 'ArrowRightLeft', title: 'Migration Prototypes', description: 'Show a prospect how their data would move from their current system to Salesforce.' },
          { icon: 'Wrench', title: 'Integration Demos', description: 'Build a working connection between Salesforce and their existing tools to prove it works.' },
          { icon: 'Search', title: 'Org Health Check', description: 'Scan a prospect\'s Salesforce setup and surface gaps, quick wins, and improvement areas.', emerging: true },
          { icon: 'Zap', title: 'POC Acceleration', description: 'Turn discovery notes into a working proof of concept -- before the next call.', emerging: true },
        ],
      },
    },
    {
      label: 'MeshMesh',
      content: {
        habitCards: [
          { icon: 'Bot', title: 'Agentforce Builds', description: 'Build a customer-specific agent in a single session. Onboarding, case routing, FAQ -- pick one and ship it.' },
          { icon: 'Layers', title: 'Industry Packages', description: 'Reusable Agentforce setups by vertical. Build once for healthcare, reuse for every healthcare prospect.' },
          { icon: 'Settings', title: 'Demo Org Customization', description: 'Tailor your demo org with industry-specific workflows and automation. Describe it, deploy it.' },
          { icon: 'Gauge', title: 'Scale Proof Points', description: 'Prove Salesforce handles their volume with real, working examples.' },
          { icon: 'TrendingUp', title: 'Consumption Activation', description: 'Build an Agentforce agent tailored to a customer\'s unused features -- drive adoption, not shelfware.', emerging: true },
        ],
      },
    },
    {
      label: 'Cursor',
      content: {
        habitCards: [
          { icon: 'PenLine', title: 'Quick Component Edits', description: 'Modify a component for a specific customer. Select the code, describe the change, done.' },
          { icon: 'Search', title: 'Understand New Code', description: 'Inherited a project? Ask the AI to explain it. Understand in minutes, not hours.' },
          { icon: 'Code', title: 'Turn Clicks into Code', description: 'When a prospect hits the limits of point-and-click automation, convert it to code with one prompt.' },
          { icon: 'Users', title: 'Team Consistency', description: 'Share settings across the team so everyone gets consistent AI output.' },
        ],
      },
    },
    {
      label: 'Saleo',
      content: {
        habitCards: [
          { icon: 'Users', title: 'Multi-Persona Demos', description: 'Switch views mid-call. VP sees pipeline, rep sees tasks, admin sees config.' },
          { icon: 'Repeat', title: 'Vertical Templates', description: 'One template per industry. Every new prospect in that vertical takes minutes, not hours.' },
          { icon: 'Briefcase', title: 'Competitive Demos', description: 'Mirror what they see in their current tool. Salesforce feels familiar from day one.' },
          { icon: 'BarChart3', title: 'Exec Briefings', description: 'Show C-level KPIs using their publicly reported numbers. Real and relevant.' },
        ],
      },
    },
  ],
}
