import React,{useState} from 'react';
import ItemCount from './ItemCount'

export default function ItemListContainer({props}){
    console.log(props)
    const {stock, initial}= props;
    const [count, setCount]= useState(initial);

    const sumarItem= () =>{
        if(count < stock){
            setCount(count + 1);
        }
    }

    const restarItem= () =>{
        if(count > 0){
            setCount(count - 1);
        }
    }

    return(
        <div className='divProducto'>
            <div className="divImagen"/>
            <div className='divBotonera'>
                <button className='btnSumaResta' onClick={restarItem}>-</button>
                <h3>{count}</h3>
                <button className='btnSumaResta' onClick={sumarItem}>+</button>
            </div>
            <ItemCount count={count}/>
        </div>
    )
}