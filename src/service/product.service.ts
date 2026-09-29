import prisma from "../database";

export const getProductByIdService = async (id: number) => {
  const result = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

export const getProductLIstService = async ()=>{
  const result = await prisma.product.findMany()
  return result
}