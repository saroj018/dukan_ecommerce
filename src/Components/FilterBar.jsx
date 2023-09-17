import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { newContext } from '../context/ResponsiveData'

const FilterBar = () => {
    const{setCutCross}=useContext(newContext)

  return (
    <div className='flex justify-between px-3 items-center my-4 text-lg'>
        <div>
            <Link to={'/filtersection'}><button onClick={()=>setCutCross(true)} className='bg-red-500 px-4 py-1 text-white font-semibold rounded-sm cursor-pointer'>Filter</button></Link>
        </div>

        <div>
            <select name="" id="" className='px-4 py-2 rounded-sm border-2 border-green-500 outline-none'>
                <option disabled selected>Sort By</option>
                <option value="">Low to High</option>
                <option value="">High to Low</option>
            </select>
        </div>
    </div>
  )
}

export default FilterBar