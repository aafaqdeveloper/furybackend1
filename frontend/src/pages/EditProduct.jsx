import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductForm } from '../components'
import { getProduct, getProducts, selectIsLoading, selectProduct, updateProduct, } from '../redux/features/product/productSlice'

const EditProduct = () => {
    const { id } = useParams() 
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isLoading = useSelector(selectIsLoading)

    const productEdit = useSelector(selectProduct)
    console.log(productEdit)

    
    const [product, setProduct] = useState(productEdit)
    const [productImage, setProductImage] = useState("")
    const [imagePreview, setImagePreview] = useState(null)
    const [description, setDescription] = useState("")


    useEffect(() => {
        dispatch(getProduct(id))
    }, [dispatch, id]);

    useEffect(() => {
        setProduct(productEdit)

        setImagePreview(
            productEdit && productEdit.image ? `${productEdit.image.filePath}` : null
        )

        setDescription(
            productEdit && productEdit.description ? productEdit.description : ""
        )
    }, [productEdit])

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setProduct({ ...product, [name]: value})
    }

    const handleImageChange = (e) => {
        setProductImage(e.target.files[0])
        setImagePreview(URL.createObjectURL(e.target.files[0]))
    }

    const saveProduct = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("name", product?.name)
        formData.append("category", product?.category)
        formData.append("quantity", product?.quantity)
        formData.append("price", product?.price)
        formData.append("trending", product?.trending)
        formData.append("sale", product?.sale)
        formData.append("bestseller", product?.bestseller)
        formData.append("person", product?.person)
        formData.append("specific_category", product?.specific_category)

        formData.append("description", description)
        if (productImage) {
           formData.append("image", productImage)
        }

        console.log(...formData)

        await dispatch(updateProduct({id, formData}))
        await dispatch(getProducts())

        navigate("/dashboard")

    }
  return (
    <div className='mx-10'>
        <h3 className='text-2xl py-5'>Edit Product</h3>
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

export default EditProduct
