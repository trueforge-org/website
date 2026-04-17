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

const site = "https://trueforge.org";

// https://astro.build/config
export default defineConfig({
  ...sharedConfig(import.meta.url),
  site: site,
  integrations: [
    starlight({
      title: "TrueForge",
      customCss: ["../shared/src/styles/tailwind.css", "./src/styles/theme.css"],
      tagline: "Awesome Projects Community",
      pagefind: true,
      logo: sharedLogo,
      head: sharedHead(),
      tableOfContents: sharedTableOfContents,
      social: sharedSocial(),
      editLink: {
        baseUrl: "https://github.com/trueforge-org/website/tree/main/trueforge",
      },
      components: {
        ...sharedComponents,
        MarkdownContent: "../shared/src/components/CustomMarkdownBlogContent.astro",
      },
      plugins: [
        starlightBlog({
          prefix: "news",
          title: "TrueForge News",
          postCount: 5,
          recentPostCount: 10,
          authors: authors,
        }),
        starlightImageZoom(),
      ],
      sidebar: [
        {
          label: "about",
          collapsed: true,
          autogenerate: {
            directory: "about",
          },
        },
        {
          label: "truetech",
          collapsed: true,
          autogenerate: {
            directory: "truetech",
          },
        },
        {
          label: "lifeforge",
          collapsed: true,
          autogenerate: {
            directory: "lifeforge",
          },
        },
      ],
    }),
    ...sharedIntegrations(),
  ],
});
