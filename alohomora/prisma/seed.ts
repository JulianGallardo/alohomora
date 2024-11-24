import { PrismaClient } from "@prisma/client";
import { productsRepository } from "./repository/productsRepository";
import { categoryRepository } from "./repository/categoryRepository";


const prisma = new PrismaClient();

async function main() {

  // Destruye la anterior bdd
  productsRepository.deleteAllProducts();
  categoryRepository.deleteAllCategories();


  // Crea las categorías
  const categories = await prisma.category.createMany({
    data: [
      { name: 'Mochilas' },
      { name: 'Juguetes' },
      { name: 'Ropa' },
      { name: 'Accesorios' },
      { name: 'Decoración' },
    ],
  });

  // Obtiene las categorías creadas
  const categoryList = await prisma.category.findMany();

  // Crea los productos con sus respectivas categorías
  const products = await prisma.product.createMany({
    data: [
      {
        name: 'Mochila Conejo',
        description: '¡Para cargar de todooo, a los peques les encanta... la mochilita de los 1000 usos!!!\n•El cuerpo mide 32 cm x 25 cm.\n•Confeccionada en tela tusor.\n•Fácil de abrir/cerrar favoreciendo la autonomía del peque.',
        price: 25.99,
        stock: 100,
      },
      {
        name: 'Globopelota Animalitos',
        description: 'Globopelota de tela con estampado de animalitos. Ideal para jugar en interiores sin peligro.\n•Confeccionada en tela resistente.\n•Fácil de inflar con cualquier globo común.\n•Lavable.',
        price: 10.99,
        stock: 150,
      },
      {
        name: 'Pizarra para Nenes',
        description: 'Pizarra portátil de tela para que los peques puedan dibujar en cualquier lugar.\n•Incluye tizas y borrador.\n•Plegable para fácil transporte.\n•Ideal para viajes y salidas.',
        price: 19.99,
        stock: 120,
      },
      {
        name: 'Delantal Infantil',
        description: 'Delantal de tela con divertidos estampados para proteger la ropa durante las actividades artísticas o culinarias.\n•Tamaño ajustable.\n•Fácil de limpiar.\n•Varios diseños disponibles.',
        price: 14.99,
        stock: 80,
      },
      {
        name: 'Capa de Superhéroe',
        description: 'Capa de superhéroe para los más pequeños, confeccionada en tela suave y cómoda.\n•Varios colores y diseños disponibles.\n•Incluye máscara a juego.',
        price: 12.99,
        stock: 110,
      },
      {
        name: 'Almohadón Decorativo Estrella',
        description: 'Almohadón de tela con forma de estrella, perfecto para decorar la habitación de los niños.\n•Relleno suave y cómodo.\n•Disponible en varios colores.',
        price: 17.99,
        stock: 90,
      },
      {
        name: 'Cojín Animales de la Selva',
        description: 'Cojín de tela con estampado de animales de la selva. Ideal para jugar o descansar.\n•Relleno de fibra sintética.\n•Lavable y duradero.',
        price: 15.99,
        stock: 95,
      },
      {
        name: 'Cesto de Tela para Juguetes',
        description: 'Cesto de tela resistente para guardar juguetes y mantener el orden en la habitación.\n•Asas para fácil transporte.\n•Disponible en diferentes tamaños y diseños.',
        price: 22.99,
        stock: 70,
      },
      {
        name: 'Muñeco de Trapo Dinosaurio',
        description: 'Muñeco de trapo con forma de dinosaurio, suave y perfecto para abrazar.\n•Confeccionado en algodón suave.\n•Lavable a máquina.',
        price: 18.99,
        stock: 85,
      },
      {
        name: 'Bolsa de Merienda Personalizada',
        description: 'Bolsa de tela para la merienda, personalizable con el nombre del niño.\n•Cierre con cordón ajustable.\n•Varios colores y estampados disponibles.',
        price: 9.99,
        stock: 130,
      },
    ],
  });

  // Asigna categorías a los productos
  const productList = await prisma.product.findMany();

  for (const product of productList) {
    // Asigna entre 1 y 3 categorías aleatorias a cada producto
    const randomCategories = categoryList
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.floor(Math.random() * 3) + 1);

    for (const category of randomCategories) {
      await prisma.categoryProduct.create({
        data: {
          productId: product.id,
          categoryId: category.id,
        },
      });
    }
  }

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
