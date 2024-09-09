import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config();
const port = process.env.PORT || 5000

connectDB()

const app = express();

app.listen(port,()=>console.log(`Server is running on port ${port}`))