import React, {useState, useEffect} from "react";

const Test = props => {
    const [myName, setMyName] = useState("");
    const [myInfo, setMyInfo] = useState({
        a: "Hello",
        b: "Pranav"
    });

    const changeState = () => {
        setMyName("Pranav");
        setMyInfo({
            ...myInfo,
            b: "kolkata"
        });
    }

    //componentDidMount
    //componentDidUpdate
    useEffect(() => {
        console.log("MyInfo:", myInfo);
    }, [myInfo]); //when myInfo update then call

    //console.log("MyInfo:", myInfo);
    return(
        <div>
      <button onClick={changeState}>Change</button>
 
        </div>
    );
}

export default Test;