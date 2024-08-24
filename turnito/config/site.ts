export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Alohomora Textiles",
  description: "Alohomora, tienda de productos de tela y bordados hechos con amor",
  navItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Nuestos Productos",
      href: "/products",
    },
    {
      label: "Sobre Nosotros",
      href: "/about",
    },
  ],
  navMenuItems: [{
    label: "Inicio",
    href: "/",
  },
  {
    label: "Nuestos Productos",
    href: "/docs",
  },
  {
    label: "Sobre Nosotros",
    href: "/about",
  },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
