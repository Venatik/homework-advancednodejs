// cart schema
// cart model

// add array of categories

import { Schema, model } from "mongoose";

const cartSchema = new Schema({
    products: [{
        type: Schema.Types.ObjectId,
        ref: "product",
    }]
}, { timestamps: true });

const Cart = model("cart", cartSchema, "carts");

export default Cart;