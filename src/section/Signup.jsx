import React from "react";
import Green from "../Img/Green.jpg"
import "./index.css"
const Signup = () => {
  return (
    <div className="container w-full h-[80%]">
      <div className="border-spacing-1  w-[80%]   mx-[10%]  flex rounded-tl-full relative "  style={{ backgroundColor: 'rgba(179, 225, 64, 1)' }}>
        <div className="w-[50%] h-[80%] hidden sm:block  md:block ">
        <div className="shoes">
            <img
              src={Green}
              alt="hello"
              className="w-[70%] h-[27%]  mx-[5%] my-5 rounded-md shadow-lg "
            />
          </div>
        </div>

        <div className="resp ">
          <div className="min-h-screen flex justify-center items-center">
      <div className="p-2 rounded-lg ml-6 w-96 ">
        <h2 className="text-6xl font-semibold mb-4">Sign Up</h2>
        <form>
          <div >
            <label htmlFor="email" className="block text-lg font-bold text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-1  p-2 block border-spacing-2 border-gray-600 rounded-md focus:outline-none focus:border-green-400"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4 mt-2">
            <label htmlFor="password" className="block text-lg font-bold text-gray-700 ">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="  w-full mt-1 p-2 block border-spacing-2 border-gray-700 rounded-md focus:outline-none focus:border-green-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 "
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;