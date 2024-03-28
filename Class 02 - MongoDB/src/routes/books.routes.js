import { Router } from "express";
import BookController from "../controllers/book.controller.js";
import bookValidator from "../middleware/book.validator.js";

const router = Router();

router.get("", BookController.getBooks);
router.get("/:id", BookController.getBook);
router.get("/author/:author", BookController.getBookByAuthor);
router.post("", bookValidator, BookController.createBook);
router.patch("/:id", bookValidator, BookController.updateBook);
router.delete("/:id", BookController.deleteBook);
router.delete("", BookController.deleteAllBooks);

export default router;