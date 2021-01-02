import React, { useEffect } from 'react';

const Dashboard = () => {
    useEffect(async () => {
        const result = await fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => console.log(json));
    }, [])
    
    return (
        <div>Dashboard!</div>
    )
}

export default Dashboard;