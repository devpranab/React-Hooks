import React, {useState, useEffect} from 'react';

//dynamic data load, API call useEffect integrate state
const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
    },[]);

    return (
        <div>
            <h1>Use of useEffect hook:</h1>
            <h2>Dynamic Users: {users.length}</h2>
            <ul>
                {
                    users.map(user => <li>{user.email}</li>)
                }
            </ul>
        </div>
    );
};

export default Users;