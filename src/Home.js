import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';

const Home = () => {
    
    
    return (
        <div>
            <h1>Test data status</h1>
            <table>
                <tbody>
                    <tr>
                        <td><strong>ID</strong></td>
                        <td><strong>NAME</strong></td>
                        <td><strong>STATUS</strong></td>
                    </tr>
                    {
                        data.map((item) => (
                        <tr key={item.id} >
                            <td><Link to={`/list/${item.id}`}>{item.id} </Link></td>
                            <td>{item.name} </td>
                            <td>{item.status} </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home
