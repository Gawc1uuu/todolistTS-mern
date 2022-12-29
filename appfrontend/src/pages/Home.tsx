import React, { useEffect, useState } from "react";
import axios from "axios";
//components
import TodoForm from "../components/TodoForm";
import TodosDetails from "../components/TodosDetails";

interface Todo {
  text: string;
  updatedAt: string;
  createdAt: string;
  _id: string;
  __v: number;
}

interface todoProps {}

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/todos");
        setTodos(response.data);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    getTodos();
  }, []);

  return (
    <div className="main-container">
      <div className="form-container">
        <TodoForm />
      </div>
      <div className="todos-container">
        {todos.length !== 0 &&
          todos.map((todo) => <TodosDetails key={todo._id} todo={todo} />)}
      </div>
    </div>
  );
};

export default Home;
