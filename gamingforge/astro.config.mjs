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
      components: sharedComponents,
      plugins: [
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
