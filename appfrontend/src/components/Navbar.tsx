import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/login">Logout</Link>
        <Link to="/signup">Sign up</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Navbar;
