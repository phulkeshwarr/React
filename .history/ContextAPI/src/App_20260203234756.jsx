import React from 'react'
import Navbar from './components/Navbar'
import Page from './components/Page'
import { useState } from 'react'

const App = () => {

  const [theme, settheme] = useState(second)
  return (
    <div>
      <Navbar />
      <Page />
    </div>
  )
}

export default App