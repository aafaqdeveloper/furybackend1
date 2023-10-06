import React from 'react'


const FooterWear = ({name, img}) => {

  return (
    <div className='flex flex-col mr-5 ml-5 items-center'>
      <div className='w-[150px] md:w-[200px] xl:w-[150px]'>
        <img className='w-[200px]' src={img} alt="" />
      </div>
      <div>
        <p className='font-bold uppercase mt-5'>{name}</p>
      </div>
    </div>
  )
}

export default FooterWear
