import { useState } from "react";
import { star } from "../assets/icons";
import  {Inside}  from "../section";

import ViewDet from "../section/ViewDet";
import { AllBUYDetails } from "../constants/index2";
const PopularProductCard = ({ imgURL, name, price,rate,discount,passs,productsss, onProductClick,product,checker,id,testertube}) => {
  const[firs,setfirs]=useState(false)
  

console.log(productsss.discount)
const handlechange=()=>{
  setfirs(pre=>!pre)
  // onProductClick(productsss);

  
}
 const [first,setfirst]=useState(false)

 const handleClick = () => {
  setfirst(true)
  // Pass the product data to the onProductClick function
 
};


  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full shadow-xl '>
      <img src={imgURL} alt={name} className='mx-2 w-[282px] h-[282px]               transition-transform duration-300 ease-in-out transform hover:scale-105 ' />
      {/* <div className='mt-8 flex justify-start gap-2.5'>
         <img src={star} alt='rating icon' width={24} height={24} />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>
          ({rate})
        </p>
      </div>   */}
      <h3 className=' mx-2 mt-2 text-2xl leading-normal font-semibold font-palanquin'>
     {name} 
      </h3>
      <p className='mt-2 mx-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
     
      MRP : <span className="text-red-500 shadow-md">{price}</span>
      </p>
      <button onClick={()=>passs(productsss)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> 
  Buy now   
</button>  

   

<button onClick={handlechange}  className=" mt-2 bg-slate-500 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded" >View Details</button> 

   {firs?<ViewDet  productsss={productsss}  closePopup={handlechange}   /> :null}
   {/* {firs?<Inside  productsss={productsss}  closePopup={handlechange}   /> :null} */}

 
    </div>
  );
};

export default PopularProductCard