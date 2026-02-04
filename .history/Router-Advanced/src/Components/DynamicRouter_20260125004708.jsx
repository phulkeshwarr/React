import React from 'react'
import {useParams} from 'react-router-dom'

const DynamicRouter = () => {
    const params = useParams()
    console.log(params);
  return (
    <div>
      <h1 className="text-2xl font-bold py-9">User ID: {params.id} showing <br /></h1>
      {/* <p>Params: {JSON.stringify(params)}</p> */}
    </div>
  )
}

export default DynamicRouter
