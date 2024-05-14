import React from "react";
import image1 from '../assets/photo1.jpg';
import image2 from '../assets/photo7.jpg'
import image3 from '../assets/photo6.jpg'
import image4 from '../assets/photo9.jpg'
import image5 from '../assets/photo4.jpg'
import image6 from '../assets/photo8.jpg'
import image7 from '../assets/photo2.jpg'
import image8 from '../assets/photo5.jpg'
import image9 from '../assets/photo3.jpg'
const TrendCard = () => {
  const images = [
   image1,image2,image3,image4,image5,image6,image7,image8,image9
  ];
  return (
    <div className="overflow-x-scroll w-full  h-min mb-12 flex space-x-3 ">
      {images.map((image,index)=>(
         <img src={image} alt="" className="h-72" />
      ))}
          
      
      </div>
      
     
   
  );
};

export default TrendCard;
