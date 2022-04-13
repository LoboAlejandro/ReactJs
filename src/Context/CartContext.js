import { createContext, useState } from "react";

const CartContext= createContext();

export const CartProvider = ({children})=>{

    const [cartProducts, setCartProducts] = useState([]);
    const [countItems, setCountItems] = useState(0)
    
    const addProductToCart = (product, count) =>{
        if(cartProducts.length === 0){
            setCartProducts(cartProducts => [...cartProducts, product])
        }else{
            cartProducts.map((cartProduct)=>{
                if(cartProduct.id !== product.id){
                    setCartProducts(cartProducts => [...cartProducts, product])
                }else{
                    console.log('coinciden')
                }
            })
        }
    }

    const data = {
        cartProducts,
        addProductToCart
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;