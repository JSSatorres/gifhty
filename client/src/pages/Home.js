import React, { useState } from "react";
import GiftList from "../components/giftList";
import Input from "../components/input";

const Home = () => {
  const [keyword, setKeyword] = useState();

  function keywordSeacrh(newKeyword) {
    setKeyword(newKeyword)
    console.log("la nueva keyword es",newKeyword);
  }

  return (
    <>
      <Input keywordSeacrh={keywordSeacrh} />
      <GiftList keyword={keyword} />
    </>
  );
};

export default Home;
