import React from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  return (
    <div className="navbar">
      <nav>
        {user && (
          <Link to="/login" onClick={(e: React.MouseEvent) => logout()}>
            Logout
          </Link>
        )}
        {!user && (
          <>
            <Link to="/signup">Sign up</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
