import React from 'react'

const Categories = ({colorName,category}) => {
  return (
    <div className={`bg-${colorName}-200 p-4`}>
        <img className='w-[200px]' src="https://www.pngmart.com/files/4/Gaming-Computer-PNG-Picture.png" alt="" />
        <p className='text-center text-2xl mt-3 uppercase'>{category}</p>
    </div>
  )
}

export default Categories