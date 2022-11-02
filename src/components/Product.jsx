import React, { useState } from 'react'
import { AiFillStar } from "react-icons/ai";

const Product = ({ id, title, price, description, category, image }) => {

  const MAX_RATING = 5;
  const MIN_RATING = 1;

  const[rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  )
  return (
    <div>
      <p>{category}</p>

      <img src={image} height={200} width={200}></img>

      <h4>{title}</h4>
      <div className='flex'>
        {Array(rating).fill().map((_, i) => (
          <AiFillStar className='h-5'/>
        ))}
      </div>
      
    </div>
  )
}

export default Product
