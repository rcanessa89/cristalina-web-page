// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://www.cristalinacr.com",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es",
          en: "en",
        },
      },
    }),
  ],

  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: true,
    },
  },

  adapter: netlify(),
});
