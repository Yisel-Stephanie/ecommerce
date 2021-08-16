import React, { useState } from 'react';
import './ItemCount.css';

export const ItemCount = ({ initial = 1, stock, onAdd }) => {
    const [counter, setCounter] = useState(initial);

    const aumentar = () => {
        if (counter < stock) setCounter(counter + 1);


    }
    const disminuir = () => {
        if (counter > 0) setCounter(counter - 1)
    }

    return (
        <div className='container'>
            <p>Stock disponible {stock}</p>
            <p>{counter}</p>
            <button onClick={disminuir} > Disminuir</button >
            <button onClick={aumentar} > Aumentar</button >
            <button onClick={() => onAdd(counter)} > Añadir al carrito </button >
        </div>
    )
}
