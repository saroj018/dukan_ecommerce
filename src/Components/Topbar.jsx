import React from 'react'

const Topbar = ({headingName,buttonName}) => {
    return (
        <section className='flex justify-between px-4 my-6'>
            <p className='font-bold'>{headingName}</p>
            <button className={`${buttonName? 'bg-red-500 p-1  text-white': null}`}>{buttonName}</button>
        </section>
    )
}

export default Topbar