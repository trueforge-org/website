import type { Config } from "tailwindcss";

// Warm honey/mead color palette
const accent = {
  200: "#ffd699",
  600: "#c87f0a",
  900: "#6b3f00",
  950: "#4a2c00",
};
const gray = {
  100: "#f5f6f8",
  200: "#eceef2",
  300: "#c0c2c7",
  400: "#888b96",
  500: "#545861",
  700: "#353841",
  800: "#24272f",
  900: "#17181c",
};

const config: Config = {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}",
    "./node_modules/@astrojs/starlight/components/**/*.{astro,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent,
        gray,
        "tc-primary": "#c87f0a",
      },
    },
  },
  plugins: [],
};

export default config;
