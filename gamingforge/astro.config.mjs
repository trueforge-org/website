import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";
import starlightBlog from "starlight-blog";
// Shared config from multi-site setup
import {
  sharedConfig,
  sharedIntegrations,
  sharedTableOfContents,
  sharedSocial,
  sharedComponents,
  sharedHead,
  sharedLogo,
} from "../shared/config/astro.mjs";
// Shared authors used across all sites with blog
import { authors } from "../shared/src/config/authors";

const site = "https://gamingforge.org";

// https://astro.build/config
export default defineConfig({
  ...sharedConfig(import.meta.url),
  site: site,
  integrations: [
    starlight({
      title: "GamingForge",
      customCss: ["../shared/src/styles/tailwind.css", "./src/styles/theme.css"],
      tagline: "Gaming Community by TrueForge",
      pagefind: true,
      logo: sharedLogo,
      head: sharedHead(),
      tableOfContents: sharedTableOfContents,
      social: sharedSocial("gamingforge"),
      editLink: {
        baseUrl: "https://github.com/trueforge-org/website/tree/main/gamingforge",
      },
      components: {
        ...sharedComponents,
        MarkdownContent: "../shared/src/components/CustomMarkdownBlogContent.astro",
      },
      plugins: [
        starlightBlog({
          prefix: "news",
          title: "GamingForge News",
          postCount: 5,
          recentPostCount: 10,
          authors: authors,
        }),
        starlightImageZoom(),
      ],
      sidebar: [
        {
          label: "Servers",
          collapsed: false,
          autogenerate: {
            directory: "servers",
          },
        },
      ],
    }),
    ...sharedIntegrations(),
  ],
});
