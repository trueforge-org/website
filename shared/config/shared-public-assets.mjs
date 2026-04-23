// Astro integration that copies shared public assets into the site's public dir at build time
import { cpSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

/**
 * @param {Object} options
 * @param {string} options.sharedPublicDir - Path to the shared public directory (relative to project root)
 */
export default function sharedPublicAssets({ sharedPublicDir }) {
  return {
    name: "shared-public-assets",
    hooks: {
      "astro:config:setup"({ config, logger }) {
        const rootDir = config.root instanceof URL
          ? fileURLToPath(config.root)
          : config.root?.toString() ?? ".";
        const sitePublicDir = config.publicDir instanceof URL
          ? fileURLToPath(config.publicDir)
          : resolve(rootDir, config.publicDir);
        const sharedDir = resolve(rootDir, sharedPublicDir);

        if (!existsSync(sharedDir)) {
          logger.warn(`Shared public dir not found: ${sharedDir}`);
          return;
        }

        logger.info(`Copying shared public assets from ${sharedDir}`);
        cpSync(sharedDir, sitePublicDir, { recursive: true, force: false });
      },
    },
  };
}
