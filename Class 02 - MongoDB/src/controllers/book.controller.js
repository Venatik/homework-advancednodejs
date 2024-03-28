import BookModel from "../models/book.model.js";

export default class BookController {
    static async getBooks(req, res) {
        try {
            const books = await BookModel.getAll();
            res.send(books);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async getBook(req, res) {
        try {
            const bookId = req.params.id;
            const book = await BookModel.getById(bookId);
            res.send(book);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async getBookByAuthor(req, res) {
        try {
            const author = req.params.author;
            const book = await BookModel.getByAuthor(author);
            res.send(book);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async createBook(req, res) {
        try {
            const bookBody = req.body;
            const book = await BookModel.create(bookBody);
            res.status(201).send(book);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async updateBook(req, res) {
        try {
            const bookBody = req.body;
            const bookId = req.params.id;
            const book = await BookModel.update(bookId, bookBody);
            res.send(book);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async deleteBook(req, res) {
        try {
            const bookId = req.params.id;
            await BookModel.delete(bookId);
            res.status(200).send({ message: "Book deleted." });
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async deleteAllBooks(req, res) {
        try {
            await BookModel.deleteAll();
            res.status(200).send({ message: "All books deleted." });
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
}