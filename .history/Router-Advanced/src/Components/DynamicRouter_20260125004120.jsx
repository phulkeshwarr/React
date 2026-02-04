import React from 'react'
import {useParams} from 'react-router-dom'

const DynamicRouter = () => {
    const params = useParams()
    
  return (
    <div>
      <h1>User ID: {params.id}</h1>
      <p>Params: {JSON.stringify(params)}</p>
    </div>
  )
}

export default DynamicRouter
