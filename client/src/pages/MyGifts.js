import React from "react";
import MyGiftList from "../components/myGiftList";
import Navbar from "../components/navbar";

const MyGifts = () => {
  return (
    <div className="bg-secondary">
      <Navbar />
      <MyGiftList />
    </div>
  );
};

export default MyGifts;
