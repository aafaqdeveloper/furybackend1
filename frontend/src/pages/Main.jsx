import React, {useState, useEffect} from 'react'
import { mentrendingproducts, menappee, womenappee, menfootwear, womenfootwear, boysfootwear, girlsfootwear, navbarlinksmen, menDataSlider, womenDataSlider, kidsDataSlider, menDataButtons, menBanner, womenBanner, kidsBanner, womenDataButtons, kidsDataButtons } from "../constants";
import { Banner as vb, Navbar_compo, NavbarMobile, Slider, FooterWear  } from "../components";
import { ApparelList, TrendingProductList, FootwearList, Banner } from '../container'
import { men_banner_bottom1, Women_Bottom_Banner, kids_banner } from '../assets';
import { useParams} from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/features/auth/authSlice';
import {getAllProducts, getProducts} from "../redux/features/product/productSlice"

const main = () => {
  const dispatch = useDispatch()
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const {products, isLoading, isError, message } = useSelector((state) => state.product)

    useEffect(() => {
        if (true) {
            dispatch(getAllProducts())
        }

        if (isError) {
            console.log(message)
        }
    }, [isLoggedIn, isError, message, dispatch])

  const  param = useParams()


   
  return (
    <>
    <Navbar_compo navbarlinksmen={navbarlinksmen} />
    <NavbarMobile />
    
    { param.name == 'men' ? <Slider dataSlider={menDataSlider} buttonData={menDataButtons} />: ''}
    { param.name == 'women' ? <Slider dataSlider={womenDataSlider} buttonData={womenDataButtons} />: ''}
    { param.name == 'kids' ? <Slider dataSlider={kidsDataSlider} buttonData={kidsDataButtons}/>: ''}

    { param.name == 'men' ? <Banner bannerData={menBanner} />: ''}
    { param.name == 'women' ? <Banner bannerData={womenBanner} />: ''}
    { param.name == 'kids' ?      <Banner bannerData={kidsBanner}/>: ''}

    <TrendingProductList productData={products} {...param} />

    { param.name == 'men' ? <FootwearList productData={menfootwear} {...param} />: ''}
    { param.name == 'women' ? <FootwearList productData={womenfootwear} {...param} />: ''}
    { param.name == 'kids' ?  <FootwearList productData={boysfootwear} {...param} />: ''}
    { param.name == 'kids' ?  <FootwearList productData={girlsfootwear} {...param} />: ''}

    {param.name == 'men'?<ApparelList productData={menappee} {...param} />: ''} 
    {param.name == 'women'?<ApparelList productData={womenappee} {...param} />: ''} 
    
    
    {param.name == 'men'?<Banner img={men_banner_bottom1} />: ''}
    {param.name == 'women'?<Banner img={Women_Bottom_Banner} />: ''} 
    {param.name == 'kids'?<Banner img={kids_banner} />: ''} 



    </>
  )
}

export default main
