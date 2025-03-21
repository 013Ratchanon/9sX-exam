import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Menu from './page/Menu'
import Product from './page/Product'
import Order from './page/Order'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/menu/:id' element={<Product />} />
        <Route path='/order' element={<Order />} />
      </Routes>
    </Router>
  )
}

export default App