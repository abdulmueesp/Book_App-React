import React, { useContext } from 'react'
import { FormDataContext } from '../Context/BookContext'
import winner from "../assets/winner.png"
import aadubook from "../assets/aadubook.jpeg"
import { Link } from 'react-router-dom'
const UserBooks = () => {
    const {formData}=useContext(FormDataContext)
  return (
    <div>
      <div className="w-[100%]  h-[800px] flex ">
        {/* side section  */}
        <div className="h-[800px] w-[22%]  ">
          <div className="w-[60px] sm:w-[120px] md:w-[140px] xl:w-[250px] h-min  fixed mt-36 ml-4 lg:w-[190px] flex flex-col">
            <img src={winner} className="w-[250px]" alt="" />
            <img src={aadubook} className="w-[250px]" alt="" />
           
          </div>
        </div>

        {/* book section  */}
        <div className="w-[78%] bg-white h-min grid grid-cols-1 gap-5 pt-24 pl-2 pb-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {formData.map((data,index)=>(
            <div key={index} className="grid_box group hover:scale-105">
                <img src={data.image} alt="" className="w-[110px] h-[150px] mt-1 " />
                <h1 className="mt-2 font-medium">{data.name}</h1>
                <h2>{data.Author}</h2>
                <div>⭐⭐⭐⭐</div>
                <div className="w-[100px] h-7  flex">
                    <div className="w-[50px] h-7  text-red-600 text-center font-bold text-lg">₹{data.Offer}</div>
                    <div className="w-[50px] h-7 line-through text-lg ">₹{data.Rate}</div>
                </div>
                <div className="mt-1 w-[218px] h-[32px] bg-red-600 text-white text-center rounded-b-md invisible group-hover:visible cursor-pointer ">
                   <Link to={`/books/${index}`}>
                   View More
                   </Link>
                 
                  </div>

            </div>
            ))}

          
        </div>
      </div>
    </div>
  )
}

export default UserBooks
