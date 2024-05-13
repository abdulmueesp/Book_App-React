import React, { useState } from "react";
import logo from "../assets/logo2.png";

const Navbar = () => {
  const [select, setSelect] = useState(0);

  return (
    <div className="w-full  h-16 border flex justify-between">
      <div className="flex space-x-2   items-center lg:ml-0  xl:ml-28">
        <img src={logo} alt="" className="w-20 h-12" />
        <h1 className="font-headTxt font-semibold text-lg">Book Palace</h1>
      </div>
      {/* search bar  */}
      <div className=" flex  items-center h-16 w-96  ">
        <input
          placeholder="Title,Author or Publisher"
          className=" border-2 border-red-500  h-8 lg:w-64 xl:w-80 "
        />
        <button className="bg-red-500 h-8 w-8 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
      {/* menu responsive button  */}
      <button className="lg:hidden" >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {/* navbar li items div  */}
      <div className="hidden lg:block">
        <ul className="h-16  flex  items-center space-x-8 mr-32 lg:mr-10 ">
          <li
            onClick={() => setSelect(0)}
            className={`navbar_txt ${
              select === 0 ? "border-b-4" : "border-white"
            }`}
          >
            <a href="#"> Home</a>
          </li>

          <li
            onClick={() => setSelect(1)}
            className={`navbar_txt ${
              select === 1 ? "border-b-4" : "border-white"
            }`}
          >
            <a href="#">Books</a>
          </li>

          <li
            onClick={() => setSelect(2)}
            className={`navbar_txt ${
              select === 2 ? "border-b-4" : "border-white"
            }`}
          >
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;