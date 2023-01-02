import express, { Express, Request } from "express";

import {
  getAllTodos,
  deleteTodo,
  addNewTodo,
} from "../controllers/todoControllers";

import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.use(authMiddleware);

router.get("/", getAllTodos);

router.post("/", addNewTodo);

router.delete("/:id", deleteTodo);

export default router;
