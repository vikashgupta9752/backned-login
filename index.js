import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);

app.get("/", (req, res) => res.send("Backend running..."));

export default app;
