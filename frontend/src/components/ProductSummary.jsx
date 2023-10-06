import React, { useEffect } from 'react'
import { AiFillDollarCircle } from "react-icons/ai";
import { BsCart4, BsCartX } from "react-icons/bs";
import { BiCategory } from "react-icons/bi"
import { useDispatch, useSelector } from 'react-redux';
import { CALC_CATEGORY, CALC_OUTOFSTOCK, CALC_STORE_VALUE, selectTotalStoreValue, selectOutOfStock, selectCategory } from "../redux/features/product/productSlice"
import InfoBox from "./InfoBox"

// Icons 
const earningIcon = <AiFillDollarCircle size={40} color='#fff' />
const productIcon = <BsCart4 size={40} color='#fff' />
const categoryIcon = <BiCategory size={40} color='#fff' />
const outOfStockIcon = <BsCartX size={40} color='#fff' />


// Format Amount
export const formatNumbers = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const ProductSummary = ({products}) => {
    const dispatch = useDispatch()
    const totalStoreValue = useSelector(selectTotalStoreValue)
    const outOfStock = useSelector(selectOutOfStock)
    const category = useSelector(selectCategory)

    useEffect(() => {
        dispatch(CALC_STORE_VALUE(products))
        dispatch(CALC_OUTOFSTOCK(products))
        dispatch(CALC_CATEGORY(products))

    }, [dispatch, products])
  return (
    <div className=''>
      <h3 className='text-2xl py-10'>Inventory Stats</h3>
      <div className='grid grid-cols-4 gap-4'>
        <InfoBox icon={productIcon} title={"Total products"} count={products.length} color='bg-blue-400' />
        <InfoBox icon={earningIcon} title={"Total Store Value"} count={`$${formatNumbers(totalStoreValue.toFixed(2))}`} color='bg-green-400' />
        <InfoBox icon={outOfStockIcon} title={"Out of Stock"} count={outOfStock} color='bg-red-300' />
        <InfoBox icon={categoryIcon} title={"All Categories"} count={category.length} color='bg-purple-400' />
      </div>
    </div>
  )
}

export default ProductSummary
