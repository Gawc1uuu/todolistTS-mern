import express, { Express } from "express";

import {
  getAllTodos,
  deleteTodo,
  addNewTodo,
} from "../controllers/todoControllers";

const router = express.Router();

router.get("/", getAllTodos);

router.post("/", addNewTodo);

router.delete("/:id", deleteTodo);

export default router;
