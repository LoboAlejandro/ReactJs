import { createContext, useEffect, useState } from "react";

const CartContext= createContext();

export const CartProvider = ({children})=>{

    const [cartProducts, setCartProducts] = useState([]);
    
    const addProductToCart = (product, quantity) =>{

        const findId = cartProducts.findIndex((producto)=>{
            return producto.id === product.id;
        })

        if(findId === -1){
            product.cantidad = quantity;
            setCartProducts(cartProducts=>[...cartProducts, product]);
        }else{
            if (product.stock < (product.cantidad + quantity)){
                console.log("Supera el stock actual")
            }else{
                cartProducts[findId].cantidad += quantity;
            }
        }
    }

    const removeItem = (id) => {
        setCartProducts(cartProducts.filter(p => p.id !== id));
    }
    
    const limpiarCarrito = () => {
        setCartProducts([])
    }

    const cantProdCarrito = () => {
        let cantidad = 0;
        cartProducts.map((product)=>{
            cantidad += product.cantidad;
        })
        return cantidad
    }

    const carritoTotal = () => {
        let total = 0;
        cartProducts.map((product)=>{
            total = total + product.price*product.cantidad;
        });
        return total
    }

    const data = {
        cartProducts,
        addProductToCart,
        removeItem,
        limpiarCarrito,
        cantProdCarrito,
        carritoTotal,
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;