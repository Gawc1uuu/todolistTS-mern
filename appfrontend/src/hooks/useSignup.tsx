import React from "react";
import axios from "axios";
import useAuthContext from "./useAuthContext";

const useSignup = () => {
  const { dispatch } = useAuthContext();

  const signup = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/signup",
        {
          email,
          password,
        }
      );

      const user = response.data;

      localStorage.setItem("user", JSON.stringify(user));

      dispatch({ type: "LOGIN", payload: user });
    } catch (e) {
      console.log((e as Error).message);
    }
  };

  return { signup };
};

export default useSignup;
