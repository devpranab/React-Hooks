import React, { useState } from "react";
//use array destructure better than indexing

const Test = () => {
  const [myName, setMyName] = useState("");
  const [myInfo, setMyInfo] = useState({});

  const changeState = () => {
    setMyName("Pranav");
    setMyInfo({
      age: 22,
      address: "kolkata,India",
    });
  };

  return (
    <div>
      <button onClick={changeState}>Show</button>
      <h2>{myName}</h2>
      <h3>{myInfo.age}</h3>
    </div>
  );
};

export default Test;