import React from 'react'
import { mentrendingproducts } from '../constants'
import { TrendingProduct } from '../components'

const TrendingProductList = ({productData}) => {
  return (
    <div className='mx-10 sm:mx-10 mt-10 mb-20'>
        <h2 className='text-center text-2xl mb-10 font-bold text-slate-500'>Trending Products</h2>
        <div className='flex w-full whitespace-nowrap scroll overflow-x-scroll scroll-smooth pb-8 scrollbar-hide cursor-pointer'>

          {productData.map((pro, index) => (
            <TrendingProduct key={index} {...pro} />
          ))} 

        </div>
      </div>
  )
}

export default TrendingProductList
