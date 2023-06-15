import React from 'react';
import { useParams } from 'react-router-dom';
import { ITEMS } from '../Data/ItemData';

export default function ItemDetails() {
    // const params = useParams();
    // console.log(params);
    const { id } = useParams();
    const item = ITEMS.find((item)=> item.id === id);
    console.log(item);
    return (
        <>
        <main>
            <h1>ItemDetails</h1>
        </main>
        {/* <h2>{params.itemId}</h2> */}
        <h2>{item.title}</h2>
        <h3>{item.description}</h3>
        </>
    )
}
