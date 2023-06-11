import React from 'react'

export default function Navbar({setPage}) {
    return (
        <>
            <div className="nav">
                <h4 onClick={()=>setPage('home')}>HOME</h4>
                <h4 onClick={()=>setPage('about')}>ABOUT</h4>
                <h4 onClick={()=>setPage('items')}>ITEMS</h4>
            </div>
        </>
    )
}
