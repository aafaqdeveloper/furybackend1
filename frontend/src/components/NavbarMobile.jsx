import React, { useState } from 'react'
import { navbarlinks, navbarlinksmen } from '../constants'
import { Link } from 'react-router-dom'
import { FaSkating, FaRegHeart, FaShoppingBag, FaSistrix, FaBars, FaTimes, FaBackspace } from 'react-icons/fa'


const NavbarMobile = () => {
    const [show, setShow] = useState(false)
    const [click, setClick] = useState(false)
  return (
    <div className='lg:hidden '>
      <div className='flex justify-between mx-5 sm:mx-10 my-5'>
        <button onClick={()=>setShow(!show)}><FaBars /></button>
        
        <div className=''>
            <Link to='/'><span className='text-red-600 uppercase text-4xl font-bold italic'>N<span className='text-2xl non-italic'>o</span>ra</span></Link>
        </div>
        <div className='flex justify-end'>
            
            <Link to='/account/register'><button className='mx-2'><FaSkating /></button></Link>
            <Link to='/wishlist'><button className='mx-2'><FaRegHeart /></button></Link>
            <Link to='/cart'><button className='mx-2'><FaShoppingBag /></button></Link>
        </div>
      </div>
      <div className={` ${show ? 'translate-x-0' : 'mobile_sidebar opacity-0'} bg-slate-100 h-screen w-[300px] fixed top-0  py-5 px-5 z-10 ease-in duration-200`}>
        <button className='absolute top-5 right-5 text-2xl text-red-700 ' onClick={()=>setShow(!show)}><FaTimes /></button>
      <div>
            <ul className='flex'>
                {navbarlinks.map((pro, index) => (
                <a key={index} href={pro.link}><li className='px-2 text-lg capitalize hover:text-red-600' >{pro.name}</li></a> 
                ))}
            </ul>

        </div>
        <ul className='flex flex-col mt-10 '>
            
            
                {navbarlinksmen.map((pro, index) => (
                <a key={index} href={pro.link} onClick={()=>setClick(!click)}><li className='menu px-5 text-sm mt-3 border-b-2 hover:border-black mb-3 pb-2 relative ease-in duration-200'>{pro.name}
                  <ul className={`menu-child bg-white z-50 px-5 py-5 shadow-xl w-56 rounded fixed top-0 left-0 ease-in duration-200 `}>
                    <button className='text-5xl'><FaBackspace /></button>
                    <li className='text border-b-2 py-2 hover:text-gray-800'>Men Sneakers & Sports Shoes</li>
                    <li className='text border-b-2 py-2 hover:text-gray-800'>Men Loafers & Slip-Ons</li>
                    <li className='text border-b-2 py-2 hover:text-gray-800'>Men Formal Shoes & Lace-Ups</li>
                    <li className='text border-b-2 py-2 hover:text-gray-800'>Men Chappals</li>
                    <li className='text border-b-2 py-2 hover:text-gray-800'>Men Sandals & Peshawaris</li>


                  </ul>
                </li></a>
                 
                ))}
                
        </ul>
      </div>
    </div>
  )
}

export default NavbarMobile
