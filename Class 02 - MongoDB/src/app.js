import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import dotenv from "dotenv";
dotenv.config();
import { connectToDb, getDb } from "./database/mongo-connection.js";

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(router);

const PORT = process.env.PORT;

app.use("/api", router);

app.listen(PORT, async () => {
    await connectToDb();
    getDb();
    console.log(`Server is running on port ${PORT}`);
});