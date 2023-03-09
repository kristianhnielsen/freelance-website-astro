import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  site: "https://www.kristiannielsen.com",
  integrations: [
    mdx(),
    astroI18next(),
    sitemap({
      // Do not include the following paths to sitemap
      filter: (page) => page !== "https://www.kristiannielsen.com/email/tak/",
    }),
  ],
});
