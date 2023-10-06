import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { FaWindowClose } from "react-icons/fa";
import {loginUser, validateEmail} from "../redux/services/authService"
import { SET_LOGIN, SET_NAME } from '../redux/features/auth/authSlice';
import {toast} from "react-toastify"

const initialState = {
  email: "",
  password: "",
}

const Login = ({showLogin, setShowLogin}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setformData] = useState(initialState)
  const { email, password } = formData


  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setformData({ ...formData, [name]:value})
  }

  const register = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields required")
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email")
    }

    const userData = {
       email, password
    }    
    setIsLoading(true)

    try {
      const data = await loginUser(userData)
      console.log(data)
      await dispatch(SET_LOGIN(true))
      await dispatch(SET_NAME(data.name))

      navigate("/")
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }
  }
    

  return (
    <div className='w-[400px] py-10 px-10 bg-white h-full absolute z-10 right-0 top-0'>
      <h3 className='text-2xl mb-8 font-bold'>Customer Login</h3>
      <form onSubmit={register} >
        <label htmlFor="">Email Address</label><br />
        <input className='w-full my-5' type="email" placeholder='Email Address' name='email' value={email} required onChange={handleInputChange} /><br />
        <label htmlFor="">Password</label><br />
        <input className='w-full my-5' type="password" placeholder='Password' name='password' value={password} required onChange={handleInputChange} /><br />
        <button className='bg-blue-300 w-full' type="submit" >Login</button>
        <p className='text-center my-5'>forgot your password ?</p>
      </form>
      <Link to='/account/register'><button className='w-full bg-orange-500'>Create An Account</button></Link>
      <button className=' absolute top-5 right-5 text-2xl text-red-500 hover:text-black ease-in duration-100' onClick={()=>setShowLogin(!showLogin)}><FaWindowClose /></button>
    </div>
  )
}

export default Login
