'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import imagen1 from '@/public/mockup/landing_carousel/image_carousel_1.jpg';
import imagen2 from '@/public/mockup/landing_carousel/image_carousel_2.jpg';
import imagen3 from '@/public/mockup/landing_carousel/image_carousel_3.jpg';


const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
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
                dots:false
            }
        }
    ]
};

const Carousel = () => {
    

    return (
        <div className="w-full p-8">
            <Slider {...settings}>
                <Image src={imagen1} alt="imagen1" />
                <Image src={imagen2} alt="imagen2" />
                <Image src={imagen3} alt="imagen3" />
            </Slider>
        </div>
    );
};



export function CarouselSkeleton(){
    return (
        <div className="w-full p-8">
        
            <Slider {...settings}>
                {[1,2,3,4,5].map((_, index) => (
                    <div key={index} className="px-4">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full ">
                            <div className="skeleton bg-gray-400 h-48 w-full"></div>
                            <div className="p-4 gap-2 flex flex-col">
                                <div className="skeleton bg-gray-400 h-4 w-3/4"></div>
                                <div className="skeleton bg-gray-400 h-4 w-1/2"></div>
                                <div className="skeleton bg-gray-400 h-4 w-1/4"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}



export default Carousel;