import React from 'react'
import { AiOutlineMenu, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className=' shadow-md shadow-gray-500 py-3'>
      <nav className='flex justify-between items-center p-4 lg:px-6  text-2xl md:text-3xl lg:text-4xl '>
        <AiOutlineMenu className='md:hidden' />
        <img className='h-[30px]' src="https://www.logolynx.com/images/logolynx/56/56afea50b83164e3e272d4ebeccd94fb.png" alt="" />
        <div className=' relative hidden md:block'>
          <input className='border-2  border-gray-500 text-xl rounded-sm  p-1 w-[55vw]  lg:w-[62vw] outline-none inline-block' type="text" placeholder='Search entire store here....' />
          <AiOutlineSearch className='bg-red-500 absolute left-[100%]  cursor-pointer lg:top-[7px]  top-[2px] text-white text-[40px]' />
        </div>
        <div className='flex gap-3 lg:gap-7 md:text-2xl lg:text-3xl'>
          <AiOutlineUser className='hidden md:block' />
          <AiOutlineHeart />
          <AiOutlineShoppingCart />
        </div>
      </nav>
      <div className=' relative text-center mt-1 md:hidden  '>
        <input className='border-2  border-gray-500 rounded-md p-1 w-[80vw]  mr-6  outline-none inline-block' type="text" placeholder='Search entire store here....' />
        <AiOutlineSearch className='bg-red-500 absolute left-[80%] p-1  cursor-pointer ml-6 bottom-0 text-white text-4xl' />
      </div>
      <nav className='hidden md:block'>
      </nav>

      <nav className=' justify-center items-center px-3 bg-red-500 text-white py-2 my-4 hidden md:block '>
        <ul className='uppercase text-xl font-semibold flex gap-12 justify-center items-center'>
          <li>laptops</li>
          <li>smartphones</li>
          <li>monitors</li>
          <li>grocery</li>
          <li>beauty</li>
          <li>decoration</li>
          <li>accessories</li>
          <li>blogs</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar