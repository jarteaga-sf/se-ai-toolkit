# Speaker Notes - SE AI Toolkit

Consolidated presenter guide aligned to the current slide manifest. Single source of truth for live delivery and follow-up reference.

Presenting URL: `https://jarteaga-sf.github.io/se-ai-toolkit/`

---

## Session Meta

Session format: 45 minutes total
- 1 min: opening context (before slide progression)
- 12-14 min: Slides — The Why (4 slides) + The Toolkit (5 slides) + Handoff (1 slide)
- 15 min: Live Cursor demo (other SE presents)
- 5-10 min: Close slide (1 slide) + Q&A

Audience profile
- Sharp, busy professionals running too many deals at once.
- Curious but protective of their time. They want to know if this is worth it.
- Mixed technical depth — some are already building, most haven't started, a few are skeptical.
- All of them care about what actually helps in a customer room.
- They spend 60-70% of their time on repetitive documentation tasks. That's the pain.

Tone and delivery
- Professionally casual. This is a cross-functional audience — stay around 5-6/10 formality. Not a keynote, not a Slack DM.
- Brief context-setting first, then straight in. Read the room in the opening (Beat 2), then drop the preamble for the rest of the session.
- Short punchy fragments > long polished sentences. Break up anything that reads like a script.
- Use SE language: deal, room, call, org, build, prospect. Not "workflow" or "leveraging AI."
- Em-dashes for asides. Concrete examples over analogies. Numbers over adjectives.
- Silence is a tool. Say the important thing, then stop. Let it land.
- Lead with the ROI angle, then social proof. Time saved, real SE examples, then the principle.
- If you hedge, they'll hedge. Believe in the content.
- The SE's judgment is the thing AI cannot replace. Say that like you mean it.

Room setup checklist
- Deck loaded in presentation mode.
- Other SE ready with Cursor open and a demo project loaded.
- Notifications muted. Chat monitored for questions.
- Backup: if the live demo fails, use Appendix A narration guide to walk through the Cursor workflow moments verbally.

Opening frame (before Slide 1)
Four beats. ~45 seconds total before you hit the first slide.

**Beat 1 — Self-ID + credibility**
> "Hi everyone, I'm Jonathan — a Lead SE in CBS Mid-Market. I've been using some of these tools for a few months now, and I actually built this site to walk through this presentation"

**Beat 2 — Read the room**
> "Now before we get into it... some of us are already tinkering with AI tools — maybe you've been using Cursor, maybe you've only used Slackbot or Gemini. Others haven't explored any yet and that's okay. My goal is for us to walk away with a clear sense of what these newer tools actually do, and how to get started"

**Beat 3 — Set expectations**
> "So here's how this will go. About 10 minutes of context — what's changing and the four main tools we are piloting. Then Amelia is going to give you a quick tour of Cursor. And we'll leave some time for Q&A at the end."

---

## TIER 1: Big Picture (live presentation)

### Section 1 - The Why (`the-why`) — 4 slides

#### Slide 1 (`title`) - The SE AI Toolkit
Goal: Land the mission. No fanfare. Let the slide breathe — they're reading it.

*(advance to Slide 1, pause 2 seconds)*
> "Let's get into it."

#### Slide 2 (`cinematic`)

> "We've all felt this. It's rarely one deal that burns us out — it's that every customer wants something different at the same time. Twelve deals, three demos, an RFP due Friday, a discovery call we haven't even prepped for. All those hours add up fast. The real pain isn't just the volume — it's having no time left to actually think or work out the best approach."

#### Slide 3 (`bigStat`) - 80%
Pause after the number loads. The label explains itself — don't repeat it.

Say:
> "Eighty percent." *(pause)* "Customers are no longer coming to us just for information. They're coming to see if we can prove it."

> Transition: "So — what do we show up with?"

#### Slide 4 (`comparison`) - Describing the Product → Proving the Product
Point at the left, then speak only the right. Don't read both sides.

Say:
> "Left side is the prep we all know — a deck that could be for any company, a demo org with nothing to do with their industry or their business model. The prospect can tell immediately. And on the right side is where we're headed: proof built around their use case, their workflows, their problems — ready before we even join the call. That's not just better prep. That's a completely different conversation."

> Transition: "And we don't have to be developers to make it."

---

### Section 2 - The Toolkit (`the-toolkit`) — 5 slides

#### Slide 1 (`toolCards`) - Four tools side by side
Use this as landscape orientation. Each card now has an SE quote at the bottom — let the audience read them, don't narrate them. Then fire the chat pulse.

Say:
> "Before we go through each one — we don't need all four. That's actually part of what these pilots are for: figuring out which tools deliver the most value for SEs and where the overlap is. Two of them require zero code — you describe what you need and they handle it. Two of them work with your code and project files. Left side is the lowest barrier to entry. Right side is the highest ceiling. Access varies today across these tools, and we'll share the paths at the end. Today is about finding your first move, not committing to any particular one."
>
> *(chat pulse — ~8 seconds)* "Drop in the chat which of these you've heard of or already tried. Curious where this group is."
>
> *(glance at chat, acknowledge one or two, move on regardless)* "Let's start with the fastest win."

#### Slide 2 (`toolOverview`) - Saleo
The GIF on the right shows the tool in action — let it play, don't describe what's on screen. Your job is to add the context the GIF can't show.

Say:
> "Saleo personalizes what the prospect sees without touching a real record. What you're seeing on the right is the Data Creation Agent — it generates industry-specific demo data from a prompt, no manual entry. 30 seconds, mid-call, completely different demo. If you're already in Golden Demos, you have this. If not, there's a request path — but access is more limited right now."

> Transition: "Next — building on Salesforce natively."

#### Slide 3 (`toolOverview`) - MeshMesh
The visual is now live. Let it play, then narrate where this fits.

Say:
> "MeshMesh is for Salesforce-native configuration — no code at all. It already knows the platform: metadata, Flows, Agentforce, Permission Sets. You describe what you need, it builds it. And it's not just for demos — it configures across Sales Cloud, Service Cloud, Data Cloud, Agentforce. Full org setup in a conversation."

> Transition: "And when we need to build something from scratch..."

NOTE on MeshMesh vs Claude Code: If someone asks, the clean separation is:
- MeshMesh **configures Salesforce** natively — metadata, flows, agents, permissions. No code. Thinks in platform terms. Use it for org setup and Agentforce configuration.
- Claude Code **writes code** from your terminal — Apex, LWC, full deployments. Autonomous. Thinks in files and codebases. Use it for custom code and complex builds.
- They're different layers, not competitors. MeshMesh is platform work. Claude Code is code work. One SE's stack: Claude Code writes the custom code, MeshMesh wires it into the org.

#### Slide 4 (`toolOverview`) - Claude Code
The GIF shows Claude Code running autonomously in a terminal — let it play, then add the SE context.

Say:
> "Claude Code is the autonomous builder. You describe the goal — an RFP response, an Agentforce agent, a full codebase migration — and it builds the entire solution. Multi-file, multi-step, start to finish. What you're seeing on the right is exactly that: it reads the project, plans the approach, writes the code, runs it, and checks its own work."
>
> "One guardrail worth keeping: don't build anything you can't explain to the customer. The tool is fast — your judgment is still what makes it useful. Closed pilot right now — access is limited, but a deep-dive session is coming."

> Transition: "And the one we can start using today."

#### Slide 5 (`toolOverview`) - Cursor
The GIF shows Cursor in the editor — let it play, then bridge to the live demo.

Say:
> "Cursor. This is the one we can request today. Three modes — ask, plan, build. It reads the whole project and gives you context-aware output. And what surprises most people: 70% of what SEs do in Cursor isn't code at all — it's discovery notes, RFP responses, solution design docs. The AI reads the whole project, code or not. We're about to see exactly that, live."

> Transition: "How do we actually get results like that?"

---

### Section 3 - Handoff (`live-demo`) — 1 slide

#### Slide 6 — "Start with Cursor. Open a project. Ask it one question."
Cursor logo on dark gradient. This slide stays on screen for the entire live demo — don't advance until Amelia is done.

Say:
> "That's the whole toolkit. The pattern is the same for all of them: specific context in, your judgment applied, customer-ready output. And the one you can act on right now is Cursor. A project is just a folder on your computer. Open it, ask it one question. Everything follows from there."

**Handoff:**
> "Amelia, take it away."

---

## LIVE CURSOR DEMO (15-18 min) — Other SE presents

The other SE takes over the screen entirely. This is a talk track guide, not slides.

**Part 1: Orient (2-3 min)**
- Open a project in Cursor.
- "Your folder is your workspace. Everything the AI does happens in context of these files."
- Quick tour: file tree (left), editor (center), chat panel (right).
- Open a file and start using it. Don't explain every panel.

**Part 2: Chat Modes — the centerpiece (6-8 min)**
- Ask Mode: highlight code, ask "What does this do?" — instant explanation.
- Plan Mode: "I want to add X" — shows the plan without building.
- Agent Mode: "Build it" — creates files, writes code, runs commands.
- Key line: "Three modes. Ask when you're learning. Plan when you're designing. Build when you're ready."

**Part 3: The @ Context (4-5 min)**
- @Files — reference a specific file.
- @Codebase — "Where do we handle routing?" across the whole project.
- @Docs — pull in external documentation. Stops hallucination.
- @Web — get the latest CLI command without switching tabs.
- Key line: "This is the difference between ChatGPT and Cursor — Cursor knows your project."

**Part 4: Quick Tips (2-3 min)**
- Extensions: show Salesforce Extension Pack.
- Rules: show .cursorrules — "You can tell the AI about your project permanently."
- Keep brief: "this exists" not "let me teach you."

**Attention reset at ~10 min:** Pause — "Questions so far before I show you the next part?"

---

### Section 4 - Cursor Close (`cursor-close`) — 1 slide (post-demo)

You may not get the screen share back. This talk track works verbally even if the slide isn't visible.

#### Slide 7 (`takeaway`) - The next time you open Cursor — you'll know the first move.

Say:
> "The one you can act on today is Cursor. Request the license via SE Enablement Slack, open a folder you're already working on, ask it one question. If you're already in Golden Demos, Saleo is there too. For MeshMesh and Claude Code — deep-dive sessions are coming, we'll share the dates."
>
> "Everything else — getting started steps, workflows, cheat sheets — is in the site we shared. Bookmark it."
>
> "The next time you open Cursor — you'll know the first move."

Q&A transition:
> "Real questions, real scenarios — let's go."

---

## TIER 2: Take-home (self-guided)

### Take-home map (current IA)
- Start Here (`start-here`) — first moves and prompting habits.
- Playbooks (`playbooks`) — task-based guides by scenario.
- Tool Guides (`saleo`, `cursor-workflows`, `meshmesh`, `claude-code`) — deep dives by tool.
- Keep Going (`level-up`, `quick-reference`) — advanced concepts + cheat sheet.

If skimming live (2 minutes max):
> "Everything after the live segment is organized for self-service. Start Here gives you first moves, Playbooks maps to real SE tasks, Tool Guides gives full workflows, and Keep Going is your cheat sheet and deeper skills."
> "If you're sending one follow-up link, send this deck and point people to Start Here first."

---

## Q&A - Objection Handling

"I'm not technical enough for this."
> "We know the customer better than any developer does. That's what makes the output useful. Zero code to start — use Ask mode on a project you already have."

"I don't have time to learn four new tools."
> "Don't try all four at once. Pick one first move this week: open one project and run one Ask prompt. Everything else can wait."

"What if the AI output is wrong?"
> "It will be. Sometimes. Review the diff, test it in a demo org, validate before you show a customer. Our judgment is still in the loop — it just runs faster now."

"Is this safe and compliant? Can I use customer data?"
> "Use the approved setup paths, keep privacy protections on. For now — publicly available info. Their website, 10-K, industry trends, your own discovery notes and project files. Customer data policies are still being finalized. But there's more than enough public context to get meaningful output."

"Why not just use ChatGPT?"
> "ChatGPT gives you text. These tools execute inside your actual project. That's the difference between a suggestion and something you can show a customer."

"I'm worried this changes what SEs are valued for."
> "It does. In the best way. The commodity layer — repetitive demos, generic prep, basic technical Q&A — compresses. The strategic layer rises. Discovery quality, solution framing, trust, business judgment. We're more valuable, not less."

"I don't know where to even start."
> "Open a project you're already working on and run one Ask prompt. That first session is where it clicks."

"What's the difference between MeshMesh and Claude Code?"
> "MeshMesh configures Salesforce natively — no code. It thinks in metadata, Flows, org structure. Claude Code writes code from your machine — full autonomy, builds from scratch and deploys. They're complementary. One configures, the other codes. One SE's stack: Claude Code writes the custom code, MeshMesh wires it into the org, Saleo personalizes the demo."

---

## Appendix A - Cursor Fallback Narration Guide (4 moments)

Use these if the live demo fails. These map to the current Cursor workflow story in the deck (not video clips).

Moment 1 - You walk into the room
- "Left side: files. Middle: code. Right side: AI. Cursor reads the whole project the moment you open the folder."
- "You didn't write this code. That's fine. You're about to understand it in thirty seconds."

Moment 2 - You figure out what you have, then build
- "Ask mode. One question about code you've never seen. Plain English answer back."
- "Plan mode first. Then Agent mode to execute."
- "The diff is the checkpoint. Every change is visible before anything gets accepted."

Moment 3 - You make it project-ready
- "@Codebase. One question, instant answer about a project you didn't build."
- "@Docs/@Web when you need current syntax or source-backed guidance."
- "Keep the loop tight: ask, review, accept."

Moment 4 - You set it up so next time is faster
- "The rules file. Set Apex standards and SLDS requirements once. Every response follows them automatically."
- "Conversation memory. Yesterday's context carries over. You pick up exactly where you left off."

---

## Appendix B - Presenter Guardrails

- Keep examples real and grounded in SE scenarios. No abstract AI hype.
- Never imply AI replaces SE judgment. Say the opposite and mean it.
- If someone pushes back hard, agree with the underlying concern and answer the real question.
- Data guardrail: use publicly available information. Don't promise customer data clearance.
- End with tiered actions: Cursor license for anyone ready to start today; Saleo for SEs already in Golden Demos; MeshMesh and Claude Code deep-dives for builders — coming soon. Never imply free choice across all four — leadership is still determining the final tool set.
- The best moment in this presentation is the handoff. Give the observation framework and the inclusive line the delivery they deserve.
- **Virtual rule: never read what's on screen.** The audience reads faster than you speak. Your job is to add — a story, a reason, a redirect. If the slide says it, you don't have to.
