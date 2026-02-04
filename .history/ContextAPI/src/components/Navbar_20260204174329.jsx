import React, { useContext,  } from 'react'
import { ThemeContextdata } from '../Context/ThemeContext'

const Navbar = () => {
    const { theme, setTheme } = useContext(ThemeContextdata)
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-logo">My App</h1>
                <ul className="nav-menu">
                    <h2 className="nav-item">
                        <a href="#home" className="nav-link">Home</a>
                    </h2>
                    <h2 className="nav-item">
                        <a href="#about" className="nav-link">About</a>
                    </h2>
                    <h2 className="nav-item">
                        <a href="#contact" className="nav-link">Contact</a>
                    </h2>
                    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode</button>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;