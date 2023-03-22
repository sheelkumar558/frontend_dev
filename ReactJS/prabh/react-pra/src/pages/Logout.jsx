import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Logout = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <button
        style={{
          fontSize: "20px",
          padding: "10px 20px 10px 20px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "20px",
        }}
        onClick={() => {
          logout(false);
        }}
      >
        logout
      </button>
    </div>
  );
};
