import React from 'react'
import Home from './pages/Home'
import Footer from './Components/Footer'
import ResponsiveData from './context/ResponsiveData'
import ProductDetials from './pages/ProductDetials'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <ResponsiveData>
        <Navbar/>
        <Routes>
          <Route path='/productdetail' element={<ProductDetials/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer />
      </ResponsiveData>
    </div>
  )
}

export default App