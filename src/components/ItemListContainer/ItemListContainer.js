import React from 'react';
import { ItemList } from '../ItemList/ItemList';
import { useState, useEffect } from 'react';


export const ItemListContainer = (prop) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // setTimeout(() => {
        fetch('https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json')
            .then(response => response.json())
            .then(data => setProductos(data))
        // }, 2000);
    }, [])
    return (
        <div className='container'>
            <ItemList producto={productos} />
        </div >
    )

}
