// Implement controller for each route

import ProductService from "../services/product.service.js";

export default class ProductController {
    static async getProducts(req, res) {
        try {
            const queryData = req.query;
            const products = await ProductService.getAll(queryData);
            res.send(products);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async getProduct(req, res) {
        try {
            const productId = req.params.id;
            const product = await ProductService.getById(productId);
            res.send(product);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async createProduct(req, res) {
        try {
            const productBody = req.body;
            const product = await ProductService.create(productBody);
            res.status(201).send(product);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async updateProduct(req, res) {
        try {
            const productId = req.params.id;
            const productBody = req.body;
            const product = await ProductService.update(productId, productBody);
            res.status(201).send(product);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async deleteProduct(req, res) {
        try {
            const productId = req.params.id;
            await ProductService.delete(productId);
            res.status(200).send({ message: "Product deleted." });
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async addReview(req, res) {
        try {
            const productId = req.params.id;
            const review = req.body.review;
            const product = await ProductService.review(productId, review);
            res.status(201).send(product);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async addRating(req, res) {
        try {
            const productId = req.params.id;
            const rating = req.body.rating;
            const product = await ProductService.rating(productId, rating);
            res.status(201).send(product);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
}