import React from "react";

function GiftCard({title, id, url}) {
  return (
    <div key={id}>
      <h5> {title}</h5>
      <img src={url} alt={title} />
    </div>
  );
}

export default GiftCard;
