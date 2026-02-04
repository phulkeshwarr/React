import React, { createContext } from 'react'

const ThemeContextdata = createContext()

const ThemeContext = (props) => {
  return (
    <div>
        {props.children}
        
    </div>
  )
}

export default ThemeContext