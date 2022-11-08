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
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-sm text-gray-400 italic">
        {category}
      </p>

      <div className="flex justify-center">
        <div className="flex justify-center h-60 w-52">
          <img className="" src={image}></img>
        </div>
      </div>

      <h4 className="font-bold my-3  cursor-pointer hover:underline line-clamp-1">
        {title}
      </h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map(() => (
            <AiFillStar className="h-5 text-red-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <p className="font-bold text-red-500">{price}</p>

      <div className="italic text-sm text-gray-400 my-2">
        {freeDelivery
          ? "Premium membership free delivery"
          : "Delivery Charges applicable"}
      </div>

      <div className="flex justify-center my-4 bg-gradient-to-b from-red-400 to-red-700 rounded-2xl p-2 cursor-pointer text-white font-bold">
        Add to Cart
      </div>
    </div>
  );
};

export default Product;
