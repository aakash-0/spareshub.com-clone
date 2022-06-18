import React from 'react'
import {Routes,Route} from "react-router-dom"
import Cart from '../pages/Cart'
import Homepage from '../pages/Homepage'
import Product from '../pages/Product'
import Products from '../pages/Products'
import { Auth } from './auth/Auth'
function Allrouter() {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/product/product/:id' element={<Product/>}></Route>
        <Route path='/login' element={<Auth/>}></Route>
        <Route path="/cart" element={<Cart/>}>
          
        </Route>
    </Routes>
  )
}

export default Allrouter