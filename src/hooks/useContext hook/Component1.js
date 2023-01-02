import React, {useContext} from 'react';
import { UserContext } from './Main';

const Component1 = () => {
    const user = useContext(UserContext);
    return (
        <div> <h1>Use of useContext hook:</h1>
            Component1
            <p>{user.name}</p>
        </div>
    );
};

export default Component1;