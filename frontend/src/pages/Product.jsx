import React, {useState, useEffect} from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getProduct, getProductSimply } from '../redux/features/product/productSlice'
import { selectIsLoggedIn, selectUser } from '../redux/features/auth/authSlice'
import useRedirectLoggedOutUser from "../customHook/useRedirectLoggedOutUser"
import { addToCart } from '../redux/features/cart/cartSlice'



const Product = () => {
  // useRedirectLoggedOutUser('/login')
  const param = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(selectUser)


  useEffect(()=>  {
    dispatch(getProductSimply(param.id))
    
  },[dispatch, param])
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const {product, isLoading, isError, message } = useSelector((state) => state.product)
  //  const { _id, image, name, price } = product



    

    const addToCartHandler = () => {
      dispatch(addToCart(product))
       navigate('/dashboard')
    }
  return (
    <div className='mx-20 my-20'>
      <div className='img w-[250px]'>
        <img className='rounded' src={product?.image?.filePath} alt="" />
      </div>
      <div className='content'>
        <h3 className='text-lg capitalize mt-5'> {product?.name}</h3>
        <div><span>Rs. {product?.price}</span>Rs. discounted_price</div>
        {(isLoggedIn && user.role === 0) && <button onClick={addToCartHandler}>Add to Cart</button> }
      </div>
    </div>

  )
}

export default Product
