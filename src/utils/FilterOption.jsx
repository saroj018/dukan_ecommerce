import React, { useContext, useEffect, useState } from 'react'
import { newContext } from '../context/ContectProvider'

const FilterOption = ({ filterHeading, filterName, filterValue }) => {

  const { setFilteredItem ,filteredItem} = useContext(newContext)

  // const [filterValueData, setFilterValueData] = useState()

  
  const filterByRating = (ratingValue) => {
    let filtered = filteredItem.filter((ele) =>ele.rating === 4.44)
    console.log(filtered);
    setFilteredItem(filtered)
  }
  // const filterByPrice = (value) => {
  //   let filteredItem = value.filter((ele, index) => Math.round(ele.rating) === filterValueData)
  //   setFilteredItem(filteredItem)
  // }
  // const filterByDiscount = (value) => {
  //   let filteredItem = value.filter((ele, index) => Math.round(ele.rating) === filterValueData)
  //   setFilteredItem(filteredItem)
  // }


  const getRadioValue = (e) => {
    // setFilterValueData(e.target.value)
    switch (e.target.name) {
      case 'rating': {
        console.log(e.target.value);
        filterByRating(e.target.value)
        break
      }

      case 'price': {
        filterByPrice(e.target.value)
        break
      }

      case 'discount': {
        filterByDiscount(e.target.value)
      }

    }
  }


  return (
    <>
      <input onChange={getRadioValue} value={filterValue} name={filterName} type="radio" /> <span className='ml-2 mt-4 text-lg space-x-2 '>{filterHeading}</span> <br />
    </>
  )
}

export default FilterOption