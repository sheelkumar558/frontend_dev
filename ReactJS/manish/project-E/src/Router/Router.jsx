import React from "react";
import { Navbar } from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";

export const Router = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
