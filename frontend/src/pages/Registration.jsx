import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toast } from "react-toastify"
import { registerUser, validateEmail} from "../redux/services/authService"
import { SET_LOGIN, SET_NAME } from '../redux/features/auth/authSlice'

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
}

const Registration = ({}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setformData] = useState(initialState)
  const {name, email, password, password2} = formData


  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setformData({ ...formData, [name]:value})
  }

  const register = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      return toast.error("Password must be up to 6 characters")
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email")
    }

    if (password !== password2) {
      return toast.error("Passwords do not match")
    }

    const userData = {
      name, email, password
    }    
    setIsLoading(true)

    try {
      const data = await registerUser(userData)
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
    <div className='lg:mx-5 lg:my-10 flex flex-col items-center'>
      <h2 className='text-4xl font-bold capitalize mb-5'>Register yourself</h2>
      <form onSubmit={register}>
        <label className='mt-2 inline-block font-bold text-sm' htmlFor="">Name</label><br />
        <input className='rounded' type="text" name='name' placeholder='Name' value={name} onChange={handleInputChange} required/><br />
        <label className='mt-2 inline-block font-bold text-sm' htmlFor="">Email</label><br />
        <input className='rounded' type="email" name='email' placeholder='Email' value={email} onChange={handleInputChange} required/><br />
        <label className='mt-2 inline-block font-bold text-sm' htmlFor="">Password</label><br />
        <input className='rounded' type="password" name='password' placeholder='password' value={password} onChange={handleInputChange} required/><br />
        <label className='mt-2 inline-block font-bold text-sm' htmlFor="">Confirm Password</label><br />
        <input className='rounded' type="password" name='password2' placeholder='password' value={password2} onChange={handleInputChange} required/><br />
        <button className='bg-orange-500 rounded shadow px-5 py-2 mt-5 text-white hover:bg-orange-600 mx-auto block'>Create Account</button>

      </form>
    </div>
  )
}

export default Registration
