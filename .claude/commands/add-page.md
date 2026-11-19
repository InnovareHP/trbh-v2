---
description: Add a new public page or dynamic sub-page with full SEO and nav wiring
argument-hint: <url-path> <short purpose>
---

Add the page described in `$ARGUMENTS` (a URL path such as `/our-focus/iop`
plus what it is for).

1. Read `.claude/rules/pages-and-routing.md` and `.claude/rules/seo.md`.
2. Decide the kind:
   - **Standalone** (`/foo`) → `src/pages/foo.astro`, modelled on
     `src/pages/referral-process.astro`.
   - **Sub-page of a dynamic section** (`/our-focus/*`,
     `/patient-visitor-guide/*`, `/inpatient-guide/*`) → wire every step in
     the "Adding a sub-page" list of `pages-and-routing.md`.
3. Create the component under `src/components/<section>/` following the
   neighbouring components (static React, `ButtonCTA`, brand color).
4. Write the Layout props: title, description, absolute canonical, and a
   `BreadcrumbList`. Do not add `keywords`.
5. Copy: use only facts already on the site or given by the user. Leave a
   clearly marked `TODO(copy):` for anything missing — never invent clinical
   content, numbers, or credentials.
6. Add nav/sidebar links if the user wants it discoverable.
7. Run `npm run build`; confirm the route appears in `dist/` and in
   `dist/sitemap-0.xml`.
8. Report files touched, the build result, and any `TODO(copy)` left.
