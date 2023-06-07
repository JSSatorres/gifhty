import React from 'react'
import './giftCard.css'

function GiftCard({ title, id, url }) {
  return (
    <div className="card text-white  mb-3 col-md-3 px-1 mx-5 border border-warning rounded-5 square-in-center-animation background-transition" key={id}>
      <div className="card-header square-in-center-animation">{title}</div>
      <div className="card-body">
        <img className="rounded mx-auto my-auto d-block img-fluid" src={url} alt={title} />
      </div>
    </div>
  )
}

export default GiftCard