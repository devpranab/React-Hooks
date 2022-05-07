import React, {useState} from "react";

const Test = props => {
    const [myName, setMyName] = useState("");
    const [myInfo, setMyInfo] = useState({
        a: "Hello",
        b: "Pranav"
    });

    const changeState = () => {
        setMyName("Pranav");
        setMyInfo({
            a: "Hello",
            b: "kolkata"
        })
    }
  console.log("MyInfo:", myInfo);
    return(
        <div>
      <button onClick={changeState}>Change</button>
 
        </div>
    )
}

export default Test;