import React from 'react'
import Home from './pages/Home'
import Footer from './Components/bar/Footer'
import ResponsiveData from './context/ResponsiveData'
import ProductDetialPage from './pages/ProductDetialPage'
import Navbar from './Components/bar/Navbar'
import { Route, Routes } from 'react-router-dom'
import ProductGallery from './Components/product/ProductGallery'
import FilterSection from './Components/filter/FilterSection'
import CartPage from './pages/CartPage'
import WishListPage from './pages/WishListPage'
import Category from './pages/Category'

const App = () => {
  return (
    <div>
      <ResponsiveData>
        <Navbar/>
        <Routes>
          <Route path='productgallery/detail/:id' element={<ProductDetialPage/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/productgallery' element={<ProductGallery/>}/>
          <Route path='/filtersection' element={<FilterSection/>}/>
          <Route path='/cartlist' element={<CartPage/>}/>
          <Route path='/wishlist' element={<WishListPage/>}/>
          <Route path='/category/:category' element={<Category/>}/>
          <Route path='/:category' element={<Category/>}/>
          {/* <Route path='/blogs' element={<Blogs/>}/> */}
        </Routes>
        <Footer />
      </ResponsiveData>
    </div>
  )
}

export default App