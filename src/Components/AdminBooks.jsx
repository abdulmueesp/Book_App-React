import React, { useContext } from 'react'
import aadu from "../assets/aadubook.jpeg"
import { FormDataContext } from '../Context/BookContext'


const AdminBooks = () => {
   const {formData,handleSubmit}=useContext(FormDataContext);
  return (
    <div>
      <div className='w-full h-[600px] bg-gray-600 grid grid-cols-5'>
        {formData.map((data,index)=>(
         <div key={index} className='w-[200px] h-[250px] bg-pink-400 flex flex-col items-center ml-3'>
         <img src={data.image} alt="" className="w-[110px] h-[150px] mt-1 " />
              <h1>{data.name}</h1>
              <h2>Author</h2>
              <button onClick={() => handleSubmit(null, { resetForm: () => {} }, index)}>Delete</button>
         
         </div>
      ))}

     

      </div>
    </div>
  )
}

export default AdminBooks
