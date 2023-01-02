import express, { Request, Response } from "express";
import User from "../models/userModel";
import jwt from "jsonwebtoken";

const createToken = (_id: string) => {
  const token = jwt.sign({ _id }, "secret", { expiresIn: 60 * 60 });
  return token;
};

const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    return res.status(200).json({ email, token });
  } catch (err) {
    return res.status(401).json({ err: (err as Error).message });
  }
};

const signupController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);
    const token = createToken(user._id);
    return res.status(200).json({ email, token });
  } catch (err) {
    return res.status(401).json({ err: (err as Error).message });
  }
};

export { signupController, loginController };
