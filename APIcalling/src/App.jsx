import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])

  const getDataa =  () => {  // then catch method - not async await { it returns promise then we handle it with then catch }
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setData(data)
      })
      .catch(error => console.error('Error fetching data:', error))
  }

  const getData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const fetchedData = await response.json()
      console.log(fetchedData)
      setData(fetchedData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
 
  const getDataUsingAxios = async () => { // axios is based on promise so we can use async await. it is easier to use than fetch and it has more features
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(response) // in axios the data is in response.data
      console.log(response.data)
      setData(response.data)
    }
    catch (error) {
      console.error('Error fetching data with Axios:', error)
    }
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <button onClick={getDataa}>Get Dataa</button>
      <button onClick={getDataUsingAxios}>Get Data Using Axios</button>
      <div>
        {data.map(function(item){
            return <h3 key={item.id}>{item.name}</h3>
          })}
      </div>
    </div>
  )
}

export default App
