import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";
// Shared config from multi-site setup
import {
  sharedConfig,
  sharedIntegrations,
  sharedTableOfContents,
  sharedComponents,
  sharedHead,
} from "../shared/config/astro.mjs";

const site = "https://manicmeads.com";

// https://astro.build/config
export default defineConfig({
  ...sharedConfig(import.meta.url),
  site: site,
  integrations: [
    starlight({
      title: "Manic Meads",
      customCss: ["../shared/src/styles/tailwind.css"],
      tagline: "Small Batch Mead Making",
      pagefind: true,
      head: sharedHead(),
      tableOfContents: sharedTableOfContents,
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/trueforge-org" },
        { icon: "discord", label: "Discord", href: "https://discord.gg/tVsPTHWTtr" },
        { icon: "openCollective", label: "Open Collective", href: "https://opencollective.com/manicmeads" },
      ],
      editLink: {
        baseUrl: "https://github.com/trueforge-org/website/tree/main/manicmeads",
      },
      components: {
        ...sharedComponents,
        MarkdownContent: "./src/components/CustomMarkdownContent.astro",
      },
      plugins: [
        starlightImageZoom(),
      ],
      sidebar: [
        {
          label: "Meads",
          collapsed: false,
          autogenerate: {
            directory: "meads",
          },
        },
        {
          label: "Articles",
          collapsed: false,
          autogenerate: {
            directory: "articles",
          },
        },
      ],
    }),
    ...sharedIntegrations(),
  ],
});
