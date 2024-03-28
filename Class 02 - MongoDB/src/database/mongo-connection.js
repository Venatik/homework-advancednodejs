import dotenv from "dotenv";
dotenv.config();
import { MongoClient } from "mongodb";

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_CLUSTER = process.env.MONGO_CLUSTER;

const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(MONGO_URI);

let connection;
export let database;

export async function connectToDb() {
    if (!connection) {
        try {
            connection = await client.connect();
            database = connection.db("nodeJSAdvanced");
            console.log("Successfully connected to MongoDB.");
        } catch (error) {
            console.log("Error connecting to MongoDB:", { error });
        }
        return connection;
    }
}

export function getDb() {
    if (!connection) {
        throw new Error("Error initializing database.");
    }
    return database;
}