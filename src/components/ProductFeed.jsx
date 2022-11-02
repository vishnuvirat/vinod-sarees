
import React, { useEffect, useState } from "react";

const ProductFeed = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div>
      {products.map((item) => <div>{item.title}</div>)}
    </div>
  );
};

export default ProductFeed;
