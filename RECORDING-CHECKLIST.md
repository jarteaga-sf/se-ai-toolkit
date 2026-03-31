# Cursor Demo Recording Checklist

---

## The Story

Every clip is a chapter in the same story. Keep this in mind the whole time you're recording.

> You just got off a call. A prospect wants a custom Contacts view on their Account page. The org you're working with belongs to someone who left the team. You don't know what's in it. You have two days.
>
> This is how you do it.

**Clip 1** — You open the project. You look around. You understand what you have.
**Clip 2** — You ask what you're looking at, describe what you need, and watch it get built.
**Clip 3** — You connect it to Salesforce, make a live tweak, and search the codebase you didn't write.
**Clip 4** — You set guardrails so every future session starts smarter.

Total runtime: ~3.5 minutes across all four clips.

---

## Before You Record

- Turn on Do Not Disturb.
- Close all unrelated apps and browser tabs.
- Open `acme-demo-org/` in Cursor. Chat panel open on the right.
- Salesforce Extension Pack installed and connected to a demo org.
- `.cursorrules` file present in project root (see contents in Clip 4 below).
- `AccountService.cls` and a pre-built `contactList.js` file ready in `force-app/main/default/`.
- Editor font 15px minimum. Terminal font 14px minimum.
- All 5 prompts copied into a text file so you can paste without typing during recording.
- Move the mouse slowly. ScreenStudio will smooth it.

## ScreenStudio Settings

- Resolution: `1920x1080`
- FPS: `30`
- Export: `MP4 (H.264)`
- Auto zoom: ON, medium intensity, smooth
- Keyboard overlays: ON
- Mouse smoothing: ON
- Speed up typing: 2x

---

## Prompt Reference Sheet

Copy these into a text file before you start recording. During recording, paste — don't type.

```
PROMPT 1 (Clip 2 — Ask):
What does this class do? Explain it like I just inherited this project and have 5 minutes to get up to speed.

PROMPT 2 (Clip 2 — Agent):
Build a Lightning Web Component called activeContacts that displays a table of active Contacts for the current Account record page. Show each Contact's name, email, and title. Include an Apex controller. Use SLDS styling.

PROMPT 3 (Clip 3 — Cmd+K inline):
Add a lightning-spinner that displays while data is loading

PROMPT 4 (Clip 3 — @Codebase):
@Codebase What else in this project references the Opportunity object?

PROMPT 5 (Clip 4 — rules demo):
Write an Apex method that updates Contact email addresses for a given Account.
```

---

## Clip 1: You Walk Into the Room

File: `public/videos/cursor-01-workspace.mp4`
Target length: ~40 seconds

### The Scene

You open a project you've never seen. You look around and orient yourself before doing anything else.

### Click Path

1. Fresh Cursor window. Close the Welcome tab.
2. `File > Open Folder` → open `acme-demo-org/`
3. Expand the file tree: `force-app > main > default > classes`
4. Click `AccountService.cls` — code fills the editor
5. Scroll slowly through the file (3-4 seconds)
6. Press `Cmd+L` — chat panel opens on the right
7. Hover briefly at each panel: left (files), center (code), right (chat)

### Talk Track

> "Left: your files. Middle: your code. Right: your AI.
>
> When you open a folder, Cursor reads everything inside. It's not a chatbot you paste code into — it knows this project. So when you ask it something, it's reading your actual files.
>
> You just got handed this. Let's find out what it is."

### ScreenStudio Notes

Zoom on the file tree as you expand it. Zoom on `AccountService.cls` as it opens. Keyboard overlay on `Cmd+L`. Hover slowly — one panel at a time.

---

## Clip 2: You Figure Out What You Have — Then Build What You Need

File: `public/videos/cursor-02-chat-context.mp4`
Target length: ~90 seconds

### The Scene

Two beats. First: you understand the inherited code fast. Second: you describe the component the prospect needs and watch it get built.

### Click Path

**Beat 1 — Ask mode (understand what you have):**
1. In the chat mode picker, select `Ask`
2. `AccountService.cls` is open. Select all code (`Cmd+A`)
3. Press `Cmd+L` to attach the selection to chat
4. **Paste PROMPT 1.** Hit Enter. Let the response stream in fully.
5. Pause on the response for 2 seconds. Let it breathe.

**Beat 2 — Agent mode (describe what you need):**
6. Switch the chat mode picker to `Agent`
7. **Paste PROMPT 2.** Hit Enter.
8. Watch Cursor create files and write code. Let the Agent run.
9. When the diff view appears, pause on it for 3 seconds before moving on.

### Talk Tracks

Between Beat 1 and Beat 2, say:
> "I didn't write this code. I have no idea what it does. So I ask. [pause on response] Now I know exactly what I'm working with."

After Beat 2 diff appears, say:
> "The prospect wants a Contacts view on the Account page. I described the outcome. I didn't write code. And every single change is shown to me in a diff before I accept anything. Nothing happens without my review."

### ScreenStudio Notes

Zoom on the mode picker when you switch from Ask to Agent — make it visible. Speed up Agent file-writing to 1.5x. Pause the speed-up on the diff view so the audience can read it. Keyboard overlay on `Cmd+A` and `Cmd+L`.

### Recording Note

Prompt 2 is your only high-stakes AI response. If Agent produces something messy or incomplete, re-record just this beat. The rest of the clips use simpler prompts with predictable output.

---

## Clip 3: You Make It Salesforce-Ready

File: `public/videos/cursor-03-salesforce.mp4`
Target length: ~60 seconds

### The Scene

The component exists. Now you tweak it on the fly and navigate the project like you built it yourself.

### Click Path

**Beat 1 — Org Browser:**
1. Click the **Salesforce cloud icon** in the left Activity Bar — Org Browser opens
2. Expand `Standard Objects`, then `Apex Classes` — audience sees real org structure
3. Pause for 2 seconds on the expanded tree

**Beat 2 — Cmd+K inline edit:**
4. Click back to `contactList.js` in the editor
5. Select a block of code in the middle of the file
6. Press `Cmd+K`
7. **Paste PROMPT 3.** Hit Enter.
8. Show the inline diff. Accept it.

**Beat 3 — @Codebase:**
9. Press `Cmd+L` to open chat
10. **Paste PROMPT 4.** Hit Enter. Show the result pointing to `OpportunityTrigger.trigger`.

### Talk Track

> "The Org Browser. Your objects, your classes, your metadata — right here in the sidebar. No switching to Setup.
>
> Cmd+K. Select code. Describe the change in plain English. Review the diff inline. Accept. Done.
>
> And if you need to understand a project you didn't build — @Codebase searches everything. One question. Instant answer."

### ScreenStudio Notes

Zoom on the Org Browser tree as you expand it — the audience needs to read the node names. Zoom on the `Cmd+K` inline prompt as you type. Keyboard overlay on `Cmd+K` and `Cmd+L`. Keep the pace steady — three clean beats.

---

## Clip 4: You Set It Up So Next Time Is Even Faster

File: `public/videos/cursor-04-pro-tips.mp4`
Target length: ~40 seconds

### The Scene

Two beats. First: the rules file shows that Cursor already knows your standards. Second: conversation memory means yesterday's context is still here.

### .cursorrules File Contents

Make sure this is exactly what's in the file before you record:

```
You are a Salesforce Technical Architect working on LWC and Apex components for a Salesforce demo org.

Always follow Apex best practices:
- Bulkify all logic — use List<SObject> inputs, never write logic for a single record
- No SOQL or DML inside loops
- Enforce WITH USER_MODE on all queries

Always follow SLDS standards for all Lightning Web Components.
Use meaningful variable names. Keep methods focused and small.
```

### Click Path

**Beat 1 — Rules file:**
1. Click `.cursorrules` in the file tree — contents fill the editor
2. Let the audience read the key lines (pause 2 seconds on the file)
3. Open chat (`Cmd+L`)
4. **Paste PROMPT 5.** Hit Enter. Let the response stream in.
5. Point to the response — show that it naturally uses a List parameter and bulkification. That came from the rules file.

**Beat 2 — Conversation memory:**
6. Click the **chat history icon** (clock icon above the chat panel)
7. Show 2-3 previous conversation threads
8. Click one — show it loading back in with full context
9. Add a verbal note here: "I was working on this yesterday. It remembers."

### Talk Track

> "This file tells Cursor how to behave on this project. Apex best practices, SLDS standards. You set it once. Every response from that point follows those guardrails automatically. You never have to remind it.
>
> And your work carries over. I was here yesterday. It remembers."

### ScreenStudio Notes

Zoom into the `.cursorrules` content so the text is readable on screen. Keyboard overlay on `Cmd+L`. Keep the pace tight — two beats and out. End on the chat history view with a previous thread loaded.

---

## Recording Order

Do these in this order. The sequence builds your muscle memory and saves the hardest clip for when you're warmed up.

1. **Clip 1** — Shortest clip. Pure warmup. No AI responses. (~40s)
2. **Clip 4** — Two quick beats. No unpredictable AI output. (~40s)
3. **Clip 3** — Three beats. One Cmd+K response and one @Codebase response — both short and predictable. (~60s)
4. **Clip 2** — The centerpiece. You're warmed up. The Agent build is the only long AI response you have to manage. (~90s)

---

## Final QA Before Export

- All 4 clips exported as MP4.
- Keyboard overlays visible and readable at presentation resolution.
- No notification banners appeared in any clip.
- Zoom transitions settle before the next click.
- Clips match the expected filenames in `public/videos/`.
- Total runtime across all 4 clips is under 4 minutes.
