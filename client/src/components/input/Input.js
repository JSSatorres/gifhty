import React, { useState } from "react";

const Input = ({keywordSeacrh}) => {
  const [inputValue, setInputValue] = useState()

  const handleSubmitKeyword = (e) => {
    keywordSeacrh(inputValue)
  };

  const handleChange = (e) => {
    console.log(inputValue);
    setInputValue(e.target.value);
  };

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <button className="btn btn-outline-secondary" type="submit" onClick={handleSubmitKeyword}>
          Seacrh
        </button>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder=""
        aria-label=""
        aria-describedby="basic-addon1"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Input;
