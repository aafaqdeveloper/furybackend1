import React from 'react'


const Shop = ({pro}) => {
  
  return (
    <div className='flex flex-col lg:items-center xl:flex-row mt-16'>
      <div className='flex flex-col justify-center items-center mb-5 lg:w-[400px]'>
        <h3 className='text-xl font-medium uppercase md:text-2xl lg:text-4xl'>{pro.name}</h3>
        <a href={pro.link} className='nd_primary_color text-xs lg:bg-orange-500 lg:py-4 lg:px-3 lg:mt-5 lg:text-white rounded shadow-xl hover:shadow ease-in duration-200'>VIEW ALL CATEGORIES</a>
      </div>

      

    <div className='relative flex items-center'>
        <div id='slider' className='flex w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide mx-2 example'>
          
                <div className='flex flex-col items-center'>
                  <div className='parent w-[220px] sm:w-[350px] lg:w-[300px]'>
                    <div className='child'>
                      <a href={pro.link1}>
                        <img
                        className='w-[620px] inline-block p-2 cursor-pointer'
                        src={pro.img1}
                        alt='/'
                        />
                      </a>
                    </div>
                  </div>
                  <p className='mt-3 text-xl font-medium'>{pro.title1}</p>
                </div>
                

                <div className='flex flex-col items-center'>
                  <div className='parent w-[220px] sm:w-[350px] lg:w-[300px]'>
                    <div className='child'>
                      <a href={pro.link2}>
                        <img
                        className='w-[620px] inline-block p-2 cursor-pointer'
                        src={pro.img2}
                        alt='/'
                        />
                      </a>
                    </div>
                  </div>
                  <p className='mt-3 text-xl font-medium'>{pro.title2}</p>
                </div>

                <div className='flex flex-col items-center'>
                  <div className='parent w-[220px] sm:w-[350px] lg:w-[300px]'>
                    <div className='child'>
                      <a href={pro.link3}>
                        <img
                        className='w-[620px] inline-block p-2 cursor-pointer'
                        src={pro.img3}
                        alt='/'
                        />
                      </a>
                    </div>
                  </div>
                  <p className='mt-3 text-xl font-medium'>{pro.title3}</p>
                </div>
            
        </div>
      </div>

      
      

    </div>

    
  )
}

export default Shop
