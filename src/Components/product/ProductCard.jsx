import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { removeWishList } from '../../redux/slicer/wishListSlice'

const ProductCard = ({ imageLink, productDescription, productTitle, productPrice, addToCart,showIcon,productId }) => {

  let description = productDescription.slice(0, 150)
  const dispatch=useDispatch()

  const clickClose = (event,productId) => {
    event.preventDefault();
    dispatch(removeWishList(productId ));
  };
  
  return (

    <div className='border-2 h-[500px] relative border-gray-300 rounded-sm shadow-md mb-3 shadow-gray-300 flex justify-center flex-col mx-2 p-2'>
      {showIcon&&<AiFillCloseCircle onClick={clickClose}  className={`absolute left-[86%] top-1 text-3xl`} />}
      
      <img className='px-6 py-10 max-h-[250px]' src={imageLink} alt="" />
      <div className='p-2'>
        <p className='text-xl my-3 font-semibold md:font-bold min-h-[20px]'>{productTitle}</p>
        <p className='max-h-[180px]' >{productDescription ? description : null} </p>
        <p className='text-2xl mt-4 font-semibold text-green-500'> Rs {productPrice ? productPrice : null}</p>
        {
          addToCart ? <button className='bg-red-500 py-2 font-semibold rounded-sm mt-3 px-5 text-white cursor-pointer'>{addToCart}</button> : null
        }
      </div>
    </div>
  )
}

export default ProductCard