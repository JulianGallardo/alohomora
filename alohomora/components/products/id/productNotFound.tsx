import { title, subtitle } from "@/components/primitives";
import Card from "@/components/products/itemCard";
import React, { useEffect, useState } from "react";
import Image1 from "@/public/mockup/landing_carousel/image_carousel_1.jpg";
import Image2 from "@/public/mockup/landing_carousel/image_carousel_2.jpg";
import Image3 from "@/public/mockup/landing_carousel/image_carousel_3.jpg";
import Carousel from "@/components/products/id/productsCarousel";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { WhatsApp } from "@/components/icons";
import { button } from "@nextui-org/theme";
import { Button } from "@nextui-org/button";
import { Product } from "@prisma/client";
import Link from "next/link";

export default function ProductPage() {
    return (
        <section className="flex flex-col mx-10 gap-4 py-8 md:py-10 overflow-hidden">
            <div className="flex flex-col gap-4">
                <Breadcrumbs
                    aria-label="Breadcrumb"
                    separator="/"
                    size="lg"
                >
                    <BreadcrumbItem href="/products">Productos</BreadcrumbItem>
                    <BreadcrumbItem>No encontrado</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 text-center px-2 py-10">
                <h1 className={title({ size: "lg" })}>Producto no encontrado</h1>
                <p className={subtitle()}>
                    Lo sentimos, no pudimos encontrar el producto que buscas. Por favor, verifica el enlace o explora nuestra lista de productos.
                </p>
                <Button
                    className="text-lg font-bold p-2 bg-alohomoraOrange"
                    href="/products"
                >
                    <Link href="/products">Ver Productos</Link>
                </Button>
            </div>
        </section>
    );
}

