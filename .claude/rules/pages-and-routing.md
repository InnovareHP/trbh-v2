# Pages and routing

`astro.config.mjs`: `site: "https://trbhcares.com"`, `trailingSlash: "never"`,
static output (`build.format: "file"`) with the Netlify adapter, `@astrojs/sitemap` (auto-generates
`sitemap-index.xml` from built routes).

## Page anatomy

Every page is a thin `.astro` file:

1. Frontmatter defines `pageTitle`, `pageDescription`, `canonicalUrl` and any
   JSON-LD objects (see `src/pages/referral-process.astro`).
2. It renders `<Layout ...props>` from `src/layouts/Layout.astro` wrapping one
   React component from `src/components/<section>/`.

All markup and copy live in the component, not the page.

## Dynamic sections

`src/pages/our-focus/[focus].astro`, `src/pages/patient-visitor-guide/[guide].astro`
and `src/pages/inpatient-guide/[guide].astro` each hold:

- `getStaticPaths()` — the list of slugs
- a `seoData` record keyed by slug (title, description, og*, structuredData)

and render a switcher component (e.g. `src/components/our-focus/focus/focus.tsx`)
that maps slug → component.

Adding a sub-page means **all** of:

1. slug in `getStaticPaths()`
2. entry in `seoData`
3. slug → component in the switcher's `components` record
4. the new component file
5. link in `src/lib/constant.ts` (sidebar) and `src/components/nav-bar.astro`
   if it belongs in the nav

Miss step 3 and the page builds but shows "Page not found." with a 200 status.

## Trailing slashes

`build: { format: "file" }` emits `foo.html`, so Netlify serves `/foo` with 200.
With the default `directory` format Netlify 301s `/foo` → `/foo/`, which
contradicts the no-slash canonicals. Do not remove it.

`/our-focus/referral-process` was a broken duplicate; it now 301s to
`/referral-process` via `netlify.toml`. Don't re-add the slug.

## Netlify

`netlify.toml` sets security headers and long-cache on `/background/*`,
`/image/*`, `/logo/*`, `/_astro/*`. Files in those folders are cached for a
year as `immutable` — replace an image by adding a new filename, not by
overwriting the old one.
