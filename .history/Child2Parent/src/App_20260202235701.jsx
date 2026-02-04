import React from 'react'
import Page from './components/Page'

const App = (props) => {
  return (
    <div>
      <h1>Theme </h1>
      <Page changeTheme={props.changeTheme} />
    </div>
  )
}

export default App