import React from 'react'
import { FaEnvelopeSquare } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center bg-gray-200 pt-20 pb-20'>
      <h2 className='text-3xl mb-5 text-center'> Subscribe to our newsletter </h2>
      <div className='flex flex-col md:flex-row items-center bg-white px-10 py-10 rounded-xl shadow'>
        <FaEnvelopeSquare className='text-gray-500 mr-3 invisible md:visible ' />
        <input className='newsletter border-2 rounded outline-0 focus:outline-0  py-5 md:py-2 md:text-sm' type="email" placeholder='ENTER EMAIL ADDRESS' />
        <input className='ease-in duration-200 py-5 px-5 cursor-pointer hover:text-orange-700' type="submit" value="SUBSCRIBE" />
      
      </div>

     
   
    </div>
  )
}

export default Newsletter
