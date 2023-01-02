import React, {useRef} from "react";

const TestRef = () => {
    const inputElement = useRef();

    const focusInput = () => {
      inputElement.current.focus();
    };
  
  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default TestRef;