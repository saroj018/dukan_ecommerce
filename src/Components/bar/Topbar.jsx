import React from 'react'
import { Link } from 'react-router-dom'

const Topbar = ({headingName,buttonName}) => {
    return (
        <section className='flex justify-between px-4 my-6'>
            <p className='font-bold'>{headingName}</p>
            <Link to={'/productgallery'}>
            <button className={`${buttonName? 'bg-red-500 p-1  text-white': null}`}>{buttonName}</button>
            </Link>
        </section>
    )
}

export default Topbar