import React, {useState, useContext} from 'react'
import CartContext from '../../Context/CartContext';
import ItemCount from './ItemCount';

export const Item = ({product})=>{
    const {id, nombre, precio, imagen, stock} = product;
    const {transformNum} = useContext(CartContext)

    let initial= 1;

    if(stock === 0){
        initial= 0;
    }else{
        initial= 1;
    }

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
    
    setTimeout(()=>{
        const stockHide= document.querySelector(`.stock-${id}`);

        if(stock < 10){
            if(stock > 1){
                stockHide.textContent= `Quedan las últimas ${stock} unidades`;
            }else{
                stockHide.textContent= `Queda la última unidad`;
            }
            if(stock === 0){
                stockHide.textContent= 'SIN STOCK';
            }
        }else{
            stockHide.style.visibility= 'hidden';
        }
    }, 10)


    return(
        <div className='cardItem'>
            <div className="divImagen">
                <img src={`img/${imagen}`} alt={nombre} className='imagenProductos'></img>
            </div>
            <div className='divData'>
                <h2 className='divData__h2'>{nombre}</h2>
                <h3 className='divData__h3'>Precio: ${transformNum(precio)}</h3>
            </div>
            <div className='divBotonera'>
                <button className={`btnSumaResta`} onClick={restarItem}>-</button>
                <h3>{count}</h3>
                <button className={`btnSumaResta`} onClick={sumarItem}>+</button>
            </div>
            <ItemCount count={count} product={product} clase="ItemCountItem" fontSize='small'/>
            <p className={`stock stock-${id}`}></p>
        </div>
    )
}