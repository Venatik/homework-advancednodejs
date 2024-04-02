import { Router } from "express";
import productRouter from "./product.routes.js";
import cartRouter from "./cart.routes.js";

const router = Router();

router.use("/products", productRouter);
router.use("/cart", cartRouter);

export default router;