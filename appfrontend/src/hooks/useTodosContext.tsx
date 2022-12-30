import React, { useContext } from "react";
import { TodosContext } from "../context/TodoContext";

const useTodosContext = () => {
  const context = useContext(TodosContext);

  return { ...context };
};

export default useTodosContext;
