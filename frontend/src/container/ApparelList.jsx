import React from 'react'
import { menappee } from '../constants'
import { Apparel } from '../components'

const ApparelList = ({productData}) => {
  return (
    <div className='mx-10 sm:mx-20 my-20'>
        <h3 className='font-bold text-2xl uppercase mb-10'>men apparel</h3>

        <div className='flex w-full xl:justify-center scroll overflow-x-scroll'>
        {productData.map((pro, index) => (
          <Apparel key={index} {...pro} />
        ))} 
        </div>
      </div>
  )
}

export default ApparelList
