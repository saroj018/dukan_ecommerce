import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({imageLink,productDescription,productPrice}) => {
  return (
    
    <Link to={'/productdetail'} className='border-2 border-gray-300 rounded-sm shadow-md mb-3 shadow-gray-300 flex justify-center flex-col mx-2 p-2'>
        <img className='px-6 py-10' src={imageLink} alt="" />
        <div className='p-2'>
            <p >{productDescription ? productDescription:null} </p>
            <p className='text-2xl mt-4 font-semibold text-green-500'> {productPrice ? productPrice: null}</p>
        </div>
    </Link>
  )
}

export default ProductCard