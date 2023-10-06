import React from 'react'

const Banner = ({bannerData}) => {
  return (
    <div>
      <div className='relative flex '>
          <div id='slider' className='flex flex-col md:flex-row justify-center  w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide mx-2 example'>
            
                  <div className='flex flex-col items-center'>
                    <div className='parent w-[500px] lg:w-[600px] h-[200px]'>
                      <div className='child'>
                        <a>
                          <img
                          className='w-[620px] inline-block p-2 cursor-pointer'
                          src={bannerData[0]}
                          alt='/'
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  

                  <div className='flex flex-col items-center'>
                    <div className='parent w-[500px] h-[200px] lg:w-[600px]'>
                      <div className='child'>
                        <a>
                          <img
                          className='w-[620px] inline-block p-2 cursor-pointer'
                          src={bannerData[1]}
                          alt='/'
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  
              
          </div>
        </div>

      
      
        </div>
    
  )
}

export default Banner
