import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { createProduct, selectIsLoading } from "../redux/features/product/productSlice"
import { useNavigate } from "react-router-dom"
import {ProductForm} from '../components'

const initialState = {
    name: "",
    category: "shoes",
    quantity: "",
    price: "",
    trending: "no",
    sale: "no",
    bestseller: "no",
    person: "men",
    specific_category: "slip_ons"
}

const AddProduct = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [product, setProduct] = useState(initialState)
    const [productImage, setProductImage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)
    const [description, setDescription] = useState("")

    const isLoading = useSelector(selectIsLoading)
    const { name, category, price, quantity, trending, sale, bestseller, person, specific_category } = product

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setProduct({ ...product, [name]: value})
    }

    const handleImageChange = (e) => {
        setProductImage(e.target.files[0])
        setImagePreview(URL.createObjectURL(e.target.files[0]))
    }

    const generateKSKU = (category) => {
        const letter = category.slice(0,3).toUpperCase()
        const number = Date.now()
        const sku = letter + "-" + number
        return sku;
      }

    const saveProduct = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("name", name)
        formData.append("sku", generateKSKU(category))
        formData.append("category", category)
        formData.append("quantity", quantity)
        formData.append("price", price)
        formData.append("description", description)
        formData.append("trending", trending)
        formData.append("sale", sale)
        formData.append("bestseller", bestseller)
        formData.append("person", person)
        formData.append("specific_category", specific_category)
        formData.append("image", productImage)

        console.log(...formData)

        await dispatch(createProduct(formData))

        navigate("/dashboard")

    }

  return (
    <div className='mx-10'>
        <h3 className='text-2xl py-5'>Add New Product</h3>
        <ProductForm
            product={product}
            productImage={productImage}
            imagePreview={imagePreview}
            description={description}
            setDescription={setDescription}
            handleInputChange={handleInputChange}
            handleImageChange={handleImageChange}
            saveProduct={saveProduct}
        />
    </div>
  )
}


export default AddProduct
