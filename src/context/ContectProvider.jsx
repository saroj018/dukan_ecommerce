import React, { createContext, useState } from 'react'
import useFetch from '../customHook/useFetch'
import { useEffect } from 'react'

export const newContext = createContext()
const ContextProvider = ({ children }) => {


  const [newResponsive, setResponsive] = useState(null)
  const [cutCross, setCutCross] = useState(true)
  const [menuBar, setMenuBar] = useState(false)
  const [apiData, setApiData] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [totalPrice,setTotalPrice]=useState(0)
  const[filteredItem,setFilteredItem]=useState([])



  const fetchURL = `https://dummyjson.com/product`

  useEffect(() => {
    const fetchData = async () => {
      const data = await useFetch(fetchURL)
      setApiData(data.products)
      setFilteredItem(data.products)
    }

    fetchData()
  }, [])

  console.log(apiData);

  const [cartQty, setCartQty] = useState([])

  useEffect(() => {
    let data=apiData.map((ele) => 1)
    setCartQty(data)
  }, [apiData])

  let contextValue = { newResponsive,totalPrice,setTotalPrice, setResponsive, cartQty, setCartQty, cutCross, setCutCross, menuBar, setMenuBar, apiData, setApiData, cartCount, setCartCount,setFilteredItem,filteredItem }

  return (
    <newContext.Provider value={ contextValue}>
      {children}
    </newContext.Provider>
  )
}

export default ContextProvider