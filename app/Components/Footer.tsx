import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { CiMail } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='w-[1441 px] h-[589px] bg-white'>
      <div className='h-[499px] bg-[#F0F0F0] '>
        <div className='wrapper max-w-[1240px] mx-auto flex items-center w-[1240px] h-[180px] justify-between rounded-[20px] bg-black mt-[36px]'>
          
          <div className='flex flex-col'>
          <div className='ml-[100px] leading-[45px] flex items-center'>
            <Image className='mt-12 font-[40px] leading-[45px]'
              src="/hero section/STAY UPTO DATE ABOUT OUR LATEST OFFERS (1).png" alt="offers"
              width={551}
              height={94}
            />
            <div className='w-[349px] h-[108px] mt-[15px] ml-[200px] flex flex-wrap items-center'>
              <div className='w-[349px] h-[48px] flex flex-row bg-white rounded-[62px] mt-[10px]'>
                <CiMail className='w-[24px] h-[24px] ml-4  mt-2' />
                <input className='w-[173px] h-[22px] mt-3 ml-2' type="search" placeholder='Enter your email address' />
              </div>
              <input className='w-[349px] h-[48px] rounded-[62px] text-center text-black mt-[12px]' type="search" placeholder='Subscribe your Newslater' />
            </div>
          </div>
          </div>
          
        </div>

        
        <div className='wrapper w-[1240px] h-[177px] mt-9 justify-between flex flex-row'>

          <div className='w-[104px] h-[177px] flex flex-grow justify-between'>
            <ul className='w-[248] h-[177px]'>
              <li className='gap-[25px]'>
                <Image src="/hero section/SHOP.CO.png" alt="logo"
                  width={167}
                  height={23} />
                <p className='w-[248px] h-[66px] text-[14px] leading-[26px] mt-4 max-w-[250px]'>We have clothes that suits your style and which you're proud to
                  wear, From women to men.
                </p>
                <div className='flex w-[148px] h-[28px] gap-3 mt-11 space-x-4'>
                  <Link href="https://www.linkedin.com/in/sabreena-zahid-ali-1343a8198/" target="_blank">
                    <FaTwitter className='w-[28px] h-[28px] border-black rounded-lg hover:text-blue-700' />
                  </Link>
                  <Link href="https://facebook.com/sabreena.ali.96" target="_blank" >
                    <FaFacebook className='w-[28px] h-[28px] border-black rounded-lg  hover:text-blue-700' />
                  </Link>
                  <Link href="https://instagram.com/sabreenadaniyal" target="_blank">
                    <CiInstagram className='w-[28px] h-[28px] border-black rounded-lg  hover:text-blue-700' />
                  </Link>
                  <Link href="https://github.com/sabreenadaniyal" target="_blank">
                    <FaGithub className='w-[28px] h-[28px] border-black rounded-lg  hover:text-blue-700' />
                  </Link>
                </div>
              </li>
            </ul>

            <div className=''>
              <h2 className='w-[98px] h-[18px]'>COMPANY</h2>
              <ul className='w-[104px] h-[133px] mt-7 flex flex-col gap-3 space-y-2'>
                <li>
                  <a className='text-gray-600 hover:text-gray-800 leading-[19px] text-[16px]'>About</a>
                </li>
                <li>
                  <a className='text-gray-600 hover:text-gray-800 leading-[19px] text-[16px] '>Features</a>
                </li>
                <li>
                  <a className='text-gray-600 hover:text-gray-800 leading-[19px] text-[16px] '>Works</a>
                </li>
                <li>
                  <a className='text-gray-600 hover:text-gray-800 leading-[19px] text-[16px] '>Career</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className='w-[49px] h-[18px]'>HELP</h2>
              <ul className='w-[140px] h-[177px] mt-7 flex flex-col gap-3 space-y-2'>
                <li>
                  <a className='text-gray-600 hover:text-gray-800 leading-[19px] text-[16px]'>Customer Support</a>
                </li>
                <li>
                  <a className='text-gray-600 hover:text-gray-800 leading-[19px] text-[16px]'>Delivery Details</a>
                </li>
                <li>
                  <a className='text-gray-600 hover:text-gray-800 leading-[19px] text-[16px]'>Terms & Condition</a>
                </li>
                <li>
                  <a className='text-gray-600 hover:text-gray-800 leading-[19px] text-[16px]'>Privacy policy</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className='w-[37px] h-[18px]'>FAQ</h2>
              <ul className='w-[149px] h-[177px] mt-7 flex flex-col gap-3 space-y-2'>
                <li>
                  <a className='text-gray-600 hover:text-gray-800 leading-[19px] text-[16px]'>Account</a>
                </li>
                <li>
                  <a className='text-gray-600 hover:text-gray-800 leading-[19px] text-[16px]'>Manage Deliveries</a>
                </li>
                <li>
                  <a className='text-gray-600 hover:text-gray-800 leading-[19px] text-[16px]'>Orders</a>
                </li>
                <li>
                  <a className='text-gray-600 hover:text-gray-800 leading-[19px] text-[16px]'>Payments</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className='w-[118px] h-[18px]'>RESOURCES</h2>
              <ul className='w-[166px] h-[133px] mt-7 flex flex-col gap-3 space-y-2'>
                <li>
                  <a className='text-gray-600 hover:text-gray-800 leading-[19px] text-[16px]'>Free eBoks</a>
                </li>
                <li>
                  <a className='text-gray-600 hover:text-gray-800 leading-[19px] text-[16px]'>Development Tutorial</a>
                </li>
                <li>
                  <a className='text-gray-600 hover:text-gray-800 leading-[19px] text-[16px]'>How to-Blog</a>
                </li>
                <li>
                  <a className='text-gray-600 hover:text-gray-800 leading-[19px] text-[16px]'>Youtube playlist</a>
                </li>
              </ul>
            </div>
          </div>


        </div>
        <div className=' wrapper w-[1240px] mt-[55px] border-[0.5px] border-gray-300'></div>

        <div className='wrapper mt-10'>

          <Image src="/hero section/right reserve.png" alt="right reserve"
            width={269}
            height={19} />

          <div className='w-[281.07] h-[30.03px] flex flex-row justify-end mt-[-20px]'>
            <Image src="/hero section/Badge (1).png" alt="Badge"
              width={50}
              height={30.03} />

            <Image src="/hero section/Badge (2).png" alt="Badge"
              width={50}
              height={30.03} />

            <Image src="/hero section/Badge (3).png" alt="Badge"
              width={50}
              height={30.03} />

            <Image src="/hero section/Badge (4).png" alt="Badge"
              width={50}
              height={30.03} />

          </div>
        </div>

      </div>


    </div>



  )
}

export default Footer
