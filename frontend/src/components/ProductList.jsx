import React, { useEffect, useState } from 'react'
import { FaEdit, FaTrashAlt } from "react-icons/fa"
import { AiOutlineEye } from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
//import { confirmAlert } from 'react-confirm-alert'
//import 'react-confirm-alert/src/react-confirm-alert.css'
import { deleteProduct, getProducts } from '../redux/features/product/productSlice'
import { Link } from "react-router-dom"


const ProductList = ({ products, isLoading }) => {
    const [search, setSearch] = useState("")

    const dispatch = useDispatch()

    const shortenText = (text, n) => {
        if (text.length > n) {
            const shortenText = text.substring(0, n).concat("...")
            return shortenText
        }
        return text
    }

    const delProduct = async (id) => {
        await dispatch(deleteProduct(id))
        await dispatch(getProducts())
    }

    const confirmDelete = (id) => {
      confirmAlert({
        title: 'Delete Product',
        message: 'Are you sure you want to delete this product.',
        buttons: [
          {
            label: 'Delete',
            onClick: () => delProduct(id)
          },
          {
            label: 'Cancel',

          }
        ]
      });
    }

  return (
    <div className='product-list'>
      <hr/>
      <div className='grid grid-cols-2 py-5'>
        <span>
          <h3 className='text-xl'>Inventory Items</h3>
        </span>
        <span>
          Search
        </span>
      </div>

      <div className='table'>
        {!isLoading && products.length === 0 ? (
          <p>-- No product found, please add a product...</p>
        ) : (
          <table>
            <thead>
              <tr className='grid grid-cols-7 mb-2'>
                <th className='w-10'>s/n</th>
                <th className='w-56 text-left'>Name</th>
                <th className='w-56 text-left'>Category</th>
                <th className='w-20'>Price</th>
                <th className='w-20'>Quantity</th>
                <th className='w-20'>Value</th>
                <th className='w-20'>Action</th>

              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => {
                const { _id, name, category, price, quantity } = product
                return (
                  <tr className='grid grid-cols-7 my-1' key={_id}>
                    <td className='w-10 text-center'>{index + 1}</td>
                    <td className='w-56 text-left'>{shortenText(name, 16)}</td>
                    <td className='w-40 text-left'>{category}</td>
                    <td className='w-20 text-center'>{"$"}{price}</td>
                    <td className='w-20 text-center'>{quantity}</td>
                    <td className='w-20 text-center'>{"$"}{price * quantity}</td>
                    <td className='icons grid grid-cols-3'>
                      <span>
                        <Link to={`/product-detail/${_id}`}>
                          <AiOutlineEye size={25} color={"purple"} />
                        </Link>
                      </span>

                      <span>
                        <Link to={`/edit-product/${_id}`}>
                          <FaEdit size={25} color={"green"} />
                        </Link>
                      </span>

                      <span className='cursor-pointer'>
                          <FaTrashAlt size={20} color={"red"} onClick={() => delProduct(_id)} />
                        
                      </span>
                    </td>

                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default ProductList
