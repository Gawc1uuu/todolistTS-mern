import axios from "axios";
import useAuthContext from "./useAuthContext";

const useLogin = () => {
  const { dispatch } = useAuthContext();

  const login = async (email: string, password: string) => {
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
    } catch (e) {
      console.log((e as Error).message);
    }
  };

  return { login };
};

export default useLogin;
