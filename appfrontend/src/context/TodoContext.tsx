import React, { createContext, useReducer } from "react";

interface Todo {
  text: string;
  updatedAt: string;
  createdAt: string;
  _id: string;
  __v: number;
}

interface InitialStateInterface {
  todos: Todo[];
  todo: Todo;
}

const initialState = {
  todos: null,
  todo: null,
};

export const TodosContext = createContext<any>(initialState);

interface providerProps {
  children: React.ReactNode;
}

interface ActionInterface {
  type: "SET_TODOS" | "DELETE_TODO" | "ADD_TODO";
  payload: any;
}

const todosReducer = (
  state: InitialStateInterface,
  action: ActionInterface
): any => {
  switch (action.type) {
    case "SET_TODOS":
      return { todos: action.payload, todo: null };
    case "ADD_TODO":
      return { todo: action.payload, todos: [...state.todos, action.payload] };
    case "DELETE_TODO":
      return {
        todos: state.todos.filter((todo) => todo._id !== action.payload._id),
        todo: action.payload,
      };
  }
};

const TodoContextProvider = ({ children }: providerProps) => {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  console.log(state);

  return (
    <TodosContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodoContextProvider;
// function todoState(arg: { todos: null }): never {
//   throw new Error("Function not implemented.");
// }
