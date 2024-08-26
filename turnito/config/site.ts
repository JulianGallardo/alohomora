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
    href: "/products",
  },
  {
    label: "Sobre Nosotros",
    href: "/about",
  },
  ],
};
