import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", { email, password })
      .then((res) => {
        // let resp = res.data.token;
        // localStorage.setItem("myToken", resp);
        if (res.data.token) {
          navigate("/dashboard");
          login(true);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    </div>
  );
};
