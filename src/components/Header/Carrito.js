import * as React from 'react';
import { useContext } from 'react';
//MUI
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import CartContext from '../../Context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { Delete } from '@mui/icons-material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Carrito() {

    const {cartProducts} = useContext(CartContext)

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
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                >
                <ShoppingCartIcon className="iconoCarrito" fontSize="large"/>
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
                <h3 className='tituloCarrito'>Carrito de compras</h3>
                <Divider />
                <div className='listaProductosCarrito'>
                    {cartProducts.map((cartProduct)=>{
                        const precioFinal = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'ARS' }).format(cartProduct.precio);
                        return(
                            <MenuItem onClick={''} className='productosCarrito' key={cartProduct.id}>
                                <div>
                                    <img className='imgItemsCarrito' src={`img/${cartProduct.imagen}`} alt={cartProduct.nombre}></img>
                                </div>
                                <div>
                                    <h4>{cartProduct.nombre}</h4>
                                    <p>{precioFinal}</p>
                                </div>
                                <div>
                                    <DeleteIcon/>
                                </div>
                            </MenuItem>
                        )
                    })}
                </div>
                <Divider />
                <MenuItem>
                    <button>Finalizar Compra</button>
                </MenuItem>
            </Menu>
        </div>
    );
}