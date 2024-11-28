'use server';

import { Product } from '@prisma/client';
import { productsRepository } from '@/prisma/repository/productsRepository';
import { usePathname } from 'next/navigation';

export async function getProductById(productId: number): Promise<Product | null> {
    return await productsRepository.getProductById(productId).then((product: Product | null) => {
        if (product) {
            return product;
        }
        return null;
    });
}

export async function getProducts(){
    return await productsRepository.getProducts();
}
