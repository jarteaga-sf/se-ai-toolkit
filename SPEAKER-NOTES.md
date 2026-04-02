# Speaker Notes - SE AI Toolkit

Consolidated presenter guide aligned to the current slide manifest. Single source of truth for live delivery and follow-up reference.

Presenting URL: `https://jarteaga-sf.github.io/se-ai-toolkit/`

---

## Session Meta

Session format: 45 minutes total
- 3-4 min: opening context (before slide progression)
- 10-12 min: Slides — The Why + The Toolkit + Cursor bridge
- 15-18 min: Live Cursor demo (other SE presents)
- 10-15 min: Close slides + Q&A

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
- Backup: if the live demo fails, use Appendix A narration guide to walk through the video demos verbally.

Opening frame (before Slide 1)
Four beats. ~45 seconds total before you hit the first slide.

**Beat 1 — Self-ID + credibility**
> "I'm Jonathan — Lead SE in CBS Mid-Market. I've been using these tools for about a year now, and I actually built the site you're going to see today with them. So this is coming from someone who's in it, not just presenting about it."

**Beat 2 — Read the room**
> "Quick level-set before we get into it. Some of you are already tinkering with AI tools — maybe you've been in Cursor, maybe you've seen the Slack posts. Some of you haven't touched any of this yet. Both are totally fine. This session is designed for all of it."

**Beat 3 — Set expectations**
> "Here's how this goes. About 10 minutes of context — what's changing and the four tools. Then Amelia is going to show you Cursor live and how to get started. And we'll leave some time for Q&A at the end."

**Beat 4 — Into the hook**
> "So — the reason this matters. By the time the prospect is in the room with you — they've already decided. Or close to it. They've done the research. They've compared the options. They're not there to learn what Salesforce does. They're there for you to prove it works for them."
>
> "And you're running — what — 12 deals? Three demos this week. An RFP due Friday. A discovery call you haven't prepped for. The volume is the real problem."
>
> "That's what this is. Four tools that help with all of it. And one of them you can start using today."

---

## TIER 1: Big Picture (live presentation)

### Section 1 - The Why (`the-why`) — 5 slides

#### Slide 1 (`title`) - The SE AI Toolkit
Goal: Land the mission. No fanfare. Let the slide breathe — they're reading it.

*(advance to Slide 1, pause 2 seconds)*
> "Let's get into it."

#### Slide 2 (`cinematic`) - You prepped for three hours. They showed up with their minds nearly made.
Pause 3-4 seconds before speaking. Let the statement sit. Don't re-list the tasks — you already named them in the opening.

Say:
> "That's not a one-off. That's Tuesday. We've all been there. The part that wears on you isn't any single deal — it's that they all need something different and they all need it now."

#### Slide 3 (`bigStat`) - 80%
Pause after the number loads. The label explains itself — don't repeat it.

Say:
> "Eighty percent." *(pause)* "They're not coming to you for information. They're coming to see if you can prove it."

> Transition: "So — what do you show up with?"

#### Slide 4 (`comparison`) - Describing the Product → Proving the Product
Point at the left, then speak only the right. Don't read both sides.

Say:
> "You can see the old model on the left — we've all lived it. The new model is on the right. Proof built for this customer — before the call even starts. That's the gap we're closing."

> Transition: "And you don't have to be a developer to make it."

#### Slide 5 (`bigStat`) - 63%

Say:
> "Sixty-three percent. Product managers. Founders. Consultants. SEs. Most people building with AI right now aren't writing code — they're describing what they need. That's what we're going to show you."

> Transition: "Four tools make this possible. Let me show you the landscape."

---

### Section 2 - The Toolkit (`the-toolkit`) — 8 slides

#### Slide 1 (`toolCards`) - Four tools side by side
Use this as landscape orientation. Point to each column briefly. Then fire the chat pulse — it's the only engagement moment in this section and it resets attention before the 4 individual tool slides.

Say:
> "None of them are just for demos. SEs are using them for RFPs, discovery prep, architecture docs, presentation decks — everything on your plate."
>
> *(chat pulse — ~8 seconds)* "Quick pulse — drop in the chat if you've used any of these. Even if it's just Saleo. I'm curious where this group is."
>
> *(glance at chat, acknowledge one or two if they come, move on regardless)* "Starting with the fastest win."

#### Slide 2 (`toolOverview`) - Saleo
The seVoice quote on screen already says it's in Golden Demos — reference it, don't restate it.

Say:
> "Saleo is the fastest win. Prospect's data in the demo, no org risk. If you're prepping for a call tomorrow — this is where you start. The quote at the bottom says it all."

> Transition: "Next — building on Salesforce natively."

#### Slide 3 (`toolOverview`) - MeshMesh

Say:
> "MeshMesh configures Salesforce directly. It already understands metadata, Flows, Agentforce, Permission Sets — you don't waste time explaining what those are. You describe what you need, it builds it. It's in pilot right now — worth knowing the access path so you're ready."

> Transition: "And when you need to build something from scratch..."

NOTE on MeshMesh vs Claude Code: If someone asks, the clean separation is:
- MeshMesh **configures** Salesforce natively. No code. Thinks in metadata.
- Claude Code **writes code** from your machine. Full autonomy. Builds and deploys.
- They're complementary layers, not competitors. One configures, the other codes.

#### Slide 4 (`toolOverview`) - Claude Code

Say:
> "Claude Code is for the builders. RFP responses, architecture docs, full agent builds, presentation decks — describe the goal, it handles everything. It's the most powerful tool here — and the most advanced. We'll go deeper in a future session."
>
> "One SE's rule: 'I don't vibe code anything I can't explain to customers.' Good guardrail for all of us."

> Transition: "And the one you can start using today."

#### Slide 5 (`toolOverview`) - Cursor
Last tool before the demo — bridge to the live show. Save the 70/30 deal-cycle story for the proof slide where it has its own card.

Say:
> "Cursor. This is the one you can request today. Three modes — ask, plan, build. It reads your whole project and gives you context-aware output. We'll show you what that actually looks like live in a few minutes."

> Transition: "And here's the proof."

#### Slide 6 (`iconBullets`) - SEs are already using these
Pick ONE story to expand on — they'll read the other two. In a virtual setting, going deep on one beats going shallow on three.

Say:
> "I want to land on the first one. A brand-new SE — two months into the job — reskinned an entire SDO in one session. 53 products. 709 opportunities. Full Agentforce agent. That's not a senior builder. That's someone who just started."
>
> *(gesture)* "The other two are worth reading — a Principal SE using Cursor for the entire deal cycle, and a Distinguished SE's recommended stack across all three building tools."

> Transition: "How do you get results like that?"

#### Slide 7 (`iconBullets`) - What makes these tools work

Say:
> "Three things. One — context. The more specific you are about the industry, the business model, the deal — the better the output. Use what's publicly available: their website, 10-K filings, industry trends, your own discovery notes."
>
> "Two — your judgment. AI is fast. You know the room. That combination is what makes these tools actually useful."
>
> "Three — make it yours. Review everything. Adapt it. The tool gives you a first draft in minutes — you make it customer-ready."

> Transition: "So that's how you get there. Now — where do you start?"

#### Slide 8 (`takeaway`) - Start with one.
The slide says it. The mantra hits once — here, where it belongs.

Say:
> "That's the whole thing. One tool. One real output. One customer interaction. Then repeat."

> Transition: "Let's start right now."

---

### Section 3 - Cursor Getting Started (`cursor-getting-started`) — 3 slides (pre-handoff)

#### Slide 1 (`cinematic`) - Now what?

Say:
> "You got the license. You open Cursor. And a lot of people stall right here. Not because it's hard — because nobody showed them the first move. So that's what we're doing."

#### Slide 2 (`toolGettingStarted`) - License → Install → Connect

Say:
> "Three steps. Request the license in SE Enablement Slack, install Cursor, connect to a demo org. You can be working in this by end of day."

> Transition: "Before [other SE name] takes over — here's what to watch for."

#### Slide 3 (`habitCardsSlide`) - What to watch for
Walk the four cards. This is the observation framework for the live demo.

Say:
> "Four things. Watch it autocomplete — it suggests code before you type it. Watch the three modes — ask, plan, and agent. Watch the @ trick — that's how it pulls in files and docs. And watch the review step — every change is shown before it's committed."

**Handoff script:**
> "Even if you've never opened a code editor — watch these four things. You don't need to understand the code. You need to see what the AI does with it. This is the part that makes it click. [Name], take it away."

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

### Section 4 - Cursor Close (`cursor-close`) — 3 slides (post-demo)

Presenter returns to the slide deck.

#### Slide 1 (`habitCardsSlide`) - Four habits that make the difference

Say:
> "You just saw all of these. Four habits. They sound small — they're not."
>
> Walk them quick:
> - "Tab — let the autocomplete lead. Accept and keep moving."
> - "Agent mode — describe what you need, review what comes back."
> - "Context — point it at the right files. Better input, better output."
> - "Review before accepting — this is still your name on it."
>
> "And one guardrail from an SE who builds with these every day: 'Keep it simple, powerful, and not too flashy — because if you build 5 custom LWCs and the customer wants them all, the partner has to actually deliver them.'"

> Transition: "This is where it starts. Here's where it goes."

#### Slide 2 (`iconBullets`) - What's coming next

Say:
> "Each tool gets its own deep-dive — you'll actually build something. Dates are in the SE Enablement Slack. And the site you're looking at right now has the full walkthroughs, use cases, cheat sheet, decision flow — all of it. Bookmark it."

> Transition: "One thing before questions."

#### Slide 3 (`takeaway`) - The next time you open Cursor — you'll know the first move.

Say:
> "If you run demos — request Saleo access this week. It's already in Golden Demos. If you're curious about Cursor — request the license today. Open a project. Ask it one question. That's it. If you want to go deeper — there's a session for that, we'll share the dates."
>
> "The next time you open Cursor — you'll know the first move."

Q&A transition:
> "Real questions, real scenarios — let's go."

---

## TIER 2: Go Deeper (take-home)

### Section 5 - Proof Points (`go-deeper`)

If skimming live (2 minutes max):
> "This is the evidence layer. If you need to make the case internally, the numbers are here."
> "The Karpathy quote is worth reading on your own. The 90-minute field example — that's from an SE using these tools on a real deal."
> "The last slide is about Agentforce activation. Customers who see it built live are the ones who actually move forward."

---

## Q&A - Objection Handling

"I'm not technical enough for this."
> "You know the customer better than any developer does. That's what makes the output useful. Start with Saleo — zero code. Build from there."

"I don't have time to learn four new tools."
> "Don't learn four. Pick the one that matches your next deal and use it once this week. That's it. Everything else can wait."

"What if the AI output is wrong?"
> "It will be. Sometimes. Review the diff, test it in a demo org, validate before you show a customer. Your judgment is still in the loop — it just runs faster now."

"Is this safe and compliant? Can I use customer data?"
> "Use the approved setup paths, keep privacy protections on. For now — publicly available info. Their website, 10-K, industry trends, your own discovery notes and project files. Customer data policies are still being finalized. But there's more than enough public context to get meaningful output."

"Why not just use ChatGPT?"
> "ChatGPT gives you text. These tools execute inside your actual project. That's the difference between a suggestion and something you can show a customer."

"I'm worried this changes what SEs are valued for."
> "It does. In the best way. The commodity layer — repetitive demos, generic prep, basic technical Q&A — compresses. The strategic layer rises. Discovery quality, solution framing, trust, business judgment. You're more valuable, not less."

"I don't know where to even start."
> "Cursor. Request the license today, open a project you're already working on, ask it one question about the code. That first session is where it clicks."

"What's the difference between MeshMesh and Claude Code?"
> "MeshMesh configures Salesforce natively — no code. It thinks in metadata, Flows, org structure. Claude Code writes code from your machine — full autonomy, builds from scratch and deploys. They're complementary. One configures, the other codes. One SE's stack: Claude Code writes the custom code, MeshMesh wires it into the org, Saleo personalizes the demo."

---

## Appendix A - Cursor Video Narration Guide (4 clips)

Use these if the live demo fails. Each clip maps to a take-home video demo slide.

Clip 1 - You walk into the room (`cursor-01-workspace.mp4`)
- "Left side: files. Middle: code. Right side: AI. Cursor reads the whole project the moment you open the folder."
- "You didn't write this code. That's fine. You're about to understand it in thirty seconds."

Clip 2 - You figure out what you have, then build (`cursor-02-chat-context.mp4`)
- "Ask mode. One question about code you've never seen. Plain English answer back."
- "Agent mode. Describe the component the prospect needs. Watch the files get created."
- "The diff is the checkpoint. Every change is visible before anything gets accepted."

Clip 3 - You make it Salesforce-ready (`cursor-03-salesforce.mp4`)
- "Org Browser. Objects, classes, metadata — in the sidebar. No switching tabs."
- "Cmd+K. Select the code. Describe the change. Review the diff. Accept. Done."
- "@Codebase. One question, instant answer about a project you didn't build."

Clip 4 - You set it up so next time is faster (`cursor-04-pro-tips.mp4`)
- "The rules file. Set Apex standards and SLDS requirements once. Every response follows them automatically."
- "Conversation memory. Yesterday's context carries over. You pick up exactly where you left off."

---

## Appendix B - Presenter Guardrails

- Keep examples real and grounded in SE scenarios. No abstract AI hype.
- Never imply AI replaces SE judgment. Say the opposite and mean it.
- If someone pushes back hard, agree with the underlying concern and answer the real question.
- Data guardrail: use publicly available information. Don't promise customer data clearance.
- End with tiered actions: Saleo for demo SEs, Cursor license for curious SEs, advanced session for builders.
- The best moment in this presentation is the handoff. Give the observation framework and the inclusive line the delivery they deserve.
- **Virtual rule: never read what's on screen.** The audience reads faster than you speak. Your job is to add — a story, a reason, a redirect. If the slide says it, you don't have to.
