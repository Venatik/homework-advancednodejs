// Implement controller for each route

import CartService from "../services/cart.service.js";;

export default class CartController {
    static async addToCart(req, res) {
        try {
            const productId = req.params.productId;
            const cartId = req.body.cartId;
            const cart = await CartService.add(cartId, productId);
            res.status(201).send(cart);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async getAllCart(req, res) {
        try {
            const cart = await CartService.getAll();
            res.status(200).send(cart);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async getCartProduct(req, res) {
        try {
            const productId = req.params.id;
            const product = await CartService.getById(productId);
            res.status(200).send(product);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async deleteCartProduct(req, res) {
        try {
            const productId = req.params.id;
            const cart = await CartService.delete(productId);
            res.status(200).send(cart);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async deleteCart(req, res) {
        try {
            const cartId = req.params.id;
            const cart = await CartService.deleteCart(cartId);
            res.status(200).send(cart);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
};