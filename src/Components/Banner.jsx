import React from 'react'
import banner from "../assets/banner.jpg"


const Banner = () => {
  return (
    <div>
      <img src={banner} alt="" className='object-cover h-[20rem] lg:h-[34rem] w-full  ' />
    </div>
    
    
  )
}

export default Banner
