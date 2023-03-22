import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./pages/AllRoutes";
import { AuthContextProvider } from "./context/AuthContext";
const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <AllRoutes />
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
