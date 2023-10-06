import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import useRedirectLoggedOutUser from '../customHook/useRedirectLoggedOutUser'
import { SET_NAME, SET_USER } from '../redux/features/auth/authSlice'
import { getUser } from '../redux/services/authService'
import { Link } from 'react-router-dom'



const Profile = () => {
    useRedirectLoggedOutUser("/login")
    const dispatch = useDispatch()
    const [profile, setProfile] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        async function getUserData() {
            const data = await getUser()
            console.log(data)

            setProfile(data)
            setIsLoading(false)
            await dispatch(SET_USER(data))
            await dispatch(SET_NAME(data.name))
        }
        getUserData()
    }, [dispatch])

  return (
    <div className='mx-20 pt-5'>
        <>
            {!isLoading && profile === null ? (
                <p>Something went wrong, please reload the page...</p>
            ): (
                <div>
                    <span>
                        <img className='rounded w-[250px] h-[350px] object-cover' src={profile?.photo} alt="profilepic" />
                    </span>
                    <span >
                        <p className='pt-5'>
                            <b>Name: </b> {profile?.name}
                        </p>

                        <p>
                            <b>Email: </b> {profile?.email}
                        </p>

                        <p>
                            <b>Phone: </b> {profile?.phone}
                        </p>

                        <p>
                            <b>Bio: </b> {profile?.bio}
                        </p>

                        <div className='mt-5'>
                            <Link to="/edit-profile">
                                <button className='bg-blue-300 px-10 py-3 rounded mt-5'>Edit Profile</button>
                            </Link>
                        </div>
                    </span>
                </div>
            )}
        </>
      
    </div>
  )
}

export default Profile
