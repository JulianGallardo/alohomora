import { Prisma, PrismaClient, Category } from "@prisma/client";

const prisma = new PrismaClient();

export const categoryRepository = {
  async getCategories() {
    return prisma.category.findMany();
  },
  async getCategoryById(id: number) {
    return prisma.category.findUnique({
      where: { id },
    });
  },
  async createCategory(data: Prisma.CategoryCreateInput) {
    return prisma.category.create({ data });
  },
  async updateCategory(id: number, data: { name: string }) {
    return prisma.category.update({
      where: { id },
      data,
    });
  },
  async deleteCategory(id: number) {
    return prisma.category.delete({
      where: { id },
    });
  },
  async deleteAllCategories() {
    return prisma.category.deleteMany();
  }
  
};
