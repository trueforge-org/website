import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";
import starlightBlog from "starlight-blog";
import {
  sharedConfig,
  sharedIntegrations,
  sharedTableOfContents,
  sharedComponents,
  sharedHead,
} from "../shared/config/astro.mjs";
import { authors } from "../shared/src/config/authors";

const site = "https://truecharts.org";

export default defineConfig({
  ...sharedConfig(import.meta.url),
  site: site,
  integrations: [
    starlight({
      title: "TrueCharts",
      customCss: ["../shared/src/styles/tailwind.css", "./src/styles/theme.css"],
      tagline: "Community Helm Charts",
      pagefind: true,
      head: sharedHead(),
      tableOfContents: sharedTableOfContents,
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/truecharts" },
        { icon: "facebook", label: "Facebook", href: "https://www.facebook.com/truecharts" },
        { icon: "x.com", label: "X", href: "https://twitter.com/useTrueCharts" },
        { icon: "discord", label: "Discord", href: "https://discord.gg/tVsPTHWTtr" },
        { icon: "telegram", label: "Telegram", href: "https://t.me/s/truecharts" },
        { icon: "openCollective", label: "Open Collective", href: "https://opencollective.com/trueforge" },
        { icon: "patreon", label: "Patreon", href: "https://patreon.com/truecharts" },
      ],
      editLink: {
        baseUrl: "https://github.com/trueforge-org/website/tree/main/truecharts",
      },
      components: {
        ...sharedComponents,
        MarkdownContent: "../shared/src/components/CustomMarkdownBlogContent.astro",
      },
      plugins: [
        starlightBlog({
          prefix: "news",
          title: "TrueCharts News",
          postCount: 5,
          recentPostCount: 10,
          authors: authors,
        }),
        starlightImageZoom(),
      ],
      sidebar: [
        {
          label: "Charts",
          collapsed: false,
          autogenerate: { directory: "charts" },
        },
        {
          label: "Guides",
          collapsed: false,
          autogenerate: { directory: "guides" },
        },
        {
          label: "Common Library",
          collapsed: true,
          autogenerate: { directory: "common" },
        },
        {
          label: "Development",
          collapsed: true,
          autogenerate: { directory: "development" },
        },
      ],
    }),
    ...sharedIntegrations(),
  ],
});
