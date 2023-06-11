import React from 'react';
import { Link,Outlet } from 'react-router-dom';
export default function Navbar() {
    return (
        <>
            <div className="nav">
                {/* <h4 onClick={()=>setPage('home')}>HOME</h4>
                <h4 onClick={()=>setPage('about')}>ABOUT</h4>
                <h4 onClick={()=>setPage('items')}>ITEMS</h4>
                 */}
                <Link to='/'><h4>HOME</h4></Link>
                <Link to='/about'><h4>ABOUT</h4></Link>
                <Link to='/items'><h4>ITEMS</h4></Link>
            </div>
            <Outlet />
        </>
    )
}
