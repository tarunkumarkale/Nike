import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from "../constants";

import React from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from '../Firebase/Context';

const Nav = () => {


  let text=useFirebase()


  
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>  
        {/*  max lg hidden use when mobile size ke  header hide hota hai and small size ke liye that why we use hamburger menu and it dispaly when 1024 pixel size devices  just hover on max-lg:hidden  you get idea  max-lg menans  0 to 1024 px tk */}
          {
            navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="font-mono leading-normal text-lg text-slate-gray">
                  {item.label}
                </a>
              </li>
            ))
          }
          {/* <li className='font-mono leading-normal text-lg text-slate-gray cursor-pointer '> Register/Login</li> */}
        </ul>
        <div className='hidden max-lg:block' >
        {/*   but here i want  laptop screen size hamburger menu nahi dekhe jab me screen size ko chota karuga tabh dkhe    hidden max-lg:block    first initally hidden rahega and then screen size chote pe block means show karega*/}
          <img src={hamburger} width={25} height={25}   alt="hamburger menu" />
        </div>
        <div className='max-lg:hidden'>
          <Link to="/Signup" className="font-bold leading-normal text-lg text-slate-gray active:text-green-800">Register</Link>/
          <Link to="/Login" className="font-bold leading-normal text-lg text-slate-gray active:text-green-800">Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
