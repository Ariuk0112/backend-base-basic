import { Request, Response } from "express";
import {
  getProductByIdService,
  getProductLIstService,
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
  const token = generateToken("1");
  return res.json({
    success: true,
    token: token,
  });
};
