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

const site = "https://bodyforge.org";

// https://astro.build/config
export default defineConfig({
  ...sharedConfig(import.meta.url),
  site: site,
  integrations: [
    starlight({
      title: "BodyForge",
      customCss: ["../shared/src/styles/tailwind.css", "./src/styles/theme.css"],
      tagline: "Bodyhacking Resources by TrueForge",
      pagefind: true,
      logo: sharedLogo,
      head: sharedHead(),
      tableOfContents: sharedTableOfContents,
      social: sharedSocial("bodyforge"),
      editLink: {
        baseUrl: "https://github.com/trueforge-org/website/tree/main/bodyforge",
      },
      components: sharedComponents,
      plugins: [
        starlightImageZoom(),
      ],
      sidebar: [
        {
          label: "Protocol",
          collapsed: false,
          items: [
            {
              label: "Overview",
              slug: "protocol",
            },
            {
              label: "Stage 0: Safety",
              collapsed: true,
              autogenerate: {
                directory: "protocol/stage-0",
              },
            },
            {
              label: "Stage 1: Bodyweight",
              collapsed: true,
              autogenerate: {
                directory: "protocol/stage-1",
              },
            },
          ],
        },
      ],
    }),
    ...sharedIntegrations(),
  ],
});
