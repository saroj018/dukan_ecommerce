import React, { useContext, useEffect, useState } from 'react'
import { BsTrash } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../../redux/slicer/cartSlice'
import { newContext } from '../../context/ContectProvider'

const CartItem = ({ cartList }) => {

    const dispatch = useDispatch()
    const { setTotalPrice, cartQty, setCartQty } = useContext(newContext)



    const addQty = (index) => {
        let data = [...cartQty]
        data[index - 1] += 1
        setCartQty(data)
    }
    const lessQty = (index) => {
        if (cartQty[index-1] > 1) {
            let data = [...cartQty]
            data[index - 1] -= 1
            setCartQty(data)
        }
    }

    useEffect(() => {
        let totalPrice = 0
        for (let i = 0; i < cartList.length; i++) {
            totalPrice += cartList[i].itemPrice * cartQty[cartList[i].id-1]

        }
        setTotalPrice(totalPrice)
        console.log(totalPrice);
    }, [cartList, cartQty])


    return (
        <table className='border-collapse lg:w-[60vw] md:w-[100vw] text-center my-2'>
            <tr className='border-b-2 border-gray-500'>
                <th>Product</th>
                <th>Rate</th>
                <th>Qty</th>
                <th>Acitivity</th>
                <th>Total</th>
            </tr>
            <tbody>
                {
                    cartList.map((ele, index) => {
                        return (
                            <tr key={ele.id}  className='border-b-2 border-gray-500 my-5 ' >
                                <Link to={`/productgallery/detail/${ele.id}`}>
                                <td className='flex justify-center'>
                                    <div className='flex items-center justify-center  flex-col'>
                                        <img className='h-[80px] rounded-md' src={ele.itemImage} alt="" />
                                        <p className='text-xl my-4'>{ele.itemTitle}</p>
                                    </div>
                                </td>
                            </Link>
                                <td>{ele.itemPrice}</td>
                                <td >
                                    <div className='grid grid-cols-3 gap-1 align-middle border border-gray-500 '>
                                        <p onClick={() => addQty(ele.id)} className='cursor-pointer' >+</p>
                                        <p >{cartQty[ele.id-1]}</p>
                                        <p onClick={() => lessQty(ele.id)} className='cursor-pointer' >-</p>
                                    </div>
                                </td>
                                <td>
                                    <button onClick={() => dispatch(removeItem(index))}>Delete</button>
                                </td>
                                <td>{ele.itemPrice * cartQty[ele.id-1]}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default CartItem