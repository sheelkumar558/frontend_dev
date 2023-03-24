import React from "react";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Shoppage } from "./pages/Shoppage";
import { SinglePage } from "./pages/SinglePage";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection/all" element={<Shoppage />} />
        <Route path="/collection/all/:id" element={<SinglePage />} />
      </Routes>
    </div>
  );
};

export default App;
