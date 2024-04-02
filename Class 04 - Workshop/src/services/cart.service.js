// implement logic for retrieving card products

import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";

export default class CartService {
    static async add(productId) {
        let cart = await Cart.findOne();
        if (!cart) {
            cart = new Cart();
        }

        // logic to decrease quantity of product
        const product = await Product.findById(productId);
        if (!product) {
            throw new Error("Product not found");
        }

        product.quantity -= 1;
        if (product.quantity < 0) {
            throw new Error("Product out of stock");
        }

        await product.save();

        cart.products.push(productId);
        await cart.save();
        return cart;
    }

    static async getAll() {
        const cart = await Cart.findOne().populate("products");
        return cart.products;
    }

    static async getById(productId) {
        const cart = await Cart.findOne().populate("products");
        const product = cart.products.find(product => product.id.toString() === productId);
        if (!product) {
            throw new Error("Product not found");
        }
        return product;
    }

    static async delete(productId) {
        const cart = await Cart.findOne();
        if (!cart) {
            throw new Error("Cart is empty");
        }

        cart.products = cart.products.filter(product => product._id.toString() !== productId);
        await cart.save();
        return cart;
    }
};