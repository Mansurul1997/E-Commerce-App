import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      <div>
        <img src={assets.logo} className='mb-5 w-32' alt="" />
        <p className='w-full md:w-2/3 text-gray-600'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
          <li className='text-gray-600 hover:text-black cursor-pointer'>Home</li>
          <li className='text-gray-600 hover:text-black cursor-pointer'>About us</li>
          <li className='text-gray-600 hover:text-black cursor-pointer'>Delivery</li>
          <li className='text-gray-600 hover:text-black cursor-pointer'>Privacy policy</li>
        </ul>
      </div>

      <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
          <li>+8801784939236</li>
          <li >haquemansurul1997@gmail.com</li>
        </ul>
      </div>

      <div className='sm:col-span-3'>
        <hr />
        <p className='text-center text-gray-600 mt-5'>Copyright © 2024. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
