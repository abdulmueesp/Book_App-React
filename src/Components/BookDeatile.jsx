import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { FormDataContext } from '../Context/BookContext'
const BookDeatile = () => {
    const {index}=useParams();
    const{formData}=useContext(FormDataContext);
    const books=formData[parseInt(index)]

    if (!books) {
        return <div>Book not found</div>;
      }
  return (
    <div>
      <Navbar/>
      {/* main div  --in editing revies second div */}
      <div className='w-full h-[700px] bg-fuchsia-50 flex flex-col items-center'>
        {/* deatile main div  */}
        <div className='w-[1200px] h-min bg-white  flex justify-center  '>
                  {/* image main div  */}
                  <div className='w-[250px] h-[350px] bg-white mt-32'>
                      <img src={books.image} alt="" className='w-[250px] h-[350px]' />
                  </div>
                  {/* image div right div  */}
                  <div className='w-[550px] h-min bg-white mt-32 flex flex-col'>
                          {/* name and by div  */}
                         <div className='w-[350px] h-[77px]  ml-5'>
                            <h1 className='uppercase text-2xl'>{books.name}</h1>
                            {/* by div  */}
                            <div className='w-[300px] h-[35px] bg-white flex space-x-2'>
                               <h1 className='text-lg'>BY : </h1>
                               <p className='text-lg uppercase'>{books.Author}</p>
                            </div>
                         </div>
                         {/* star div  */}
                         <div className='w-[350px] h-[60px] bg-white ml-5 border-y-2 border-gray-100 flex items-center'>
                            <div>⭐⭐⭐⭐</div>
                         </div>
                         {/* deatiles div  */}
                         <div className='w-[370px] h-min bg-amber-200 ml-5 mt-3 flex flex-col'>
                            {/* book name  */}
                             <div className='w-[370px] h-[25px] bg-white flex space-x-1'>
                                   <h3 className='font-bold'>Book :</h3> <h3>{books.name}</h3>
                             </div>
                             {/* Author  */}
                             <div className='w-[370px] h-[25px] bg-white flex space-x-1'>
                                   <h3 className='font-bold'>Author :</h3> <h3>{books.Author}</h3>
                             </div>
                             {/* Category  */}
                             <div className='w-[370px] h-[25px] bg-white flex space-x-1'>
                                   <h3 className='font-bold'>Category :</h3> <h3>{books.Category}</h3>
                             </div>
                             {/* Publishing Date */}
                             <div className='w-[370px] h-[25px] bg-white flex space-x-1'>
                                   <h3 className='font-bold'>Publishing Date :</h3> <h3>{books.PublishingDate}</h3>
                             </div>
                             {/* Publisher  */}
                             <div className='w-[370px] h-[25px] bg-white flex space-x-1'>
                                   <h3 className='font-bold'>Publisher :</h3> <h3>{books.Publisher}</h3>
                             </div>
                                {/* Number of pages  */}
                                <div className='w-[370px] h-[25px] bg-white flex space-x-1'>
                                   <h3 className='font-bold'>Number of pages :</h3> <h3>{books.Pages}</h3>
                             </div>
                             {/* Language  */}
                             <div className='w-[370px] h-[25px] bg-white flex space-x-1'>
                                   <h3 className='font-bold'>Language :</h3> <h3>{books.Language}</h3>
                             </div>
                             {/* ISBN  */}
                             <div className='w-[370px] h-[25px] bg-white flex space-x-1'>
                                   <h3 className='font-bold'>ISBN :</h3> <h3>5699058</h3>
                             </div>
                         </div>
                  </div>

        </div>
        <div className='w-[1200px] h-min bg-white flex flex-col justify-center items-center pt-7 pb-10'>
           <div className='w-[900px] h-[30px] bg-gray-100 pb-9 text-lg'><p className='ml-4'>BOOK SUMMARY</p></div>
           <div className='h-min w-[900px] border-b-2 border-black'>
          {books.Summary}
           </div>
        </div>
        {/* main deatile down div  */}
        <div className='w-[1200px] h-[70px]  bg-white flex justify-center items-center space-x-24'>
              <div className='w-[100px] h-[60px]  border-2 border-red-600 flex flex-col justify-center items-center font-bold '>
                  <h2 className='font-serif'>Rate</h2>
                  <h2 className='text-red-600'>₹{books.Rate}</h2>
              </div>
              <div className='w-[100px] h-[60px]  border-2 border-red-600 flex flex-col justify-center items-center font-extrabold '>
                  <h2 className='font-serif'>Offer</h2>
                  <h2 className='text-red-600'>₹{books.Offer}</h2>
              </div>
              <div className='w-[100px] h-[60px]  border-2 border-red-600 flex flex-col justify-center items-center font-extrabold '>
                  <h2 className='font-serif'>Paper back</h2>
                  <h2 className='text-red-600'>₹149</h2>
              </div>
        </div>
        
      </div>
    </div>
  )
}

export default BookDeatile
