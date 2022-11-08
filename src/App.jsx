import React from "react";
import { Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Header from "./components/Header";
import ProductFeed from "./components/ProductFeed";
import Signin from "./components/Signin";

const App = () => {
  return (
    <div className="bg-gray-100">
      <Header></Header>
      <div className="max-w-7xl mx-auto">
        <Banner />
      </div>
      <ProductFeed />
      <Routes>
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
};

export default App;
