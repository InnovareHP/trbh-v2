---
description: Review the current working diff against repo conventions
---

1. Run `git status`, `git diff`, and `git diff --staged` to get the actual change set.
2. Read `.claude/rules/*.md`.
3. Apply the checklist in `.claude/agents/code-reviewer.md`.
4. If the diff touches `src/layouts/Layout.astro`, any page's Layout props,
   `seoData`, JSON-LD, `astro.config.mjs` or `public/robots.txt`, also apply
   the on-site checklist in `.claude/agents/seo-specialist.md`.
5. Run `npm run build`.
6. Verify each finding against the file. Drop what you cannot reproduce.
7. Report severity-ordered `path:line — problem — fix`, quote the build
   result, and give a verdict. Fix nothing unless asked.

$ARGUMENTS
