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
          "**Who it's for: Technical SEs who want maximum autonomy.** You describe a goal, it handles everything -- reads your project, writes code, runs it, checks its own work. The most powerful tool when you need to build from scratch.",
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
    {
      label: 'Prompting Tips',
      content: {
        prose: [
          "Claude Code responds to specificity. The more precisely you describe the goal, the constraints, and what 'done' looks like — the less back-and-forth you need and the more usable the first output is.",
        ],
        habitCards: [
          { icon: 'GitBranch', title: 'Use /plan for anything significant', description: 'Before any meaningful build, type /plan. It shows the full approach — files it will touch, steps it will take. Catch misunderstandings before they cost you. This is the most underused habit.' },
          { icon: 'Briefcase', title: 'Name your Salesforce context explicitly', description: 'Don\'t assume it knows your org. Say: "This is a demo org for financial services. We use Service Cloud and Agentforce. Custom objects include Policy__c and Claim__c." That context shapes everything it builds.' },
          { icon: 'Target', title: 'Define what done looks like', description: 'Tell it the acceptance criteria upfront: "Build the onboarding agent. Done means: welcome email sends, case is created and routed, all tests pass. Do not deploy until every test passes."' },
          { icon: 'Eye', title: 'Ask it to explain what it built', description: 'After each output: "Walk me through what you just built. Explain the key decisions. What could go wrong in a live demo?" Understanding the output makes your demo conversation stronger.' },
        ],
        takeaway: 'Specific goal. Named context. Clear acceptance criteria. **Those three inputs make every Claude Code session faster and the output more usable.**',
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
          "**Who it's for: Any SE who builds on Salesforce -- technical or not.** MeshMesh already understands the platform -- objects, rules, Agentforce patterns -- so you skip the explaining and go straight to building. It's the Salesforce-native way to build, and it's where custom work starts.",
          "MeshMesh is the tool you reach for when you need to **build something on Salesforce, fast.** Stand up Agentforce agents in a single session, customize demo orgs for specific industries, build reusable demo packages by vertical, and create test suites that prove things work at scale.",
          "One SE cut demo guide prep from 2 full days to 30 minutes. Another built a six-week POC in 90 minutes. **Customers activate instead of waiting weeks for a follow-up.** Best paired with Claude Code or Cursor for complex custom code, and Saleo for the final demo personalization layer.",
        ],
        quote: "What took back and forth with Cursor took 3 prompts... it built me multiple components and inserted seed data correctly. It even tested the seed data itself.",
        terminal: {
          title: 'What a Session Looks Like',
          steps: [
            { type: 'claude-response', content: 'Connected to my-demo-org. I can see Sales Cloud, Service Cloud, and 3 custom objects.' },
            { type: 'output', content: '' },
            { type: 'output', content: '> Configure this org for a healthcare insurance demo — add industry-specific fields, page layouts, and a case routing flow' },
            { type: 'output', content: '' },
            { type: 'claude-thinking', content: 'Reading your org metadata... Creating fields, layouts, and flow configuration...' },
            { type: 'output', content: '' },
            { type: 'claude-response', content: 'Done. Added 8 custom fields, 2 page layouts, and a case routing flow with 3 branches. 120 tests passing. Ready for review.' },
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
    {
      label: 'Prompting Tips',
      content: {
        prose: [
          "MeshMesh already knows Salesforce — so your prompts don't need to explain the platform. They need to explain the **use case.** Tell it what the customer scenario is, not what the technology is.",
        ],
        habitCards: [
          { icon: 'Database', title: 'Let it read the org before you build', description: 'Always connect your demo org first. Your prompts will be far more accurate: "configure this org for healthcare" triggers completely different output when it knows your actual object structure.' },
          { icon: 'FileText', title: 'Reference real objects in your prompts', description: 'Instead of "create a case routing flow," say "create a case routing flow using our existing Case object and the custom Priority__c field." It reads your schema — use what it finds.' },
          { icon: 'Target', title: 'One scope per session', description: '"Build a full healthcare demo" is too broad. "Add industry-specific fields to the Account object" is a session. "Build a case routing flow" is the next session. Focused scope produces cleaner output.' },
          { icon: 'Shield', title: 'Ask for a change summary before deploying', description: '"Before you deploy: list every object you\'re modifying and every test you\'ll run." That\'s your pre-demo checklist. Read it. Know it. Then approve the deployment.' },
        ],
        takeaway: 'Tell it the customer scenario, not the technology. **It already knows the platform — your context is what it\'s missing.**',
      },
    },
  ],
}

export const cursor = {
  id: 'cursor',
  label: 'The Tools',
  title: 'Cursor',
  subtitle: 'One AI editor for the whole deal cycle.',
  tabs: [
    {
      label: 'Overview',
      content: {
        prose: [
          "**Who it's for: Any SE who wants to move faster — across the entire deal.** Cursor isn't just a code editor. SEs are using it for discovery notes, RFx responses, solution design docs, architecture readbacks, and demo builds — all in one workspace. One Principal SE runs 70% docs, 30% builds.",
          "Cursor gives you **three modes** that change how you work. Ask mode lets you understand code or projects you didn't write. Plan mode helps you think through a change before committing to it. Agent mode builds end-to-end — creates files, writes code, runs commands.",
          "**The @ symbol is the key to context.** Type @ to reference specific files, search your entire codebase, pull in Salesforce docs, or get the latest info from the web. This is what makes Cursor fundamentally different from ChatGPT — it works inside your actual project.",
          "**SEs are using it to:** anchor customer context from first call to close, synthesize discovery into architecture readbacks, customize demo components, understand inherited projects in minutes, and iterate live during a call.",
        ],
        quote: "This innovative approach slashes custom demo preparation time by hours each month, freeing up valuable time that translates into days saved over the year.",
        features: [
          { shortcut: 'Tab', name: 'Autocomplete', description: 'Suggests the next line as you type. Press Tab to accept, keep typing to ignore.' },
          { shortcut: 'Cmd+K', name: 'Quick Edit', description: 'Select some code, describe what you want changed in plain English, and see the change instantly.' },
          { shortcut: 'Cmd+L', name: 'Ask a Question', description: 'Ask questions about your project. Great for understanding code you didn\'t write.' },
          { shortcut: 'Cmd+Shift+I', name: 'Big Changes', description: 'Describe a change that spans multiple files. Review everything before accepting.' },
        ],
        takeaway: "Reach for Cursor when you want **one workspace for the whole deal** — from discovery to demo build to follow-up.",
      },
    },
    {
      label: 'Chat and Context',
      content: {
        prose: [
          "**Three modes that change how you work.** Cursor's chat panel is three different tools depending on what you need. Ask to understand code you didn't write. Plan to think through a change before committing. Agent to let the AI build end-to-end. You pick the mode, you stay in control.",
          "**The @ symbol is the key to everything.** Type @ in the chat to reference specific files, search your entire codebase, pull in external documentation, or get the latest info from the web. This is what makes Cursor fundamentally different from ChatGPT — it works with your actual project, not in a vacuum.",
        ],
        features: [
          { shortcut: 'Ask', name: 'Understand', description: 'Highlight code and ask what it does. Get a plain-English explanation. Great for inherited projects.' },
          { shortcut: 'Plan', name: 'Design', description: 'Describe a change. See the full approach before anything gets modified. Catches bad ideas early.' },
          { shortcut: 'Agent', name: 'Build', description: 'Describe what you need. Cursor creates files, writes code, and runs commands. Review every change before accepting.' },
        ],
        habitCards: [
          { icon: 'FileText', title: '@Files', description: 'Reference a specific file in your project. No copying and pasting — just point at it.' },
          { icon: 'Search', title: '@Codebase', description: 'Ask about your whole project. "Where are Account field mappings?" Instant answer.' },
          { icon: 'BookOpen', title: '@Docs', description: 'Pull in Salesforce docs, Apex guides, or any documentation. Stops the AI from making things up.' },
          { icon: 'Globe', title: '@Web', description: 'Get the latest Salesforce CLI commands or release notes without switching tabs.' },
        ],
        takeaway: "Three modes and four @ symbols cover 90% of what you'll do in Cursor. **Ask, plan, build — and always give it context.**",
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
    {
      label: 'Prompting Tips',
      content: {
        prose: [
          "Cursor has three modes — and the way you prompt each one is different. Getting the mode right is as important as getting the prompt right. Most SEs who feel like Cursor isn't working are using Agent mode for things Ask mode does better.",
        ],
        habitCards: [
          { icon: 'Layers', title: 'Match the mode to the question', description: 'Ask mode: "What does this do?" Plan mode: "How should I change this?" Agent mode: "Make this change." Using the wrong mode gets the wrong kind of help — and often the wrong result.' },
          { icon: 'AtSign', title: 'Use @ instead of describing files', description: 'Never describe a file in text when you can reference it directly. "@AccountList.jsx — add a filter for active accounts only" is clearer and faster than "in the account list component, add a filter."' },
          { icon: 'Users', title: 'Set the audience in every prose prompt', description: 'For docs and briefs: "Write this for a VP of Sales who doesn\'t know Salesforce. No jargon. Focus on business outcomes." For code: "Keep this consistent with the existing LWC patterns in this project."' },
          { icon: 'FileText', title: 'Use rules files for conventions', description: 'Add a .cursorrules file with your project conventions. Every instruction you\'ve typed more than twice is a candidate. Write it once, never type it again.' },
        ],
        takeaway: 'Right mode. @ for context. Audience in the prompt. **Three habits that make Cursor feel completely different.**',
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
          "**Who it's for: Every SE. Zero technical skill required.** If you run demos, Saleo makes them better. It's the fastest path to a personalized, customer-ready demo -- no code, no complexity, no risk to your org. Start here.",
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
    {
      label: 'Tips & Patterns',
      content: {
        prose: [
          "Saleo doesn't use prompts — but it rewards system and habits. The SEs who get the most from it aren't spending more time on demos. They've built a pattern that makes every setup faster than the last.",
        ],
        habitCards: [
          { icon: 'Target', title: 'Template naming: always the same pattern', description: 'Use "Company — Segment — Date" for every template (e.g., "Contoso — Enterprise Healthcare — Apr 2026"). Searchable. Sortable. You\'ll thank yourself when you have 40 templates and need the right one before a call.' },
          { icon: 'PenLine', title: 'Four fields change everything', description: 'Company name, ARR/revenue, pipeline stage names, logo. Update these four and the demo feels custom. Everything else is polish you do if you have time.' },
          { icon: 'Users', title: 'Pre-build all persona views', description: 'Before the call: VP view (pipeline + revenue), Manager view (team metrics), Rep view (daily tasks). Know which tab to click for each stakeholder before anyone asks. The switch takes two seconds, not two minutes.' },
          { icon: 'Repeat', title: 'Duplicate, never build from scratch', description: 'Find the template closest to the next prospect. Duplicate it. Update the four core fields. Archive when done. Every new template starts from a working one, not from zero.' },
        ],
        takeaway: 'Consistent naming. Four core fields. Pre-built personas. **The SE who does these three things consistently runs the most compelling demos on the team.**',
      },
    },
  ],
}

export const playbooks = {
  id: 'playbooks',
  label: 'Playbooks',
  title: 'Playbooks',
  subtitle: 'Step-by-step guides for what you actually need to do.',
  tabs: [
    {
      label: 'Personalize a Demo',
      content: {
        prose: [
          '**Tool: Saleo.** A personalized demo lands harder than a generic one — and Saleo makes personalization the default, not the exception. The key is building a template library by vertical. Each new prospect in that industry becomes a 15-minute customization, not a two-hour rebuild.',
          'Here\'s how to build and use your first vertical template.',
        ],
        habitCards: [
          { icon: 'Layers', title: 'Start from the nearest template', description: 'In Saleo, find the existing template closest to your customer\'s industry. Duplicate it. Never start from scratch — the structure of a working template is already half the work.' },
          { icon: 'PenLine', title: 'Update the four core fields', description: 'Company name, ARR/revenue, pipeline stage names, and logo drive 80% of how "built for them" the demo feels. Update these first. Everything else is polish.' },
          { icon: 'Users', title: 'Create views for each stakeholder', description: 'VP: pipeline and revenue metrics. Manager: team performance. Rep: daily tasks. Build each view before the call so you can switch mid-demo without scrambling.' },
          { icon: 'Target', title: 'Name it, save it, reuse it', description: 'Use "Company — Segment — Date" naming (e.g., "Acme — Enterprise Healthcare — Apr 2026"). Save the template. The next healthcare prospect reuses it in 10 minutes.' },
        ],
        takeaway: 'Your vertical templates are a compounding asset. **Every prospect in that industry costs less than the one before.**',
      },
    },
    {
      label: 'Build a Live POC',
      content: {
        prose: [
          '**Tools: MeshMesh + Claude Code.** A POC that was built shows differently than one that was promised. SEs who build during or immediately after discovery close faster — the customer sees their exact use case working, not a slide describing it.',
          'Use MeshMesh for Salesforce-native builds. Use Claude Code when you need custom logic. Start with one agent and one use case.',
        ],
        habitCards: [
          { icon: 'FileText', title: 'Turn discovery notes into a build brief', description: 'Paste your call notes and prompt: "The customer is a healthcare insurer. Their pain is slow case routing. They want an Agentforce agent that routes cases by product type and sends a confirmation email. Build it." That\'s the entire prompt.' },
          { icon: 'Bot', title: 'Let MeshMesh read the org first', description: 'Before building, connect to your demo org and let MeshMesh scan it. It reads your objects, fields, and flows. The output will match your actual setup, not a generic template.' },
          { icon: 'Shield', title: 'Test before you show anything', description: 'Run the generated tests. Walk through the agent flow yourself. Ask it: "What edge cases does this not handle?" Know the gaps before the customer finds them.' },
          { icon: 'Code', title: 'Use Claude Code for custom logic', description: 'When MeshMesh needs something that isn\'t Salesforce-native, switch to Claude Code: "Write an Apex class that [specific behavior]. Connect it to the agent topics I just built in MeshMesh."' },
        ],
        takeaway: '**The POC starts during discovery, not after it.** That\'s the shift.',
      },
    },
    {
      label: 'Draft an RFP Response',
      content: {
        prose: [
          '**Tool: Claude Code.** RFP responses are high-stakes, time-consuming, and formulaic — which makes them ideal for AI. Claude Code cuts the time from days to hours. You provide the context and constraints. It maps requirements to Salesforce capabilities.',
          'The key is treating it like a project with a context file, not a single-shot prompt.',
        ],
        habitCards: [
          { icon: 'FileText', title: 'Set up a context file first', description: 'Create a CLAUDE.md in your RFP project folder: "We\'re responding as Salesforce. Use official product names. Flag any requirement we can\'t meet natively. Output format: table with columns for Requirement, Salesforce Product, and Notes."' },
          { icon: 'Search', title: 'Feed the RFP and ask for a map', description: 'Paste the full RFP or upload the document. Prompt: "Map each technical requirement to a specific Salesforce product or feature. Where we can\'t meet a requirement natively, note it and suggest the closest alternative."' },
          { icon: 'Target', title: 'Ask it to surface the gaps', description: 'Follow up: "Which requirements did you flag as gaps? Rank them by risk to the deal." This tells you exactly where to spend review time and which objections to pre-handle.' },
          { icon: 'Eye', title: 'Review by section, not top-to-bottom', description: 'Ask it to explain its reasoning for any answer you\'re unsure of. Then edit with deal context the AI couldn\'t have — customer relationships, known preferences, negotiated commitments.' },
        ],
        takeaway: 'Claude Code gets you to a strong first draft in under an hour. **Your judgment on top of it is what makes it a deal winner.**',
      },
    },
    {
      label: 'Understand Inherited Code',
      content: {
        prose: [
          '**Tool: Cursor.** Every SE inherits code eventually — a demo project from another SE, a prospect\'s integration, a component built six months ago. Cursor\'s Ask mode is built exactly for this.',
          'The rule is always the same: understand first, change second. Never edit code you don\'t understand.',
        ],
        habitCards: [
          { icon: 'Search', title: 'Start with a full project overview', description: 'Open Cursor, press Cmd+L, switch to Ask mode. Type: "I just inherited this project. Give me a one-page summary: what it does, how it\'s structured, which files matter most, and what I\'d change to [your goal]."' },
          { icon: 'FileText', title: 'Drill into specific files with @', description: 'Type @ and select any file to reference it directly. Ask: "What does this component do? What data does it read? What would break if I changed [specific line]?" Get answers before touching anything.' },
          { icon: 'BookOpen', title: 'Trace the data flow', description: 'Ask: "Where does [field/variable] come from? Trace it from source to output." Cursor reads the whole codebase — it can follow a thread through dozens of files in seconds.' },
          { icon: 'GitBranch', title: 'Switch to Plan mode before changing', description: 'Once you understand what you have, switch to Plan mode. Describe the change and see the full approach before a single line is modified. Catch bad ideas early.' },
        ],
        takeaway: 'Understand it before you touch it. **That\'s the habit that prevents demo disasters.**',
      },
    },
    {
      label: 'Generate Demo Data',
      content: {
        prose: [
          '**Tool: Claude Code.** Generic demo data kills demos. "Acme Corp" with round numbers doesn\'t feel real. Claude Code generates realistic, industry-specific data in minutes — accounts, contacts, opportunities, cases, and more.',
          'Build a custom command once. Reuse it for every prospect in that vertical.',
        ],
        habitCards: [
          { icon: 'Database', title: 'Be specific about the vertical and numbers', description: 'Weak: "Generate demo data." Strong: "Generate 15 healthcare insurance accounts: realistic company names, 200–5,000 employees, $10M–$200M ARR, 2–4 open opps each, mix of healthy and at-risk account health scores."' },
          { icon: 'Layers', title: 'Add industry language', description: 'Tell it the vertical\'s vocabulary: "Use terms like member, enrollee, premium, claims ratio, and provider network. Names should be realistic for US mid-market insurers." It will match the register.' },
          { icon: 'Terminal', title: 'Save it as a custom command', description: 'Once the prompt works, save it as .claude/commands/demo-data-healthcare.md. Use $ARGUMENTS for variables like count and deal size range. Next time: one command, consistent output.' },
          { icon: 'ArrowRightLeft', title: 'Export in the format you need', description: 'Ask for CSV, JSON, or Salesforce Data Loader format. Specify field names that match your org\'s API names: "Export as CSV with columns: Name, AnnualRevenue, Industry, NumberOfEmployees."' },
        ],
        takeaway: 'Your first vertical data set is an investment. **Every subsequent use of it is free.**',
      },
    },
    {
      label: 'Prep for a Call',
      content: {
        prose: [
          '**Tool: Cursor.** Most of the value AI adds isn\'t code — it\'s thinking. Cursor is where sharp SEs prep for calls, synthesize discovery, and build the briefs that make every conversation sharper.',
          'Use it the way you\'d use a research assistant who has read everything, never gets tired, and always starts from what you\'ve already told it.',
        ],
        habitCards: [
          { icon: 'Briefcase', title: 'Build a customer brief before the call', description: 'Start a new file. Prompt: "Based on [company]\'s public information and these discovery notes, write a brief: company background, key pain points, likely stakeholders, and how Salesforce addresses each pain."' },
          { icon: 'Crosshair', title: 'Generate targeted discovery questions', description: 'Prompt: "I\'m meeting with a VP of Sales at a mid-market manufacturer. Generate 10 discovery questions that surface pain around [specific area]. Rank them by likely deal impact."' },
          { icon: 'Target', title: 'Synthesize your call notes', description: 'After the call: paste your notes and prompt: "Organize these into: confirmed requirements, unstated needs, objections to address, and next steps. Highlight anything that should change the demo."' },
          { icon: 'Layers', title: 'Draft the architecture readback', description: 'Prompt: "Based on these requirements, draft a one-page solution architecture. Map each requirement to a Salesforce product. Flag anything that requires customization or a third-party integration."' },
        ],
        takeaway: 'The prep happens in Cursor. The conversation happens with the customer. **One feeds the other.**',
      },
    },
  ],
}
