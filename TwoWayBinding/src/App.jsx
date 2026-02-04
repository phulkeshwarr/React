import React from 'react'

const App = () => {
  const [title, setTitle] = React.useState("")
  const SubmitHandler = (e) => {
    e.preventDefault()
    alert("Form Submitted")
    console.log("Form Submitted", title)
    setTitle("") // to clear the input field after submission
  }
  return (
    <div>
      <form className='form' onSubmit={SubmitHandler}>
        <input
          type="text"
          value={title}
          placeholder='Type your name'
          onChange={(e) => {
            const v = e.target.value
            console.log('Typing......')
            console.log(v)
            setTitle(v)
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
