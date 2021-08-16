import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';

export const ItemListContainer = (prop) => {
    let stock = 5

    const agregar = (counter) => {
        if (counter <= stock) {
            alert(`Agrego ` + counter + ` Articulos `)
        }

    };

    return (
        <div className='container'>
            <h1 >{prop.gretting}</h1>
            <ItemCount stock={stock} onAdd={agregar} ></ItemCount>
        </div >
    )
}
