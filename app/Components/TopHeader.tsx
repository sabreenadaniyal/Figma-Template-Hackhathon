import React from 'react'
import { RxCross2 } from "react-icons/rx";

const TopHeader = () => {
  return (
    <div className='w-full h-[38px] max-auto bg-black flex justify-center items-center'>
    <div className='w-[859px] h-6 flex text-white lg:mr-14'>
      <div className='w-[96%] flex justify-center gap-4'>
        <p className='text-gray-300 text-base'>Sign up and get 20% off to your first order.<span className='text-white'>Sign Up Now</span></p>
      </div>

      <div className='flex items-center '>
      <RxCross2  className='text-white w-[20px] h-[20px]'/>
      </div>

    </div>

  </div>
  )
}

export default TopHeader