import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import {AiFillYoutube} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addtocart } from '../../redux/slicer/cartSlice'

const Details = ({itemPrice,itemImage,itemTitle}) => {

    const dispatch=useDispatch()
  return (
    <div>
        <div className='mt-10 md:pl-6'>
            <div className='md:flex md:items-center'>
                <div className='flex justify-center items-center'>
                    <img className='md:w-[600px]' src={itemImage} alt="" />

                </div>
                <div className='ml-4 mt-5 md:w-[40%] md:ml-24' >
                    <p className=' text-xl font-medium'>{itemTitle}</p>
                    <p className='my-2'>Write a Review</p>
                    <p className='text-2xl text-green-500'>{`Rs ${itemPrice}`}</p>
                    <p className='my-3 md:text-lg'>Price is inclusive of VAT.</p>
                    <AiOutlineHeart className='text-4xl cursor-pointer my-5' />

                    <section className=' md:flex  items-center text-xl hidden  my-5'>
                        <div className='flex bg-gray-200 items-center gap-4 font-semibold px-3 w-[33%] rounded-sm h-[51px] '>
                            <p>QTY</p>
                            <p className='cursor-pointer'>+</p>
                            <p className='cursor-pointer'>1</p>
                            <p className='cursor-pointer'>-</p>
                        </div>
                        <div className='bg-red-500 cursor-pointer text-white flex justify-center font-semibold items-center px-3 w-[35%] rounded-sm h-[51px]'>
                            <p onClick={()=>dispatch(addtocart({itemImage,itemPrice,itemTitle}))}>Add to Cart</p>
                        </div>
                    </section>

                    <div className='flex gap-2 items-center'>
                        <span className='text-xl'>Share:</span>
                        <div className='flex gap-6 text-4xl '>
                            <FaFacebook className='text-blue-500 cursor-pointer' />
                            <AiFillYoutube className='text-red-500 cursor-pointer' />
                            <AiOutlineTwitter className='text-blue-400 cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className='uppercase flex justify-center items-center gap-10 my-10 md:text-xl md:font-semibold'>
                    <p>overview</p>
                    <p>specificians</p>
                    <p>reviews</p>
                </div>

            </section>

            <section className=' flex  items-center text-xl w-full fixed left-0 md:hidden  top-[95%] '>
                <div className='flex bg-gray-200 items-center gap-6 font-semibold px-3 w-[50%] rounded-sm h-[51px] '>
                    <p>QTY</p>
                    <p>+</p>
                    <p>1</p>
                    <p>-</p>
                </div>
                <div className='bg-red-500 text-white flex justify-center items-center px-3 w-[50%] rounded-sm h-[51px]'>
                    <p onClick={()=>dispatch(addtocart({itemImage,itemPrice,itemTitle}))}>Add to Cart</p>
                </div>
            </section>

        </div>
    </div>
  )
}

export default Details