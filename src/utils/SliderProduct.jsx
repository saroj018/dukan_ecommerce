import React, { useContext, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { newContext } from '../context/ContectProvider';

const SliderProduct = ({children}) => {
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


    return (
        <div>
            <Carousel responsive={responsiveValue}  autoPlay={true}  infinite={true} swipeable={true} draggable={true}>
                {children}
            </Carousel>;
        </div>
    );
};

export default SliderProduct;
