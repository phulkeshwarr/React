import React, { createContext, useState, useEffect } from 'react';

/**
 * ThemeContext - A React Context for managing theme state across the application.
 *
 * This context provides a centralized way to manage and share theme-related state
 * (e.g., light/dark mode) without prop drilling. It uses React's Context API to
 * allow components to access and update the theme state from anywhere in the component tree.
 *
 * Key Benefits:
 * - Eliminates prop drilling for theme state
 * - Provides a clean, scalable way to manage global UI state
 * - Makes components more reusable and decoupled
 * - Enables easy theme switching across the entire app
 */
export const ThemeContext = createContext();

/**
 * ThemeProvider - The provider component that wraps the application and supplies theme state.
 *
 * This component:
 * 1. Creates and manages the theme state using useState
 * 2. Provides a toggleTheme function for easy theme switching
 * 3. Applies the theme class to the document body for CSS styling
 * 4. Wraps children with the ThemeContext.Provider to make theme state available
 *
 * Usage:
 * Wrap your app or component tree with <ThemeProvider> to enable theme context.
 *
 * @param {Object} props - React props
 * @param {React.ReactNode} props.children - Child components to be wrapped
 */
const ThemeProvider = ({ children }) => {
  // State to hold the current theme: 'light' or 'dark'
  const [theme, setTheme] = useState('dark');

  /**
   * toggleTheme - Function to switch between light and dark themes.
   *
   * This function toggles the theme state between 'light' and 'dark'.
   * It's provided in the context value so components can easily switch themes.
   */
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  /**
   * useEffect - Applies the current theme to the document body.
   *
   * This effect adds/removes CSS classes on the body element to enable
   * theme-specific styling. It runs whenever the theme state changes.
   */
  useEffect(() => {
    // Remove existing theme classes
    document.body.classList.remove('light-theme', 'dark-theme');
    // Add the current theme class
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  /**
   * Context Value - The object passed to consumers of this context.
   *
   * Contains:
   * - theme: Current theme string ('light' or 'dark')
   * - setTheme: Function to directly set the theme
   * - toggleTheme: Convenience function to toggle between themes
   */
  const contextValue = {
    theme,
    setTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;