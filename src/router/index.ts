import { Router } from "express";
import ProductRoutes from "./product.routes";
import UserRoutes from "./product.routes";
const router = Router();

router.use("/product", ProductRoutes);
router.use("/user", UserRoutes);

export default router