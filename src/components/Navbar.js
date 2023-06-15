import React from 'react';
import { Link,Outlet,NavLink } from 'react-router-dom';
export default function Navbar() {
    return (
        <>
            <div className="nav">
                {/* <h4 onClick={()=>setPage('home')}>HOME</h4>
                <h4 onClick={()=>setPage('about')}>ABOUT</h4>
                <h4 onClick={()=>setPage('items')}>ITEMS</h4>
                 */}
                <NavLink style={({isActive})=> isActive?{color:'blue'}:undefined} to='/'>
                    <h4>HOME</h4>
                </NavLink>
                <NavLink style={({isActive})=> isActive?{color:'blue'}:undefined} to='about'>
                    <h4>ABOUT</h4>
                </NavLink>
                <NavLink style={({isActive})=> isActive?{color:'blue'}:undefined} to='items'>
                    <h4>ITEMS</h4>
                </NavLink>
            </div>
            <Outlet />
        </>
    )
}
