import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../customHook/useFetch'
import ProductGallery from '../Components/product/ProductGallery'

const Category = () => {

    const [catData, setCatData] = useState([])
    const { category } = useParams()

    const categoryURL = `https://dummyjson.com/products/category/${category}`

    useEffect(() => {
        const fetchFun = async () => {
            const fetchData = await useFetch(categoryURL)
            setCatData(fetchData.products)
        }
        fetchFun()
    }, [category])
    return (
        <section>
            <ProductGallery data={catData} />
        </section>
    )
}

export default Category