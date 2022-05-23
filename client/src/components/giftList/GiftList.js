import React, { useEffect, useState } from "react";
import apiGiphy from "../../services/apiGiphy";
import GiftCard from "../giftCard/GiftCard";

const GiftList = ({keyword}) => {
  const [gifs, setGifs] = useState();

  // useEffect(() => {
  //   apiGiphy("rick").then((apiGifts) => {
  //     console.log(apiGifts);
  //     setGifs(apiGifts);
  //   });
  // }, []);

  useEffect(() => {
    apiGiphy(keyword).then((apiGifts) => {
      console.log(apiGifts);
      setGifs(apiGifts);
    });
  }, [keyword]);
  return (
    <section className="row">
      {gifs
        ? gifs.map((singleGift) => {
            return (
              <GiftCard
                key={singleGift.id}
                title={singleGift.title}
                id={singleGift.id}
                url={singleGift.url}
              />
            );
          })
        : null}
    </section>
  );
};

export default GiftList;
