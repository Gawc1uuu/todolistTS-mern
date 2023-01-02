import { Schema, model } from "mongoose";

interface todo {
  text: string;
  user_id: string;
}

const todoSchema = new Schema<todo>(
  {
    text: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Todo = model<todo>("Todo", todoSchema);

export default Todo;
