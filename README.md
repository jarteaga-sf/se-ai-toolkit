# The SE AI Toolkit — Salesforce

A fullscreen presentation deck and take-home reference for Salesforce Solutions Engineers — covering **Saleo**, **MeshMesh**, **Cursor**, and **Claude Code**.

Built as the companion site for the "How I AI" enablement session. The first sections are a keyboard-navigable slide deck for live virtual delivery (with a handoff to a live Cursor demo), and the rest serves as a bookmarkable reference with tool deep-dives, use cases, and a cheat sheet.

Hosted at **[https://jarteaga-sf.github.io/se-ai-toolkit/](https://jarteaga-sf.github.io/se-ai-toolkit/)** — just open the link.

![Screenshot](public/screenshot.png)

## What's Inside

| Tier | Sections | Format | Delivery |
|------|----------|--------|----------|
| **The Why** | SE pain hook, 80% stat, Describing→Proving thesis, 63% non-dev stat | Slides | Live |
| **The Toolkit** | ToolCards, Saleo, MeshMesh, Claude Code, Cursor, SE proof points, principles | Slides | Live |
| **Cursor →** | Scenario, setup, observation framework → live demo → habits, close | Slides + live demo | Live |
| **Go Deeper** | Karpathy, Vibe Coding, proof stats, Agentforce urgency | Slides | Take-home |
| **Deep Dives** | Use Cases, Saleo, MeshMesh, Cursor Demos, Claude Code | Tabbed deep-dives | Take-home |
| **Keep Going** | Level Up (Skills, MCP, Commands, Context Files), Cheat Sheet | Reference panels | Take-home |

## Session Format

45 minutes total:
- **10-12 min** — Slides (The Why + The Toolkit + Cursor bridge)
- **15-18 min** — Live Cursor demo (other SE presents)
- **10-15 min** — Close slides + Q&A

See `SPEAKER-NOTES.md` for the full presenter guide with transition scripts and objection handling.

## Branding

This site uses the official **Salesforce Brand Kit**:

- **Colors** — Navy (#001E5B), Cloud Blue 90 (#CFE9FE), Salesforce Blue (#0176D3), Electric (#066AFE)
- **Fonts** — ITC Avant Garde Demi for display headings, Salesforce Sans for body text
- **Logo** — Salesforce logo with type in the top-left corner of every slide
- **Gradients** — Brand hero gradient on dark slides (#001E5B → #022AC0 → #066AFE)

## Navigation

- **Arrow keys** — Navigate slides forward/back
- **E** — Open the Explore drawer (take-home content for the current section)
- **Escape** — Close the Explore drawer
- **Dock nav** — Bottom dock with section dots, tier grouping, and tooltips

## Related

- **[Salesforce Skills Library](https://jarteaga-sf.github.io/sf-skills-site/)** — Pre-built skills to install in Claude Code or Cursor for Salesforce development

## Tech Stack

- Vite + React
- Tailwind CSS v4
- GSAP for animations
- Lucide React icons

## Getting Started

```bash
npm install
npm run dev        # localhost:5173/se-ai-toolkit/
npm run build      # production build
npm run preview    # preview production build
```
