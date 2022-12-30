import { Schema, model } from "mongoose";

interface todo {
  text: string;
}

const todoSchema = new Schema<todo>(
  {
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Todo = model<todo>("Todo", todoSchema);

export default Todo;
