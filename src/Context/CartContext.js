import { createContext, useState} from "react";

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

    const transformNum= (num) =>{
        const precioPesos= Intl.NumberFormat('de-DE', { style: 'currency', currency: 'ARS' }).format(num)
        return precioPesos;
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
        return cantidad;
    }

    const precioFinalTotal = () =>{
        let precio= 0;
        let precioSuma = 0;
        cartProducts.map((product)=>{
            precioSuma= product.precio * product.cantidad;
            precio += precioSuma;
        })
        return precio;
    }

    const carritoTotal = () => {
        let total = 0;
        cartProducts.map((product)=>{
            total = total + product.precio * product.cantidad;
        });
        return total;
    }

    const data = {
        cartProducts,
        addProductToCart,
        removeItem,
        limpiarCarrito,
        cantProdCarrito,
        carritoTotal,
        precioFinalTotal,
        transformNum
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;