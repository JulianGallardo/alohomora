import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import AlohomoraHome from "@/public/AlohomoraHome.jpg";
import AboutUsImg from "@/public/aboutUs.jpg";
import Image from "next/image";
import Carousel from "@/components/home/carousel";

export default function Home() {
  return (
    <section className="flex flex-col mx-10 gap-4 py-8 md:py-10 overflow-hidden">

      <div className="h-screen w-screen overflow-hidden">
        <Image src={AlohomoraHome} alt="Background Image" layout="fill" objectFit="cover" />

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 ">
          <div className="flex flex-col items-center gap-2 m-4">
            <h1 className={title({ color: "pink", size: "lg" })}>Alohomora Textiles</h1>
            <h2 className={`${subtitle()} text-white text-center `}>Tienda de productos de tela y bordados hechos con amor</h2>
          </div>
        </div>

      </div>

      <div className="flex flex-col  gap-2 py-2">
        <h2 className={title({})}>Nuestros Productos</h2>
        <p className={subtitle()}>Conoce los productos que tenemos para tus chicos.</p>
        <div className="flex flex-col md:w-full md:h-1/2  gap-4">
          <Carousel />
        </div>
        <div className="flex flex-row gap-4">
          <Link href="/products" className={buttonStyles({})}>
            Ver Productos
          </Link>
        </div>
      </div>

      <Divider />

      <div className="flex flex-col gap-4">
        <h2 className={title({})}>Sobre Nosotros</h2>
        <p className={subtitle()}>Conoce más sobre nosotros y nuestro trabajo.</p>
        <Image 
          src={AboutUsImg}
          alt="About Us Image"
          width={500}
          height={500}
          className="rounded rounded-xl"
          ></Image>
        <div className="flex flex-row gap-4">
          <Link href="/about" className={buttonStyles({})}>
            Sobre Nosotros
          </Link>
        </div>
      </div>



    </section >
  );
}
