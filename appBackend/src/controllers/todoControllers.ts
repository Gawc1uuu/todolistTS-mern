import Todo from "../models/todoModel";
import { Request, Response } from "express";

export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const allTodos = await Todo.find({});
    return res.status(200).json(allTodos);
  } catch (err) {
    return res.status(500).json({ err: "Cannot load todos" });
  }
};

export const addNewTodo = async (req: Request, res: Response) => {
  const { text } = req.body;
  try {
    const newTodo = await Todo.create({ text });
    return res.status(200).json(newTodo);
  } catch (err) {
    return res.status(500).json({ err: "invalid todo" });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    return res.status(200).json(deletedTodo);
  } catch (err) {
    return res.status(500).json({ err: "cannot delete todo" });
  }
};
