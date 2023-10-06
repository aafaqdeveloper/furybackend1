import React from 'react'
import { WishProduct } from '../components'
const Wish = () => {
  return (
    <div className='lg:mx-5 lg:my-14'>
      <h2 className='lg:text-4xl lg:font-bold lg:mb-10 lg:mx-5'>Wish-List</h2>
      <div className='bg-slate-100 lg:flex lg:justify-between lg:px-5 lg:py-5 lg:font-bold lg:text-lg shadow rounded'>
                <span className=''>image</span>
                <span className='lg:w-4/12'>Product Name</span>
                <span>Price</span>
                <span>Add</span>
                <span>Remove</span>

      </div>
      <WishProduct />
      <WishProduct />
      <WishProduct />
      <WishProduct />


    </div>
  )
}

export default Wish
