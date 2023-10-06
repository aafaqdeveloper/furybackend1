import React from 'react'
import { Link } from 'react-router-dom'

import { FaSistrix } from 'react-icons/fa';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-between md:mx-10 lg:justify-around my-5 md:my-1 items-center  '>
      <Link to='/'><span className='text-red-600 uppercase text-2xl font-bold italic'>f<span className='text-4xl non-italic'>u</span>ry</span></Link>
      <div className='flex items-center bg-white px-5 mx-5 my-4 py-5 md:py-0 border-2 md:border-0 rounded-xl w-30'>
        <FaSistrix className='text-gray-500 mr-3 hidden' />
        <form action="">
          <input className='border-2 rounded focus:none py-2' type="email" placeholder='Search' />
          <button className='ease-in duration-200 py-2 px-5 cursor-pointer hover:text-orange-700' type="submit"><FaSistrix/></button>
        </form>
      </div>
    </div>
  )
}

export default Header
