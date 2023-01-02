// import React, {useState, useEffect} from 'react';

// //use array destructure better than indexing
// const Users = () => {
//     const [myName, setMyName] = useState("");
//     const [myInfo, setMyInfo] = useState({
//         a: "Hello",
//         b: "World!"
//     });

//     const changeState = () => {
//         setMyName("Pranav");
//         // setMyName({
//         //     ...myInfo,
//         //     b: "New Word"
//         // });
//     }
    
//     useEffect(() => {
//     console.log("MyInfo:", myInfo);
//     },[myInfo, myName]); //when 2 argu. update then call useEffect
  
//     return(
//       <div>
//       <button onClick={changeState}>Show</button>
//       <h2>{myName}</h2>
//       </div>
//     )
// }

// export default Users;