import express, { Express, Request, Response } from "express";
const app = express();
import todosRouter from "./routes/todosRoutes";
import userRouter from "./routes/usersRoutes";
import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";

//connecting to db
import mongoose from "mongoose";
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/todoList3")
  .then(() => {
    //listening for requests
    app.listen(process.env.PORT || 4000, () => {
      console.log(`listening on port ${process.env.PORT}`);
    });
    console.log("Connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

//extending request interface

declare module "express" {
  export interface Request {
    user?: any;
  }
}

//middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//routes
app.use("/api/todos", todosRouter);
app.use("/api/users", userRouter);
