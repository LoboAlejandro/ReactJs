import { createContext, useState } from "react";

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
    
    const clearCart = () => {
        setCartProducts([])
    }
    
    const data = {
        cartProducts,
        addProductToCart,
        removeItem,
        clearCart
    }
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;