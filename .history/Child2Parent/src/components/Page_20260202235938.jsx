import { useState } from 'react'

const Page = (props) => {
    console.log(props);
    const [theme, setTheme] = useState("light")
    function changeTheme() {
        console.log("Theme Changed to ");
        setTheme(theme === "light" ? "dark" : "light")
    }
  return (
    <div>
        <button onClick={props.changeTheme}>Change Theme</button>
    </div>
  )
}

export default Page