import React, { useState } from "react";
import GiftList from "../components/giftList";
import Input from "../components/input";
import Navbar from "../components/navbar";

const Home = () => {
  const [keyword, setKeyword] = useState();

  function keywordSeacrh(newKeyword) {
    setKeyword(newKeyword);
  }

  return (
    <section className="bg-secondary">
      <Navbar />
      <Input keywordSeacrh={keywordSeacrh} />
      <div className="mx-5">
        <GiftList keyword={keyword} />
      </div>
    </section>
  );
};

export default Home;
