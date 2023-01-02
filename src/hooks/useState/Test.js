import React, {useState} from 'react';

const Test = () => {
    const testState = useState("Hi Pranav!");
    return (
        <div>
        <h2>{testState[0]}</h2>
        <h3>{testState[1]}</h3>
        </div>
    );
};

export default Test;