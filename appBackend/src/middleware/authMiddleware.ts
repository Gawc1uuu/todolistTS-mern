import express, { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload, verify } from "jsonwebtoken";
import User from "../models/userModel";

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ err: "request unauthorized" });
  }
  const token = req.headers.authorization.split(" ");
  const decoded = jwt.verify(token[1], "secret");
  const { _id } = decoded as JwtPayload;
  req.user = await User.findById(_id).select(_id);
  next();
};

export { authMiddleware };
