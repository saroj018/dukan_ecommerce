import React from 'react'
import { BsTrash } from 'react-icons/bs'

const CartItem = ({ itemName, itemPrice, itemImage }) => {
    return (
        <div className='flex items-center bg-gray-100 my-2 justify-between w-[65vw] sm:w-[100vw] gap-4 text-xl px-4 py-2 rounded-md'>
            <div className='flex items-center gap-16'>
                <img className='h-[100px]' src={itemImage} alt="" />
                <p>{itemName}</p>
                <BsTrash />
            </div>

            <div className='flex w-fit gap-6 px-2 font-semibold border-2 border-gray-400  items-center'>
                <p className='cursor-pointer'>+</p>
                <p className='cursor-pointer'>0</p>
                <p className='cursor-pointer'>-</p>
            </div>
            <p>{`Rs ${itemPrice}`}</p>
            
        </div>
    )
}

export default CartItem