import { Link } from 'react-router-dom'

const Navbar = () => {
    // Links is used to navigate between different routes without reloading the page
  return (
    <div className="navbar-container">
    <nav className="navbar">
      <h1 className="logo">My App</h1>
    
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/shopping">Shopping</Link></li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
