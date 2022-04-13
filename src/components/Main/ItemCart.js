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
                {
                    <div>
                        <h3></h3>
                        <h4></h4>
                        <h2></h2>
                    </div>
                }
                <button onClick={clearCart}>Vaciar Carrito</button>
            </div>
        </>
    )
}