import { title, subtitle } from "@/components/primitives";
import Card from "@/components/products/itemCard";
import { Suspense } from "react";

export default function Home() {
  return (
    <section className="flex flex-col mx-10 gap-4 py-8 md:py-10 overflow-hidden">
      <h1 className={title({ size: "sm" })}>Nuestros productos</h1>
      <p className={subtitle()}>Conoce los productos que tenemos para tus chicos.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 w-full items-center">

        <Suspense fallback={<div>Loading...</div>}>

          <Card title="Producto 1" description="Descripción del producto 1" price={100} productId={1} />
          <Card title="Producto 2" description="Descripción del producto 2" price={200} productId={2} />
          <Card title="Producto 3" description="Descripción del producto 3" price={300} productId={3} />
          <Card title="Producto 4" description="Descripción del producto 4" price={400} productId={4} />
          <Card title="Producto 5" description="Descripción del producto 5" price={500} productId={5} />
          <Card title="Producto 6" description="Descripción del producto 6" price={600} productId={6} />

        </Suspense>


      </div>





    </section >
  );
}
