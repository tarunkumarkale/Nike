import React from 'react'
import { FaRegCircleXmark } from "react-icons/fa6";
const Inside = ({closePopup}) => {
  return (
    <div>
  <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
  <div className="bg-white px-8 py-8 rounded-lg">
        <button onClick={closePopup} className="text-lg font-bold py-2 px-4 rounded mb-2 hover:bg-black hover:text-white">
        <FaRegCircleXmark  />
        </button>
        <div className='flex flex-row'>
        <div className='w-[50%] border-2 border-red-500 p-4'>
  <img src="" alt="this is image" className="w-full mb-4" />
  <h2 className="text-xl font-bold mb-2">Card Title</h2>
  <p className="text-gray-700">Card Description goes here...</p>
</div>

        <div className='w-[50%] border-2 border-green-800'><h1>this is my text aarea</h1></div>
        </div>
        <div className='flex flex-row'>
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
  )
}

export default Inside
