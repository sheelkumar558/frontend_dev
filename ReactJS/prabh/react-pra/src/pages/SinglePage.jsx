import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";

export const SinglePage = () => {
  const { isAuth } = useContext(AuthContext);
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <h1>
        {user.first_name} {user.last_name}
      </h1>
      <img src={user.avatar} alt="avatar" />
    </div>
  );
};
