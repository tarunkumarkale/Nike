import React, { useEffect, useState } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import "./";
const Inside = ({ closePopup ,product,productsss,rate,Name }) => {

const[mobilesize,setmobile]=useState(false)
console.log(Name)

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
      <div className="fixed inset-0 flex  justify-center bg-gray-500 bg-opacity-75 box-border m-0 max-sm:h-[94%] z-10   ">
        <div className="bg-white p-1 w-[80%] h-[91%]  rounded-lg max-sm:h-[92%]    ">
          <button
            onClick={closePopup}
            className="text-lg font-[20] py-2 px-4 rounded mb-2 hover:bg-black hover:text-white max-md:py-0 "
          >
            <FaRegCircleXmark />
          </button>

          <div className="flex flex-row  max-sm:flex-col justify-center mb-0">
          

            <div className="w-[100%]  px-4  max-sm:w-full  ">
              <h1 className="font-extrabold text-center ">{Name}</h1>
        

              <h1 className="text-center font-semibold"> 1. SELECT SIZE (Size- UK/India)</h1>

              <div className="flex flex-row  flex-wrap justify-center  ">
                <button className=" border-2 border-gray-300 hover:border-black text-black font-bold py-2 px-4 rounded m-1 w-12 text-center flex items-center justify-center">
                  7
                </button>
                <button className=" border-2 border-gray-300 hover:border-black text-black font-bold py-2 px-4 rounded m-1 w-12 text-center flex items-center justify-center">
                  8
                </button>
                <button className=" border-2 border-gray-300 hover:border-black text-black font-bold py-2 px-4 rounded m-1 w-12 text-center flex items-center justify-center">
                  9
                </button>
                <button className=" border-2 border-gray-300 hover:border-black text-black font-bold py-2 px-4 rounded m-1 w-12 text-center flex items-center justify-center">
                  10
                </button>
                <button className=" border-2 border-gray-300 hover:border-black text-black font-bold py-2 px-4 rounded m-1 w-12 text-center flex items-center justify-center">
                  11
                </button>
               
                <button className=" border-2 border-gray-300 hover:border-black text-black font-bold py-2 px-4 rounded m-1 w-12 text-center flex items-center justify-center">
                  12
                </button>
               










          </div>

          <div className="flex  justify-center gap-4 items-center space-x-5  ">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              buy
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              add to cart
            </button>
              </div>
            </div>
          </div>

        







          

       
    



        </div>
      </div>
    </div>
  );
};

export default Inside;
