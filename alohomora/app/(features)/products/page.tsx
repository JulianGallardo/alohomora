import { title, subtitle } from "@/components/primitives";
import Card from "@/components/products/itemCard";
import { productsRepository } from "@/prisma/repository/productsRepository";
import { Product } from "@prisma/client";
import { Suspense } from "react";
import ProductsServerSide from "../../../components/products/productServer";

export default async function Home() {

  return (
    <section className="flex flex-col mx-10 gap-4 py-8 md:py-10 overflow-hidden">
      <h1 className={title({ size: "sm" })}>Nuestros productos</h1>
      <p className={subtitle()}>Conoce los productos que tenemos para tus chicos.</p>

      <div className="w-full">

        <Suspense fallback={<div>Loading...</div>}>
          <ProductsServerSide/>
        </Suspense>


      </div>
    </section >
  );
}
