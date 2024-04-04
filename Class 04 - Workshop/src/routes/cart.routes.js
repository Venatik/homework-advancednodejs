// get cart content by id
// get all

import { Router } from "express";
import CartController from "../controllers/cart.controller.js";

const router = Router();

router.get("/", CartController.getAllCart);
router.get("/:id", CartController.getCartProduct);
router.post("/:cartId/:productId", CartController.addToCart);
router.delete("/carts/:id", CartController.deleteCart);
router.delete("/:cartId/:productId", CartController.deleteCartProduct);

export default router;