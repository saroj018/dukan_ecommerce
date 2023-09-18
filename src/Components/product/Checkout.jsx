import React from 'react'

const Checkout = () => {
  return (
    <div className='w-[370px] py-2 px-2 h-fit border-2 border-gray-500 text-xl md:sticky top-[6%] left-[69%]'>
        <div className='flex justify-between mb-6 '>
            <p>Order Summery</p>
            <p>Rs 200</p>
        </div>
        <div className='flex justify-between'>
            <input className='border-2 pl-2 border-gray-500 outline-none h-10 min-w-[75%]' type="text" placeholder='Enter Voucher Code' />
            <button className='bg-red-500 text-white px-4 py-1 rounded-sm cursor-pointer'>Apply</button>
        </div>
        <div className='flex justify-between my-5'>
            <p>Total</p>
            <p>Rs 200</p>
        </div>

        <button className='uppercase bg-red-500 px-4 py-2 text-white w-full'>Proceed to Checkout</button>
    </div>
  )
}

export default Checkout