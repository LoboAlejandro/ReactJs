import React, {useContext, useState} from "react";

import CartContext from "../../Context/CartContext";
import { Link } from "react-router-dom";

import DeleteIcon from '@mui/icons-material/Delete';

export default function ItemCart(){
    const {cartProducts, removeItem, clearCart} = useContext(CartContext);

    const [prueba, setPrueba] = useState(0)
    let precioSumaTotal= 0;

    return (
        <>
            <div className="cartContainer">
                {
                    cartProducts.length ?(
                        <>
                            <h2>Finalizar la compra del carrito</h2>
                            {cartProducts.map((product)=>{
                                const precioFinal = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'ARS' }).format(product.precio);
                                const precioSuma= product.precio * product.cantidad;
                                const precioSumaFinal = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'ARS' }).format(precioSuma);
                                precioSumaTotal += precioSuma;
                                return(
                                    <div className="itemCartFinal" key={product.id}>
                                        <img className='imgCartFinal' src={`/img/${product.imagen}`} alt={product.nombre}></img>
                                        <div className="divDataCarrito">
                                            <h2>{product.nombre}</h2>
                                            <h4>{`$${precioFinal} c/u. (X${product.cantidad})`}</h4>
                                        </div>
                                        <h3>${precioSumaFinal}</h3>
                                        <div className="divEliminarProducto">
                                            <DeleteIcon onClick={() => removeItem(product.id)}/>
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                    ):(
                        <h2>No hay productos agregados al carrito...</h2>
                    )
                }
                <div className="divPreciosBotonera">
                    {
                        cartProducts.length ? (
                            <div className="divPrecios">
                                <h3>Precio: ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'ARS' }).format(precioSumaTotal)}</h3>
                                <h4>+ iva: ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'ARS' }).format(precioSumaTotal * 0.21)}</h4>
                                <h2>TOTAL: ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'ARS' }).format(precioSumaTotal + (precioSumaTotal * 0.21))}</h2>
                            </div>
                        ):(
                            <div className="divPrecios">
                                <h3>Precio: $0.00</h3>
                                <h4>+ iva: $0.00</h4>
                                <h2>TOTAL: $0.00</h2>
                            </div>
                        )
                    }
                    <div className="divBotoneraCarrito">
                        <Link to={'/'}>
                            <button>Seguir Comprando</button>
                        </Link>
                        <button onClick={clearCart}>Vaciar Carrito</button>
                        <button>Comprar Carrito</button>
                    </div>
                </div>
            </div>
        </>
    )
}