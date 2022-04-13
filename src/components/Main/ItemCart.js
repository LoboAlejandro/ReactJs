import React, {useContext, useEffect} from "react";

import CartContext from "../../Context/CartContext";

import DeleteIcon from '@mui/icons-material/Delete';

export default function ItemCart(){

    const {cartProducts, removeItem, clearCart} = useContext(CartContext);

    return (
        <>
            <div className="cartContainer">
                <h2>Finalizar la compra del carrito</h2>
                {cartProducts.map((product)=>{
                    const precioFinal = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'ARS' }).format(product.precio);
                    const precioSuma= product.precio * product.cantidad;
                    const precioSumaFinal = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'ARS' }).format(precioSuma);
                    return(
                        <div className="itemCartFinal">
                            <img className='imgCartFinal' src={`/img/${product.imagen}`} alt={product.nombre}></img>
                            <div className="divDataCarrito">
                                <h2>{product.nombre}</h2>
                                <h4>{`$${precioFinal} c/u. (X${product.cantidad})`}</h4>
                            </div>
                            <h3>${precioSumaFinal}</h3>
                            <DeleteIcon onClick={() => removeItem(product.id)}/>
                        </div>
                    )
                })}
                <div className="divPrecios">
                    <h3>Precio: </h3>
                    <h4>+ iva: </h4>
                    <h2>TOTAL: </h2>
                </div>
                <div className="divBotoneraCarrito">
                    <button onClick={clearCart}>Vaciar Carrito</button>
                    <button>Comprar Carrito</button>
                </div>
            </div>
        </>
    )
}