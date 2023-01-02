import React, {useContext} from 'react';
import { UserContext } from './Main';

const Component2 = () => {
    const user = useContext(UserContext);
    return (
        <div>Component2
            <p>{user.id}</p>
        </div>
    );
};

export default Component2;