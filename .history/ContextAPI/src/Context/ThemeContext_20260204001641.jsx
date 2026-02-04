import React, { createContext } from 'react'
const ThemeContext = createContext()
const ThemeContextProvider = (props) => {
  return (
    <div>
        {props.children}
        
    </div>
  )
}

export default ThemeContext