import React, { createContext,  useState } from 'react'

export const newContext=createContext()
const ResponsiveData = ({children}) => {
    

    const[newResponsive,setResponsive]=useState(null)

  return (
    <newContext.Provider value={{newResponsive,setResponsive}}>
        {children}
    </newContext.Provider>
  )
}

export default ResponsiveData