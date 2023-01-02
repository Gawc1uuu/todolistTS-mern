import React from "react";
import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();
  return (
    <div className="navbar">
      <nav>
        <Link to="/login" onClick={(e: React.MouseEvent) => logout()}>
          Logout
        </Link>
        <Link to="/signup">Sign up</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Navbar;
