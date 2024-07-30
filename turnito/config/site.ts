export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Turnito",
  description: "Manejo de turnos y citas",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Turnos Disponibles",
      href: "/docs",
    },
    {
      label: "Reservar",
      href: "/pricing",
    },
    {
      label: "Cancelar",
      href: "/blog",
    },
    {
      label: "Sobre Nosotros",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Logout",
      href: "/logout",
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
