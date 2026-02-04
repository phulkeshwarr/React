import React from 'react'

// Local Storage - It is used to store data in the browser's local storage. The data stored in local storage is persistent and remains even after the browser is closed.

const App = () => {
  // localStorage.setItem('appName', 'Local Storage App')
  // localStorage.setItem('Name', 'Phulkeshwar Mahto')
  // localStorage.setItem('age', '18')
  // localStorage.setItem('city', 'Ranchi')

  const name = localStorage.getItem('Name')
  const age = localStorage.getItem('age')
  const city = localStorage.getItem('city')
  const appName = localStorage.getItem('appName')

  localStorage.removeItem('city') // It removes the item with the specified key from local storage
  // localStorage.clear() // It removes all the items from local storage

  console.log(name)
  console.log(age)
  console.log(city)
  console.log(appName)

  const user = {  // Storing object in local storage
    name: 'Phulkeshwar Mahto',
    age: 18,
    city: 'Ranchi',
    college: 'NIAMT Ranchi'
  }

  localStorage.setItem('user', JSON.stringify(user)) // Storing object as a string (object to strings conversion)
  console.log(typeof user)

  // const userData = localStorage.getItem('user')  // Retrieving the object as a string
  // const userData = JSON.parse(localStorage.getItem('user')) // Retrieving and parsing the object
  // console.log(userData)
  // console.log(typeof userData)

  return (
    <div>
      <h1>Welcome to Local Storage App</h1>
    </div>
  )
}

export default App
