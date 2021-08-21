import React from 'react'
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [art, setArt] = useState([]);
    useEffect(() => {
        // setTimeout(() => {
        fetch('https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json')
            .then(response => response.json())
            .then(data => setArt(data))

        // }, 2000);
    }, [])
    return (
        <ItemDetail art={art} />
    )
}

export default ItemDetailContainer
