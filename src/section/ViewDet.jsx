import React, { useEffect, useState } from "react";
import { FaRegCircle as FaRegCircleXmark } from "react-icons/fa";
import "./"; // You might want to remove this line if it's unnecessary
import { IoArrowBackSharp } from "react-icons/io5";
const ViewDet = ({ closePopup, productsss }) => {
 
  console.log(productsss.name);

  const[mobilesize,setmobile]=useState(false)
  
  console.log(productsss.p_one)
  console.log(productsss.Data)
  const updateScreenSize = () => {
    setmobile(window.innerWidth < 641); // Adjust breakpoint as needed
  };
  
  useEffect(()=>{
  updateScreenSize()
  const final=()=>{
    updateScreenSize()
  }
  window.addEventListener('resize',final)
  
  return () => {
    window.removeEventListener('resize', final);
  };
  },[])
 

  return (
    <div>
      <div className="fixed inset-0 flex justify-center bg-gray-500 bg-opacity-75 box-border m-0 max-sm:h-[94%] z-10">
        <div className="bg-white p-1 w-[80%] h-[80%] rounded-lg max-sm:h-[92%]">
          <button
            onClick={closePopup}
            className="text-lg font-20 py-2 px-4 rounded mb-2 hover:bg-black hover:text-white max-md:py-0"
          >

        <IoArrowBackSharp />     
          </button>

          <div className="flex flex-row max-sm:flex-col mb-0">
            <div className="w-[50%] min-sm:w-full">
              <img
                src={productsss.imgURL}
                alt={productsss.name}
                className="w-full h-[70%] rounded-lg max-sm:w-full"
              />
            </div>
   
            <div className="w-[50%] px-4 max-sm:w-full">
              <h1 className="font-extrabold">{productsss.name}</h1>

              <div>
                <p className="text-sm -mt-1 -pt-1 lg:mt-2">
                  {productsss.Data}
                </p>
                <p className="text-sm">{productsss.p_two}</p>
                
                <p className="text-sm">{productsss.p_four}</p>
                <p className="text-sm">{productsss.p_five}</p>
                <div className="flex justify-center mt-3">
                <p className={`border-black-1 w-56 text-center bg-slate-100 rounded-xl text-black ${
  productsss.p_one === "In Stock" ? "text-green-500" : "text-red-500"
}`}>
  {productsss.p_one}
</p>


                </div>
                <div className="flex justify-center mt-2">
                <p className="text-sm">({productsss.p_three})</p></div> 
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDet;
