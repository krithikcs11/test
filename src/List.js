import React from 'react'
import {Link} from 'react-router-dom';
import data from './data';


const List = ({match}) => {
    console.log("matchparamsid",match.params.id)
    const details = data.find(item => console.log('item id',item.id))

    console.log('details',details)
    
    
    return (
        <div>
           {details.name}
            <button><Link to='/'>Back</Link> </button>
        </div>
    )
}

export default List
