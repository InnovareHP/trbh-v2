# Code style

Prettier config in `.prettierrc`: 2 spaces, double quotes, semicolons,
`trailingComma: es5`, `printWidth: 80`. VS Code formats on save.

## Files and naming

- Components: kebab-case `.tsx` under `src/components/<section>/`, one default
  export per file (`const Foo = (...) => ...; export default Foo;`).
- Pages: kebab-case `.astro` under `src/pages/`, matching the public URL.
- Shared link lists live in `src/lib/constant.ts` (`linksOurFocus`,
  `linksPatientVisitorGuide`, `linksInPatientVisitorGuide`, `defaultLinks`).
  Reuse them; do not re-inline link arrays in components.
- Some existing filenames are misspelled (`conditions-theraphy-program.tsx`).
  Do not rename them as a side effect.

## React is static here

No component uses a `client:*` directive. Every `.tsx` renders to plain HTML at
build time and ships **no JavaScript**. So:

- `useState`, `useEffect`, `onClick` and other handlers do nothing in the
  browser. Use `<a href>`, `<details>`, CSS, or an inline `<script>` in an
  `.astro` file instead.
- Only add `client:load` / `client:visible` if the user asks for interactivity,
  and say that it adds a JS bundle.

## Styling

- Tailwind v4 via `@tailwindcss/vite`; global CSS is `src/styles/global.css`
  (`@import "tailwindcss"`, Montserrat font, `.text-primary`).
- Brand color is `#0097b2` (hover `#007c91`), used as raw arbitrary values
  (`bg-[#0097b2]`) or `.text-primary`. Accents use Tailwind `cyan-*`. Follow
  what neighbouring components do.
- CTA links reuse `src/components/button.tsx` (`ButtonCTA`).
- Images are plain `<img>` from `public/` (`/image/...`, `/background/...`,
  `/logo/...`). Always give descriptive `alt`, plus `width`/`height` or an
  aspect-ratio class to avoid layout shift; `loading="lazy"` below the fold.
