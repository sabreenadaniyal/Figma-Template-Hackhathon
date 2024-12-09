// import React from 'react'
// import Link from 'next/link';
// import { FaAngleDown } from "react-icons/fa6";
// import { CiSearch } from "react-icons/ci";
// import { IoCartOutline } from "react-icons/io5";
// import { FaRegUser } from "react-icons/fa";


// const Header = () => {
//   return (
//     <header className="wrapper mt-[17px]">
//       <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
//         <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//           <span className="text-[32px] font-extrabold">SHOP.CO</span>
//         </a>
//         <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-gray-400 flex flex-wrap items-center text-base justify-center">

//           <ul className='decoration:none flex flex-row gap-[18px] text-base'>
//           <li className="mr-5 hover:text-gray-900 flex flex-row gap-2">
//             <Link className='flex flex-row' href="/shop" >Shop <FaAngleDown className='mt-1'/></Link>
//           </li>
//           <li className="mr-5 hover:text-gray-900 flex flex-row">
//             <Link href="/on sale">On Sale</Link>
//           </li>
//           <li>
//             <Link href="/new arrival" className="mr-5 hover:text-gray-900">New Arrivals</Link>
//           </li>
//           <li>
//             <Link href="/brands" className='mr-5 hover:text-gray-900'>Brands</Link>
//           </li>
//           </ul>
//           <div className='w-[577px] h-[48px] mt-[12px] flex flex-row bg-gray-300 items-center rounded-2xl gap-[12px]'>
//           <CiSearch className='h-[24px] w-[24px] text-gray-600 text-center rounded-xl ml-2 '/>
//           <input className='w-[151px] h-[22px] bg-gray-300 rounded-sm' type="search" placeholder='Search for products..' />
//           </div>
         
//          <div className='w-[62px] h-[24px] flex flex-row gap-[14px] ml-5'>
//          <IoCartOutline className='w-[24px] h-[24px] text-bold inline-flex items-center hover:bg-gray-200 mt-4 md:mt-0'/>
//          <FaRegUser className='w-[24px] h-[24px] text-bold inline-flex items-center hover:bg-gray-200 mt-4 md:mt-0'/>

//          </div>
//         </nav>
         
//       </div>
//     </header>
    

//   )
// }

// export default Header


import React from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        {/* Logo */}
        <a className="text-gray-900 text-2xl font-extrabold">SHOP.CO</a>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link href="/shop" className="hover:text-gray-900 flex items-center gap-1">
            Shop <FaAngleDown />
          </Link>
          <Link href="/on sale" className="hover:text-gray-900">
            On Sale
          </Link>
          <Link href="/new arrival" className="hover:text-gray-900">
            New Arrivals
          </Link>
          <Link href="/brands" className="hover:text-gray-900">
            Brands
          </Link>
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Box */}
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 space-x-2 w-full max-w-md">
            <CiSearch className="text-gray-600 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for products.."
              className="bg-transparent text-sm w-full focus:outline-none"
            />
          </div>

          {/* Cart and User Icons */}
          <div className="flex items-center space-x-4">
            <IoCartOutline className="w-6 h-6 hover:text-gray-700 cursor-pointer" />
            <FaRegUser className="w-6 h-6 hover:text-gray-700 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden flex justify-between items-center px-4">
        {/* Burger Menu */}
        <button className="text-gray-900 text-lg focus:outline-none">
          <FaAngleDown />
        </button>
        {/* Mobile Links */}
        <nav className="wrapper flex flex-col items-start space-y-2 mt-2">
          <Link href="/shop" className="hover:text-gray-900">
            Shop
          </Link>
          <Link href="/on sale" className="hover:text-gray-900">
            On Sale
          </Link>
          <Link href="/new arrival" className="hover:text-gray-900">
            New Arrivals
          </Link>
          <Link href="/brands" className="hover:text-gray-900">
            Brands
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
