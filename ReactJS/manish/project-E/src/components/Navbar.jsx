import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <h1 style={{ fontSize: "40px" }}>zomato</h1>
      </div>
      <div className="links">
        <Link style={{ textDecoration: "none", padding: "20px" }}>Log in</Link>
        <Link style={{ textDecoration: "none", padding: "20px" }}>Sign up</Link>
      </div>
    </div>
  );
};
