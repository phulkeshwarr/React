import React from 'react'
import Page from './components/Page'

const App = (props) => {
  return (
    <div>
      <Page changeTheme={props.changeTheme} />
    </div>
  )
}

export default App