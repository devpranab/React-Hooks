import React, {useState} from "react";

const Test = props => {
    const testState = useState("");
    if(testState[0] === ""){
        testState[1]("Hello Pranav");
    }
    return(
        <div>
      <h2>{testState[0]}</h2>
        </div>
    )
}

export default Test;