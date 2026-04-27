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

const site = "https://containerforge.org";

export default defineConfig({
  ...sharedConfig(import.meta.url),
  site: site,
  integrations: [
    starlight({
      title: "ContainerForge",
      customCss: ["../shared/src/styles/tailwind.css", "./src/styles/theme.css"],
      tagline: "Opinionated Container Images by TrueForge",
      pagefind: true,
      logo: sharedLogo,
      head: sharedHead(),
      tableOfContents: sharedTableOfContents,
      social: sharedSocial("containerforge"),
      editLink: {
        baseUrl: "https://github.com/trueforge-org/website/tree/main/containerforge",
      },
      components: {
        ...sharedComponents,
        MarkdownContent: "../shared/src/components/CustomMarkdownBlogContent.astro",
      },
      plugins: [
        starlightBlog({
          prefix: "news",
          title: "ContainerForge News",
          postCount: 5,
          recentPostCount: 10,
          authors: authors,
        }),
        starlightImageZoom(),
      ],
      sidebar: [
        {
          label: "Overview",
          collapsed: false,
          items: [{ label: "Mission & Overview", slug: "guides" }],
        },
        {
          label: "ContainerForge",
          collapsed: false,
          autogenerate: { directory: "guides/containerforge" },
        },
        {
          label: "Deployment Platforms",
          collapsed: false,
          autogenerate: { directory: "guides/platforms" },
        },
        {
          label: "How Containers Work",
          collapsed: true,
          autogenerate: { directory: "guides/fundamentals" },
        },
        {
          label: "Tools",
          collapsed: true,
          autogenerate: { directory: "guides/tools" },
        },
        {
          label: "Containers",
          collapsed: true,
          autogenerate: { directory: "containers" },
        },
      ],
    }),
    ...sharedIntegrations(),
  ],
});
