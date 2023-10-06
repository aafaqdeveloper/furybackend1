import React from 'react'
import { menfootwear } from '../constants'
import { FooterWear } from '../components'

const FootwearList = ({productData, name}) => {
  return (
    <div className='mx-10 sm:mx-20 my-20 '>
      <h3 className='font-bold text-2xl uppercase mb-10'>{`${name} footwear`}</h3>

      <div className='flex w-full xl:justify-center scroll overflow-x-scroll pb-10'>

        {productData.map((pro, index) => (
          <FooterWear key={index} {...pro} />
        ))} 

      </div>
    </div>
  )
}

export default FootwearList
