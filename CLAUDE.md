# The SE AI Toolkit

## Project Overview
An interactive guide to AI tools for Salesforce SEs — covering Claude Code, Cursor, MeshMesh, and Saleo.
Built as a static React site with Vite, Tailwind, and shadcn/ui.
Designed for live virtual enablement presentations AND as a take-home reference.

## Tech Stack
- Vite + React (JSX, not TypeScript for simplicity)
- Tailwind CSS v4 + tw-animate-css
- shadcn/ui (installed: ScrollArea, Tabs, Tooltip, Collapsible, Badge, Separator)
- Lucide React for icons
- Google Fonts: Inter (headings + body, variable weight 300-700) + IBM Plex Mono (code)

## Design Rules
- NO emojis. Ever.
- Icons: Lucide only, used sparingly
- Color palette: warm off-white bg (#FAFAF8), near-black text (#1A1A1A), slate accent (#64748B)
- Max prose width: 780px
- Spacing: generous. Think Notion published page.
- Terminal panels: dark bg (#1E1E1E), monospace, realistic formatting
- All interactive elements from shadcn, styled to match the muted palette
- Virtual presentation readability: text must be legible on screen share (min 15px body, 17px+ for slide content)

## Architecture
- Single-page scroll app (no routing)
- 4 tiers of content: The Big Picture → The Tools → See It in Action → Keep Going
- Content lives in `src/content/` as structured JS objects (big-picture.js, tools.js, action.js)
- Components in `src/components/` are pure presentational
- Scroll behavior: IntersectionObserver for section fade-in + sidebar active state

### Section structure (9 sections across 4 tiers)
1. **The Big Picture** (2 sections, slides-only): The Shift, The Tools
2. **The Tools** (4 sections, tabbed, each with Getting Started tab): Saleo, MeshMesh, Cursor, Claude Code
3. **See It in Action** (2 sections): Live Demo, The Full Pipeline
4. **Keep Going** (1 section): Cheat Sheet

### Key components
- `SlideCarousel` -- click-through slides for the Big Picture tier (presentation mode). Slide layouts: quote, comparison, statement, iconBullets, spectrum, toolCards, scenarios, takeaway
- `Section` -- card wrapper with fade-in. Supports `compact` (tier label only, no title), `hideDivider`, `first` props
- `TierDivider` -- labeled horizontal rule between tier groups
- `TabbedToolSection` -- tab container for tool deep-dives (Overview, Getting Started, Workflows, etc.)
- `HabitCards` -- 2x2 icon card grid (used in Claude Code Workflows tab)
- `SpectrumBar` -- interactive AI coding spectrum with always-visible staggered labels
- `GifShowcase` -- video placeholder with step number, gradient circle, dotted "coming soon" tag
- `TerminalPanel` -- dark terminal mockup with typed commands and Claude responses
- `ValueCards` -- 3-col icon cards. `ToolCards` -- responsive tool cards (2-col mobile, 4-col desktop) with logos, single role badge, setup level indicator, and SE proof points
- `Hero` -- main hero with animated gradient divider between subtitle and tool logos

## Coding Conventions
- Functional components with hooks
- Tailwind utilities only (no custom CSS classes except in globals.css for fonts/resets)
- CSS variables for colors/fonts (defined in globals.css): `--color-text`, `--color-heading`, `--color-accent`, `--color-bg`, `--color-border`, `--font-heading`, `--font-mono`, etc.
- Descriptive component and prop names
- Keep components under 150 lines. Extract when larger.

## Commands
- `npm run dev` -- start dev server (localhost:5173/se-ai-toolkit/)
- `npm run build` -- production build
- `npm run preview` -- preview production build
