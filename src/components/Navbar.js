import React from "react";
import "../assets/css/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h1>Delux Coding School</h1>

        <div className="nav-btn">
          <a href="/">Cart</a>
          <a href="/">Login</a>
          <button>Sign up</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
