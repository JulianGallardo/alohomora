'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Card from '../itemCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { transform } from 'framer-motion';
import { Product } from '@prisma/client';

interface CarouselProps {
    products: Product[];
    infinite?: boolean;
    autoplay?: boolean;
    autoplaySpeed?: number;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    dots?: boolean;
}



function RelatedProductCarousel({ products, infinite, autoplay, autoplaySpeed, speed, slidesToShow, slidesToScroll, dots }: CarouselProps) {
    const settings = {
        dots: dots !== null ? dots : true,
        infinite: infinite !== null ? infinite : true,
        autoplay: autoplay !== null ? autoplay : true,
        autoplaySpeed: autoplaySpeed !== null ? autoplaySpeed : 1000,
        speed: speed !== null ? speed : 600,
        slidesToShow: slidesToShow !== null ? slidesToShow : 2,
        slidesToScroll: slidesToScroll !== null ? slidesToScroll : 1,


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };


    return (
        <div className="w-full h-full p-8">
            <Slider {...settings}>
                {products.map((product, index) => (
                    <Card key={index} title={product.name} description={product?.description ?? ''} price={product.price} productId={product.id} />
                ))}

            </Slider>
        </div>
    );
};




export default RelatedProductCarousel;