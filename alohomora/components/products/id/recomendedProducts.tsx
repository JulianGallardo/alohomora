"use server";

import RelatedProductCarousel from "./relatedProductCarousel";
import { Suspense } from "react";
import { productsRepository } from "@/prisma/repository/productsRepository";
import { Product } from "@prisma/client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";




interface RecomendedProductsProps {
    products: Product[];
}




export default async function RecomendedProducts({ products }: RecomendedProductsProps) {

    return (
        <div className="w-full h-full p-8">
            <h2 className="text-2xl font-bold">Productos Relacionados</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <RelatedProductCarousel products={products} />
            </Suspense>
        </div>

    );
}

