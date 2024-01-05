import React, { useContext } from 'react'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Topbar from '../Components/bar/Topbar'
import Categories from '../Components/product/Categories';
import SliderProduct from '../utils/SliderProduct';
import { newContext } from '../context/ContectProvider';
import { bestDeals } from '../dummyData/best-deals';
import { expertPick } from '../dummyData/expert-pick';


const Home = () => {

    const { newResponsive } = useContext(newContext)

    return (
        <>
            <div className='relative z-0 '>
                <div >
                    <Carousel className='mt-5' showArrows={true} autoPlay={true} hei infiniteLoop={true} showIndicators={false} showStatus={false} showThumbs={false}>
                        <div>
                            <img className='md:h-[300px]' src="https://www.jdmedia.co.za/images/carousel/Ecommerce-Banner-1920.jpg" alt="" />

                        </div>
                        <div>
                            <img className='md:h-[300px]' src="https://static.vecteezy.com/system/resources/previews/002/006/774/large_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg" alt="" />

                        </div>
                        <div>
                            <img className='md:h-[300px]' src="https://www.infowiz.co.in/wp-content/uploads/2019/12/ecommerce-banner-1024x392.png" alt="" />

                        </div>
                        <div>
                            <img className='md:h-[300px]' src="https://www.across-magazine.com/wp-content/uploads/2019/04/ecommerce-2607114-1920-500.jpg" alt="" />

                        </div>

                    </Carousel>
                </div>

                <Topbar headingName={'Best Deals'} buttonName={'See All'} />
                <section >
                    <SliderProduct>
                    {
                        bestDeals.map((ele,index)=>{
                            return(
                                <Categories key={index} params={ele.params} categoryImage={ele.image}  category={ele.category} />
                    
                            )
                        })
                    }
                    </SliderProduct>
                </section>

                <Topbar headingName={'Most Visited Categories'} buttonName={'See All'} />
                <section className='grid grid-cols-2 gap-2 md:grid-cols-4 md:px-3'>
                    <Categories params={'furniture'} categoryImage={'https://th.bing.com/th/id/R.2e0d28c0de2cb4ab4e818fc2418e2249?rik=YXfSe07M2Vym3g&pid=ImgRaw&r=0'}  category={'Furniture'} />
                    <Categories params={'smartphones'} categoryImage={'https://th.bing.com/th/id/R.8e71f4a90d09c67ecbc01c067a57e84f?rik=kTnQXcDLG8zYng&pid=ImgRaw&r=0'}  category={'Mobile'} />
                    <Categories params={'laptops'} categoryImage={'https://www.transparentpng.com/thumb/laptop/ZqXDam-laptops-png-images-notebook-png-image-laptop.png'}  category={'Laptops'} />
                    <Categories params={'home-decoration'} categoryImage={'https://th.bing.com/th/id/R.22616f8979004f04dfd55521e126099e?rik=yleymXnWrHLvnQ&pid=ImgRaw&r=0'}  category={'Decoration'} />
                </section>

                <Topbar headingName={'Expert Pick'} buttonName={'See All'} />
                <section >
                    <SliderProduct >
                    {
                expertPick.map((ele,index)=>{
                    return(
                        <Categories key={index} params={ele.params} categoryImage={ele.image}  category={ele.category} />
                    )
                })
               }
                    </SliderProduct>
                </section>

                

                <Topbar headingName={'Top Categories'} buttonName={'See All'} />
                <section>
                <section className='grid grid-cols-2 gap-2 md:grid-cols-4 md:px-3'>
                    <Categories params={'home-decoration'} categoryImage={'https://th.bing.com/th/id/R.22616f8979004f04dfd55521e126099e?rik=yleymXnWrHLvnQ&pid=ImgRaw&r=0'}  category={'Decoration'} />
                    <Categories params={'womens-jewellery'} categoryImage={'https://th.bing.com/th/id/R.bf9e6db8a41975a345b4c1ef50e562ad?rik=aXZL%2b0IeWoNsMg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fjewelry-transparent-background%2fjewelry-transparent-background-5.png&ehk=ECJ2gy0bnpOVSGhygMUmzdqyfvcrD5%2bbF4SdLNI7Ho4%3d&risl=&pid=ImgRaw&r=0'}  category={'Jewellery'} />
                    <Categories params={'skincare'} categoryImage={'https://th.bing.com/th/id/R.4bcfb827221085d617bb202cce100ee6?rik=G8ev1894kkMJ6g&pid=ImgRaw&r=0'}  category={'Skincare'} />
                    <Categories params={'automotive'} categoryImage={'https://th.bing.com/th/id/R.66c3cb142c4341ec2bcca46453e5ee27?rik=h1BX4whIG6jUwQ&pid=ImgRaw&r=0'}  category={'Automotive'} />
                </section>
                </section>

                <Topbar headingName={'Top Brands'} />
                <section >
                    <Carousel dynamicHeight={10} showThumbs={false} responsive={newResponsive} swipeable={true} draggable={true}>
                        {/* <ProductCard  imageLink={'https://www.freedomrenttoown.ca/cms/wp-content/uploads/2016/01/Dell-logo.png'} />
                        <ProductCard  imageLink={'https://th.bing.com/th/id/R.83eab36f8ebe21cd09608ea73d95523a?rik=rss%2beh5LjtGYIw&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f4%2fMicrosoft-Logo-Transparent-Background.png&ehk=rqBs2L0Wm3uKUNNIPlHrIPBJHzHIZCC8ju1yM4NkW2g%3d&risl=&pid=ImgRaw&r=0'} />
                        <ProductCard  imageLink={'https://th.bing.com/th/id/R.51f97b2d95e9614ac2f5b6e8af52ff9b?rik=lZhqqLDrxRlYwg&pid=ImgRaw&r=0'} />
                        <ProductCard  imageLink={'https://www.freedomrenttoown.ca/cms/wp-content/uploads/2016/01/Dell-logo.png'} /> */}

                        {/* <div className='flex gap-2 px-4'>
                            <img className='h-[50px]'  src="https://www.freedomrenttoown.ca/cms/wp-content/uploads/2016/01/Dell-logo.png" alt="" />
                            <img className='h-[50px]'  src="https://th.bing.com/th/id/R.83eab36f8ebe21cd09608ea73d95523a?rik=rss%2beh5LjtGYIw&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f4%2fMicrosoft-Logo-Transparent-Background.png&ehk=rqBs2L0Wm3uKUNNIPlHrIPBJHzHIZCC8ju1yM4NkW2g%3d&risl=&pid=ImgRaw&r=0" alt="" />
                            <img className='h-[50px]' src="https://th.bing.com/th/id/R.51f97b2d95e9614ac2f5b6e8af52ff9b?rik=lZhqqLDrxRlYwg&pid=ImgRaw&r=0" alt="" />
                            <img className='h-[50px]' src="https://www.freedomrenttoown.ca/cms/wp-content/uploads/2016/01/Dell-logo.png" alt="" />
                        </div> */}

                    </Carousel>
                </section>
            </div>
        </>
    )
}

export default Home