import React from "react";
import Banner from "./Banner";
import Header from "./Header";
import ProductFeed from "./ProductFeed";
import Signin from "./Signin";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="max-w-7xl mx-auto">
        <Banner />
      </div>
      <ProductFeed />
      <Signin />
    </div>
  );
};

export default Home;
