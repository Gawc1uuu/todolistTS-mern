import React, { createContext, useReducer, useEffect } from "react";

interface AuthContextInterface {
  user: {
    email: string;
    token: string;
  } | null;
  dispatch: any;
}

export const AuthContext = createContext<AuthContextInterface | null>(null);

interface AuthContextProviderProps {
  children: React.ReactNode;
}

interface StateInterface {
  user: {
    email: string;
    token: string;
  } | null;
}
interface ActionInterface {
  type: "LOGIN" | "LOGOUT";
  payload: StateInterface;
}

const authReducer = (state: StateInterface, action: ActionInterface): any => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
  }
};

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")!);
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
