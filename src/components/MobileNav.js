import React from 'react';
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const MobileNav = () => {
  return <nav>
    {/* nav open button */}
    <div className='text-3xl cursor-pointer'>
      <CgMenuRight />
    </div>
    {/* menu */}
    <div className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20">
      {/* icon */}
      <div>icon</div>
      {/* menu list */}
      <ul className='h-full flex flex-col justify-centeritems-center gap-y-8 text-primary font-primary font-bold text-3xl'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/portfolio'>Portfolio</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
};

export default MobileNav;
