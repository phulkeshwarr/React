import React from 'react'
import Navbar from './components/Navbar'
import Page from './components/Page'
import { useState } from 'react'

const App = () => {

  const [theme, setTheme] = useState('dark')
  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <Page theme={theme} />
    </div>
  )
}

export default App