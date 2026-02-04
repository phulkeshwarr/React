import React from 'react'
import { use } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [Num, setNum] = useState(0)

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  useEffect(() => {
    console.log('UseEffect is runing...')
  }, [count])

  useEffect(function() {
    console.log('UseEffect is runing....')
  }, [Num])

  // useEffect(() => {
  //   console.log('UseEffect for a and b is running...')
  // }, [a, b])  // it will run when 'a' or 'b' changes

  useEffect(() => {
    console.log('UseEffect for a is running...')
  }, [a])  // it will run only when 'a' changes

  useEffect(() => {
    console.log('UseEffect for b is running...')
  }, [b])  // it will run only when 'b' changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Num: {Num}</p>
      <button onClick={() => setNum(Num + 10)}>Increment Num</button>

      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={() => setA(a + 1)}>Increment A</button>
      <button onClick={() => setB(b + 5)}>Increment B</button>
    </div>
  )
}

export default App
