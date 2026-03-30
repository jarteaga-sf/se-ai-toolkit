# Speaker Notes — How I AI

**Format:** 45 min total — ~5 min opening, ~13 min slides (slides 1–13), ~20 min live Cursor demo, ~7 min Q&A
**Audience:** Mostly skeptical or overwhelmed SEs. Some power users. Some who don't know where to start.
**Tone:** Teammate sharing what they figured out. Not a mandate. Not a keynote.
**URL to share at the end:** `https://jarteaga-sf.github.io/se-ai-toolkit/`

---

## Opening (~5 min, before slides)

Before you advance to slide 1, set the room:

> "I'm not here to tell you AI is the future — you've heard that. I'm here to show you what I've actually been using and what I've seen teammates use to get real things done faster. Some of it will apply to you right now. Some of it is worth bookmarking for later. By the end of this you'll have a link to come back to anytime."

Acknowledge the room temperature:

> "If you're skeptical — good. That means you've already seen a lot of AI hype that didn't pan out. What I'm going to show you is different. These are tools SEs are using today, in real deals."

---

## The Why — Slides 1–5

---

### Slide 1 — "Your buyers did their homework."
**On screen:** Dark. Enormous white text. Nothing else.

Let it sit for 2–3 seconds before speaking.

> "57 to 70 percent through their decision before the first call. That's not a stat about marketing. That's a stat about you. By the time they're talking to you, they've read the G2 reviews, they've watched the demo videos, they've probably had a conversation with your competitor. They're not looking for a product tour. They're looking for proof that you understand their specific problem."

[pause]

> "The SEs who are winning right now are the ones who show up with something built — not something pitched."

---

### Slide 2 — 57%
**On screen:** Huge accent-blue number. One label. Source.

Don't repeat what's on screen. Let the number land, then move.

> "That's CEB and Gartner. Been consistent for years. It's not going down — it's going up as buyers do more self-serve research before they ever agree to a meeting."

[advance quickly — don't dwell]

---

### Slide 3 — Karpathy Quote
**On screen:** Words appear one by one. Attribution at bottom.

Let the animation finish before speaking.

> "February 2025. Andrej Karpathy — co-founder of OpenAI, ran AI at Tesla — posted this. He wasn't describing something coming. He was naming something already happening. And the name stuck."

[pause]

> "'Vibe coding.' You describe what you want in plain English, and you just... let the tool figure out the rest. You stop worrying about syntax. You stop worrying about whether you know how to code. You just describe the outcome."

---

### Slide 4 — Vibe Coding
**On screen:** Title + one-line subtitle + message box + illustration.

> "Here's the simplest way I can put it: vibe coding collapses the gap between knowing what needs to happen and being able to make it happen."

Point to the illustration — the before (dense code, faded) and the after (plain language prompt, green checkmark):

> "Before — you had to know the platform, the syntax, the API. After — you describe what you need, the way you'd describe it to a colleague. 'Build a lead scoring system that ranks by engagement, company size, and industry fit.' That's it. The tool builds it."

> "And this isn't just about code. It's about thinking, designing, prepping — the full SE workflow. Describe the problem. Think through the solution. Build the proof. All from plain language."

---

### Slide 5 — "Most of the value is in the thinking"
**On screen:** Three cards — New to a customer's world / Prepping for a hard call / When it's time to build.

Walk the cards left to right.

**Card 1 — "New to a customer's world"**
> "You've got a call with a healthcare company tomorrow and you've never sold into healthcare. Thirty minutes before that call, you open Claude or Cursor and you say: 'I'm an SE at Salesforce pitching to a mid-size hospital system. What are their top operational challenges right now? What do they care about in a vendor? What questions should I be ready to answer?' You walk into that call sounding like you've been in this space for years."

**Card 2 — "Prepping for a hard call"**
> "You know this prospect is going to push back on implementation time. Or they're going to ask about a competitor you're weak against. Walk through it with the tool before the call. 'The prospect is going to ask why they should choose Salesforce over ServiceNow for their ITSM use case. Help me build my response.' You've already had the hard conversation once before it happens for real."

**Card 3 — "When it's time to build"**
> "And then — when it's time to actually build something — describe it. A teammate of mine built a full presentation deck in 60 seconds. Not a template. A real deck, structured for a specific customer. She described the outcome. The tool built it. The pain was real — building decks sucks — and the result was real too."

---

## The Tools — Slides 6–13

---

### Slide 6 — "One changes how fast you demo. The others change what you can build."
**On screen:** Dark. Single statement.

> "I want to be honest with you about something. These four tools are not the same kind of thing. One of them makes your existing demos better and faster — that's Saleo. The other three let you build things that didn't exist before the call. That's a different category entirely."

> "None of them require you to be an engineer. All of them are worth knowing. Let me show you."

---

### Slide 7 — Tool Cards
**On screen:** Four cards — Saleo, MeshMesh, Cursor, Claude Code.

Walk through each card. Keep it brief — the cards carry most of the information visually.

**Saleo:**
> "Saleo is a Chrome extension. It overlays your Salesforce demo with custom data — their company name, their industry metrics, their pipeline stages — without touching a single real record. Zero risk. Zero code. Every demo, every time."

**MeshMesh:**
> "MeshMesh is Salesforce-native. It connects to your demo org and already understands the platform — objects, flows, Agentforce patterns. You tell it what you want to build, and it builds it inside Salesforce. 90-minute POC that would have taken six weeks. That's a real number from a real SE."

**Cursor:**
> "Cursor is an IDE — a code editor — with AI built in. If you've ever opened a JavaScript file or looked at a Lightning component, Cursor is where you edit and iterate with AI helping at every step. Four shortcuts cover almost everything. This is the one you can get access to today."

**Claude Code:**
> "Claude Code is for starting from nothing. You describe a goal — 'build an Agentforce agent for customer onboarding with four conversation topics' — and it builds it. Reads your project, writes the code, runs it, checks its own work. One SE did this in about an hour. From scratch."

---

### Slide 8 — "Which one do you reach for?"
**On screen:** Four cards named by tool.

> "Simple framework. Every demo, reach for Saleo first — no setup, no risk. When you're building something on Salesforce — agents, flows, custom orgs — that's MeshMesh. When you're editing or iterating on existing code, Cursor. When you're starting from zero and describing a goal end-to-end, Claude Code."

> "And here's the thing — you don't need all four today. You need one. We'll talk about which one in a second."

---

### Slide 9 — 90 minutes
**On screen:** Huge number. One label. Source.

Let it land.

> "Real SE. Real customer. POC that the dev team had estimated at six weeks. He sat down with MeshMesh, described what the customer needed, and had something working in 90 minutes. He showed it to the customer the next morning."

[pause]

> "That's not a productivity improvement. That's a different kind of SE."

---

### Slide 10 — 98.95%
**On screen:** Huge number. One label. Source.

> "Demo guide prep. From two full days down to 30 minutes. Same quality. Same output. Just the tool doing the work that used to take the human."

[advance]

---

### Slide 11 — "The SE who built it speaks differently."
**On screen:** Dark statement. Whisper line: "Buyers feel it before the call ends."

> "Gartner found that 77% of B2B buyers rate their last significant purchase as very complex or difficult. They're not just evaluating the product. They're evaluating whether the person selling it truly understands what they're trying to solve."

> "The SE who has actually built the thing they're selling walks into that room differently. The way they answer questions. The confidence. The specificity. Buyers feel it before the call ends — they just can't always articulate why they trust one SE more than another."

---

### Slide 12 — "What makes these tools work"
**On screen:** Three cards — Context beats generic / You know the deal / Build in the room.

**Context beats generic:**
> "Every one of these tools gets dramatically better when you give it context about the customer. Two sentences — 'This is a mid-market healthcare company, they're evaluating Agentforce for patient support, their main concern is HIPAA compliance' — turns generic output into something that feels purpose-built."

**You know the deal:**
> "AI is fast. But it doesn't know your champion. It doesn't know what the competitor said in the last call. It doesn't know the relationship. You do. That's still the edge. These tools amplify what you bring — they don't replace it."

**Build in the room:**
> "The moment you change something live because a prospect asked — add their company name, adjust a metric, build a flow they just described — that's when the deal shifts. You stop being a vendor and start being a partner."

---

### Slide 13 — "Start with one. Build something real. Show a customer."
**On screen:** Takeaway with bold text.

> "That's the whole playbook. Pick one tool. Build something — even if it's small. Show a customer. See what happens."

[pause — let it land]

> "The tool you can access right now, today, with a license request through the Software Catalog, is Cursor. So let me show you what getting started actually looks like."

**→ Transition to live Cursor demo.**

---

## Live Cursor Demo (~20 min)

Use the Getting Started with Cursor content in the deck as your guide — it's accessible via the Cursor section in the dock nav after the presentation.

Key demo beats to hit:
1. Show the license request path (Software Catalog → Cursor AI)
2. Open an existing project — show Tab autocomplete in action
3. `Cmd+K` — select a component, describe a change in plain English, show the diff
4. `Cmd+L` — ask a question about code you didn't write
5. Show Agent mode — describe a multi-step change, let it run

End with: *"This is slide 8 made real. You just watched an SE build something in the room."*

---

## Closing (~7 min)

Share the link:

> "`jarteaga-sf.github.io/se-ai-toolkit` — this is yours. Everything you just saw is in there, plus tool-by-tool deep dives, a cheat sheet for when to use which tool, and a decision flow if you're ever stuck on which one to reach for."

Open it up for Q&A:

> "What questions do you have — about what you saw, how to get started, or anything you've already tried that you want to pressure test?"

**Common objections and responses:**

**"I don't have time to learn another tool."**
> "Cursor's Tab autocomplete requires zero learning. You literally just start typing and press Tab when the suggestion is right. That's it. You're already using it."

**"My prospects won't care how I built the demo."**
> "They won't care about the tool. They'll care about the specificity. The fact that it looks like their business, uses their terminology, addresses their actual problem. The tool is how you get there in minutes instead of days."

**"What about hallucinations / AI being wrong?"**
> "Treat output as a first draft. Review before you show it to a customer. These tools are fast, not infallible. The mental model is: AI does the first 80%, you do the last 20%. That 80% is what used to take all day."

**"Is this approved? Is our data safe?"**
> "Cursor has a Privacy Mode — enable it during setup, nothing leaves your machine. Saleo overlays data in the browser, it never touches your real org. For Claude Code and MeshMesh, connect only to demo orgs. Never a customer org, never production."

---

*Speaker notes last updated: March 2026*
*Presentation built at: `github.com/jarteaga-sf/se-ai-toolkit`*
