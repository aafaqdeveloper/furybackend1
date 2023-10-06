import React from 'react'

const Apparel = ({img, name}) => {
  // console.log(pro);
  return (
    <div className='flex flex-col mr-2 ml-2 items-center pb-8'>
      <div className='parent'> 
        <div className='child w-[200px] xl:w-[180px]'>
            <img className='w-[200px] h-[300px] object-cover' src={img} alt="" />
        </div>
      </div>
      <div >
        <p className='mt-5 uppercase font-bold'>{name}</p>
      </div>
    </div>
  )
}

export default Apparel
