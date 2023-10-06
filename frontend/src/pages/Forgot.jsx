import React, {useState} from 'react'
import { toast } from "react-toastify"
import { forgotPassword, validateEmail} from "../redux/services/authService"

const Forgot = () => {
    const [email, setEmail] = useState("")

    const forgot = async(e) => {
        e.preventDefault()

        if (!email) {
            return toast.error("Please enter an email")
        }

        if (!validateEmail(email)) {
            return toast.error("Please enter a valid email")
        }

        const userData = {
            email,
        }

        await forgotPassword(userData)
        setEmail("")
    }
  return (
    <div className='lg:mx-5 lg:my-10 flex flex-col items-center'>
      <h2 className='text-4xl font-bold capitalize mb-5'>Forgot Password</h2>
      <form onSubmit={forgot}>
        <label className='mt-2 inline-block font-bold text-sm' htmlFor="">Email</label><br />
        <input className='rounded' type="email" name='email' placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} required/><br />
        <button className='bg-orange-500 rounded shadow px-5 py-2 mt-5 text-white hover:bg-orange-600 mx-auto block' type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default Forgot
