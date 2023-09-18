import React from 'react'

const ProductCard = ({imageLink,productDescription,productPrice,addToCart}) => {
  return (
    
    <div className='border-2 border-gray-300 rounded-sm shadow-md mb-3 shadow-gray-300 flex justify-center flex-col mx-2 p-2'>
        <img className='px-6 py-10' src={imageLink} alt="" />
        <div className='p-2'>
            <p >{productDescription ? productDescription:null} </p>
            <p className='text-2xl mt-4 font-semibold text-green-500'> {productPrice ? productPrice: null}</p>
            {
              addToCart ? <button className='bg-red-500 py-2 font-semibold rounded-sm mt-3 px-5 text-white cursor-pointer'>{addToCart}</button> : null
            }
        </div>
    </div>
  )
}

export default ProductCard