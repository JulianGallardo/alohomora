'use client'

import React, { Suspense, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Product } from "@prisma/client";
import ProductPage from "@/components/products/id/productPage";
import { getProductById } from "@/actions/productActions";
import ProductNotFound from "@/components/products/id/productNotFound";
import ProductPageSkeleton from "@/components/products/id/productSkeleton";



export default function Home() {

    const path = usePathname();
    const productId = path.split('/').pop();
    const [product, setProduct] = useState<Product>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductById(Number(productId)).then((product: Product | null) => {
            if (product) {
                setProduct(product);

            }
            setLoading(false);

        });
    }, [productId]);

    return (

        loading ? <ProductPageSkeleton/> :
            (product ? <ProductPage {...product} /> : <ProductNotFound />)


    );
}
