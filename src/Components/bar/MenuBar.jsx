import React, { useContext } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { newContext } from '../../context/ContectProvider'
import { Link } from 'react-router-dom'

const MenuBar = () => {
    const{menuBar,setMenuBar}=useContext(newContext)

    const slideLeft=menuBar ? 'translate-x-38' : '-translate-x-52'
  return (
    <div className={`px-8 py-3 min-w-[30%] h-screen  fixed top-0 left-0 ${slideLeft} bg-white z-10 transition-all  md:hidden`}>
        <RxCross2 className='absolute left-[82%] text-red-500 top-6 text-xl cursor-pointer' onClick={()=>setMenuBar(false)}/>
        <ul className='uppercase mt-6'>
            <Link to={'/all'}><li className='mt-8 cursor-pointer'>All</li></Link>
            <Link to={'/category/laptops'}><li className='mt-8 cursor-pointer'>Laptops</li></Link>
            <Link to={'/category/smartphones'}><li className='mt-8 cursor-pointer'>smartphones</li></Link>
            <Link to={'/category/lighting'}><li className='mt-8 cursor-pointer'>lighting</li></Link>
            <Link to={'/category/groceries'}><li className='mt-8 cursor-pointer'>grosery</li></Link>
            <Link to={'/category/skincare'}><li className='mt-8 cursor-pointer'>skincare</li></Link>
            <Link to={'/category/home-decoration'}><li className='mt-8 cursor-pointer'>decoration</li></Link>
            <Link to={'/category/furniture'}><li className='mt-8 cursor-pointer'>furnitures</li></Link>
            <Link to={'/blogs'}><li className='mt-8 cursor-pointer'>blogs</li></Link>
            <li className='mt-8 cursor-pointer text-red-500 text-xl font-semibold'>account</li>
        </ul>
    </div>
  )
}

export default MenuBar