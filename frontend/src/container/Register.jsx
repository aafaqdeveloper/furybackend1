import React from 'react'

const Register = () => {
  return (
    <div className='lg:mx-5 lg:my-10 flex flex-col items-center'>
      <h2 className='text-4xl font-bold capitalize mb-5'>Register yourself</h2>
      <form action="">
        <label className='mt-2 inline-block font-bold text-sm' htmlFor="">First Name</label><br />
        <input className='rounded' type="text" /><br />
        <label className='mt-2 inline-block font-bold text-sm' htmlFor="">Last Name</label><br />
        <input className='rounded' type="text" /><br />
        <label className='mt-2 inline-block font-bold text-sm' htmlFor="">Email</label><br />
        <input className='rounded' type="email" /><br />
        <label className='mt-2 inline-block font-bold text-sm' htmlFor="">Password</label><br />
        <input className='rounded' type="password" /><br />
        <button className='bg-orange-500 rounded shadow px-5 py-2 mt-5 text-white hover:bg-orange-600 mx-auto block'>Create Account</button>
      </form>
    </div>
  )
}

export default Register
