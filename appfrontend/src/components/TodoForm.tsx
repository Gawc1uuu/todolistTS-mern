import React, { useState } from "react";
import axios from "axios";

const TodoForm = () => {
  const [text, setText] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await axios.post("http://localhost:4000/api/todos", { text });
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
