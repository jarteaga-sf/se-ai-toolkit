# Cursor Demo Recording Checklist

Use this checklist to record the 4 Cursor clips with ScreenStudio so the output is consistent across presenters.

## Before You Record

- Turn on Do Not Disturb.
- Close unrelated apps and browser tabs.
- In Cursor, open `acme-demo-org/`.
- Confirm right chat panel is visible.
- Confirm Salesforce Extension Pack is installed.
- Confirm `.cursorrules` exists in project root.
- Set editor font to at least 15 and terminal font to at least 14.
- Keep cursor movement slow and deliberate.

## ScreenStudio Settings

- Resolution: `1920x1080`
- FPS: `30`
- Export: `MP4 (H.264)`
- Auto zoom: ON, medium intensity
- Keyboard overlays: ON
- Mouse smoothing: ON
- Speed up typing segments: 2x

## Clip 1: The Workspace

File name: `public/videos/cursor-01-workspace.mp4`

### Click Path

1. Open a fresh Cursor window.
2. `File > Open Folder` and select `acme-demo-org/`.
3. Expand `force-app/main/default/classes/`.
4. Open `AccountService.cls`.
5. Pan left-to-right:
   - Explorer panel
   - Editor panel
   - Chat panel
6. Press `Cmd+L` to show chat if needed.
7. Click Salesforce icon briefly (Org Browser), then back to Explorer.

### Talk Track

"Cursor keeps the familiar editor layout, but with AI built in.  
Left side is your project files. Middle is your editor. Right side is your AI assistant.  
Your folder is your project. Cursor indexes it so the assistant can reason about real code, not guesses."

## Clip 2: Chat and Context

File name: `public/videos/cursor-02-chat-context.mp4`

### Click Path

1. Switch chat to **Ask** mode.
2. Highlight code in `AccountService.cls`.
3. Press `Cmd+L`, ask: `What does this class do?`
4. Switch to **Plan** mode.
5. Prompt: `I need a Lightning Web Component that shows active Contacts with Account name.`
6. Let plan render.
7. Switch to **Agent** mode.
8. Prompt: `Build it.`
9. Let agent run for 15-20 seconds and show diff.
10. Start a new message and demonstrate context:
    - `@AccountService.cls`
    - `@Codebase where are the Account field mappings?`
    - `@Docs Salesforce Apex`
    - `@Web latest Salesforce CLI sf deploy command`

### Talk Track

"Ask mode helps you understand code safely.  
Plan mode gives you a proposed approach before edits.  
Agent mode executes and shows every change in diff for review.  
The @ symbol is the unlock: files, whole codebase, docs, and live web context."

## Clip 3: Salesforce Power-Ups

File name: `public/videos/cursor-03-salesforce.mp4`

### Click Path

1. Click Extensions icon.
2. Search `Salesforce`.
3. Open Salesforce Extension Pack details.
4. Open Salesforce/Org Browser panel and expand object/class nodes.
5. Open `contactList.js`.
6. Select code and press `Cmd+K`.
7. Prompt: `Add error handling and a loading spinner.`
8. Show inline diff and accept.
9. Open chat and run:
   - `@Codebase Find Apex triggers on the Opportunity object`

### Talk Track

"Extensions turn Cursor into a Salesforce-ready workspace.  
The Salesforce pack adds Apex/LWC support and Org Browser.  
Cmd+K gives surgical inline edits in plain English.  
@Codebase helps you instantly locate patterns like Opportunity triggers."

## Clip 4: Pro Tips

File name: `public/videos/cursor-04-pro-tips.mp4`

### Click Path

1. Open `.cursorrules`.
2. Show:
   - `You are a Salesforce Technical Architect.`
   - `Use Apex best practices: bulkification, no SOQL in loops.`
   - `Follow SLDS standards for all Lightning Web Components.`
3. Open command palette (`Cmd+Shift+P`), run `Simple Browser`.
4. Open `https://developer.salesforce.com`.
5. Show chat history/thread list and open a previous thread.

### Talk Track

"Rules keep AI output aligned to your standards every time.  
The inline browser keeps docs in the same workspace, so you stay in flow.  
Saved threads and summaries let you pick up work without losing context."

## Recording Order

1. Clip 1
2. Clip 3
3. Clip 4
4. Clip 2

## Final QA Before Export

- Verify each clip length is near target.
- Verify keyboard overlays are readable.
- Verify no notifications appear.
- Verify zoom settles before transitions.
- Export all 4 as MP4 and overwrite matching files in `public/videos/`.
