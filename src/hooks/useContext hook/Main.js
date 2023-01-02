import React, { createContext, useState } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';

export const UserContext = createContext();
//step1: create context
//step2: wrap childs with context provider
//step3: state access useContext hook

const Main = () => {
    const [user, setUser] = useState({name: "pranav", id: "B1S30"});
    return (
        <UserContext.Provider value={user}>
        <Component1/>
        <Component2/>
        </UserContext.Provider>
    );
};

export default Main;