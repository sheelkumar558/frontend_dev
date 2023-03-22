import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";

import { SinglePage } from "./SinglePage";
import { Navbar } from "./Navbar";
import { PrivateRoute } from "../components/PrivateRoute";
import { Dashboard } from "./Dashboard";

export const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/:id"
          element={
            <PrivateRoute>
              <SinglePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};
