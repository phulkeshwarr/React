import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home' 
import About from './Pages/AboutUs'
import Contact from './Pages/Contact'
import ShoppingCard from './Pages/ShoppingCard'
import OurCourses from './Pages/OurCourses'
import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer'
import './App.css'

const App = () => {
  return (
    <div className='app-container'>
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<OurCourses />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/shopping' element={<ShoppingCard />} />
          <Route path='*' element={<div className='div'><h1>404 - Page Not Found</h1></div>} />  {/* Fallback route for undefined paths */}
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
