import React, {useState} from "react";

const Test = props => {
    const [myName, setMyName] = useState("");
    const [myInfo, setMyInfo] = useState("");

    const changeState = () => {
        setMyName("Pranav");
        setMyInfo({
            age: 30,
            address: "kolkata, India"
        })

    }
  
    return(
        <div>
      <button onClick={changeState}>Show</button>
      <h2>{myName[0]}</h2>
      <h2>{myName}</h2>
      <h2>{myInfo.age} year</h2>
      <h2>{myInfo.address}</h2>
        </div>
    )
}

export default Test;