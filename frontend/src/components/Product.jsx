import React from 'react'

const Product = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-[300px]'><img className='w-[350px] h-[300px]' src={pro.img} alt="" /></div>
      <p>{pro.name}</p>
      <p>{pro.price}PKR</p>
    </div>
  )
}

export default Product
