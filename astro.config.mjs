// @ts-check
import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://trbhcares.com",
  integrations: [react(), sitemap()],
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()],
  },
});
