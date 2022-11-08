import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";

const App = () => {
  return (
    <div className="bg-gray-100">
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </>
    </div>
  );
};

export default App;
