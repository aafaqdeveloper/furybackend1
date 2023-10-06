import React from 'react'
import { Header, Footer, Shop, Newsletter  } from '../container'
import { Slider, Navbar_compo } from '../components'
import { shopdata, homeDataButtons, dataSlider, navbarlinksmen } from '../constants';

const Home = () => {
  return (
    <div>
    <Header />
    <Slider dataSlider={dataSlider} buttonData={homeDataButtons}/>
        {shopdata.map((pro, index) => (
          <Shop key={index} pro={pro} />
          

        ))}

    <div className='mb-20' />
    </div>
  )
}

export default Home
