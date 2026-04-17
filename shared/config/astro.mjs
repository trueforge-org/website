// Shared Astro configuration utilities for multi-site setup
import { basename, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import lottie from "astro-integration-lottie";
import betterImageService from "astro-better-image-service";
import playformCompress from "@playform/compress";
import sharedPublicAssets from "./shared-public-assets.mjs";

/**
 * Shared base Astro config options reused across all sites.
 * @param {string} callerUrl - Pass import.meta.url from the site's astro.config.mjs.
 */
export function sharedConfig(callerUrl) {
  const siteName = basename(dirname(fileURLToPath(callerUrl)));
  return {
    output: "static",
    trailingSlash: "ignore",
    base: "/",
    srcDir: "./src",
    publicDir: "./public",
    compressHTML: true,
    outDir: `../build/${siteName}`,
    cacheDir: `../.astro/${siteName}/cache`,
    vite: {
      cacheDir: `../.vite/${siteName}`,
      resolve: {
        alias: {
          "~navigation": resolve(
            dirname(fileURLToPath(callerUrl)),
            "src/config/navigation.json",
          ),
        },
      },
    },
    prefetch: {
      prefetchAll: true,
    },
    build: {
      output: "directory",
    },
  };
}

/**
 * Shared integrations used by all sites.
 * @param {Object} options
 * @param {string} options.sharedPublicDir - Path to shared/public relative to the site's project root
 */
export function sharedIntegrations({ sharedPublicDir = "../shared/public" } = {}) {
  return [
    sharedPublicAssets({ sharedPublicDir }),
    sitemap(),
    robotsTxt(),
    lottie(),
    betterImageService(),
    playformCompress({
      HTML: false,
      CSS: true,
      JavaScript: true,
      Image: true,
      SVG: true,
    }),
  ];
}

/**
 * Shared Starlight table-of-contents settings.
 */
export const sharedTableOfContents = {
  maxHeadingLevel: 6,
};

/**
 * Shared social links used across all sites.
 */
export const sharedSocial = [
  { icon: "github", label: "GitHub", href: "https://github.com/trueforge-org" },
  { icon: "facebook", label: "Facebook", href: "https://www.facebook.com/truecharts" },
  { icon: "x.com", label: "X", href: "https://twitter.com/useTrueCharts" },
  { icon: "discord", label: "Discord", href: "https://discord.gg/tVsPTHWTtr" },
  { icon: "telegram", label: "Telegram", href: "https://t.me/s/truecharts" },
  { icon: "openCollective", label: "Open Collective", href: "https://opencollective.com/trueforge" },
  { icon: "patreon", label: "Patreon", href: "https://patreon.com/truecharts" },
];

/**
 * Shared Starlight component overrides pointing to shared components.
 */
export const sharedComponents = {
  Header: "../shared/src/components/CustomHeader.astro",
  Sidebar: "../shared/src/components/CustomSidebar.astro",
  Hero: "../shared/src/components/CustomHero.astro",
  MarkdownContent: "../shared/src/components/CustomMarkdownContent.astro",
};

/**
 * Shared head scripts (Google Ads + Analytics).
 * @param {Object} options
 * @param {string} options.adsenseId - Google AdSense publisher ID
 * @param {string} options.gaId - Google Analytics measurement ID
 */
export function sharedHead({ adsenseId = "ca-pub-9270569596814796", gaId = "G-Q9NT692BZZ" } = {}) {
  return [
    {
      tag: "script",
      attrs: {
        src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`,
        crossorigin: "anonymous",
        defer: true,
      },
    },
    {
      tag: "script",
      attrs: {
        src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`,
        defer: true,
      },
    },
    {
      tag: "script",
      content: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}');`,
    },
  ];
}
