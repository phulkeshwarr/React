import React from 'react'
import Navbar from './components/Navbar'
import Page from './components/Page'
import ThemeProvider from './Context/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Page />
    </ThemeProvider>
  )
}

export default App