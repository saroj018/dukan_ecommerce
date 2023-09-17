import React, { createContext,  useState } from 'react'

export const newContext=createContext()
const ResponsiveData = ({children}) => {
    

    const[newResponsive,setResponsive]=useState(null)
    const[cutCross,setCutCross]=useState(true)
    const[menuBar,setMenuBar]=useState(false)


  return (
    <newContext.Provider value={{newResponsive,setResponsive,cutCross,setCutCross,menuBar,setMenuBar}}>
        {children}
    </newContext.Provider>
  )
}

export default ResponsiveData