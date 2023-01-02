import useAuthContext from "./useAuthContext";
import useTodosContext from "./useTodosContext";

const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: todosDispatch } = useTodosContext();

  const logout = () => {
    localStorage.removeItem("user");
    todosDispatch({ type: "SET_TODOS", payload: null });
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};

export default useLogout;
