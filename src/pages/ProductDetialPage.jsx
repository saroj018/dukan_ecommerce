import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Details from '../Components/product/Details'

const ProductDetials = () => {

    const [details, setDetails] = useState([])
    const { id } = useParams()
    console.log(id);

    const apiProductDetails = async () => {
        const resp = await fetch(`https://dummyjson.com/product/${id}`)
        const data = await resp.json()
        setDetails(data)
    }
    console.log(details);

    useEffect(() => {
        apiProductDetails()
    }, [])

    const newDetail = {
        price: details.price,
        image: details.thumbnail,
        title:details.title
    }

    


    return (
        <Details  itemPrice={newDetail.price} itemTitle={newDetail.title} itemImage={newDetail.image}  />
    )
}

export default ProductDetials