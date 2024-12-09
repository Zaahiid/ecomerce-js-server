import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";

import userRoutes from "./routes/user.routes.js";
import categoryRoutes from "./routes/category.routes.js";

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/category", categoryRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
