import React from 'react'
import ProductCard from '../Components/product/ProductCard'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const WishListPage = () => {

  const wishListItem =useSelector((state)=>state.wishlistData.item)
  // const filterWishListItem=wishListItem.filter((ele,index,arr)=>{
  //   return arr.findIndex((element)=>element.id===ele.id)===index
  // })
// console.log(filterWishListItem);
  return (
    <>
    <h1 className='text-center my-6 underline text-red-500 text-5xl'>WishList</h1>
    <div className='md:grid-cols-4 grid grid-cols-2'>
        {
          wishListItem.length>0 ?
          wishListItem?.map((ele,index)=>{
            return(
              <Link key={ele.id} to={`/productgallery/detail/${ele.id}`}><ProductCard key={index} imageLink={ele.itemImage} productTitle={ele.itemTitle} productDescription={ele.description} productPrice={ele.itemPrice} productId={index} showIcon={true}/></Link>
        
            )
          }): <h1 className='text-4xl text-green-500 text-center  inline-block w-screen'>There is not any WishList Item</h1>
        }
    </div>
    </>
  )
}

export default WishListPage