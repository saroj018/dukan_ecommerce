import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/product/ProductCard'
import { useParams } from 'react-router-dom'
import FilterSection from '../Components/filter/FilterSection'
import { Link } from 'react-router-dom'
import FilterBar from '../Components/bar/FilterBar'
import useFetch from './hooks/useFetch'

const Category = () => {

    const [catData, setCatData] = useState([])
    const { category } = useParams()
    console.log(category);

    const categoryURL = `https://dummyjson.com/products/category/${category}`

    useEffect(() => {
        const fetchFun = async () => {
            const fetchData = await useFetch(categoryURL)
            console.log(fetchData.products);
            setCatData(fetchData.products)
        }
        fetchFun()
    }, [category])
    return (
        <section>

            <section className='md:hidden'>
                <FilterBar />
                <div className='grid grid-cols-2 md:grid-cols-3 md:px-9 md:py-3'>
                    {
                        catData && catData.map((ele, index) => {
                            return (
                                <div key={index}>
                                    <ProductCard productTitle={ele.title} imageLink={ele.thumbnail} productDescription={ele.description} productPrice={ele.price} produc />
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            <div className='hidden md:flex'>
                <FilterSection />
                <div className='grid-cols-2 grid md:grid-cols-3 gap-3 md:px-9 md:py-3'>
                    {
                        catData && catData.map((ele, index) => {
                            return (
                                <div key={index}>
                                    <Link to={`/productgallery/detail/${ele.id}`}><ProductCard productTitle={ele.title} imageLink={ele.thumbnail} productDescription={ele.description} productPrice={ele.price} produc /></Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Category