import React from 'react'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import pinterest from "../assets/pinterest.png"
import youtube from "../assets/youtube.png"
import twitter from "../assets/twitter.png"

const Footer = () => {
  const medias=[instagram,linkedin,pinterest,youtube,twitter]
  return (
    <div className='w-full h-min  mt-8 flex flex-col border-t-2 border-gray-600 mb-6 '>
        {/* about  */}
      <div className='w-full h-min bg-white  flex justify-evenly mt-12'>
      <div className='w-60 h-44  flex flex-col items-center space-y-1'>
         <h1 className='text-lg font-semibold italic text-red-700'>Company</h1>
         <h3 className={`footer_txt`}>About Us</h3>
         <h3 className={`footer_txt`}>Career</h3>
         <h3 className={`footer_txt`}>Blog</h3>
         <h3 className={`footer_txt`}>Contact Us</h3>
      </div>

      <div className='w-60 h-44  flex flex-col items-center space-y-1'>
         <h1 className='text-lg font-semibold italic text-red-700'>Policies</h1>
         <h3 className={`footer_txt`}>Privacy Policies</h3>
         <h3 className={`footer_txt`}>Terms of Use</h3>
         <h3 className={`footer_txt`}>Secure Shopping</h3>
         <h3 className={`footer_txt`}>Copyright Policy</h3>
      </div>

      <div className='w-60 h-44  flex flex-col items-center space-y-1'>
         <h1 className='text-lg font-semibold italic text-red-700'>Help</h1>
         <h3 className={`footer_txt`}>Payment</h3>
         <h3 className={`footer_txt`}>Shipping</h3>
         <h3 className={`footer_txt`}>Return</h3>
         <h3 className={`footer_txt`}>FAQ</h3>
      </div>

      <div className='w-60 h-44  flex flex-col items-center space-y-1'>
         <h1 className='text-lg font-semibold italic text-red-700'>Misc</h1>
         <h3 className={`footer_txt`}>Affiliate</h3>
         <h3 className={`footer_txt`}>Sitemap</h3>     
      </div>


      </div>
        {/* icons  */}

       <div className='w-full h-14  flex justify-center items-center space-x-2'>
         {medias.map((media,index)=>(
         <img src={media} alt="" className='w-8 h-8' />
         ))}
        

       </div>

       {/* copr right  */}
       <div className='w-full h-7  flex justify-center'>
      <h1 className='text-gray-400 text-lg'>Copyright © 2024 .BookPalace.com. All Rights Reserved</h1> 
       </div>
       

    </div>
  )
}

export default Footer
