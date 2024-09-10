import { Prisma, PrismaClient, Product } from "@prisma/client";

const prisma = new PrismaClient();

export const productsRepository = {
  async getProducts() {
    return prisma.product.findMany();
  },
  async getProductById(id: number) {
    return prisma.product.findUnique({
      where: { id },
    });
  },
    async createProduct(data: Prisma.ProductCreateInput) {
        return prisma.product.create({ data });
    },
  
  async updateProduct(id: number, data: { name: string; price: number }) {
    return prisma.product.update({
      where: { id },
      data,
    });
  },
  async deleteProduct(id: number) {
    return prisma.product.delete({
      where: { id },
    });
  },
};