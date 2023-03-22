import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        <Link style={{ textDecoration: "none" }} to="/">
          Home
        </Link>
      </div>

      <div>
        <Link style={{ textDecoration: "none" }} to="/dashboard">
          Dashboard
        </Link>
      </div>
      <div>
        <Link style={{ textDecoration: "none" }} to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};
