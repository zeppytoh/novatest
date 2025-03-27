// @ts-check
import db from "@astrojs/db";
import markdoc from "@astrojs/markdoc";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel";
import keystatic from "@keystatic/astro";
import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  // The `site` property specifies the base URL for your site.
  // Be sure to update this to your own domain (e.g., "https://yourdomain.com") before deploying.
  site: "https://japanccc.netlify.app",
  prefetch: true,
  trailingSlash: "never",
  experimental: {
    clientPrerender: true,
  },
  integrations: [
    react(),
    markdoc(),
    ...(process.env.SKIP_KEYSTATIC ? [] : [keystatic()]),
    db(),
    svelte(),
  ],
  vite: {},
  output: "server",
  adapter: netlify(),
});