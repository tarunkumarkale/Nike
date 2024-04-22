import React, { useEffect, useState } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import "./";
const Inside = ({
  closePopup,
  product,
  productsss,
  rate,
  Name,
  price,
  discount,
  afterDiscount,
  id,
}) => {
  const [mobilesize, setmobile] = useState(false);

  console.log(Name);

  const updateScreenSize = () => {
    setmobile(window.innerWidth < 641); // Adjust breakpoint as needed
  };


  const numbers = [7, 8, 9, 10, 11, 12];

  const [defualt, setdefualt] = useState(7);
  const [final, setfinal] = useState();

  const Size = (arg) => {
    setdefualt(arg);
    console.log(arg);
  };


  const afterDiscountNumber = parseFloat(afterDiscount);

  useEffect(() => {
    // const afterDiscountNumber = parseFloat(afterDiscount);
    if (!isNaN(afterDiscountNumber)) {
      let finalValue;
      if (defualt === 7) {
        finalValue = afterDiscountNumber + 2.02;
      } else if (defualt === 8) {
        finalValue = afterDiscountNumber + 5.03;
      } else if (defualt === 9) {
        finalValue = afterDiscountNumber + 7.89;
      } else if (defualt === 10) {
        finalValue = afterDiscountNumber + 10.89;
      } else if (defualt === 11) {
        finalValue = afterDiscountNumber + 12.89;
      } else if (defualt === 12) {
        finalValue = afterDiscountNumber + 15.89;
      }

      console.log("Final Value:", finalValue); // Log finalValue
      setfinal((finalValue) ? finalValue.toFixed(2) : 'N/A');
    } else {
      console.log("afterDiscount is NaN");
      setfinal('N/A');
    }
  }, [defualt, afterDiscount]);

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

              <h1 className="text-center font-semibold">
         
                1. SELECT SIZE (Size- UK/India)
              </h1>

              <div className="flex flex-row  flex-wrap justify-center  ">
                {numbers.map((number, index) => (
                  <button
                    key={index}
                    onClick={() => Size(number)} // Assuming Size function takes a number parameter
                    className="border-2 border-gray-300 hover:border-black text-black font-bold py-2 px-4 rounded m-1 w-12 text-center flex items-center justify-center"
                  >
                    {number}
                  </button>
                ))}
              </div>

              <div className="flex flex-col justify-center ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {Name}
                      </th>

                      <td className="px-6 py-4 flex justify-end">{price}</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {discount}
                      </th>
                      <td className="px-6 py-4 flex justify-end">
                       ${afterDiscount}
                      </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Size
                      </th>

                      <td className="px-6 py-4 flex justify-end">{defualt}</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Total
                      </th>

                      <td className="px-6 py-4 font-extrabold flex justify-end">
                    ${final === 'N/A' ? (
                      
    !isNaN(afterDiscountNumber) ? (
      (() => {
        let finalValue;
        if (defualt === 7) {
          finalValue = afterDiscountNumber + 2.02;
        } else if (defualt === 8) {
          finalValue = afterDiscountNumber + 5.03;
        } else if (defualt === 9) {
          finalValue = afterDiscountNumber + 7.89;
        } else if (defualt === 10) {
          finalValue = afterDiscountNumber + 10.89;
        } else if (defualt === 11) {
          finalValue = afterDiscountNumber + 12.89;
        } else if (defualt === 12) {
          finalValue = afterDiscountNumber + 15.89;
        }
        setfinal(finalValue ? finalValue.toFixed(2) : 'N/A');
      })()
    ) : 'N/A'
  ) : final}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex  justify-center gap-4 items-center space-x-5 mt-3 ">
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
