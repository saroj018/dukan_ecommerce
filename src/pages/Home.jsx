import React, { useContext } from 'react'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductCard from '../Components/ProductCard';
import Topbar from '../Components/Topbar'
import Categories from '../Components/Categories';
import SliderProduct from '../Components/SliderProduct';
import { newContext } from '../context/ResponsiveData';


const Home = () => {

    const{newResponsive}=useContext(newContext)
    return (
        <div>
            <div>
                <Carousel className='mt-5'  showArrows={true} autoPlay={true} hei infiniteLoop={true} showIndicators={false} showStatus={false} showThumbs={false}>
                    <div>
                        <img className='md:h-[300px]' src="https://i.ytimg.com/vi/1k8vCKcvHTg/maxresdefault.jpg" alt="" />

                    </div>
                    <div>
                        <img className='md:h-[300px]' src="https://i.ytimg.com/vi/1k8vCKcvHTg/maxresdefault.jpg" alt="" />

                    </div>
                    <div>
                        <img className='md:h-[300px]' src="https://i.ytimg.com/vi/1k8vCKcvHTg/maxresdefault.jpg" alt="" />

                    </div>
                    <div>
                        <img className='md:h-[300px]' src="https://i.ytimg.com/vi/1k8vCKcvHTg/maxresdefault.jpg" alt="" />

                    </div>

                </Carousel>
            </div>

            <Topbar headingName={'Best Deals'} buttonName={'See All'} />
            <section >
                <SliderProduct/>
            </section>

            <Topbar headingName={'Most Visited Categories'} buttonName={'See All'} />
            <section className='grid grid-cols-2 gap-2 md:grid-cols-4 md:px-3'>
                <Categories colorName={'red'} category={'Gamming'} />
                <Categories colorName={'red'} category={'Mobile'} />
                <Categories colorName={'blue'} category={'Laptops'} />
                <Categories colorName={'blue'} category={'Television'} />
            </section>

            <Topbar headingName={'Expert Pick'} buttonName={'See All'} />
            <section >
            <SliderProduct/>
            </section>

            <Topbar headingName={'Gamming Categories'} buttonName={'See All'} />
            <section className='grid grid-cols-2 gap-2 md:grid-cols-4 md:px-3'>
                <Categories category={'Gamming Laptop'} colorName={'red'} />
                <Categories category={'Gamming CPU'} colorName={'blue'} />
                <Categories category={'Gamming Monitor'} colorName={'blue'} />
                <Categories category={'Gamming Keyword'} colorName={'red'} />
            </section>

            <Topbar headingName={'Top Categories'} buttonName={'See All'} />
            <section>
                <SliderProduct/>
            </section>

            <Topbar headingName={'Top Brands'} />
            <section>
            <Carousel dynamicHeight={10}  responsive={newResponsive} swipeable={true} draggable={true}>
                <ProductCard imageLink={'https://www.freedomrenttoown.ca/cms/wp-content/uploads/2016/01/Dell-logo.png'}/>
                <ProductCard imageLink={'https://th.bing.com/th/id/R.83eab36f8ebe21cd09608ea73d95523a?rik=rss%2beh5LjtGYIw&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f4%2fMicrosoft-Logo-Transparent-Background.png&ehk=rqBs2L0Wm3uKUNNIPlHrIPBJHzHIZCC8ju1yM4NkW2g%3d&risl=&pid=ImgRaw&r=0'}/>
                <ProductCard imageLink={'https://th.bing.com/th/id/R.51f97b2d95e9614ac2f5b6e8af52ff9b?rik=lZhqqLDrxRlYwg&pid=ImgRaw&r=0'}/>
                <ProductCard imageLink={'https://www.freedomrenttoown.ca/cms/wp-content/uploads/2016/01/Dell-logo.png'}/>
                
            </Carousel>
            </section>
        </div>
    )
}

export default Home