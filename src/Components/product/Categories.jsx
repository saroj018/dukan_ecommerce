import React from 'react'
import { Link } from 'react-router-dom'

const Categories = ({category,categoryImage,params}) => {
  return (
    <Link to={`/${params}`} className={` h-[280px] p-8 mx-2 flex justify-center items-center flex-col border-2 border-gray-200 rounded-sm`}>
        <img className='w-[200px] ' src={categoryImage} alt="" />
        <p className='  text-2xl mt-5  md:font-semibold uppercase'>{category}</p>
    </Link>
  )
}

export default Categories