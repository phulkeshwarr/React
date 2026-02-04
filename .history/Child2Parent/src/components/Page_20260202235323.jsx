import { useState } from 'react'

const Page = (props) => {
    console.log(props);
    const [theme, setTheme] = useState("light")
  return (
    <div>
        <h1>This is the Page Component</h1>
        <p>this is a {theme} page</p>
        <button onClick={props.changeTheme}>Change Theme</button>
    </div>
  )
}

export default Page