import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import slideshow1 from "../assets/slide-show1.png"
import slideshow2 from "../assets/slide-show2.png"
import slideshow3 from "../assets/slide-show3.png"
import slideshow4 from "../assets/slide-show2.png"
import slideshow5 from "../assets/slide-show3.png"
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className='relative'>
      <div className='absolute w-full h-64 bottom-0 z-20 bg-gradient-to-t from-gray-100 to-transparent'>

      </div>

      <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={3000}
      >
        <div>
          <img src={slideshow1}></img>
        </div>

        <div>
        <img src={slideshow2}></img>
        </div>

        <div>
        <img src={slideshow3}></img>
        </div>

        <div>
        <img src={slideshow4}></img>
        </div>

        <div>
        <img src={slideshow5}></img>
        </div>
      </Carousel>
    </div>
  )
}

export default Banner
