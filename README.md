# The SE AI Toolkit

An interactive guide to AI tools for Salesforce Solutions Engineers -- covering **Claude Code**, **Cursor**, and **Saleo**. When to use each, how to use them well, and how to combine them.

![Screenshot](public/screenshot.png)

## What's Inside

The guide is structured like a course, building from fundamentals to advanced workflows:

- **Start Here** -- Why AI tools matter for SEs, what each tool does, and a decision framework for choosing between them
- **Build & Code** -- Deep dives into Claude Code (setup, workflows, Plan Mode) and Cursor (Tab, Cmd+K, Composer)
- **Demo & Present** -- Cursor workflow patterns, Saleo for prospect-specific demo overlays, and building a template library
- **Go Deeper** -- Combining all three tools in real SE workflows, best practices, and a cheat sheet reference

## How to Access

The guide is hosted at **[https://jarteaga-sf.github.io/claude-code-guide/](https://jarteaga-sf.github.io/claude-code-guide/)**. Just open the link -- nothing to install.

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Tech Stack

- **Vite + React** (JSX) -- static single-page app, no routing
- **Tailwind CSS v4** -- utility-first styling
- **shadcn/ui** -- ScrollArea, Tabs, Tooltip, Collapsible, Badge, Separator
- **Lucide React** -- icons
- **Google Fonts** -- Inter (body/headings) + IBM Plex Mono (code)
- **GitHub Pages** -- hosting via GitHub Actions

## Design

- Card-based section layout with scroll-driven focus fade (sections dim when not in view)
- Collapsible sidebar that auto-fades during scrolling to keep attention on content
- Bento-style tool cards with brand-colored headers
- Terminal panels with typewriter animation for Claude Code examples
- Vignette overlay that subtly darkens page edges to spotlight the reading zone
- Section reveal animations with IntersectionObserver

## Project Structure

```
src/
  content/        -- structured JS objects for all section content
  components/     -- presentational React components
  hooks/          -- IntersectionObserver hooks for scroll behavior
  index.css       -- Tailwind config, theme tokens, base styles
public/
  claude-logo.svg -- official Claude AI symbol
  saleo-logo.png  -- official Saleo icon
  favicon.svg     -- Salesforce cloud (black)
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
