import React from 'react';
import Button from '@mui/material/Button';
import Carrito from './Carrito';
import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <header className="App-header">
            <div className="logoDiv">
                <Link to={'/'}>
                    <img src="logo.jpg" className="imagen-logo" alt="logo" />
                </Link>
            </div>
            <ul className="navbar">
                <li><Button variant="contained"><Link to={'/'}>Home</Link></Button></li>
                <li><Button variant="contained"><Link to={'/productos'}>Productos</Link></Button></li>
                <li><Button variant="contained"><Link to={'/nosotros'}>Nosotros</Link></Button></li>
                <li><Button variant="contained"><Link to={'/contacto'}>Contacto</Link></Button></li>
            </ul>
            <Carrito/>
        </header>
    );
}

export default NavBar;