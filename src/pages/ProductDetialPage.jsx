import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Details from '../Components/product/Details'
import useFetch from '../customHook/useFetch'

const ProductDetials = () => {

    const [details, setDetails] = useState([])
    const { id } = useParams()

    const fetchURL=`https://dummyjson.com/product/${id}`

    useEffect(() => {
        const apiProductDetails=async()=>{
            const data=await useFetch(fetchURL)
            setDetails(data)
        }

        apiProductDetails()
    }, [])

    const newDetail = {
        price: details.price,
        image: details.thumbnail,
        title:details.title,
        description:details.description,
        id:details.id
    }
    
    console.log(details);

    return (
        <Details id={newDetail.id} description={newDetail.description} itemPrice={newDetail.price} itemTitle={newDetail.title} itemImage={newDetail.image}  />
    )
}

export default ProductDetials