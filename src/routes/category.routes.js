import express from "express";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware";
import {
  createCategory,
  removeCategory,
  updateCategory,
} from "../controllers/category.controller";

const router = express.Router();

router
  .route("/")
  .post(authenticate, authorizeAdmin, createCategory);

router
  .route("/:categoryId")
  .put(authenticate, authorizeAdmin, updateCategory)
  .delete(authenticate, authorizeAdmin, removeCategory);

router
  .route("/categories")
  .get(listCategory);

router
  .route("/:id")
  .get(readCategory);

export default router;
