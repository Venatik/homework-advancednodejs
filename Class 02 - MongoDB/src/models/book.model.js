import { database } from "../database/mongo-connection.js";
import { ObjectId } from "mongodb";

export default class BookModel {
    static async getAll() {
        const data = await database.collection("books").find({}).toArray();
        return data;
    }

    static async getById(id) {
        const book = await database.collection("books").findOne({ _id: new ObjectId(id) });
        return book;
    }

    static async getByAuthor(author) {
        const book = await database.collection("books").find({ author: author }).toArray();
        return book;
    }

    static async create(body) {
        return await database.collection("books").insertOne(body);
    }

    static async update(id, body) {
        return await database.collection("books").updateOne({ _id: new ObjectId(id) }, { $set: body });
    }

    static async delete(id) {
        return await database.collection("books").deleteOne({ _id: new ObjectId(id) });
    }

    static async deleteAll() {
        return await database.collection("books").deleteMany({});
    }
}