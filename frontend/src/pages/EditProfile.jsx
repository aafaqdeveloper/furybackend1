import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { selectUser } from "../redux/features/auth/authSlice"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { updateUser } from '../redux/services/authService'
import ChangePassword from '../components/ChangePassword'


const EditProfile = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const user = useSelector(selectUser)
    const { email } = user

    useEffect(() => {
        if (!email) {
            navigate("/profile")
        }
    }, [email, navigate])

    const initialState = {
        name: user?.name,
        email: user?.email,
        phone: user?.phone,
        bio: user?.bio,
        photo: user?.photo,
    }

    const [profile, setProfile] = useState(initialState)
    const [profileImage, setProfileImage] = useState("")

    const handleInputChange = (e) => {
      const { name, value } = e.target
      setProfile({ ...profile, [name]: value })
    }

    const handleImageChange = (e) => {
      setProfileImage(e.target.files[0])
    }

    const saveProfile = async (e) => {
      e.preventDefault()
      setIsLoading(true)
      try {
        // Handle Image upload
        let imageURL;
        if (
          profileImage && 
          (
            profileImage.type === "image/jpeg" ||
            profileImage.type === "image/jpg" ||
            profileImage.type === "image/png" 

          )
        ) {
            const image = new FormData()
            image.append("file", profileImage)
            image.append("cloud_name", "dzhjxludz")
            image.append("upload_preset", "k81v0sy6")

            // First save image to cloudinary
            const response = await fetch(
              "https://api.cloudinary.com/v1_1/dzhjxludz/image/upload", { method: "post", body: image }
            )
            const imgData = await response.json()
            imageURL = imgData.url.toString()
        }
        
        // Save Profile
        const formData = {
          name: profile.name,
          phone: profile.phone,
          bio: profile.bio,
          photo: profileImage ? imageURL : profile.photo,
        }

        const data = await updateUser(formData)
        console.log(data)
        toast.success("User updated")
        navigate("/profile")
        setIsLoading(false)
      }
      catch (error) {
        console.log(error)
        setIsLoading(false)
        toast.error(error.message)
      }
    }
  return (
    <div className='mx-20 pt-10'>
      <span>
        <img className='rounded mb-10 w-[250px] h-[350px] object-cover' src={user?.photo} alt="profilepic" />
      </span>
      <form onSubmit={saveProfile}>
        <span>
          <p>
            <label>Name:</label><br/>
            <input className='my-5' type="text" name='name' value={profile?.name} onChange={handleInputChange} />
          </p>

          <p>
            <label>Email:</label><br/>
            <input className='mt-5 bg-gray-200' type="email" name='email' value={profile?.email} disabled />
            <br />
            <code className='mb-5 inline-block text-sm'>Email cannot be changed.</code>
          </p>

          <p>
            <label>Phone:</label><br/>
            <input className='my-5' type="number" name='phone' value={profile?.phone} onChange={handleInputChange} />
          </p>

          <p>
            <label>Bio:</label><br/>
            <textarea className='my-5' name='bio' value={profile?.bio} onChange={handleInputChange} cols='30' rows='10'></textarea>
          </p>

          <p>
            <label>Photo:</label><br/>
            <input className='my-5' type="file" name='image' onChange={handleImageChange} />
          </p>

          <button className='bg-blue-300 px-10 py-3 rounded mt-5 hover:bg-blue-400 transition duration-300 ease-in'>Edit Profile</button>

        </span>
      </form>

      <ChangePassword/>
    </div>
  )
}

export default EditProfile
