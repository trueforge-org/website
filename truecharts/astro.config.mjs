import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";
import starlightBlog from "starlight-blog";
import {
  sharedConfig,
  sharedIntegrations,
  sharedTableOfContents,
  sharedSocial,
  sharedComponents,
  sharedHead,
  sharedLogo,
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
      logo: sharedLogo,
      head: sharedHead(),
      tableOfContents: sharedTableOfContents,
      social: [
        ...sharedSocial("truecharts"),
        { icon: "facebook", label: "Facebook", href: "https://www.facebook.com/truecharts" },
        { icon: "x.com", label: "X", href: "https://twitter.com/useTrueCharts" },
        { icon: "telegram", label: "Telegram", href: "https://t.me/s/truecharts" },
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
          label: "Common",
          collapsed: false,
          autogenerate: { directory: "common" },
        },
      ],
    }),
    ...sharedIntegrations(),
  ],
});
