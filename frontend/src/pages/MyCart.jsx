import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { CartProduct } from '../components'
import { Footer, Newsletter, Cart } from '../container'
import { addToCart,removeFromCart } from '../actions/cartActions'


const My_Cart = () => {
  const param = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  const productId = param.id
  const qty = location.search ? Number(location.search.split('=')[1]):1
  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId){
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart)
  }

  const checkoutHandler = () => {
    navigate('/login?redirect=shipping')
  }
  return (
    <div className='lg:mx-5 lg:my-14 '>
      <h2 className='lg:text-4xl lg:font-bold lg:mb-10 lg:mx-5'>My Cart</h2>
      <div className='lg:flex lg:justify-between lg:mx-10'>
        <div className='lg:w-8/12'>
            <div className='bg-slate-100 lg:flex lg:justify-between lg:px-5 lg:py-5 lg:font-bold lg:text-lg shadow rounded'>
                <span className='lg:w-4/12'>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Total</span>

            </div>
            
            {/* <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct /> */}
            {cartItems.map((item, index)=>{
              return <CartProduct key={index} {...item} removeFromCartHandler={removeFromCartHandler} />
            })}


        </div>
        <div className='w-3/12'>
            <h3 className='font-bold lg:text-lg lg:pb-3 border-b-2 border-black'>Order Summary</h3>
            <div className='flex justify-between lg:pb-3 lg:mt-10 lg:my-5 border-b-2 font-bold '>
                <span>Sub Total</span>
                <span>Rs. 6,297.00</span>

            </div>
            <div className='flex justify-between lg:pb-3 lg:my-5 border-b-2  font-bold'>
                <span>Total</span>
                <span>Rs. 6,297.00</span>

            </div>
            <button className='w-full bg-orange-600 py-3 text-xl text-white rounded shadow hover:bg-orange-600' onClick={checkoutHandler}>Proceed To Checkout</button>
            <button className='mt-5 w-full hover:bg-orange-600 py-3 text-xl text-black rounded shadow ease-in duration-200 hover:text-white'>Continue Shopping</button>

        </div>

      </div>
    </div>
  )
}

export default My_Cart
