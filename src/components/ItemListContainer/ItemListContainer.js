import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { ItemList } from '../ItemList/ItemList';
import { useState, useEffect } from 'react';


export const ItemListContainer = (prop) => {
    const [productos, setProductos] = useState([]);


    useEffect(() => {
        setTimeout(() => {
            fetch('https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json')
                .then(response => response.json())
                .then(data => setProductos(data))
        }, 2000);
    }, [])

    let stock = 5
    const agregar = (counter) => {
        if (counter <= stock) {
            alert(`Agrego ` + counter + ` Articulos `)
        }
    };

    return (
        <div className='container'>
            <ItemCount stock={stock} onAdd={agregar} ></ItemCount>
            <ItemList producto={productos} />

        </div >
    )

}
