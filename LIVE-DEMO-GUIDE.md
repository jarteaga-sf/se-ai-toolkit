# Cursor Live Demo Guide — 20 Minutes

A presenter-facing guide for a live, screen-share Cursor walkthrough. No pre-recorded clips. One continuous flow designed to give SEs a clear lay of the land — not overwhelm them with features.

**Goal:** SE walks away understanding what Cursor is and wanting to try it.

---

## The Frame

> "You just got handed a Salesforce project. The person who built it left the team. You have a customer call in two days. Here's how you move fast."

Keep that context alive across all four sections. Every feature you show is the answer to a real problem.

---

## Before You Start

- Open Cursor fresh. `acme-demo-org/` NOT yet open.
- Chat panel closed. Clean slate.
- Do Not Disturb on.
- Copy these prompts into a text file — paste during the demo, never type live.

```
PROMPT A (Ask mode):
What does this class do? Give me a plain English summary — like I just inherited this project and have 5 minutes to understand it.

PROMPT B (Plan mode):
I need to build a Lightning Web Component that shows active Contacts on an Account record page. Give me a plan before we write any code.

PROMPT C (Agent/Build mode):
Build a Lightning Web Component called activeContacts that displays a table of active Contacts for the current Account. Show Name, Email, and Title. Use SLDS styling.

PROMPT D (@Codebase):
@Codebase Where in this project are Opportunity fields being referenced?

PROMPT E (@Docs):
@Docs What is the correct way to use @wire with getRecord in LWC?

PROMPT F (Cmd+K inline):
Add a loading spinner that shows while the data is being fetched
```

---

## Section I: Big Picture (~3 min)

**The point:** Cursor is an AI-native workspace. Your folder is your project. The AI knows everything inside it.

### Click Path

1. Cursor opens to a blank welcome screen. Close the Welcome tab.
2. `File > Open Folder` → open `acme-demo-org/`
3. Pause. Let the file tree populate on the left.
4. Expand: `force-app > main > default > classes`
5. Click `AccountService.cls` — code fills the center editor
6. Scroll slowly through it for 3–4 seconds. Say nothing yet.
7. Press `Cmd+L` — the chat panel opens on the right
8. Hover deliberately at each panel in sequence: left, center, right

### Talk Track

> "This is Cursor. Three panels.
>
> Left is your project — every file, every folder. Middle is your code. Right is your AI assistant.
>
> Here's the thing: when you open a folder, Cursor reads everything inside it. It's not a chatbot you paste code into — it knows this project. So when you ask it something, it's working with your actual files, not a clipboard.
>
> This is a real Salesforce org. I've never seen this code before. Let me show you what I can do with it."

---

## Section II: Mastering Chat & Context (~8 min)

**The point:** Three modes for three situations. The `@` symbol is how you give the AI exactly what it needs to be useful.

---

### Beat 1 — The Three Modes (~3 min)

#### Click Path

1. `AccountService.cls` is open in the editor
2. Point to the **mode picker** at the top of the chat panel — let the audience see it clearly
3. Confirm it's on `Ask`
4. Select all code in the editor (`Cmd+A`)
5. Press `Cmd+L` to attach the selection to chat
6. **Paste PROMPT A.** Hit Enter. Let the response stream fully.
7. Pause on the response for 2 seconds.
8. Switch the mode picker to `Plan`
9. **Paste PROMPT B.** Hit Enter. Let the plan stream in.
10. Pause. Point out it's a structured plan — no code written yet, by design.
11. Switch the mode picker to `Agent`
12. **Paste PROMPT C.** Hit Enter.
13. Let it start creating files for 5–8 seconds — just enough to show it working — then stop it (`Escape` or the stop button). Don't let the full build run.

#### Talk Track

> "Three modes. Each one has a clear job.
>
> Ask is for questions. I just selected all this code I've never read before and asked it to explain it. [let response show] Thirty seconds. I know exactly what I'm working with.
>
> Plan is for mapping out work before you touch anything. [switch, paste PROMPT B] Watch — it gives me a structured plan. No code yet. Just thinking. This is how you avoid building the wrong thing.
>
> Agent is build mode — do it for me. [switch, paste PROMPT C, let it start] It creates the files, writes the code. I'll stop it here — you get the idea. Every change shows up in a diff before you accept anything. Nothing ships without your review.
>
> You pick the mode based on where you are in the work."

---

### Beat 2 — The Magic of `@` (~5 min)

#### Click Path

1. Start a new chat conversation
2. Type `@` in the chat input — the picker menu appears. **Pause and point to it.**
3. **`@Files` demo:**
   - Select `@Files` → pick `AccountService.cls`
   - Type: *"What public methods does this class expose?"* Hit Enter.
   - Let it respond. Point out: no copy-paste, no switching tabs.
4. **`@Codebase` demo:**
   - New message. **Paste PROMPT D.** Hit Enter.
   - Let the response surface `OpportunityTrigger.trigger`
   - Click the file link in the response — it opens directly in the editor.
5. **`@Docs` demo:**
   - New message. **Paste PROMPT E.** Hit Enter.
   - Let the response stream. Point to the Salesforce documentation citations inline.
6. **`@Web` demo:**
   - New message. Type: `@Web What's the latest Salesforce CLI version and how do I update it?`
   - Let it respond. Point out it's pulling live web context — not cached training data.

#### Talk Track

> "The `@` symbol is how you give the AI the right context. Better context, better output. Every time.
>
> `@Files` — point it at a specific file. No copy-paste. [demo] It answers about exactly what you asked it to look at.
>
> `@Codebase` — ask about your whole project at once. [demo] One question. It found the file in a codebase I didn't write.
>
> `@Docs` — this one matters. [demo] It pulls from official Salesforce documentation. That's how you stop it from guessing. If you're asking about a Salesforce API, always add `@Docs`.
>
> `@Web` — live web access. [demo] Latest CLI commands, release notes, anything that changes frequently. You don't leave the editor to find it."

---

## Section III: Salesforce Power-Ups (~6 min)

**The point:** The Salesforce Extension Pack turns Cursor from a general editor into a Salesforce-native workspace.

---

### Beat 1 — Extensions (~1.5 min)

#### Click Path

1. Click the **Extensions icon** in the left Activity Bar (four squares icon)
2. Point to the search bar
3. Type `Salesforce Extension Pack` — show it in the results
4. If already installed, click into it and show the detail view — highlight what's included (Apex, LWC, SOQL, Org Browser)

#### Talk Track

> "Extensions are add-ons — think of them like apps — that give Cursor new languages and new capabilities.
>
> The Salesforce Extension Pack is the one you need. One install. It adds Apex language support, LWC tooling, a visual SOQL builder, and — most importantly — the Org Browser."

---

### Beat 2 — Org Browser (~1.5 min)

#### Click Path

1. Click the **Salesforce cloud icon** in the left Activity Bar — Org Browser opens
2. Expand `Standard Objects`
3. Expand `Account` — show fields listed
4. Expand `Apex Classes` — audience sees the actual org's classes
5. Pause on the expanded tree for 2 seconds

#### Talk Track

> "The Org Browser. Your objects, your fields, your Apex classes — right here in the sidebar.
>
> No opening Setup. No switching tabs. You're building and you need to check a field name — you look here."

---

### Beat 3 — Cmd+K and @Codebase (~3 min)

#### Click Path

1. Click `contactList.js` in the file tree to open it
2. Select a block of 5–8 lines in the middle of the file
3. Press `Cmd+K` — the inline prompt bar appears at the selection
4. **Paste PROMPT F.** Hit Enter.
5. The inline diff appears. Walk through it briefly. Accept it.
6. Press `Cmd+L` to open chat
7. **Paste PROMPT D.** Hit Enter. Show the result surfacing `OpportunityTrigger.trigger`.
8. Click the linked file in the response — it opens.

#### Talk Track

> "Two more moves that become habits fast.
>
> `Cmd+K` — select any block of code, describe the change you want, and it rewrites it inline. [demo] You see exactly what changed before accepting. No chat panel, no copy-paste. Just: select, describe, review, accept.
>
> And `@Codebase` — if you're in a project you didn't build, this is your map. [demo] One question. It found the right file without me opening anything to look."

---

## Section IV: Pro Tips (~3 min)

**The point:** Three things that make every future session start faster.

---

### Beat 1 — Rules File (~1 min)

#### Click Path

1. Click `.cursorrules` in the file tree — contents fill the editor
2. Pause for 2 seconds — let the audience read the key lines

#### Talk Track

> "This file lives in your project root. It tells Cursor how to behave on this project — every single session.
>
> Apex best practices, SLDS standards, your naming conventions. You write it once. Every response follows it automatically from that point. You never have to re-explain your standards."

---

### Beat 2 — Inline Browser (~1 min)

#### Click Path

1. Press `Cmd+Shift+P` to open the command palette
2. Type `Simple Browser` — select `Simple Browser: Show`
3. Navigate to `developer.salesforce.com` or your org's Setup URL
4. Show the browser panel side-by-side with the editor

#### Talk Track

> "Cursor has a built-in browser. You can open your Salesforce org, the developer docs, any reference URL — without leaving the editor. Code on the left, your org on the right. One less reason to switch windows."

---

### Beat 3 — Conversation Memory (~1 min)

#### Click Path

1. Click the **chat history icon** (clock icon above the chat panel)
2. Show 2–3 previous conversation threads
3. Click one — show it loading back with full context

#### Talk Track

> "Conversations carry across sessions. Everything I asked, everything it built — it's all still here.
>
> When I pick this back up tomorrow, I don't re-explain the project. I just keep going."

---

## Close

> "That's Cursor. Three panels, three modes, the `@` symbol, and a few setup habits that make every session smarter.
>
> You're still the one who knows the customer and decides what ships. Cursor just handles the heavy lifting so you can focus on those parts.
>
> Two asks before you go: request your license in the SE Enablement Slack today, and open one project you're already working on. Ask it one question about the code. That first session is where it clicks."

---

## Timing Reference

| Section | Content | Target Time |
|---|---|---|
| I | Big Picture — workspace orientation | ~3 min |
| II | Chat & Context — modes + `@` symbols | ~8 min |
| III | Salesforce Power-Ups — extensions, Org Browser, Cmd+K | ~6 min |
| IV | Pro Tips — rules, browser, memory | ~3 min |
| **Total** | | **~20 min** |

---

## If Something Goes Wrong

**AI response is slow or off:** Switch modes. Ask a simpler follow-up. Keep moving — the point is showing the interface, not the perfect response.

**Extension Pack not connected to org:** Describe the Org Browser verbally. Skip the expand-and-show, move straight to Cmd+K and @Codebase.

**Cmd+K diff looks messy:** Accept it anyway. Say: "Even when the output isn't perfect, the diff tells me exactly what changed. I review, I adjust, I move on. Same as reviewing any code."
