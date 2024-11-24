"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useState } from "react"; // Importar useState
import { siteConfig } from "@/config/site";
import AlohomoraLogo from "@/public/alohomora.png";
import Image from "next/image";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para manejar la visibilidad del menú

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false); // Cerrar el menú
  };

  return (
    <NextUINavbar isMenuOpen={isMenuOpen} onMenuOpenChange={handleMenuToggle} maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              src={AlohomoraLogo}
              alt="Alohomora Logo"
              width={70}
              height={70}
              className=""
            />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 " justify="end">
        <NavbarMenuToggle/>
      </NavbarContent>

      <NavbarMenu  >
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={index === 0 ? "primary" : "foreground"}
                href={item.href}
                size="lg"
                onClick={handleMenuClose} // Cierra el menú al hacer clic
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};