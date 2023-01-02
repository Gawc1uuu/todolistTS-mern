import { useState } from "react";
import axios, { AxiosError } from "axios";
import useAuthContext from "./useAuthContext";

const useLogin = () => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const { dispatch } = useAuthContext();

  const login = async (email: string, password: string) => {
    setError(null);
    setIsPending(true);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/login",
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
      setIsPending(false);
      setError((e as AxiosError<any>).response?.data.err);
      console.log((e as AxiosError<any>).response?.data.err);
    }
  };

  return { login, error, isPending };
};

export default useLogin;
