import React, { useState } from 'react';
import './ItemCount.css';

export const ItemCount = ({ initial = 1, stock = 5, onAdd }) => {
    const [counter, setCounter] = useState(initial);
    const agregar = () => {
        console.log(onAdd);
    };

    const aumentar = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        } else {
            return false
        }

        //OPCION CON EL OPERADOR TERNARIO , NO ANDA
        // counter < stock
        //     ? setCounter(counter + 1)
        //     : false
        agregar()
    }
    const disminuir = () => {
        if (counter > 0) setCounter(counter - 1)
    }



    return (
        <div className='container'>
            <button onClick={disminuir} > Disminuir</button >
            <p>{counter}</p>
            <button onClick={aumentar} > Aumentar</button >
        </div>
    )
}
