import { Prisma, PrismaClient, Product } from "@prisma/client";

import prisma from "../db";

export const productsRepository = {
  async getProducts() {
    try {
      const products = await prisma.product.findMany();
      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  },
  async getProductById(id: number) {
    try {
      const product = await prisma.product.findUnique({
        where: { id },
      });
      return product;
    } catch (error) {
      console.error('Error fetching product by ID:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
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
  async deleteAllProducts() {
    return prisma.product.deleteMany();
  },
};