import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  return (
    <div className="bg-gray-100">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;
