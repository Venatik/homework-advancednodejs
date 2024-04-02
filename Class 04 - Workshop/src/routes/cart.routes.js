// get cart content by id
// get all

import { Router } from "express";
import CartController from "../controllers/cart.controller.js";

const router = Router();

router.get("/", CartController.getAllCart);
router.get("/:id", CartController.getCartProduct);
router.post("/:id", CartController.addToCart);
router.delete("/:id", CartController.deleteCartProduct);

export default router;