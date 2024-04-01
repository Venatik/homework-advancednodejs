import { Schema, model } from "mongoose";
import { categories } from "../utils/constants.js";

// product schema
// product model

const productSchema = new Schema({
    name: {
        type: String,
        minLength: 3,
        maxLength: 50,
        required: [true, "Name is required."]
    },

    description: {
        type: String,
        minLength: 20,
        maxLength: 300,
        required: [true, "Description is required."]
    },

    price: {
        type: Number,
        required: [true, "Price is required."]
    },

    quantity: {
        type: Number,
        required: [true, "Quantity is required."]
    },

    review: [{
        type: String,
        minLength: 20,
        maxLength: 800,
        required: [true, "Review is required."]
    }],

    category: {
        type: String,
        enum: categories,
    },

    rating: [{
        type: Number,
        min: 1,
        max: 5,
    }]
}, { timestamps: true });

const Product = model("product", productSchema, "products");

export default Product;