import React, { useContext, useEffect, useState } from 'react'
import CartItem from '../Components/product/CartItem'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Checkout from '../Components/product/Checkout'
import { newContext } from '../context/ContectProvider'

const CartPage = () => {

    // const[cartList,setCartList]=useState( useSelector((state)=>state.cartData.item))
    const cartList = useSelector((state) => state.cartData.item)


    console.log(cartList);

    return (
        <>
            <div className={`flex justify-center flex-col md:flex-row relative ${cartList.length >= 1 ? 'block' : 'hidden'}`}>
                <div className='px-4'>
                    <div>
                        <h1 className='text-center text-3xl font-semibold my-6'>Shopping Cart List</h1>
                    </div>
                    <CartItem cartList={cartList} />
                </div>
                <Checkout />
            </div>
                <h1 className={`text-center my-6 text-4xl text-green-500 ${cartList.length >= 1 ? 'hidden' : 'block'}`}>There is not any products</h1>
            <Link className='flex w-fit mx-auto justify-center my-5' to={'/'}><button className='border-2  border-gray-500 px-3 cursor-pointer text-xl py-2 w-fit  bg-blue-500 text-white outline-none rounded-sm '>Continue Shopping</button></Link>
        </>
    )
}

export default CartPage