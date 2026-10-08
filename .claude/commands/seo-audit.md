---
description: Run the seo-specialist agent over the whole site or one route
argument-hint: [route, e.g. /referral-process] [focus]
---

Delegate to the `seo-specialist` agent (`.claude/agents/seo-specialist.md`).
Scope: `$ARGUMENTS` if given, otherwise every route in `src/pages/`.

1. Run `npm run build` first so the agent can inspect shipped HTML in `dist/`
   and `dist/sitemap-*.xml`.
2. Pass the scope to the agent; it is advisory — no edits unless the user asks.
3. Relay its score snapshot, ranked findings, needs-data list and 30/60/90 plan.
