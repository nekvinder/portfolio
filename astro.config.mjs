import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://nekvinder.github.io",
  integrations: [mdx(), sitemap(), tailwind(), icon()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
