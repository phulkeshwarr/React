import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

/**
 * Navbar Component - Displays navigation with theme toggle functionality.
 *
 * This component consumes the ThemeContext to access theme state and toggle function.
 * It renders a navigation bar with links and a button to switch between light/dark themes.
 */
const Navbar = () => {
  // Access theme state and toggle function from ThemeContext
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">My App</h1>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
          {/* Theme toggle button - uses toggleTheme from context */}
          <li className="nav-item">
            <button onClick={toggleTheme}>
              Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;