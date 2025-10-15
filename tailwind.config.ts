import type { Config } from "tailwindcss";

// Generated color palettes
const accent = {
  200: "#b3c7ff",
  600: "#364bff",
  900: "#182775",
  950: "#131e4f",
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
        "tc-primary": "#316ce6",
      },
    },
  },
  plugins: [],
};

export default config;
