import React, {useState} from 'react'
import ItemCount from './ItemCount';

export const Item = ({product})=>{
    const {id, nombre, stock, description} = product;
    const initial= 1;
    const [count, setCount]= useState(initial);

    const sumarItem= () =>{
        if(count < stock){
            setCount(count + 1);
        };
    };

    const restarItem= () =>{
        if(count > 0){
            setCount(count - 1);
        };
    };

    return(
        <div className='cardItem'>
            <div className="divImagen"/>
            <div className='divData'>
                <h2>{nombre}</h2>
                <h3>ID: {id}</h3>
                <p>{description}</p>
            </div>
            <div className='divBotonera'>
                <button className='btnSumaResta' onClick={restarItem}>-</button>
                <h3>{count}</h3>
                <button className='btnSumaResta' onClick={sumarItem}>+</button>
            </div>
            <ItemCount count={count} id={id}/>
            <p>Quedan {stock} unidad/es</p>
        </div>
    )
}