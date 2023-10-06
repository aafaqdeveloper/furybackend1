import React from 'react'
import {footwear_men_5} from '../assets'
import { FaWindowClose } from "react-icons/fa";

const WishProduct = () => {
  return (
    <div className='lg:flex lg:justify-between items-center lg:px-5 lg:mx-1 lg:py-5 border-2 lg:my-5 shadow rounded'>
                <div className=''>
                    <img className='w-20 h-20 object-cover' src={footwear_men_5} alt="" />
                    
                </div>
                <span className='lg:w-4/12'>Men's Ultra Comfy Chapal lkdfjsalkjfdlkj</span>

                    <span>RS. 2,099.00</span>
                    <button className='bg-orange-500 px-4 py-1 hover:bg-orange-600 ease-in duration-200 rounded shadow text-white'>Add to Cart</button>
                    <button className='text-2xl text-red-500 hover:text-red-600'><FaWindowClose /></button>
                    

            </div>
  )
}

export default WishProduct
