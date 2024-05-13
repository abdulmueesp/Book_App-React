import React from 'react'
import banner from "../assets/banner.jpg"

const Banner = () => {
  return (
    <div className='h-1/5'>
      <img src={banner} alt="" className=' w-full  object-cover' />
    </div>
  )
}

export default Banner
