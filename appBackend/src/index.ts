import express, { Express, Request, Response } from "express";
const app = express();
import todosRouter from "./routes/todosRoutes";

//connecting to db
import mongoose from "mongoose";
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/todoList3")
  .then(() => {
    //listening for requests
    app.listen(4000, () => {
      console.log("listening on port 4000");
    });
    console.log("Connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//routes
app.use("/api/todos", todosRouter);
