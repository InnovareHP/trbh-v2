// @ts-check
import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://trbhcares.com",
  trailingSlash: "never",
  // Emit /foo.html (not /foo/index.html) so Netlify serves /foo with 200 instead
  // of a 301 to /foo/, matching the no-slash canonicals and sitemap URLs.
  build: { format: "file" },
  integrations: [react(), sitemap()],
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()],
  },
});
