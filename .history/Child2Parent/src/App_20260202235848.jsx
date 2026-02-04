import React from 'react'
import Page from './components/Page'

const App = (props) => {
  return (
    <div>
      <h1>Theme {props.theme}</h1>
      <Page theme changeTheme={props.changeTheme} />
    </div>
  )
}

export default App