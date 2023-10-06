import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitterSquare, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row md:justify-between mx-10 md:mx-20 lg:mx-32  my-14'> 
          <div className='flex flex-col mb-10 md:mb-0'>
            <h3 className='text-xl font-medium mb-5'>About Ndure</h3>
            <ul className='text-xs leading-7'>
              <a href=""><li className='hover:text-orange-700 ease-in duration-200'>What is NDURE</li></a>
              <a href=""><li className='hover:text-orange-700 ease-in duration-200'>Corporate News</li></a>
              <a href=""><li className='hover:text-orange-700 ease-in duration-200'>Customer Reviews</li></a>
              <a href=""><li className='hover:text-orange-700 ease-in duration-200'>Find a Store</li></a>
              <a href=""><li className='hover:text-orange-700 ease-in duration-200'>Careers</li></a>

            </ul>
          </div>

          <div className='flex flex-col mb-10 md:mb-0'>
            <h3 className='text-xl font-medium mb-5'>Help</h3>
            <ul className='text-xs leading-7'>
              <a href=""><li className='hover:text-orange-700 ease-in duration-200'>Order Status </li></a>
              <a href=""><li className='hover:text-orange-700 ease-in duration-200'>Shipping & Delivery</li></a>
              <a href=""><li className='hover:text-orange-700 ease-in duration-200'>Return & Exchange Policy</li></a>
              <a href=""><li className='hover:text-orange-700 ease-in duration-200'>FAQs</li></a>
              <a href=""><li className='hover:text-orange-700 ease-in duration-200'>Privacy Policy</li></a>
              <a href=""><li className='hover:text-orange-700 ease-in duration-200'>Terms & Conditions</li></a>

            </ul>
          </div>

          <div className='flex flex-col'>
            <h3 className='text-xl font-medium mb-5'> Connect With Us </h3>
            <ul className='flex justify-around'>
              <li className='hover:text-orange-700 hover:text-xl ease-in duration-200'><a href=""><FaFacebook /></a></li>
              <li className='hover:text-orange-700 hover:text-xl ease-in duration-200'><a href=""><FaInstagram /></a></li>
              <li className='hover:text-orange-700 hover:text-xl ease-in duration-200'><a href=""><FaTwitterSquare /></a></li>
              <li className='hover:text-orange-700 hover:text-xl ease-in duration-200'><a href=""><FaLinkedin /></a></li>

              
            </ul>
          </div>
        
      </div>
      <div className='flex justify-between px-4 nd_primary_bg pt-2 pb-2'>
        <p className='text-xs text-white'>ALL RIGHTS RESERVED TO NDURE </p>
        <p className='text-xs text-white'>Developed by Aafaq Hassan</p>
      </div>
    </div>
  )
}

export default Footer
