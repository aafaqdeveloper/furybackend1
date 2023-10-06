import React, {useState} from 'react'
import {toast} from "react-toastify"
import { changePassword } from "../redux/services/authService"
import { useNavigate } from "react-router-dom"

const initialState = {
    oldPassword: "",
    password: "",
    password2: "",
}

const ChangePassword = () => {
    const navigate = useNavigate()
    const [formData, setformData] = useState(initialState)
    const { oldPassword, password, password2 } = formData

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setformData({ ...formData, [name]: value })
    }

    const changePass = async (e) => {
        e.preventDefault()

        if (password !== password2) {
            return toast.error("New passwords do not match")
        }

        const formData = {
            oldPassword,
            password,
        }

        const data = await changePassword(formData)
        toast.success(data)
        navigate("/profile")
    }
  return (
    <div className='bg-gray-100 p-10 rounded w-[400px] my-10'>

      <h3 className='text-2xl pb-5'>Change Password</h3>
      <form onSubmit={changePass}>
        <input className='my-2 rounded' type="password"
            placeholder='Old Password'
            required
            name="oldPassword"
            value={oldPassword}
            onChange={handleInputChange} 
        />

        <input className='my-2 rounded' type="password"
            placeholder='New Password'
            required
            name="password"
            value={password}
            onChange={handleInputChange} 
        />

        <input className='my-2 rounded' type="password"
            placeholder='Confirm New Password'
            required
            name="password2"
            value={password2}
            onChange={handleInputChange} 
        />
        <button type='submit' className='bg-red-400 text-gray-200 mt-5 px-5 py-2 rounded m-auto w-[200px]'>Change Password</button>
      </form>
    </div>
  )
}

export default ChangePassword
