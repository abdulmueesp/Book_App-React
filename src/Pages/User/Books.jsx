import React from "react";
import Navbar from "../../Components/Navbar";
import winner from "../../assets/winner.png";
import bookram from "../../assets/bookram.jpg"
import aadubook from "../../assets/aadubook.jpeg"

const Books = () => {
  return (
    <div>
      <Navbar />

      <div className="w-[100%]  h-[800px] flex ">
        {/* side section  */}
        <div className="h-[800px] w-[22%]  ">
          <div className="w-[60px] sm:w-[120px] md:w-[140px] xl:w-[250px] h-min  fixed mt-36 ml-4 lg:w-[190px] flex flex-col">
            <img src={winner} className="w-[250px]" alt="" />
            <img src={aadubook} className="w-[250px]" alt="" />
           
          </div>
        </div>

        {/* book section  */}
        <div className="w-[78%] bg-white h-min grid grid-cols-4 gap-5 pt-24 pl-2 pb-4">
            <div className="grid_box group hover:scale-105">
                <img src={bookram} alt="" className="w-[110px] h-[150px] mt-1 " />
                <h1 className="mt-2 font-medium">Book Name</h1>
                <h2>Author</h2>
                <div>⭐⭐⭐⭐</div>
                <div className="w-[100px] h-7  flex">
                    <div className="w-[50px] h-7  text-red-600 text-center font-bold text-lg">₹595</div>
                    <div className="w-[50px] h-7 line-through text-lg ">₹699</div>
                </div>
                <div className="mt-1 w-[218px] h-[32px] bg-red-600 text-white text-center rounded-b-md invisible group-hover:visible cursor-pointer ">View More</div>

            </div>

            <div className="grid_box"></div>
            <div className="grid_box"></div>
            <div className="grid_box"></div>
            <div className="grid_box"></div>
           
          
        </div>
      </div>
    </div>
  );
};

export default Books;
