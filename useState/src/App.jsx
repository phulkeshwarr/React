
import React, { useState } from 'react'

const App = () => {
  let count = 0

    const handleClick = () => {
        count += 1
        console.log(count)
    }

    const [num, setNum] = useState(0)
    const [Username, setUsername] = useState("Phulkeshwar Mahto")
    const [user, setUser] = useState({name: "Phulkeshwar Mahto", age: 24})
    const [array, setArray] = useState([1,2,3,4,5])

    function change() {
        setNum(num)  
        setUsername("STT")
    }

    const decrement = () => {  
        setNum(num - 1)
    }
    const increment = () => {
        setNum(num + 1)
    }

    const changeName = () => {
        const newName = {name: "STT", age: 25}
        setUser(newName)
        console.log(user)
    }

    const changeArray = () => {
        const newArray = [...array, 6]
        newArray.push(7)
        newArray.push(8)
        newArray.pop()
        setArray(newArray)  
        console.log(array)
    }

    const ConcateArray = () => {
        // setArray(prev => ([...prev, 6,7,8]))
        setArray(prev => (prev+1)) // This will not work as prev is an array not a number
    }



  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={handleClick}>Click me</button>
        <p>Count: {count}</p>
        <div>
        <button><h2>{num} </h2><br /></button>
        </div>
        <div>
        <button onClick={decrement}><br />Decrement State </button>
        <button onClick={increment}>Increment State </button>
        <button onClick={() => setNum(num + 5)}>Jump by 5</button>
        </div>
        <h2>The Username is {Username}</h2>
        <button onDoubleClick={change}>{Username}</button>
        <h2>The name is {user.name} and age is {user.age}</h2>
        <button onClick={changeName}>Change Name</button>
        <h2>The array is {array.join(", ")}</h2>  {/* join is used to convert array to string with separator */}
        <button onClick={changeArray}>Change Array</button>
        <button onClick={ConcateArray}>Concate Array</button>
    </div>
  )
}

export default App
