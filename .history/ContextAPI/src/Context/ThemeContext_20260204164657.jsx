import React, { createContext, useState } from 'react'

export const ThemeContextdata = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  return (
    <ThemeContextdata.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContextdata.Provider>
  )
}

export default ThemeProvider