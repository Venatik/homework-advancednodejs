import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import { connect } from "mongoose";
import { MONGO_URI } from "./database/mongo.const.js";

const PORT = process.env.PORT;

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/api", router);

async function startServer() {
    try {
        await connect(MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    } catch (error) {
        console.error("Error starting server: ", error);
    }
}

startServer();