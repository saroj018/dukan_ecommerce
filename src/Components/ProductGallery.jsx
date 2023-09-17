import React from 'react'
import FilterBar from './FilterBar'
import ProductCard from './ProductCard'
import FilterSection from './FilterSection'

const ProductGallery = () => {

    const imageLink = 'https://th.bing.com/th/id/R.5a8f53199ba46f9e5e03b9607bfcfef9?rik=XRKfSNKHGdc3XQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2flaptop-png-laptop-notebook-png-image-1358.png&ehk=mDICWHsP9Z2H9vGsbzdmOu9aZdShchqmCECt83MXorU%3d&risl=&pid=ImgRaw&r=0'
    const productDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, id.'
    const productPrice = 'Rs 25000'
    return (
        <div>
           <section className='md:hidden'>
           <FilterBar />
            <div className='grid grid-cols-2 md:grid-cols-3 md:px-9 md:py-3'>
                <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice} />
                <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice} />
                <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice} />
                <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice} />
                <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice} />
            </div>
           </section>

            <div className='hidden md:flex'>
                <FilterSection />
                <div className='grid grid-cols-2 md:grid-cols-3 md:px-9 md:py-3'>
                    <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice} />
                    <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice} />
                    <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice} />
                    <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice} />
                    <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice} />
                    <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice} />
                    <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice} />
                    <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice} />
                    <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice} />
                </div>
            </div>
        </div>
    )
}

export default ProductGallery