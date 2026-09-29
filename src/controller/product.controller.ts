import { Request, Response } from "express";
import {
  createProductService,
  getProductByIdService,
  getProductLIstService,
  updateProductService,
} from "../service/product.service";
import { decrypt, encrypt } from "../utils/encryption";
import { generateToken } from "../utils/tokenHandler";
interface AuthRequest extends Request {
  user: {
    userid: string;
    username: string;
  };
}
export const getProductDetailController = async (
  req: Request,
  res: Response
) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "id is required",
    });
  }
  const result = await getProductByIdService(parseInt(id));
  if (!result) {
    return res.status(404).json({
      success: false,
      message: `${id}- tai buteegdehuun oldosngui`,
    });
  }
  return res.status(200).json({
    success: true,
    result: result,
  });
};

export const getProductListController = async (req: Request, res: Response) => {
  const result = await getProductLIstService();
  return res.json({
    success: true,
    data: result
  });
};


export const updateProductController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { name, price } = req.body
  if (!id || !name || !price) {
    return res.status(404).json({
      success: false,
      message: `zarmin ugugdul hooson baina`
    })
  }
  const existingProduct = await getProductByIdService(parseInt(id))
  if (!existingProduct) {
    return res.status(404).json({
      success: false,
      message: `${id} - tai buteegdehuunii medeelel oldsonguie`
    })
  }
  const updatedProduct = await updateProductService(parseInt(id), name, price)
  return res.status(200).json({
    success: true,
    message: "Huselt amjilttai",
    data: updatedProduct
  })
}


export const createProductController = async (req: Request, res: Response) => {
  const { name, price } = req.body
  if (!name || !price) {
    return res.status(404).json({
      success: false,
      message: `zarmin ugugdul hooson baina`
    })
  }
  const newProduct = await createProductService(name, price)
  return res.status(200).json({
    success: true,
    message: "Huselt amjilttai",
    data: newProduct
  })
}


