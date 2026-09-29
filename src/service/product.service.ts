import prisma from "../database";

export const getProductByIdService = async (id: number) => {
  const result = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

export const getProductLIstService = async () => {
  const result = await prisma.product.findMany()
  return result
}

export const createProductService = async (name: string, price: number) => {
  return await prisma.product.create({
    data: {
      name: name,
      price: price
    }
  })
}

export const updateProductService = async (id: number, name: string, price: number) => {
  return await prisma.product.update({
    data: {
      name: name,
      price: price
    },
    where: {
      id: id
    }
  })
}