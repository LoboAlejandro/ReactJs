import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";

import CartContext from "../../Context/CartContext";
//MUI
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
//FireBase
import db from '../../firebaseConfig'
import { addDoc, collection } from "firebase/firestore";

export default function ItemCart(){
    const {cartProducts, removeItem, limpiarCarrito, precioFinalTotal, transformNum} = useContext(CartContext);
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const [successOrder, setSuccessOrder]= useState()
    
    const handleSubmit= (e) =>{
        e.preventDefault()
        let prevOrder={
            ...order,
            buyer: formData
        }
        setOrder({
            ...order,
            buyer: formData
        })
        pushOrder(prevOrder)
    }
    
    const pushOrder= async(prevOrder)=>{
        const orderFirebase= collection(db, 'ordenes');
        const orderDoc= await addDoc(orderFirebase, prevOrder);
        setSuccessOrder(orderDoc.id)
        limpiarCarrito();
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [order, setOrder] = useState({
        buyer: formData,
        items: cartProducts.map( (cartProduct) =>{
            return{
                id: cartProduct.id,
                nombre: cartProduct.nombre,
                precio: cartProduct.precio
            }
        }),
        total: transformNum(precioFinalTotal() + (precioFinalTotal() * 0.21))
    })

    const handleChange= (e) =>{
        const {value, name} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <div className="cartContainer">
            {cartProducts.length ?(
                <>
                    <h2>Finalizar la compra del carrito</h2>
                    {cartProducts.map((product)=>{
                        const precioFinal = transformNum(product.precio);
                        const precioSuma= product.precio * product.cantidad;
                        const precioSumaFinal = transformNum(precioSuma);
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
                {cartProducts.length ? (
                    <div className="divPrecios">
                        <h3>Subtotal: ${transformNum(precioFinalTotal())}</h3>
                        <h4>+ IVA 21%: ${transformNum(precioFinalTotal() * 0.21)}</h4>
                        <h2>TOTAL: ${transformNum(precioFinalTotal() + (precioFinalTotal() * 0.21))}</h2>
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
                    <button onClick={limpiarCarrito}>Vaciar Carrito</button>
                    <button onClick={handleClickOpen}>Comprar Carrito</button>
                    {successOrder ? (
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Compra realizada</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Su compra ha sido generada con éxito
                                </DialogContentText>
                                <DialogContentText>
                                    El numero de orden es: {successOrder}
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Link to={'/'}>
                                    <Button>Ir al inicio</Button>
                                </Link>
                            </DialogActions>
                        </Dialog>
                        ) : (
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Finalizar Compra</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Ingrese sus datos para finalizar la compra.
                                </DialogContentText>
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        name="name"
                                        label="Nombre"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        autoComplete="off" 
                                        required
                                        onChange={handleChange}
                                        value={formData.name}
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="phone"
                                        name="phone"
                                        label="Teléfono"
                                        type="number"
                                        fullWidth
                                        variant="standard"
                                        autoComplete="off"
                                        required
                                        onChange={handleChange}
                                        value={formData.phone}
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="email"
                                        name="email"
                                        label="Email"
                                        type="email"
                                        fullWidth
                                        variant="standard"
                                        autoComplete="off"
                                        required
                                        onChange={handleChange}
                                        value={formData.email}
                                    />
                                    <DialogActions>
                                        <Button onClick={handleClose}>Cancel</Button>
                                        <Button type='submit'>Subscribe</Button>
                                    </DialogActions>
                                </form>
                            </DialogContent>
                        </Dialog>
                        )
                    }
                </div>
            </div>
        </div>
    )
}