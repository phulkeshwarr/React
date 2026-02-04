import React from 'react'

const Page = (props) => {
    console.log(props);
  return (
    <div>
        <h1>This is the Page Component</h1>
        <p>this is a white page</p>
        <button>Change Theme</button>
    </div>
  )
}

export default Page