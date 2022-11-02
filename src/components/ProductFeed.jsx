import React, { useEffect, useState } from "react";
import Product from "./Product";

const ProductFeed = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div>
      {products.map(({ id, title, price, description, category, image }) => (
        <Product
         key={id}
         title={title}
         price={price}
         description={description}
         category={category}
         image={image}
        />
      ))}
    </div>
  );
};

export default ProductFeed;
