import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="h-40 w-60 mb-4 bg-gray-800 text-center text-white">
              <img
                className="h-full w-full rounded-2xl"
                src={props.user.download_url}
                alt={props.user.author}
              />
              <h2>{props.user.author}</h2>
            </div>
    </div>
  )
}

export default Card
