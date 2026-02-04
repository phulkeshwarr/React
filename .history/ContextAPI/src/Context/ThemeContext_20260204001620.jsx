import React, { createContext } from 'react'
createContext

const ThemeContext = (props) => {
  return (
    <div>
        {props.children}
        
    </div>
  )
}

export default ThemeContext