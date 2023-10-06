import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectIsLoggedIn, selectUser } from '../redux/features/auth/authSlice'

const TrendingProduct = ({_id, image, name, price, discounted}) => {
  const loggedIn = useSelector(selectIsLoggedIn)
  const user = useSelector(selectUser)

  return (
    <Link to={`/product/${_id}`}>
    <div className='flex flex-col items-center mx-4 relative w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px]'>
      <div className='w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px]'><img className=' rounded w-[150px] h-[150px] object-cover sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]' src={image.filePath} alt="" /></div>
      <p className='text-center mt-3 capitalize text-sm md:text-lg '>{name.slice(0,18)} ...</p>
      <p className='text-center text-red-700 font-bold text-sm md:text-xl '>{price} PKR</p>
      <span className='bg-red-700 text-white px-2 xl:px-3 rounded absolute right-0 text-sm lg:text-lg'>off</span>
      {(loggedIn && user.role === 0) && <button className='bg-blue-400 py-2 px-3 rounded text-gray-100 mt-2' onClick={()=>console.log("ok")}>Add to Cart</button>}
    </div>
    </Link>
  )
}

export default TrendingProduct
