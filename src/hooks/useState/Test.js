import React, {useState} from "react";

const Test = () => {
    const [myName, setMyName] = useState("");
    const [myInfo, setMyInfo] = useState([1,2,3]);

    const changeState = () => {
        setMyName("Pranav");
        console.log(...myInfo);
        setMyInfo(...myInfo.concat(4));
    }
  
    return(
      <div>
      <button onClick={changeState}>Show</button>
      <h2>{myName}</h2>
      <h2>{myInfo}</h2>
      </div>
    )
}

export default Test;