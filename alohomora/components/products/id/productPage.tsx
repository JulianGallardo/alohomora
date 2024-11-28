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
import RecomendedProducts from "./recomendedProducts";

export default function ProductPage(product:Product) {
    return (
        
        <section className="flex flex-col mx-10 gap-4 py-8 md:py-10 overflow-hidden ">

            <div className="flex flex-col gap-4 ">
                <Breadcrumbs
                    aria-label="Breadcrumb"
                    separator="/"
                    size="lg"
                >
                    <BreadcrumbItem href="/products">Productos</BreadcrumbItem>
                    <BreadcrumbItem>{product?.name}</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            <div className=" flex flex-col md:grid md:grid-cols-2 gap-4 items-center px-2">
                <div className="flex gap-4 items-center px-5 w-screen  md:p-0 md:w-full">
                    <Carousel images={[Image1,Image2,Image3]} slidesToShow={1} slidesToScroll={1} dots={true} autoplay={true} autoplaySpeed={5000} infinite={true} />
                </div>

                <div className="flex flex-col gap-4 md:p-5 md:mt-5 h-full">
                    <h1 className={title({ size: "sm" })}>{product?.name}</h1>
                    <p className={subtitle()}>
                        {product?.description?.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                    <p className='text-xl font-semibold'>Precio: ${product?.price}</p>
                    <Button color="success" startContent={<WhatsApp />} className="text-lg text-white font-bold  p-2" onClick={
                        () => window.open('https://wa.me/+5492916443826', '_blank')
                    }>
                        Contactanos
                    </Button>
                </div>
            </div>
            
        </section>
    );
}