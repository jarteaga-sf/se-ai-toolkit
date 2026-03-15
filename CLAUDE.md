# The SE AI Toolkit

## Project Overview
An interactive guide to AI tools for Salesforce SEs — covering Claude Code, Cursor, and Saleo.
Built as a static React site with Vite, Tailwind, and shadcn/ui.

## Tech Stack
- Vite + React (JSX, not TypeScript for simplicity)
- Tailwind CSS v4
- shadcn/ui (only installed components: ScrollArea, Tabs, Tooltip, Collapsible, Badge, Separator)
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

## Architecture
- Single-page scroll app (no routing)
- Content lives in src/content/ as structured JS objects
- Components in src/components/ are pure presentational
- Scroll behavior: IntersectionObserver for terminal animations + sidebar active state

## Coding Conventions
- Functional components with hooks
- Tailwind utilities only (no custom CSS classes except in globals.css for fonts/resets)
- Descriptive component and prop names
- Keep components under 150 lines. Extract when larger.

## Commands
- `npm run dev` -- start dev server
- `npm run build` -- production build
- `npm run preview` -- preview production build
