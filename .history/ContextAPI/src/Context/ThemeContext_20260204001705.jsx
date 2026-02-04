import React, { createContext } from 'react'
import {createContext} from 'react'

cont ThemeContext

const ThemeContext = (props) => {
  return (
    <div>
        {props.children}
        
    </div>
  )
}

export default ThemeContext