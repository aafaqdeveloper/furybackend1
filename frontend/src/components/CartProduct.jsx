import React from 'react'
import {footwear_men_5} from '../assets'
import { FaWindowClose } from "react-icons/fa";

const CartProduct = ({ _id, name, image, price, cartQuantity, removeFromCartHandler, decreaseFromCart, increaseFromCart }) => {
    console.log(_id)
  return (
    <div className='relative lg:flex lg:justify-between items-center lg:px-5 lg:mx-1 lg:py-5 border-2 lg:my-5 shadow rounded'>
                <div className='lg:w-4/12 flex items-center'>
                    <img className='w-20 h-20 object-cover' src={image.filePath} alt="" />
                    <div className='flex flex-col ml-4'>
                        <span className='font-bold'>{name}</span>
                        <span className='text-slate-500'>M</span>

                    </div>
                </div>

                    <span>RS. {price}</span>
                    <div>
                        <button className='mr-2' onClick={()=> decreaseFromCart(_id)}>&#60;</button>
                        <span className='border-2 px-2 py-1'>{cartQuantity}</span>
                        <button className='ml-2' onClick={()=> increaseFromCart(_id)}>&#62;</button>

                    </div>
                    <span>RS. {price}</span>
                    <button className='absolute top-2 right-2 text-lg text-red-500 hover:text-red-600' onClick={()=> removeFromCartHandler(_id)}><FaWindowClose /></button>
                    

            </div>
  )
}

export default CartProduct
