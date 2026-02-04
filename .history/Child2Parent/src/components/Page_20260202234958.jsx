import React from 'react'

const Page = (props) => {
    console.log(props);
    const [first, setfirst] = useState(second)
    function changeTheme() {
        console.log("Theme Changed");
        
    }
  return (
    <div>
        <h1>This is the Page Component</h1>
        <p>this is a white page</p>
        <button onClick={props.changeTheme}>Change Theme</button>
    </div>
  )
}

export default Page