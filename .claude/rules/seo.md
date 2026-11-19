# SEO conventions

`src/layouts/Layout.astro` owns all `<head>` output: title, description,
robots, canonical, Open Graph, Twitter, geo meta, GA4 (`G-QEE63HS9SZ`, the
only Three Rivers property, plus the `phone_call_click` listener), and the
site-wide `Hospital` JSON-LD node.

## Per page

- Pass `title`, `description`, `canonicalUrl` to `<Layout>`. Pass `ogTitle`,
  `ogDescription`, `twitter*` only when they should differ from title/description.
- Canonical URLs are absolute, `https://trbhcares.com/...`, no trailing slash.
  If omitted, Layout derives it from the path.
- Extra JSON-LD goes in the `structuredData` prop (object or array); Layout
  appends it after the Hospital node. Interior pages add a `BreadcrumbList`.
- `keywords` is marked `@deprecated` in Layout and is not rendered. Existing
  pages still pass it; do not add new keyword strings.
- Title ≤ ~60 chars where possible, description 120–160 chars, local terms
  (West Mifflin, Pittsburgh, PA) on service pages.

## Facts that must stay consistent

Hospital name, address (4043 Irene St, West Mifflin, PA 15122), phones
(+1-888-391-0229 admissions, +1-888-391-2655 intake), fax (+1-412-706-9202)
and geo are defined in `Layout.astro`'s `hospitalSchema`. Any page copy or
JSON-LD that repeats them must match exactly. Change them in one place and
grep for the old value.

## Don't

- Don't add other GA/GTM IDs. `G-2W3TT2HD37` came in with the initial
  commit, is not a Three Rivers property, and was removed on 2026-10-08 —
  don't restore it.
- Don't add `noindex` to public pages; `robots.txt` allows all and points at
  `sitemap-index.xml`.
- Don't invent FAQ answers, ratings, reviews, or `aggregateRating`.
