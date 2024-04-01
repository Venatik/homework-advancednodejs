/* Get all
get by id
create
update
delete
*/

// add review and rating
// implement filtering

import { Router } from "express";
import ProductController from "../controllers/product.controller.js";

const router = Router();

router.get("/", ProductController.getProducts);
router.get("/:id", ProductController.getProduct);
router.post("/", ProductController.createProduct);
router.put("/:id", ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);
router.patch("/:id/review", ProductController.addReview);
router.patch("/:id/rating", ProductController.addRating);

export default router;