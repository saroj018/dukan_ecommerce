
import FilterBar from '../bar/FilterBar'
import ProductCard from '../product/ProductCard'
import FilterSection from '../filter/FilterSection'
import { Link } from 'react-router-dom'

const ProductGallery = ({data}) => {

console.log(data.length);

    return (
        <div className='z-0'>
            <section className='md:hidden'>
                <FilterBar />
                <div className='grid grid-cols-2 md:grid-cols-3 md:px-9 md:py-3'>
                    
                      {
                        data.map((ele, index) => (
                          <Link key={index} to={`/productgallery/detail/${ele.id}`}>
                            <ProductCard
                              imageLink={ele.thumbnail}
                              productTitle={ele.title}
                              productDescription={ele.description}
                              productPrice={ele.price}
                            />
                          </Link>
                        ))
                      
                      }
                      
                    
                </div>
            </section>

            <div className='hidden md:flex'>
                {
               Object.keys(data).length>0 && <FilterSection />
                }
                    
                <div className='grid grid-cols-2 md:grid-cols-3 md:px-9 md:py-3'>
                    
                         {data && data.length > 0 ? (
                            data.map((ele, index) => (
                              <Link key={index} to={`/productgallery/detail/${ele.id}`}>
                                <ProductCard
                                  imageLink={ele.thumbnail}
                                  productTitle={ele.title}
                                  productDescription={ele.description}
                                  productPrice={ele.price}
                                />
                              </Link>
                            ))
                          ) : (
                            <h1 className='text-green-500 text-4xl inline-block w-screen text-center'>Item Not Found</h1>
                          )}
                    
                </div>
            </div>
        </div>
    )
}

export default ProductGallery