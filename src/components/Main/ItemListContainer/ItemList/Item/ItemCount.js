import React from 'react';

export default function ItemCount({count}){
    const aviso = () =>{
        alert(`Usted ha agregado ${count} producto/s`)
    }

    return(
        <button className='btnAgregar' onClick={aviso}>Agregar al Carrito</button>
    )
}