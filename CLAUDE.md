# The SE AI Toolkit

## Project Overview
A fullscreen presentation deck and take-home reference for Salesforce SEs — covering Saleo, MeshMesh, Cursor, and Claude Code.
Built as a static React site with Vite, Tailwind, and GSAP. Designed for live virtual enablement (keyboard-navigable slides) with a seamless handoff to a live Cursor demo, plus deep-dive reference content accessible after the session.

## Tech Stack
- Vite + React (JSX, not TypeScript for simplicity)
- Tailwind CSS v4 + tw-animate-css
- GSAP for slide transitions, typewriter effects, and ambient animations
- Lucide React for icons
- Salesforce Brand Kit: ITC Avant Garde Demi (display), Salesforce Sans (body)

## Design Rules
- NO emojis. Ever.
- Icons: Lucide only, used sparingly
- Salesforce brand palette: Navy (#001E5B), Cloud Blue, Salesforce Blue (#0176D3), Electric (#066AFE)
- Slides: dark gradient backgrounds for hook/statement/cinematic layouts, light for content slides
- Terminal panels: dark bg (#1E1E1E), monospace, realistic formatting
- Virtual presentation readability: text must be legible on screen share (min 15px body, 17px+ for slide content)

## Architecture
- Fullscreen presentation deck (no routing, no scroll)
- `PresentationShell` renders `PresentationDeck` + `DockNav` + `ExploreDrawer` + `AnimatedBackground`
- Arrow keys navigate slides. `E` opens the Explore drawer for take-home content.
- Content lives in `src/content/` as structured JS objects:
  - `big-picture.js` — The Why (hook, stats, thesis) + The Tools (legacy data) + Go Deeper (take-home proof points)
  - `tools.js` — Saleo, MeshMesh, Cursor, Claude Code deep-dives + Use Cases
  - `action.js` — Level Up (Skills, MCP, Commands, Context Files) + Cheat Sheet
  - `slides.js` — The unified slide manifest that composes everything into a linear deck

### Slide manifest structure (slides.js)

Live presentation (~12 min of slides + live Cursor demo):
1. **The Why** (5 slides) — SE-pain hook, 80% stat, Describing→Proving thesis, 63% non-dev reassurance
2. **The Toolkit** (8 slides) — ToolCards landscape, 4 toolOverviews (Saleo→MeshMesh→Claude Code→Cursor last), SE proof points, principles, takeaway
3. **Cursor → Pre-handoff** (3 slides) — Scenario, setup steps, observation framework → HANDOFF to demoing SE
4. **Cursor → Post-demo** (3 slides) — Habit cards, what's next, close/CTA with narrative callback

Take-home (audience navigates via the link):
5. **Go Deeper** (6 slides) — Karpathy/Vibe Coding, proof stats, Agentforce urgency
6. **Deep Dives** — Use Cases, Saleo, MeshMesh, Cursor Demos, Claude Code walkthroughs
7. **Keep Going** — Level Up (Skills, MCP, Commands, Context Files), Cheat Sheet

### Component organization
- `src/components/core/` — PresentationShell, PresentationDeck, DockNav, ExploreDrawer, AnimatedBackground
- `src/components/slides/` — One component per slide layout (24 layouts + index registry)
- `src/components/shared/` — Reusable: TerminalPanel, HabitCards, ToolCards, FeatureCards, StepFlow, DecisionFlow, QuickReference, TabbedToolSection, TierDivider
- `src/components/illustrations/` — ToolLogos (SVG), SlideVisuals (mini before/after), ConceptIllustrations (VibeCoding, Agent, Funnel)

### Key slide layouts
- `title` — Blue gradient, Salesforce branding, badge row
- `cinematic` — Large white text on dark gradient, word-by-word GSAP entrance
- `bigStat` — Animated count-up number with source citation
- `comparison` — Before/after cards with animated connector
- `toolOverview` — Split layout: tool identity (logo, tagline, differentiator, optional seVoice quote) + checkmark examples
- `toolCards` — 4-column grid with mini UI visuals and role badges
- `iconBullets` — Grid of cards with icons or tool logos
- `habitCardsSlide` — 2x2 card grid (used for habits, observation framework, use cases)
- `videoDemoSlide` — 16:9 video/GIF player with step label and caption
- `takeaway` — Accent left bar with bold text
- `tierTransition` — Section interstitial on dark gradient

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
