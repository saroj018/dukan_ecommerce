import React from 'react'
import CartItem from '../Components/product/CartItem'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Checkout from '../Components/product/Checkout'

const CartPage = () => {

    const cartList = useSelector((state) => state.cartData.item)
    console.log(cartList);
    return (
        <div className='flex justify-center flex-col md:flex-row gap-6 relative'>
            <div className='px-4'>
                <div>
                    <h1 className='text-center text-3xl font-semibold my-6'>Shopping Cart List</h1>
                </div>
                <CartItem cartList={cartList}/>
                <Link className='flex justify-center' to={'/'}><p className='border-2  flex justify-center border-gray-500 px-3 cursor-pointer text-xl py-2 w-fit  bg-blue-500 text-white outline-none rounded-sm '>Continue Shopping</p></Link>
            </div>
            <Checkout/>
        </div>
    )
}

export default CartPage