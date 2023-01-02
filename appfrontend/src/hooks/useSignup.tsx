import { useState } from "react";
import axios, { AxiosError } from "axios";
import useAuthContext from "./useAuthContext";

const useSignup = () => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const { dispatch } = useAuthContext();

  const signup = async (email: string, password: string) => {
    setError(null);
    setIsPending(false);

    try {
      setIsPending(true);

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
      setIsPending(false);
    } catch (e) {
      setError((e as AxiosError<any>).response?.data.err);
      setIsPending(false);
      console.log((e as AxiosError<any>).response?.data.err);
    }
  };

  return { signup, error, isPending };
};

export default useSignup;
