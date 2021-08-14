import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';



export const ItemListContainer = (prop) => {
    return (
        <div className='container'>
            <h1 >{prop.gretting}</h1>
            <ItemCount></ItemCount>
        </div>
    )
}
