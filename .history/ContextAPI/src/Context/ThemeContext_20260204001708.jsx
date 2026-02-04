import React, { createContext } from 'react'
import {createContext} from 'react'

cont ThemeContextdata = createContext()

const ThemeContext = (props) => {
  return (
    <div>
        {props.children}
        
    </div>
  )
}

export default ThemeContext