import { Router } from "express";
import {
  getProductDetailController,
  getProductListController,
} from "../controller/product.controller";
import { verifyToken } from "../utils/tokenHandler";
const router = Router();

/**
 * @swagger
 * /api/product/{productId}:
 *   get:
 *     summary: Get product detail by ID
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the product to retrieve
 *     responses:
 *       200:
 *         description: Product detail retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   description: Product details
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: Product ID
 *                       example: 1
 *                     name:
 *                       type: string
 *                       description: Product name
 *                       example: "Sample Product"
 *                     price:
 *                       type: number
 *                       description: Product price
 *                       example: "1000"
 *       401:
 *         description: Unauthorized
 *       400:
 *         description: "Product ID is required"
 *       500:
 *         description: Internal server error
 */
router.get("/:productId", verifyToken, getProductDetailController);
/**
 * @swagger
 * /api/product:
 *   get:
 *     summary: Get product list
 *     responses:
 *       200:
 *         description: Product list retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: Product ID
 *                         example: 1
 *                       name:
 *                         type: string
 *                         description: Product name
 *                         example: "Sample Product"
 *                       price:
 *                         type: number
 *                         description: Product price
 *                         example: "1000"
 */
router.get("/", getProductListController);
export default router;
