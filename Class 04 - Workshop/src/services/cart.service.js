// implement logic for retrieving card products

import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";

export default class CartService {
    static async add(cartId, productId) {
        let cart = await Cart.findById(cartId);
        if (!cart) {
            cart = new Cart();
        }

        // logic to decrease quantity of product
        const product = await Product.findById(productId);
        if (!product) {
            throw new Error("Product not found");
        }

        product.quantity -= 1;
        if (product.quantity === 0) {
            throw new Error("Product out of stock");
        }

        await product.save();

        cart.products.push(productId);
        await cart.save();
        return cart;
    }

    static async getAll() {
        const carts = await Cart.find().populate("products");
        return carts;
    }

    static async getById(cartId) {
        const cart = await Cart.findById(cartId).populate("products");
        if (!cart) {
            throw new Error("Cart not found");
        }
        return cart;
    }

    static async delete(cartId, productId) {
        const cart = await Cart.findById(cartId);
        if (!cart) {
            throw new Error("Cart is empty");
        }

        cart.products = cart.products.filter(product => product._id.toString() !== productId);
        await cart.save();
        return cart;
    }

    static async deleteCart(cartId) {
        const cart = await Cart.findByIdAndDelete(cartId);
        if (!cart) {
            throw new Error("Cart not found");
        }

        return cart;
    }
};