import React, { useEffect } from 'react'
import useRedirectLoggedOutUser from "../customHook/useRedirectLoggedOutUser"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectIsLoggedIn } from '../redux/features/auth/authSlice'
import { getProduct } from "../redux/features/product/productSlice";
import DOMPurify from "dompurify"

const ProductDetail = () => {
    useRedirectLoggedOutUser("/login")
    const dispatch = useDispatch()
    const { id } = useParams()

    const isLoggedIn = useSelector(selectIsLoggedIn)
    const { product, isLoading, isError, message } = useSelector((state) => state.product)
    console.log("from product details")

    const stockStatus = (quantity) => {
        if (quantity > 0) {
            return <span>In Stock</span>
        }
        return <span>Out of Stock</span>
    }

    useEffect(() => {
        if (isLoggedIn === true) {
            dispatch(getProduct(id))
        }
        if (isError) {
            console.log(message)
        }
    }, [isLoggedIn, isError, message, dispatch, id])

  return (
    <div className='mx-20 py-5'>
      <h3 className='text-2xl pb-5'>Product Detail</h3>
        {product && (
            <div className='detail'>
                <div>
                    {product?.image ? (
                        <img className='rounded' width="30%" src={product.image.filePath} alt={product.image.fileName} />
                    ) : (
                        <p>No image set for this product</p>
                    )}
                </div>
                <h4 className='text-xl my-2'>Product Availability: {stockStatus(product.quantity)}</h4>
                <hr/>
                <h4 className='text-lg my-5 '>
                    <span>Name:</span>
                    &nbsp; {product?.name}
                </h4>
                <p className='my-1'>
                    <b>&rarr; SKU : </b> {product?.sku}
                </p>
                <p className='my-1'>
                    <b>&rarr; Category : </b> {product?.category}
                </p>
                <p className='my-1'>
                    <b>&rarr; Price : </b> {"$"}{product?.price}
                </p>
                <p className='my-1'>
                    <b>&rarr; Quantity in stock : </b> {product?.quantity}
                </p>
                <p className='my-1'>
                    <b>&rarr; Trending : </b> {product?.trending}
                </p>
                <p className='my-1'>
                    <b>&rarr; Sale : </b> {product?.sale}
                </p>
                <p className='my-1'>
                    <b>&rarr; Bestseller : </b> {product?.bestseller}
                </p>
                <p className='my-1'>
                    <b>&rarr; Person : </b> {product?.person}
                </p>
                <p className='my-1'>
                    <b>&rarr; Specific Category : </b> {product?.specific_category}
                </p>
                <p className='mt-1 mb-3'>
                    <b>&rarr; Total Value in Stock : </b> {"$"}{product?.price * product?.quantity}
                </p>
                <hr/>
                <div className='my-3' dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(product?.description)
                }}></div>
                <hr/>
                <code className='mt-8 inline-block text-sm'>
                    Created on: {product?.createdAt.toLocaleString("en-US")}
                </code>
                <br/>
                <code className='text-sm'>
                    Last Updated: {product?.updatedAt.toLocaleString("en-US")}
                </code>
            </div>
        )}
    </div>
  )
}

export default ProductDetail
