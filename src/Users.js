import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Alert, Table } from 'react-bootstrap';

const Users = () => {

    const [data, setData] = useState([]);
    const [mode, setMode] = useState('online');

    useEffect(() => {
        let url = "https://jsonplaceholder.typicode.com/users";
        fetch(url).then(response => {
            response.json().then(result => {
                console.warn(result);
                setData(result);
                localStorage.setItem('users', JSON.stringify(result));
                setMode('online');
            })
        }).catch(err => {
            setMode('offline');
            setData(JSON.parse(localStorage.getItem('users')));
        })
    },[])

    return ( 
        <div>
            <h1>Users Component</h1>
            {
                (mode === 'offline') &&
                <Alert variant='warning'>
                    you are in offline mode
                </Alert>
            }
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>User</th>
                    <th>Email</th>
                    <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>@{item.address.street}</td>
                            </tr>
                        ))
                    }
                   
                
                </tbody>
            </Table>
        </div>
     );
}
 
export default Users;