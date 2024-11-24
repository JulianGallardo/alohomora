"use server"
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import MockUp1 from '@/public/mockup/landing_carousel/image_carousel_1.jpg';
import MockUp2 from '@/public/mockup/landing_carousel/image_carousel_2.jpg';
import MockUp3 from '@/public/mockup/landing_carousel/image_carousel_3.jpg';
interface CardProps {
    title: string;
    description: string;
    price: number;
    productId: number;
}

async function Card({ title, description, price,productId}:CardProps){
   
    const url = `/products/${productId}`;    


    return (
        <Link href={url}>
            <div className="transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-alohomoraGray hover:shadow-black flex flex-col w-full h-full   rounded-lg overflow-hidden">
                <Image className=" w-full object-cover object-center" src={
                    productId % 3 === 0 ? MockUp1 : productId % 2 === 0 ? MockUp2 : MockUp3
                } alt="Card" width={500} height={200} />
                <div className="px-6 py-4 h-1/3 flex-grow">
                    <h2 className="text-xl md:text-2xl font-bold mb-2">{title}</h2>
                    <p className="text-gray-500  text-base  line-clamp-3 md:line-clamp-5 md:text-lg">{description}</p>
                </div>
                <div className="px-6 py-4">
                    <p className="text-alohomoraOrange text-xl font-semibold">${price}</p>
                </div>
            </div>
        </Link>
    );
};

export default Card;