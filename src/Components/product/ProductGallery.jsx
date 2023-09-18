import React, { useEffect, useState } from 'react'
import FilterBar from '../bar/FilterBar'
import ProductCard from '../product/ProductCard'
import FilterSection from '../filter/FilterSection'
import { Link } from 'react-router-dom'

const ProductGallery = () => {

    const[apiData, setApiData] = useState([])

    const getApiData = async () => {
        try {
            const resp = await fetch('https://dummyjson.com/product')
            const data = await resp.json()
            setApiData(data.products)
        }
        catch (error) {
            console.log(error);
        }
    }
    console.log(apiData);
    useEffect(() => {
        getApiData()
    }, [])


    return (
        <div>
            <section className='md:hidden'>
                <FilterBar />
                <div className='grid grid-cols-2 md:grid-cols-3 md:px-9 md:py-3'>
                    {
                        apiData && apiData.map((ele,index)=>{
                            return(
                                <Link key={index} to={`/productgallery/detail/${ele.id}`}><ProductCard imageLink={ele.thumbnail} productDescription={ele.description} productPrice={`Rs ${ele.price}`} /></Link>
                            )
                        })
                    }
                </div>
            </section>

            <div className='hidden md:flex'>
                <FilterSection />
                <div className='grid grid-cols-2 md:grid-cols-3 md:px-9 md:py-3'>
                   {
                    apiData && apiData.map((ele,index)=>{
                        return(
                            <Link key={index} to={`/productgallery/detail/${ele.id}`}><ProductCard  imageLink={ele.thumbnail} productDescription={ele.description} productPrice={ele.price} /></Link>
                        )
                    })
                   }
                </div>
            </div>
        </div>
    )
}

export default ProductGallery