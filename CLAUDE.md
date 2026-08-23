# New Design Project — Claude Code Guide

## 🚀 DEPLOYMENT WORKFLOW (READ THIS FIRST — MANDATORY)

**Live site:** https://rahulchandaphotography.com (Cloudflare Workers, OpenNext)
**GitHub:** https://github.com/ARTMAXX/rahul-photography (branch: `main`)
**Dev server:** `npm run dev` → http://localhost:3001

**THE ONLY CORRECT DEPLOY CHAIN — never skip a step:**

```
edit on localhost → user approves → git commit → git push origin main
→ npx opennextjs-cloudflare build → npx wrangler deploy → verify live site
```

**HISTORY (Aug 2026 incident):** A past session deployed via `wrangler deploy` WITHOUT
committing/pushing first. This made GitHub (old), Live (middle snapshot), and localhost
(newest) three divergent versions — very confusing. It was fixed by syncing all three.
**NEVER deploy without pushing to GitHub first. GitHub must ALWAYS match what is live.**

**Rules:**
1. NEVER run `wrangler deploy` on uncommitted changes.
2. NEVER deploy without asking the user first.
3. Custom domains (rahulchandaphotography.com + www) are configured in the Cloudflare
   dashboard and persist across deploys — do not touch domain config in wrangler.toml.
4. `.dev.vars`, `.open-next/`, `.wrangler/`, logs are gitignored — keep it that way.
5. When writing files, ALWAYS save as UTF-8 (a past session saved
   `src/app/about/page.tsx` as UTF-16 and broke the production build).

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

**Two tools:**
1. `see-image.ps1` — quick look. Clipboard image or `-Path <file>`. For "what is this?", idle screenshots, debug.
2. `dev-utils/vision-review.ps1` — **design-grade QA for every design artifact we produce** (og cards, logos, section mockups).
   `.\dev-utils\vision-review.ps1 -Path public\og-image.png -Thumbs -Gate -Strict`
   - Hard rubric (legibility / feed scale / hierarchy / spacing / brand coherence / no placeholders).
   - `-Gate` runs an independent pixel check for edge clipping; **the gate wins over the model's verdict.**
   - `-Thumbs` attaches the 600×315 feed thumbnail so the reviewer judges what platforms actually render.
   - Verdicts are argument-required: `APPROVED/REJECTED`, never vague praise.

**HARD DESIGN POLICY (applies to every future task — do not skip):**
- **The vision model is a second opinion, not a decision. A passing `APPROVED` is never sufficient.** Always:
  1. Run the objective gate (`-Gate`) and reconcile every flagged edge/contrast line.
  2. Reason from the deterministic layout we control (fonts, coordinates, canvas size) before trusting a verdict.
  3. If any legibility dimension is sub-threshold, it is REJECTED — no approval-by-mood.
- **The user's preferences are input, not a pass.** If the design is not production-grade we say so with **proof**:
  a measured, specific list (which line clips, which contrast ratio, which margin). We never ship a weak layout because
  someone said they liked it, and we never weaken a design to please a rubber-stamp.
- **Disagree when wrong.** If the user requests something that damages the brand (clipping, generic stocky feel,
  low-contrast text, confused hierarchy), push back with evidence FIRST, then comply only if they confirm after seeing proof.
- Never generate or keep repeated generic “permission” answers. Every card/logo/mock must survive this loop:
  generate → gate → vision rubric → our re-check of the layout math → ship.

**Quick-look workflow (user pastes/copies an image):**
1. If they want analysis of a *produced artifact*, use the vision-review may path above.
2. If it's a random screenshot/clipboard (Win+Shift+S, Copy image), use `see-image.ps1`:
   `& "E:\old data\website data\data\New folder\new-design\see-image.ps1"`
3. Relay MiMo's full description back as the "seen" result.

**Hard dependency (explain to the user):** The bridge ONLY works when the image is actually **copied onto the OS clipboard**
(Win+Shift+S screenshot, right-click → "Copy image", or Ctrl+C on an image). Images **attached/uploaded into the chat box
(`[Image N]` tag) are NOT written to the OS clipboard** — the chat app holds them internally, so there is nothing for the
bridge to grab. If the clipboard check shows only text, it means the user attached (not copied) the image — ask them to
COPY it to the clipboard (or give a file path), then say "clipboard".
