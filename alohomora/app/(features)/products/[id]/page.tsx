"use client";	
import { getProducts } from "@/actions/productActions";
import ProductLanding from "@/components/products/id/productLanding";
import RecomendedProducts from "@/components/products/id/recomendedProducts";
import { productsRepository } from "@/prisma/repository/productsRepository";
import { Product } from "@prisma/client";
import { GetServerSideProps } from "next";
import { Suspense, use, useEffect, useState } from "react";



export default function Home() {



    
    const [relatedProducts, setRelatedProducts] = useState<Product[]>();

    useEffect(() => {
        getProducts().then((products: Product[]) => {
            setRelatedProducts(products);
        }).catch((error) => {
            console.error('Error fetching products:', error);
        });
    }, []);
    


    return (

        <section className="flex flex-col mx-10 gap-4 py-8 md:py-10 overflow-hidden">
            <ProductLanding />
            <Suspense fallback={<div>Loading...</div>}>
                {
                    relatedProducts ? <RecomendedProducts products={relatedProducts} /> : <div>No hay productos relacionados</div>
                }
            </Suspense>
        </section >


    );
}



