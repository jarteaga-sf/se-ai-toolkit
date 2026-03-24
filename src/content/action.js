export const liveDemo = {
  id: 'live-demo',
  label: 'See It in Action',
  title: 'Live Demo',
  subtitle: 'From prompt to deployed -- building an LWC dashboard card in Cursor.',
  prose: [
    "This section is your companion for the live demo -- and a walkthrough you can revisit on your own time. Each step below shows a key moment in the workflow: one prompt, five generated files, deployed to a real org.",
  ],
  gifShowcases: [
    {
      step: 1,
      src: null,
      alt: 'Opening Cursor with an SFDX project and switching to Agent mode',
      caption: 'Step 1: Open Agent Mode',
      explanation: 'Open Cursor with your SFDX project. Press Cmd+L to open the chat panel, then switch to Agent mode. Agent has full access to read files, write code, and run terminal commands.',
    },
    {
      step: 2,
      src: null,
      alt: 'Writing a natural language prompt describing the LWC to build',
      caption: 'Step 2: Write Your Prompt',
      explanation: '"Build an LWC that shows a dashboard card with total open opportunities, pipeline value, and win rate percentage. Use @AuraEnabled Apex to fetch the data." One prompt. That\'s it.',
    },
    {
      step: 3,
      src: null,
      alt: 'Cursor Agent generating multiple files autonomously',
      caption: 'Step 3: Watch Agent Build',
      explanation: 'Agent reads your project structure, then generates all 5 files autonomously: LWC HTML, JavaScript, CSS, meta.xml, and an Apex controller. You review the diffs and accept.',
    },
    {
      step: 4,
      src: null,
      alt: 'Agent running sf project deploy start in the terminal',
      caption: 'Step 4: Deploy to Your Org',
      explanation: 'Agent runs sf project deploy start in the integrated terminal. The component and Apex class deploy to your connected org. No manual steps.',
    },
    {
      step: 5,
      src: null,
      alt: 'The deployed LWC dashboard card rendered on a Salesforce record page',
      caption: 'Step 5: See It Live',
      explanation: 'Add the component to a record page in your org. The dashboard card renders with real data -- total opportunities, pipeline value, win rate. Built and deployed from a single prompt.',
    },
    {
      step: 6,
      src: null,
      alt: 'Iterating on the component with a follow-up prompt',
      caption: 'Step 6: Iterate',
      explanation: '"Change the colors to match our brand and add a progress bar for win rate." Agent updates the existing files in place. The iterative loop is where Cursor really shines.',
    },
  ],
  tryItPrompts: [
    {
      title: 'Greeting Card',
      prompt: 'Build a Lightning Web Component that displays a greeting card with the current user\'s name and today\'s date. Use a clean card layout with SLDS styling.',
      description: 'The simplest possible LWC -- great first prompt',
    },
    {
      title: 'Contact Data Table',
      prompt: 'Create an LWC that shows a searchable data table of Contacts. Use lightning-datatable with columns for Name, Email, Phone, and Account. Add a search input that filters results client-side.',
      description: 'A practical, visual component for demo environments',
    },
    {
      title: 'Flow-Invocable Apex',
      prompt: 'Write a Flow-invocable Apex action that sends a welcome email to a Contact. Accept the Contact ID and email template name as inputs. Return a success or failure message.',
      description: 'Connects AI-generated code to declarative tools SEs already know',
    },
  ],
  caveats: {
    title: 'A Junior Developer with Infinite Caffeine',
    points: [
      'AI is fast and tireless, but it has zero industry experience. Always review output.',
      'Watch for hallucinated APIs, non-existent methods, and governor limit violations.',
      'Treat AI output as a fast first draft, not a finished product.',
      'Test everything in a scratch org before showing it to a customer.',
    ],
  },
  takeaway: "The fastest way to learn is to try it. **Copy a prompt, open Cursor, and see what happens.**",
}

export const fullPipeline = {
  id: 'full-pipeline',
  label: 'See It in Action',
  title: 'The Full Pipeline',
  subtitle: 'Build, refine, present -- the three-phase SE workflow.',
  prose: [
    "Each tool hands off to the next at the point where it has an advantage. Claude Code handles the heavy construction. Cursor handles the precision work. Saleo handles the last mile.",
  ],
  pipeline: [
    { phase: 'Build', tool: 'MeshMesh / Claude Code', logo: 'meshmesh', description: 'Scaffold the integration, write tests, verify they pass. MeshMesh for Salesforce-native builds, Claude Code for everything else.' },
    { phase: 'Refine', tool: 'Cursor', logo: 'cursor', description: 'Cmd+K on specific functions, adjust variable names, clean up code -- all inline.' },
    { phase: 'Present', tool: 'Saleo', logo: 'saleo', description: 'Overlay prospect-specific data so the demo shows their brand, their numbers, their workflow.' },
  ],
  takeaway: "**Build with MeshMesh or Claude Code. Refine with Cursor. Present with Saleo.** The handoffs are fast once you know the flow.",
}

export const quickReference = {
  id: 'quick-reference',
  label: 'Keep Going',
  title: 'Cheat Sheet',
  subtitle: 'Everything from this guide, condensed into one reference.',
  toolMatrix: [
    { scenario: 'Build an Agentforce agent from scratch', tool: 'MeshMesh' },
    { scenario: 'Build a script or automation from scratch', tool: 'Claude Code' },
    { scenario: 'Edit code while staying in your editor', tool: 'Cursor (Cmd+K)' },
    { scenario: 'Scaffold Salesforce-native metadata with platform awareness', tool: 'MeshMesh' },
    { scenario: 'Restructure a project across many files autonomously', tool: 'Claude Code' },
    { scenario: 'Multi-file change with a side-by-side view of what changed', tool: 'Cursor Composer' },
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
    { model: 'Sonnet 4.6', use: 'Everyday work -- fast and capable' },
    { model: 'Haiku 4.5', use: 'Quick answers, small edits' },
  ],
  paths: [
    { path: '~/.claude/CLAUDE.md', description: 'Personal instructions (all projects)' },
    { path: './CLAUDE.md', description: 'Project-level instructions' },
    { path: '.claude/commands/', description: 'Custom slash commands' },
    { path: '.claude/settings.json', description: 'Project-specific settings' },
  ],
  bestPractices: [
    'Start with a clear goal and a clear success condition. "Make it better" is not a task.',
    'Plan before building. Keep sessions focused on one task.',
    'Read the diff before approving -- always.',
    'Use Tab liberally in Cursor (it\'s free to ignore).',
    'Build Saleo templates as you go -- organize by vertical, not by prospect.',
    'Treat AI output as a fast first draft, not a finished product.',
  ],
  takeaway: 'Bookmark this section. Come back to it.',
  contest: {
    title: 'Q1 AI Use Case Contest',
    description: 'Share how you\'re using AI tools in your SE workflow. Best submissions get featured in the next enablement session and win bragging rights across the team.',
    cta: 'Submit Your Use Case',
  },
}
