import React from 'react';
import Item from '../Item/Item';


export const ItemList = (props) => {

    return (
        <>
            {props.producto.map(p => {
                return <Item papa={p} key={p.productId} />;
            })}
        </>
    )
}
