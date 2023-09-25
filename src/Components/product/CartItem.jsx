import React from 'react'
import { BsTrash } from 'react-icons/bs'

const CartItem = ({ cartList }) => {
    return (
        <>
            <table className='min-w-[60vw] text-center ' >
                <tr>
                    <th className='min-w-[270px] border-2 border-red-500'>Item</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th>Subtotal</th>
                </tr>

                <tbody>
                    {
                        cartList && cartList.map((ele, index) => {
                            return (
                               <>
                                <tr key={index} className='border-2 border-red-500 sm:text-[15px] h-[100px] md:text-xl'>
                                    <td className='flex items-center gap-10'>
                                        <img className='h-[50px] rounded' src={ele.itemImage} alt="" />
                                        <p className='text-[17px] min-w-[10%]'>{ele.itemTitle}</p>
                                        <BsTrash />
                                    </td>

                                    <td>
                                        <div className='flex justify-between items-center border-2 border-gray-500 px-2'>
                                            <p>+</p>
                                            <p>4</p>
                                            <p>-</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p>{`Rs ${ele.itemPrice}`}</p>
                                    </td>
                                    <td>
                                        <p>Rs 2000</p>
                                    </td>
                                </tr>
                                <br />
                               </>
                            )
                        })
                    }
                </tbody>
            </table>

        </>
    )
}

export default CartItem