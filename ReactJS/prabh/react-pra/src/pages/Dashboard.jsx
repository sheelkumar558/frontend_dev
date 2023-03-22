import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Logout } from "./Logout";
export const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  console.log("d", data);
  return (
    <div>
      <div style={{ margin: "20px" }}>
        <Logout />
      </div>
      <div>
        {data.map((d, i) => (
          <Link
            style={{
              display: "flex",
              margin: "20px",
              textDecoration: "none",
            }}
            key={i}
            to={`/dashboard/${d.id}`}
          >
            {d.first_name} {d.last_name}
          </Link>
        ))}
      </div>
    </div>
  );
};
