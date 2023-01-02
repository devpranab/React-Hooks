import { useReducer } from 'react';

function reducer(state, action) {
 if (action.type === 'incremented_age') {
   return {
     age: state.age + 1
   };
 }
 throw Error('Unknown action.');
}

const Counter = () => {
 const [state, dispatch] = useReducer(reducer, { age: 21 });

 return (
   <>
     <button onClick={() => {
       dispatch({ type: 'incremented_age' })
     }}>
       Increment age
     </button>
     <p>Hello! You are {state.age}.</p>
   </>
 );
}

export default Counter;