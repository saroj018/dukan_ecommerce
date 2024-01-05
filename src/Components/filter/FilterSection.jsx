import React, { useContext } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { newContext } from '../../context/ContectProvider'
import { Link } from 'react-router-dom'
import FilterOption from '../../utils/FilterOption'

const FilterSection = () => {

    const { cutCross, setCutCross } = useContext(newContext)
    return (
        <>
            {
                cutCross &&
                <div className='fixed md:sticky h-fit md:h-fit md:mt-5 border-2 border-red-500  top-0 overflow-scroll md:overflow-hidden  w-screen md:w-[1100px] bg-white py-2 '>
                    <div className='flex justify-between px-4 my-2'>
                        <p className='md:ml-6 md:text-red-500 md:font-semibold md:text-xl'>Filter</p>
                        <Link to={'/productgallery'}><RxCross2 className='md:hidden' onClick={() => setCutCross(false)} /></Link>
                    </div>
                    <hr />
                    <div className='my-1 ml-4 md:ml-10'>
                        <p className='text-xl font-semibold'>Rating</p>
                        <FilterOption filterName={'rating'} filterValue={5} filterHeading={'5'} />
                        <FilterOption filterName={'rating'} filterValue={4} filterHeading={'4'} />
                        <FilterOption filterName={'rating'} filterValue={3} filterHeading={'3'} />
                        <FilterOption filterName={'rating'} filterValue={2} filterHeading={'2'} />
                        <FilterOption filterName={'rating'} filterValue={1} filterHeading={'1'} />
                    </div>
                    <hr />

                    <div className='my-3 ml-4 md:ml-10 '>
                        <p className='text-xl font-semibold'>Price</p>
                        <FilterOption filterName={'price'} filterValue={'0-1000'} filterHeading={'Rs 0-Rs 1000'} />
                        <FilterOption filterName={'price'} filterValue={'1000-2000'} filterHeading={'Rs 1000-Rs 2000'} />
                        <FilterOption filterName={'price'} filterValue={'2000-3000'} filterHeading={'Rs 2000-Rs 3000'} />
                        <FilterOption filterName={'price'} filterValue={'3000-4000'} filterHeading={'Rs 3000-Rs 4000'} />
                        <FilterOption filterName={'price'} filterValue={'4000-5000'} filterHeading={'Rs 4000-Rs 5000'} />
                        <FilterOption filterName={'price'} filterValue={'5000'} filterHeading={'up to Rs 5000'} />
                    </div>

                    <hr />

                    <div className='ml-4 my-2 md:ml-10'>
                    <p className='text-xl font-semibold'>Discount</p>
                        <FilterOption filterName={'discount'} filterValue={2} filterHeading={'2%'} />
                        <FilterOption filterName={'discount'} filterValue={4} filterHeading={'4%'} />
                        <FilterOption filterName={'discount'} filterValue={6} filterHeading={'6%'} />
                        <FilterOption filterName={'discount'} filterValue={8} filterHeading={'8%'} />
                        <FilterOption filterName={'discount'} filterValue={10} filterHeading={'10%'} />
                        <FilterOption filterName={'discount'} filterValue={'up to 10'} filterHeading={'up to 10%'} />
                    </div>

                    <button className='bg-red-500 md:hidden text-white px-5 py-2 rounded-sm cursor-pointer ml-[70%]'>Filter</button>
                </div>
            }
        </>
    )
}

export default FilterSection