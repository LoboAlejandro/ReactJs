import * as React from 'react';
import { useContext} from 'react';
import { Link } from 'react-router-dom';
import ItemCart from '../Main/ItemCart';
//Context
import CartContext from '../../Context/CartContext';
//Mui
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Carrito() {
    const {cartProducts, removeItem, cantProdCarrito, carritoTotal, transformNum} = useContext(CartContext)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='imgCarrito'>
            <Button onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'carritoMenu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                >
                <ShoppingCartIcon className="iconoCarrito" fontSize="large"/>
                {
                    !cartProducts.length ? (
                        <div>
                        </div>
                    ):(
                        <div>
                            <span className='contadorCarrito'>{cantProdCarrito()}</span>
                        </div>
                    )
                }
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 25,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                id="carritoMenu"
                >
                <h2 className='tituloCarrito'>Carrito de compras</h2>
                <Divider />
                <div className='listaProductosCarrito'>
                {cartProducts.length ? (
                    <>
                        {cartProducts.map((cartProduct)=>{
                            return(
                                <MenuItem className='productosCarrito' key={cartProduct.id}>
                                    <div>
                                        <img className='imgItemsCarrito' src={`../img/${cartProduct.imagen}`} alt={cartProduct.nombre}></img>
                                    </div>
                                    <div>
                                        <h4>{cartProduct.nombre}</h4>
                                        <p>${transformNum(cartProduct.precio)} c/u.</p>
                                        <p>X{cartProduct.cantidad}</p>
                                    </div>
                                    <div className='divEliminarProducto'>
                                        <DeleteIcon onClick={() => removeItem(cartProduct.id)}/>
                                    </div>
                                </MenuItem>
                            )
                        })}
                    </>
                    ):(
                        <h3>No hay productos agregados al carrito...</h3>
                    )
                }
                </div>
                <Divider />
                <MenuItem className='botoneraCarrito'>
                    {
                        cartProducts.length ? (
                            <>
                                <h2>Subtotal: ${transformNum(carritoTotal())}</h2>
                                <Link to={'/Cart'}>
                                    <button className='btnFinalizarCarrito' onClick={ItemCart}>Finalizar Compra</button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link to={'/'}>
                                    <button className='btnFinalizarCarrito'>Seguir Comprando</button>
                                </Link>
                            </>
                        )
                    }
                </MenuItem>
            </Menu>
        </div>
    );
}