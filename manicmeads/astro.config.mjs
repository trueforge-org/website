import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
// https://github.com/HiDeoo/starlight-image-zoom
import starlightImageZoom from "starlight-image-zoom";
// https://docs.astro.build/en/guides/integrations-guide/sitemap/
import sitemap from "@astrojs/sitemap";
// https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt#readme
import robotsTxt from "astro-robots-txt";
// https://github.com/risu729/astro-better-image-service
import betterImageService from "astro-better-image-service";
// https://github.com/Playform/Compress
import playformCompress from "@playform/compress";

const site = "https://manicmeads.org";

// https://astro.build/config
export default defineConfig({
  site: site,
  base: "/",
  output: "static",
  outDir: "build",
  cacheDir: ".astro/cache",
  trailingSlash: "ignore",
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
  },
  build: {
    output: "directory",
  },
  experimental: {
  },
  integrations: [
    starlight({
      title: "Manic Meads",
      customCss: ["./src/tailwind.css"],
      tagline: "Small Batch Mead Making",
      pagefind: true,
      head: [],
      tableOfContents: {
        maxHeadingLevel: 6,
      },
      social: [
        { icon: "openCollective", label: "Open Collective", href: "https://opencollective.com/manicmeads" },
      ],
      components: {
        Header: "./src/components/CustomHeader.astro",
        Sidebar: "./src/components/CustomSidebar.astro",
        Hero: "./src/components/CustomHero.astro",
        MarkdownContent: "./src/components/CustomMarkdownContent.astro",
      },
      plugins: [
        starlightImageZoom(),
      ],
      sidebar: [
        {
          label: "articles",
          collapsed: true,
          autogenerate: {
            directory: "articles",
          },
        },
        {
          label: "recipes",
          collapsed: true,
          autogenerate: {
            directory: "recipes",
          },
        },
      ],
    }),
    sitemap(),
    robotsTxt(),
    betterImageService(),
    playformCompress({
      HTML: false,
      CSS: true,
      JavaScript: true,
      Image: true,
      SVG: true,
    }),
  ],
});
