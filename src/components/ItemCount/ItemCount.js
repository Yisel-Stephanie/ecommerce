import React, { useState } from 'react';
import './ItemCount.css';

export const ItemCount = ({ initial = 1, stock = 5 }) => {
    let btnSuma = document.getElementById('btnSuma');
    let btnResta = document.getElementById('btnResta');
    const [counter, setCounter] = useState(initial);


    const aumentar = () => {
        if (counter < stock) setCounter(counter + 1);
        if (counter === stock) {
            btnSuma.innerHTML = 'Fin de stock';
            btnSuma.style.background = 'red';
        }
        if (counter < 1) {
            btnResta.style.background = 'lime'
            btnResta.innerHTML = 'Disminuir'
        }
    }
    const disminuir = () => {
        if (counter > 0) setCounter(counter - 1)
        if (counter === 1) {
            btnResta.innerHTML = 'Limite';
            btnResta.style.background = 'red';
        }
        if (counter > 1) {
            btnSuma.innerHTML = 'Aumentar';
            btnSuma.style.background = 'purple';
        }
    }

    return (
        <div className='container btnsMasMenos'>
            <button onClick={disminuir} id='btnResta'> Disminuir</button >
            <p>{counter}</p>
            <button onClick={aumentar} id='btnSuma'> Aumentar</button >
        </div>
    )
}
