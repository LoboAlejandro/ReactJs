import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ItemCount({count, id}){
    const aviso = () =>{
        alert(`Usted ha agregado ${count} producto/s`)
    }

    useEffect(()=>{
        let cambioCount= document.querySelector(`.btnAgregar-${id}`);
        if(count === 0){
            cambioCount.disabled= true;
        }else{
            cambioCount.disabled= false;
        }
    }, [count])
    
    return(
        <div className='btnsCard'>
            <Link to={`/producto/${id}`}>
                <button className='btnVerMas'>Ver más</button>
            </Link>
            <button className={`btnAgregar btnAgregar-${id}`} onClick={aviso}>
                <ShoppingCartIcon className="iconoCarritoCard" titleAccess='Agregar al carrito' fontSize="small"/>
            </button>
        </div>
    )
}