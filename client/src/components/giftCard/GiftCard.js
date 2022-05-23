import React from "react";

function GiftCard({ title, id, url }) {
  return (
    <div className="card text-white bg-dark mb-3 col-md-4" key={id}>
      <div className="card-header">{title}</div>
      <div className="card-body">
        <img src={url} alt={title} />
      </div>
    </div>
  );
}

export default GiftCard;
