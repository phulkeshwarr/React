import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (card) => {
  return (
    <div className='Parent'>
    <div className="card">

        {/* TOP */}
        <div className="top">
          <a href={card.weblink}><img
            src={card.img}
            alt="logo"
          /></a>
          <button>
            Save <Bookmark size={12} strokeWidth={1.5} />
          </button>
        </div>

        {/* CENTER */}
        <div className="center">
          <h3>
            {card.company} <span>{card.posted}</span>
          </h3>
          <h2>{card.post}</h2>

          <div className="tags">
            <h4 className='tag'>{card.tag1} </h4>
            <h4>{card.tag2} </h4>         
          </div>
        </div>

        {/* BOTTOM */}
        <div><hr /></div>
        <div className="bottom">
          <p>{card.pay}<br />
            <span> {card.location}</span>
          </p>
          <a href='apply.in'><button>Apply now</button></a>
        </div>
        </div>
      </div>
  )
}

export default Card
