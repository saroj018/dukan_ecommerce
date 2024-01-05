import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { newContext } from '../../context/ContectProvider'

const Checkout = () => {
  const { totalPrice } = useContext(newContext)
  const [code, setCode] = useState('')
  const [discountAmount, setDiscountAmount] = useState()
  const [errorFlag, setErrorFlag] = useState(0)

  useEffect(() => {
    if (code === 'SAROJ') {
      let data = totalPrice - totalPrice * 10 / 100
      setDiscountAmount(data)
      setErrorFlag(null)
    }
    else {
      setDiscountAmount(totalPrice)
      if (code === '') {
        setErrorFlag(0)
      }
      else {

        setErrorFlag(1)
      }
    }
  }, [code, totalPrice])





  return (
    <div className='w-[370px] py-2 px-2 h-fit border-2 border-gray-500 xl:text-xl md:sticky top-[6%] left-[69%]'>
      <div className='flex justify-between mb-6 '>
        <p>Gross Total</p>
        <p>{`Rs ${totalPrice}`}</p>
      </div>
      <div className='flex justify-between'>
        <input onChange={(e) => setCode(e.target.value)} className='border-2 pl-2 border-gray-500 outline-none h-10 min-w-[75%]' type="text" placeholder='Enter Voucher Code' />
        {/* <button className='bg-red-500 text-white px-4 py-1 rounded-sm cursor-pointer'>Apply</button> */}
      </div>
      <p className={` text-lg ${errorFlag === 1 ? 'text-red-500' : 'text-green-500'}`}>{`${errorFlag === 0 ? "Enter 'SAROJ' for 10% Discount" : errorFlag === 1 ? 'Invalid Coupon Code' : ''}`}
      </p>
      <div className='flex justify-between my-5'>
        <p>Net Total</p>
        <p>{`Rs ${discountAmount ? discountAmount : totalPrice}`}</p>
      </div>

      <button className='uppercase bg-red-500 px-4 py-2 text-white w-full'>Proceed to Checkout</button>
    </div>
  )
}

export default Checkout