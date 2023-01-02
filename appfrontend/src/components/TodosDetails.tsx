import React from "react";
import axios from "axios";
import { format } from "date-fns";
import deleteIcon from "../assets/delete.svg";
import useTodosContext from "../hooks/useTodosContext";
import useAuthContext from "../hooks/useAuthContext";
const colors = [
  "ffc6efee",
  "ffe2e4ee",
  "ffd6daee",
  "fff4dcee",
  "dffff1ee",
  "d3f4ffee",
  "eee1ffee",
];

interface Todo {
  text: string;
  updatedAt: string;
  createdAt: string;
  _id: string;
  __v: number;
}

interface todoProps {
  todo: Todo;
}

const TodosDetails = ({ todo }: todoProps) => {
  const { user } = useAuthContext();
  const { dispatch } = useTodosContext();

  const handleClick = async (e: React.MouseEvent) => {
    const response = await axios.delete(
      "http://localhost:4000/api/todos/" + todo._id,
      {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      }
    );
    dispatch({ type: "DELETE_TODO", payload: response.data });
  };

  return (
    <div
      className="single-todo"
      style={{
        backgroundColor: `#${
          colors[Math.floor(Math.random() * colors.length)]
        }`,
      }}
    >
      <p>{todo.text}</p>
      <p>{format(new Date(todo.createdAt), "dd/MM/yyyy")}</p>
      <p className="pin"></p>
      <img
        onClick={handleClick}
        src={deleteIcon.toString()}
        className="delete-icon"
        alt="trashcan"
      />
    </div>
  );
};

export default TodosDetails;
