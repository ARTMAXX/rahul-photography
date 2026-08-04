# New Design Project — Claude Code Guide

## Available Commands
- `/plan` — Start planning mode (structured product thinking)
- `/build` — Execute implementation with full context
- `/review` — Review the current diff
- `/test` — Generate and run tests
- `/ship` — Commit, push, and create PR
- `/spec` — Turn vague ideas into executable specs
- `/code-simplify` — Simplify complex code
- `/webperf` — Web performance analysis
- `/impeccable` — Premium frontend design & polish

## Available Skills
- `impeccable` — Premium frontend design/redesign/audit (v3.8.0)
- `test-driven-development` — TDD workflow
- `code-review-and-quality` — Code review best practices
- `frontend-ui-engineering` — Frontend UI patterns
- `security-and-hardening` — Security hardening
- `planning-and-task-breakdown` — Task planning
- And 19 more from agent-skills (addyosmani)

## Available Agents (169+)
Pass any agent name to the `/agent` command:
- Frontend Developer, Backend Architect, UI Designer, UX Researcher
- Security Architect, Database Optimizer, DevOps Automator
- Product Manager, Code Reviewer, Growth Hacker
- AI Engineer, Mobile App Builder, SEO Specialist
- And many more specialized agents

## Project Context
This is a design project in `C:\Users\Rahul\Downloads\data\New folder\new-design\`.

## ⚡ VISION BRIDGE PROTOCOL (Mandatory — read when any image/screenshot arrives)

**The main session model (`deepseek-v4-flash-free`) CANNOT read images.** Pasting an image into chat fails with
"this model does not support image input." Do NOT just tell the user you can't see it — use the bridge instead.

**When the user sends an image, says "look at this", "see this", "clipboard", or pastes an image:**
1. First CHECK the OS clipboard for an image and analyze it:
   `& "E:\old data\website data\data\New folder\new-design\see-image.ps1"`
2. `see-image.ps1` grabs the clipboard bitmap → saves a temp PNG → calls
   `opencode run --model opencode/mimo-v2.5-free "…" "@<temp.png>"` (MiMo V2.5 Free, OpenCode Zen — vision-capable, already authenticated).
3. Relay MiMo's full description back to the user as the "seen" result.
4. If the user provides a real file path instead, use: `.\see-image.ps1 -Path <file>` or `-Prompt "custom question"`.

**Hard dependency (explain to the user):** The bridge ONLY works when the image is actually **copied onto the OS clipboard**
(Win+Shift+S screenshot, right-click → "Copy image", or Ctrl+C on an image). Images **attached/uploaded into the chat box
(`[Image N]` tag) are NOT written to the OS clipboard** — the chat app holds them internally, so there is nothing for the
bridge to grab. If the clipboard check shows only text, it means the user attached (not copied) the image — ask them to
COPY it to the clipboard (or give a file path), then say "clipboard".
