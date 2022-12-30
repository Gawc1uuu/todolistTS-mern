import React, { useState } from "react";
import axios from "axios";
import useTodosContext from "../hooks/useTodosContext";

const TodoForm = () => {
  const { dispatch } = useTodosContext();
  const [text, setText] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:4000/api/todos", {
      text,
    });
    dispatch({ type: "ADD_TODO", payload: response.data });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
        placeholder="what you have TODO?"
      />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;
