import React from 'react'
import { Navbar_compo, TrendingProduct } from '../components'
import { navbarlinksmen, mentrendingproducts } from '../constants'
import { Newsletter, Footer } from '../container'


const Winter22 = () => {
  return (
    <div>
      <Navbar_compo navbarlinksmen={navbarlinksmen} />
      <div className='mx-20 mt-10 mb-20'>
        <h2 className='text-center text-2xl mb-10 font-bold text-slate-500'>Trending Products</h2>
        <div className='flex justify-center'>

          {/* {mentrendingproducts.map((pro, index) => (
            <TrendingProduct key={index} pro={pro} />
          ))}  */}

        </div>
      </div>
    </div>
  )
}

export default Winter22
