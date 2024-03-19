import React, { useEffect, useState } from "react";
import { FaRegCircle as FaRegCircleXmark } from "react-icons/fa";
import "./"; // You might want to remove this line if it's unnecessary
import { IoArrowBackSharp } from "react-icons/io5";
const ViewDet = ({ closePopup, productsss }) => {
 
  console.log(productsss.name);

 

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
                alt={productsss.name} // Added alt attribute for accessibility
                className="w-full h-[70%] rounded-lg max-sm:w-full"
              />
            </div>

            <div className="w-[50%] px-4 max-sm:w-full">
              <h1 className="font-extrabold">{productsss.name}</h1>

              <div>
                <p className="text-sm -mt-1 -pt-1 lg:mt-2">
                  The Nike Air Force 1 '07 Men's Shoes are a classic and timeless
                  choice known for their comfort and durability. Featuring stitched
                  overlays on the leather upper for added durability, Nike Air
                  cushioning for lightweight comfort, and a low-cut silhouette for a
                  clean look, these shoes offer both style and performance. With a
                  heritage design that has stood the test of time, the Air Force 1
                  '07 is a versatile option suitable for any occasion.
                </p>
                <p className="text-sm">hell</p>
                <p className="text-sm">not</p>
                <p className="text-sm">gate</p>
                <p className="text-sm">sove</p>
                <p className="text-sm">save</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDet;
