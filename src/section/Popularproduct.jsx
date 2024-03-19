import { useState } from "react";
import PopularProductCard from "../Components/PopularProductCard";
import { products, allproducts, originproducts } from "../constants";
import { Inside } from ".";

const PopularProducts = ({pass}) => {
  const [first, setFirst] = useState('');
  const [listen, setListen] = useState(products);
  const [afterBtn, setAfterBtn] = useState(originproducts);
  const [allListen, setAllListen] = useState(allproducts);
  
  const handleInputChange = (e) => {
    let final = e.target.value;
    setFirst(final);
    
    if (final === "") {
      setFirst(null);
    }
    
    let search = allListen.filter((shoesname) => (
      shoesname.name.toLowerCase().includes(final.toLowerCase())
    ));
    
    setListen(search);
  };

  const handleResetSearch = () => {
    setListen(afterBtn);
    setFirst('');
  };




// //////////////////////////////////////////
const [clickedProduct, setClickedProduct] = useState(null);

const handleProductClick = (product) => {

  console.log("Clicked product:", product);

 
  
};

////////////////////////////////////////////

  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Explore Our Popular
          <span className='text-red-600'>  Nike </span> Shoes by Age
        </h2>
        <div className="flex justify-center">
          <input 
            type="text" 
            onChange={handleInputChange} 
            value={first} 
            placeholder="Search Nike shoes..." 
            className="custom-input input-padding appearance-none border border-gray-500 rounded-md py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:border-red-500 w-[30%]" 
          /> 
        
          <button 
            onClick={handleResetSearch} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Reset All
          </button>
        </div>
      </div>
 
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
         {listen.map((product) => (
          <PopularProductCard key={product.name} 
          
         {...product} 
           productsss={product}
          onProductClick={handleProductClick}
          
           passs={pass} />
        ))} 

        {clickedProduct && <PopularProductCard product={clickedProduct} />}
      </div>
    </section>
  );
};

export default PopularProducts;
