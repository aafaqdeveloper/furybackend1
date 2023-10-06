import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from "react-toastify"
import { resetPassword} from "../redux/services/authService"

const initialState = {
    password: "",
    password2: "",
}

const Reset = () => {
  const [formData, setformData] = useState(initialState)
  const {password, password2} = formData

  const {resetToken} = useParams()

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setformData({ ...formData, [name]:value})
  }

  const reset = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      return toast.error("Password must be up to 6 characters")
    }

    if (password !== password2) {
      return toast.error("Passwords do not match")
    }

    const userData = {
      password, password2
    }    

    try {
      const data = await resetPassword(userData, resetToken)
      toast.success(data.message)
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className='lg:mx-5 lg:my-10 flex flex-col items-center'>
      <h2 className='text-4xl font-bold capitalize mb-5'>Reset Password</h2>
      <form onSubmit={reset}>
        <label className='mt-2 inline-block font-bold text-sm' htmlFor=""> Password</label><br />
        <input className='rounded' type="password" name='password' placeholder='Password' value={password} onChange={handleInputChange} required/><br />
        <label className='mt-2 inline-block font-bold text-sm' htmlFor="">Confirm Password</label><br />
        <input className='rounded' type="password" name='password2' placeholder='Confirm Password' value={password2} onChange={handleInputChange} required/><br />
        <button className='bg-orange-500 rounded shadow px-5 py-2 mt-5 text-white hover:bg-orange-600 mx-auto block'>Reset Password</button>

      </form>
    </div>
  )
}

export default Reset
