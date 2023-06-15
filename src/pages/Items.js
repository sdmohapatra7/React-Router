import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';
import {ITEMS} from '../Data/ItemData';
export default function Items() {
    return (
        <>  
        {/* <Navbar /> */}
            <main>
                <h1>Items Page</h1>
                {/* <Link to='/'>Back</Link> */}
            </main>
            <ul>
                {/* <Link to='/items/item-1'>
                <li>Item-1</li>
                </Link>
                <Link to='/items/item-2'>
                <li>Item-2</li>
                </Link>
                <Link to='/items/item-3'>
                <li>Item-3</li>
                </Link> */}
                
                {ITEMS.map((item)=>(
                    <Link to={`/items/${item.id}`}><li>{item.id}</li></Link>
                ))}
            </ul>
        </>
    )
}
