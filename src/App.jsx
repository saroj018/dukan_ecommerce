import React, { useContext } from 'react'
import Home from './pages/Home'
import Footer from './Components/bar/Footer'
import ProductDetialPage from './pages/ProductDetialPage'
import Navbar from './Components/bar/Navbar'
import { Route, Routes } from 'react-router-dom'
import ProductGallery from './Components/product/ProductGallery'
import FilterSection from './Components/filter/FilterSection'
import CartPage from './pages/CartPage'
import WishListPage from './pages/WishListPage'
import Category from './pages/Category'
import  { newContext } from './context/ContectProvider'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {

  const{filteredItem}=useContext(newContext)

  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='productgallery/detail/:id' element={<ProductDetialPage/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/productgallery' element={<ProductGallery data={filteredItem}/>}/>
          <Route path='/filtersection' element={<FilterSection/>}/>
          <Route path='/cartlist' element={<CartPage/>}/>
          <Route path='/wishlist' element={<WishListPage/>}/>
          <Route path='/category/:category' element={<Category/>}/>
          <Route path='/:category' element={<Category/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
        <Footer />
    </div>
  )
}

export default App