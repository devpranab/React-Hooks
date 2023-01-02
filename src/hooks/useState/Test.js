import React, {useState} from 'react';

const Test = () => {
    const testState = useState("");
    console.log(testState);//2 param value & f()
    if(testState[0] === ""){
        testState[1]("Hello Pranav");
    }
    return(
        <div>
        <h1>Use of useState hook:</h1>
        <h2>{testState[0]}</h2>
        </div>
    )
}

export default Test;