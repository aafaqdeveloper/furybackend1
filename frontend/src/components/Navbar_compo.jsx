import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import { navbarlinks } from '../constants'
import { FaRegHeart, FaShoppingBag, FaSistrix } from 'react-icons/fa'
import { RxPerson } from 'react-icons/rx'
import { ShowOnLogin, ShowOnLogout } from './Protect';

import Login from './Login';
import { selectUser, SET_LOGIN } from '../redux/features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/services/authService';



const Navbar_compo = ({navbarlinksmen}) => {
  const [showLogin, setShowLogin] = useState(false)
  console.log(showLogin)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(selectUser)


  const logoutUserF = () => {
    dispatch(logoutUser)
    dispatch(SET_LOGIN(false))
    navigate('/')

  }


  return (
    <div className='py-5 hidden lg:block'>
      <div className='flex justify-between mx-10 pb-3'>
        <div>
            <ul className='flex'>
                {navbarlinks.map((pro, index) => (
                <a key={index} href={pro.link}><li className='px-2 capitalize hover:text-gray-600' >{pro.name}</li></a> 
                ))}
            </ul>

        </div>
        <div className='ml-44'>
            <Link to='/'><span className='text-red-600 uppercase text-2xl font-bold italic'>F<span className='text-4xl non-italic'>U</span>Ry</span></Link>
        </div>
        <div className='flex justify-end'>
            <form className='' action="">
            <input className='w-8/12 rounded mr-3' type="text" placeholder='Search' />
            <button className='mx-2'><FaSistrix /></button>
            </form>
            
            <ShowOnLogin>
              <div className=''>
                <Link to='/profile'><span>Welcome {user.name}<img className='w-[35px] h-[35px] object-cover rounded-full inline-block mx-5' src={user.photo} alt="" /></span></Link>
              </div>
            {user.role === 0 && <Link to='/wishlist'><button className='mx-2'><FaRegHeart /></button></Link>}
            {user.role === 0 && <Link to='/dashboard'><button className='mx-2' ><FaShoppingBag /></button></Link> }
            <button className='mx-2' onClick={logoutUserF} >Logout</button>


            </ShowOnLogin>

            <ShowOnLogout>
            <Link to='/account/register'><button className='mx-2'>Sign Up</button></Link>
            <Link><button className='mx-2' onClick={()=>setShowLogin(!showLogin)}>Login</button></Link>
            </ShowOnLogout>
        </div>
      </div>
      <div className='border-t-2 pt-2'>
        <ul className='flex justify-center'>
            
            
                {navbarlinksmen.map((pro, index) => (
                <a key={index} href={pro.link}><li className='menu px-5 text-xs mt-3 relative'>{pro.name}
                  <ul className='menu-child absolute bg-white z-10 top-20 px-5 py-5 shadow-xl w-56 rounded'>
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
      <div className={`ease-in duration-200 ${showLogin ? '':'login_sidebar opacity-0 '}`}>
        <Login showLogin={showLogin} setShowLogin={setShowLogin} />
      </div>

    </div>
  )
}

export default Navbar_compo
