import React, { useContext } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { newContext } from '../../context/ResponsiveData'
import { Link } from 'react-router-dom'

const FilterSection = () => {

    const { cutCross, setCutCross } = useContext(newContext)
    return (
        <>
            {
                cutCross &&
                <div className='fixed md:static h-screen md:h-fit md:mt-5 z-10 top-0 overflow-scroll md:overflow-hidden  w-screen md:w-[80%] bg-white py-2 '>
                    <div className='flex justify-between px-4 my-2'>
                        <p className='md:ml-6 md:text-red-500 md:font-semibold md:text-xl'>Filter</p>
                        <Link to={'/productgallery'}><RxCross2 className='md:hidden' onClick={() => setCutCross(false)} /></Link>
                    </div>
                    <hr />
                    <div className='my-1 ml-4 md:ml-10'>
                        <p className='text-xl font-semibold'>Processor</p>
                        <input name='processor' type="radio" />
                        <span className='ml-2 mt-4'>Inter Core Processor</span>
                    </div>
                    <hr />

                    <div className='my-3 ml-4 md:ml-10 '>
                        <p className='text-xl font-semibold'>Price Range</p>
                        <input name='pricename' type="radio" /> <span className='ml-2 mt-4 text-lg space-x-2 '>Rs 0 to Rs 999</span> <br />
                        <input name='pricename' type="radio" /> <span className='ml-2 mt-4 text-lg space-x-2 '>Rs 1000 to Rs 3999</span> <br />
                        <input name='pricename' type="radio" /> <span className='ml-2 mt-4 text-lg space-x-2 '>Rs 4000 to Rs 5999</span> <br />
                        <input name='pricename' type="radio" /> <span className='ml-2 mt-4 text-lg space-x-2 '>Rs 6000 to Rs 9999</span> <br />
                        <input name='pricename' type="radio" /> <span className='ml-2 mt-4 text-lg space-x-2 '>Rs 10000 Up To</span>

                    </div>

                    <hr />

                    <div className='ml-4 my-2 md:ml-10'>
                        <p className='text-xl font-semibold my-2'>Type</p>
                        <input name='type' type="radio" /> <span className='ml-2 mt-4 text-lg space-x-2'>Gamming</span> <br />
                        <input name='type' type="radio" /> <span className='ml-2 mt-4 text-lg space-x-2'>Ultrabook</span> <br />
                        <input name='type' type="radio" /> <span className='ml-2 mt-4 text-lg space-x-2'>Business</span> <br />
                        <input name='type' type="radio" /> <span className='ml-2 mt-4 text-lg space-x-2'>2-in-1</span>
                    </div>

                    <hr />
                    <div className='ml-4 my-2 md:ml-10'>
                        <p className='text-xl font-semibold my-2'>SSD</p>
                        <input name='ssd' type="radio" /> <span className='ml-2 mt-4 text-lg space-x-2'>164 GB</span> <br />
                        <input name='ssd' type="radio" /> <span className='ml-2 mt-4 text-lg space-x-2'>256 GB</span> <br />
                        <input name='ssd' type="radio" /> <span className='ml-2 mt-4 text-lg space-x-2'>400 GB</span> <br />
                        <input name='ssd' type="radio" /> <span className='ml-2 mt-4 text-lg space-x-2'>500 GB</span>
                    </div>

                    <hr />

                    <div className='ml-4 md:ml-10 my-3'>
                        <p className='text-xl font-semibold my-2'>RAM</p>
                        <input name='ram' type="radio" /> <span className='ml-2 mt-4 text-lg space-x-2'>4 GB</span> <br />
                        <input name='ram' type="radio" /> <span className='ml-2 mt-4 text-lg space-x-2'>8 GB</span> <br />
                        <input name='ram' type="radio" /> <span className='ml-2 mt-4 text-lg space-x-2'>12 GB</span> <br />
                        <input name='ram' type="radio" /> <span className='ml-2 mt-4 text-lg space-x-2'>16 GB</span>
                    </div>

                    

                    <button className='bg-red-500 md:hidden text-white px-5 py-2 rounded-sm cursor-pointer ml-[70%]'>Filter</button>
                </div>
            }
        </>
    )
}

export default FilterSection