import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-96 bg-gray-600 mt-8 flex flex-col '>
        {/* about  */}
      <div className='w-full h-60 bg-white border border-red-500 flex justify-evenly mt-12'>
      <div className='w-60 h-44 bg-gray-300 flex flex-col items-center space-y-1'>
         <h1 className='text-lg font-semibold italic text-red-700'>Company</h1>
         <h3 className={`footer_txt`}>About Us</h3>
         <h3 className={`footer_txt`}>Career</h3>
         <h3 className={`footer_txt`}>Blog</h3>
         <h3 className={`footer_txt`}>Contact Us</h3>
      </div>

      <div className='w-60 h-44 bg-gray-300 flex flex-col items-center space-y-1'>
         <h1 className='text-lg font-semibold italic text-red-700'>Policies</h1>
         <h3 className={`footer_txt`}>Privacy Policies</h3>
         <h3 className={`footer_txt`}>Terms of Use</h3>
         <h3 className={`footer_txt`}>Secure Shopping</h3>
         <h3 className={`footer_txt`}>Copyright Policy</h3>
      </div>

      <div className='w-60 h-44 bg-gray-300 flex flex-col items-center space-y-1'>
         <h1 className='text-lg font-semibold italic text-red-700'>Help</h1>
         <h3 className={`footer_txt`}>Payment</h3>
         <h3 className={`footer_txt`}>Shipping</h3>
         <h3 className={`footer_txt`}>Secure Shopping</h3>
         <h3 className={`footer_txt`}>Copyright Policy</h3>
      </div>

        <div className='w-60 h-44 bg-pink-600'>

         </div>


      </div>
        {/* icons  */}
       <div></div>

       {/* copr right  */}
       <div></div>
       

    </div>
  )
}

export default Footer
