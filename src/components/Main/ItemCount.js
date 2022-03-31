import React, { useEffect } from 'react';

export default function ItemCount({count}){
    const aviso = () =>{
        alert(`Usted ha agregado ${count} producto/s`)
    }

    useEffect(()=>{
        let cambioCount= document.querySelector('.btnAgregar');
        if(count === 0){
            cambioCount.disabled= true;
        }else{
            cambioCount.disabled= false;
        }
    }, [count])
    
    return(
        <button className='btnAgregar' onClick={aviso}>Agregar al Carrito</button>
    )
}