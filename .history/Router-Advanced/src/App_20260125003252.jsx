import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Contacts from './Components/Contacts'
import Product from './Components/products/Product'
import Men from './Components/products/Men'
import Women from './Components/products/Women'
import Kids from './Components/products/Kids'
import DynamicRouter from './Components/DynamicRouter'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path='/product' element={<Product />} >
            <Route path='men' element={<Men />} />
            <Route path='women' element={<Women />} />
            <Route path='kids' element={<Kids />} />
            <Route path=''></Route>
          </Route>
          {/* <Route path='/product/men' element={<Men />} />        it can replaced with nested routes
          <Route path='/product/women' element={<Women />} /> */}
          <Route path="*" element={<h2 className="text-2xl font-bold">404: Page Not Found</h2>} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
