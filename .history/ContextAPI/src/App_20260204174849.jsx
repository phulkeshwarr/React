import React from 'react';
import Navbar from './components/Navbar';
import Page from './components/Page';
import ThemeProvider from './Context/ThemeContext';

/**
 * App Component - The root component of the application.
 *
 * This component serves as the entry point and wraps the entire app with the ThemeProvider
 * to make theme context available to all child components. This enables theme management
 * without prop drilling throughout the component tree.
 */
const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Page />
    </ThemeProvider>
  );
};

export default App;