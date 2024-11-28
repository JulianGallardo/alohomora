import { productsRepository } from "@/prisma/repository/productsRepository"
import { Product } from "@prisma/client"
import Card from "@/components/products/itemCard";

export default async function ProductsServerSide() {
    return (
        productsRepository.getProducts().then((products: Product[]) => {
            return (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 w-full items-center">
                    {products.map((product: Product) => {
                        return <Card title={product.name} description={product.description || ""} price={product.price} productId={product.id} />
                    })}
                </div>
            )
        }
        )
    )
};