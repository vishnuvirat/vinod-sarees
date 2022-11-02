import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const Product = ({ id, title, price, description, category, image }) => {
  const MAX_RATING = 5;
  const MIN_RATING = 1;

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [freeDelivery] = useState(Math.random() < 0.5);
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 ">
      <p className="absolute top-2 right-2 text-sm text-gray-400 italic">
        {category}
      </p>

      <div className="flex justify-center">
        <img src={image} height={200} width={200}></img>
      </div>

      <h4>{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map(() => (
            <AiFillStar className="h-5 text-red-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-">{description}</p>
      <p>{price}</p>

      {freeDelivery && <div>Premium membership free delivery</div>}

      <div>Add to Cart</div>
    </div>
  );
};

export default Product;
