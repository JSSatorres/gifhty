import React from "react";

function GiftCard({ title, id, url }) {
  return (
    <div className="card text-white bg-dark mb-3 col-md-3  px-1 mx-5 border border-warning rounded-5" key={id}>
      <div className="card-header">{title}</div>
      <div className="card-body">
        <img class="rounded mx-auto my-auto d-block img-fluid" src={url} alt={title} />
      </div>
    </div>
  );
}

export default GiftCard;
