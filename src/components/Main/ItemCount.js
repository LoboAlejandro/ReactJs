import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ItemCount({count, id, clase, fontSize, action, terminarCompras}){
    const [linkTo, setLinkTo] = useState([]);
    const [terminarCompra, setTerminarCompra] = useState([]);
    
    const onAdd = () =>{
        if(clase === 'ItemCountDetail'){
            action(count);
            if(terminarCompras != 'Comprar'){
                setLinkTo('');
                setTerminarCompra('');
            }else{
                setLinkTo('/Cart');
                setTerminarCompra('terminarCompra')
            }
        }
    }

    useEffect(()=>{
        let cambioCount= document.querySelector(`.${clase}-btnAgregar-${id}`);
        if(count === 0){
            cambioCount.disabled= true;
        }else{
            cambioCount.disabled= false;
        }
    }, [count])
    
    return(
        <div className={`${clase}-btnsCard`}>
            <Link to={`/producto/${id}`}>
                <button className={`${clase}-btnVerMas`}>Ver más</button>
            </Link>
            <Link to={linkTo}>
                <button className={`${clase}-btnAgregar ${clase}-btnAgregar-${id} ${terminarCompra}`} onClick={onAdd}>
                    <p className={`${clase}-btnAgregarP`}>{terminarCompras}</p>
                    <ShoppingCartIcon className={`${clase}-iconoCarritoCard`} titleAccess='Agregar al carrito' fontSize={fontSize}/>
                </button>
            </Link>
        </div>
    )
}