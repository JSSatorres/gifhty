import React, { useState } from "react";
import GiftList from "../components/giftList";
import Input from "../components/input";
import Navbar from "../components/navbar";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const [keyword, setKeyword] = useState();
  const isUserLogin = useAuth();

  console.log(isUserLogin);

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
