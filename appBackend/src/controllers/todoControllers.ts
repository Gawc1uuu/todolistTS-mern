import Todo from "../models/todoModel";
import { Request, Response } from "express";

export const getAllTodos = async (req: Request, res: Response) => {
  const { _id } = req.user;
  const start = new Date();
  const end = new Date();
  start.setHours(0, 0, 0, 0);
  end.setHours(23, 59, 59, 999);
  try {
    const allTodos = await Todo.find({
      user_id: _id,
      createdAt: { $gte: start, $lte: end },
    }).sort({ createdAt: 1 });
    return res.status(200).json(allTodos);
  } catch (err) {
    return res.status(500).json({ err: "Cannot load todos" });
  }
};

export const addNewTodo = async (req: Request, res: Response) => {
  const { text } = req.body;
  const { _id } = req.user;
  try {
    const newTodo = await Todo.create({ text, user_id: _id });
    return res.status(200).json(newTodo);
  } catch (err) {
    return res.status(500).json({ err: "invalid todo" });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { _id } = req.user;
  try {
    const deletedTodo = await Todo.findByIdAndDelete(id).where({
      user_id: _id,
    });
    return res.status(200).json(deletedTodo);
  } catch (err) {
    return res.status(500).json({ err: "cannot delete todo" });
  }
};
