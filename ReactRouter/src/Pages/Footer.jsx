import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <h3>Important Links</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1rem' }}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/courses">Our Courses</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/shopping">Shopping Cart</a></li>
        </ul>
        <p>&copy; 2024 My Company. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

