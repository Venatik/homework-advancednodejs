// implement CRUD operations for products
/* Get all
get by id
create
update
delete
*/

// implement filtering by query params (category and name)
// implement adding review and rating

// implement logic for adding product to cart (route, controller)

import Product from "../models/product.model.js";

export default class ProductService {
    static async getAll(query = {}) {
        let queryObj = {};

        if (query?.category) {
            queryObj.category = query.category;
        }

        if (query?.name) {
            queryObj.name = query.name;
        }

        const data = await Product.find(queryObj);
        return data;
    }

    static async getById(id) {
        const product = Product.findById(id);
        return product;
    }

    static async create(body) {
        return await Product.create(body);
    }

    static async update(id, body) {
        let product = await Product.findById(id);
        const updatedData = { ...product, ...body };
        product.set(updatedData);
        await product.save();
        return product;
    }

    static async delete(id) {
        return Product.findByIdAndDelete(id);
    }

    static async review(id, review) {
        let product = await Product.findById(id);
        product.review.push(review);
        await product.save();
        return product;
    }

    static async rating(id, rating) {
        let product = await Product.findById(id);
        product.rating.push(rating);
        await product.save();
        return product;
    }
};