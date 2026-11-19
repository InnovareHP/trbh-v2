# Three Rivers Behavioral Health (trbhcares.com)

Static marketing site for Three Rivers Behavioral Health, a psychiatric
hospital in West Mifflin, PA. Astro 5 + React 19 (server-rendered only) +
Tailwind v4, deployed to Netlify. Remote: `InnovareHP/trbh-v2`.

## Commands

- `npm run dev` — dev server on `localhost:4321`
- `npm run build` — production build to `dist/`. This is the only check the
  repo has: no tests, no lint script, no `astro check`. Run it after any change.
- `npm run preview` — serve the built site

npm is the package manager (`node_modules/.package-lock.json`, Netlify runs
`npm run build`). A `pnpm-lock.yaml` also exists; keep both in sync if you add a
dependency, or ask which one to drop.

## Principles

- This is a healthcare site. Never invent clinical claims, phone/fax numbers,
  addresses, accreditations, insurance accepted, staff, or stats. Copy them
  from existing pages, or ask.
- Change only what was asked. Keep diffs small; no drive-by refactors.
- Match the surrounding file's style (several `.astro` pages use quoted JSON
  keys and long single-line strings — leave them unless asked).

## Version control

- Branch off `main` for non-trivial work. Commit only when asked.
- Never push; the user pushes. Netlify deploys from the remote.
- Conventional-ish messages are used (`fix(...)`, `refactor(...)`); keep them short.

## Restrictions

- Never read or print `.env*`.
- Never edit `dist/`, `.astro/`, `.netlify/`, or `node_modules/`.
- Do not rename or move files in `public/` — URLs are indexed and linked from
  print material (brochure PDF, pricing `.xlsx` files are legally required
  price-transparency files).

## Rules

@.claude/rules/code-style.md
@.claude/rules/pages-and-routing.md
@.claude/rules/seo.md
