import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductList from '../components/ProductList'
import ProductSummary from '../components/ProductSummary'

import useRedirectLoggedOutUser from "../customHook/useRedirectLoggedOutUser"
import { selectIsLoggedIn } from '../redux/features/auth/authSlice'
import { getProducts } from '../redux/features/product/productSlice'

const DashboardAdmin = () => {
    useRedirectLoggedOutUser('/login')
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const {products, isLoading, isError, message } = useSelector((state) => state.product)

    useEffect(() => {
        if (isLoggedIn === true) {
            dispatch(getProducts())
        }
        console.log(products)

        if (isError) {
            console.log(message)
        }
    }, [isLoggedIn, isError, message, dispatch])
  return (
    <div className='mx-10 '>
      <ProductSummary products={products}/>
      <ProductList products={products} isLoading={isLoading}/>
    </div>
  )
}

export default DashboardAdmin
