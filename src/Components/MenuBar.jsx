import React, { useContext } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { newContext } from '../context/ResponsiveData'

const MenuBar = () => {
    const{menuBar,setMenuBar}=useContext(newContext)

    const slideLeft=menuBar ? 'translate-x-38' : '-translate-x-52'
  return (
    <div className={`px-8 py-3 w-[50%] h-screen  fixed top-0 left-0 ${slideLeft} bg-white z-10 transition-all md:hidden`}>
        <RxCross2 className='absolute left-[82%] text-red-500 top-6 text-xl cursor-pointer' onClick={()=>setMenuBar(false)}/>
        <ul className='uppercase mt-6'>
            <li className='mt-8 cursor-pointer'>Laptops</li>
            <li className='mt-8 cursor-pointer'>smartphones</li>
            <li className='mt-8 cursor-pointer'>monitors</li>
            <li className='mt-8 cursor-pointer'>grosery</li>
            <li className='mt-8 cursor-pointer'>beauty</li>
            <li className='mt-8 cursor-pointer'>decoration</li>
            <li className='mt-8 cursor-pointer'>accessories</li>
            <li className='mt-8 cursor-pointer'>blogs</li>
            <li className='mt-8 cursor-pointer text-red-500 text-xl font-semibold'>account</li>
        </ul>
    </div>
  )
}

export default MenuBar