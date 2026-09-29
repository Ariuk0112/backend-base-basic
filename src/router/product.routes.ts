import { Router } from "express";
import {
  createProductController,
  getProductDetailController,
  getProductListController,
  updateProductController,
} from "../controller/product.controller";
// import { verifyToken } from "../utils/tokenHandler";
const router = Router();

router.get("/:id", getProductDetailController);
router.get("/", getProductListController);
router.put("/:id", updateProductController);
router.post("/", createProductController)
export default router;
