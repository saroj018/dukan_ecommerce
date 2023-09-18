import React from 'react'
import ProductCard from '../Components/product/ProductCard'

const WishListPage = () => {

    const imageLink = 'https://th.bing.com/th/id/R.5a8f53199ba46f9e5e03b9607bfcfef9?rik=XRKfSNKHGdc3XQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2flaptop-png-laptop-notebook-png-image-1358.png&ehk=mDICWHsP9Z2H9vGsbzdmOu9aZdShchqmCECt83MXorU%3d&risl=&pid=ImgRaw&r=0'
    const productDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, id.'
    const productPrice = 'Rs 25000'
  return (
    <>
    <h1 className='text-center my-6 text-red-500 text-5xl'>WishList</h1>
    <div className='md:grid-cols-4 grid grid-cols-2'>
        <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice} addToCart={'Add to Cart'}/>
        <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice} addToCart={'Add to Cart'}/>
        <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice} addToCart={'Add to Cart'}/>
        <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice} addToCart={'Add to Cart'}/>
        <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice} addToCart={'Add to Cart'}/>
        <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice} addToCart={'Add to Cart'}/>
        <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice} addToCart={'Add to Cart'}/>
    </div>
    </>
  )
}

export default WishListPage