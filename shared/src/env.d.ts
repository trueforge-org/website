/// <reference types="astro/client" />

declare module "~navigation" {
  const config: {
    links: Array<{
      name: string;
      href?: string;
      icon?: string;
      children?: Array<{
        name: string;
        href: string;
        icon?: string;
      }>;
    }>;
  };
  export default config;
}
