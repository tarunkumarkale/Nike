import React from 'react'

const Btn = ({label, iconURL}) => {
  return (
    <div>
      <button className='flex justify-center items-center gap-2 px-7 py-4 border font-mono text-lg leading-none bg-red-700 rounded-full text-white border-coral-red'>
{label}

   <img src={iconURL} alt=""  className=' ml-2 rounded-full  w-5 h-5  '/> 
      </button>
    </div>
  )
}

export default Btn
