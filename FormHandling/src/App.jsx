import React from 'react'

const App = () => {

  const SubmitHandler = (e) => {
    e.preventDefault()
    alert("Form Submitted")
    console.log("Form Submitted")
  }
  return (
    <div>
      <form className='form' onSubmit={SubmitHandler}>
        <input type="text" placeholder='Type your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
