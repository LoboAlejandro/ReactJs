import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
//Context
import CartContext from '../../Context/CartContext';
//Mui
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ItemCount({count, product ,clase, fontSize, action, terminarCompras}){
    const [linkTo, setLinkTo] = useState([]);
    const [terminarCompra, setTerminarCompra] = useState([]);
    const {addProductToCart} = useContext(CartContext);
    const {id} = product;
    
    const onAdd = () =>{
        if(clase === 'ItemCountDetail'){
            action(count);
            if(terminarCompras !== 'Comprar'){
                setLinkTo('');
                setTerminarCompra('');
            }else{
                let quantity= count;
                addProductToCart(product, quantity);
                setLinkTo('/Cart');
                setTerminarCompra('terminarCompra');
            }
        }else{
            let quantity= count;
            addProductToCart(product, quantity);
        }
    }
    
    return(
        <div className={`${clase}-btnsCard`}>
            <Link to={`/producto/${id}`}>
                <button className={`${clase}-btnVerMas`}>Ver más</button>
            </Link>
            <Link to={linkTo}>
                {count === 0 || product.stock === 0?
                    (
                        <button className={`${clase}-btnAgregar ${clase}-btnAgregar-${id} ${terminarCompra}`} disabled>
                            <p className={`${clase}-btnAgregarP`}>{terminarCompras}</p>
                            <ShoppingCartIcon className={`${clase}-iconoCarritoCard`} titleAccess='Agregar al carrito' fontSize={fontSize}/>
                        </button>
                    ):(
                        <button className={`${clase}-btnAgregar ${clase}-btnAgregar-${id} ${terminarCompra}`} onClick={onAdd}>
                            <p className={`${clase}-btnAgregarP`}>{terminarCompras}</p>
                            <ShoppingCartIcon className={`${clase}-iconoCarritoCard`} titleAccess='Agregar al carrito' fontSize={fontSize}/>
                        </button>
                    )
                }
            </Link>
        </div>
    )
}