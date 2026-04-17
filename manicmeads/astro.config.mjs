import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";
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

const site = "https://manicmeads.com";

// https://astro.build/config
export default defineConfig({
  ...sharedConfig(import.meta.url),
  site: site,
  integrations: [
    starlight({
      title: "Manic Meads",
      customCss: ["../shared/src/styles/tailwind.css", "./src/styles/theme.css"],
      tagline: "Small Batch Mead Making",
      pagefind: true,
      logo: sharedLogo,
      head: sharedHead(),
      tableOfContents: sharedTableOfContents,
      social: sharedSocial("manicmeads"),
      editLink: {
        baseUrl: "https://github.com/trueforge-org/website/tree/main/manicmeads",
      },
      components: sharedComponents,
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
