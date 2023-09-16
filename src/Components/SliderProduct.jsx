import React, { useContext, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard';
import { newContext } from '../context/ResponsiveData';

const SliderProduct = () => {
    const responsiveValue = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        },
    };

    const{setResponsive}=useContext(newContext)
    useEffect(()=>{
        setResponsive(responsiveValue)
    },[])

    const imageLink='https://th.bing.com/th/id/R.5a8f53199ba46f9e5e03b9607bfcfef9?rik=XRKfSNKHGdc3XQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2flaptop-png-laptop-notebook-png-image-1358.png&ehk=mDICWHsP9Z2H9vGsbzdmOu9aZdShchqmCECt83MXorU%3d&risl=&pid=ImgRaw&r=0'
    const productDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, id.'
    const productPrice='Rs 25000'

    return (
        <div>
            <Carousel  responsive={responsiveValue} swipeable={true} draggable={true}>
                <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice}/>
                <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice}/>
                <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice}/>
                <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice}/>
                <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice}/>
                <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice}/>
                <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice}/>
                <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice}/>
                <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice}/>
                <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice}/>
                <ProductCard imageLink={imageLink} productDescription={productDescription} productPrice={productPrice}/>
            </Carousel>;
        </div>
    );
};

export default SliderProduct;
