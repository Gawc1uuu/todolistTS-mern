import React from "react";
//components
import TodoForm from "../components/TodoForm";

const Home = () => {
  return (
    <div className="main-container">
      <div className="form-container">
        <TodoForm />
      </div>
      <div className="todos-container"></div>
    </div>
  );
};

export default Home;
