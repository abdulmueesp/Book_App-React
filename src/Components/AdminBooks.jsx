import React, { useContext } from 'react'
import aadu from "../assets/aadubook.jpeg"
import { FormDataContext } from '../Context/BookContext'


const AdminBooks = () => {
   const {formData,handleSubmit}=useContext(FormDataContext);
  return (
    <div>
      <div className='w-full h-[600px]  grid grid-cols-5 mt-4'>
        {formData.map((data,index)=>(
         <div key={index} className='w-[200px] h-[250px]  flex flex-col items-center ml-3 shadow-lg'>
         <img src={data.image} alt="" className="w-[110px] h-[150px] mt-1 " />
              <h1>{data.name}</h1>
              <button onClick={() => handleSubmit(null, { resetForm: () => {} }, index)} className='w-[80px] h-[30px] bg-red-600 rounded-xl text-white mt-3'>Delete</button>
         
         </div>
      ))}

     

      </div>
    </div>
  )
}

export default AdminBooks
