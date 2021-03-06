import React from 'react';
import './NavBar.css'
import Carrito from './Carrito';
import {Link} from 'react-router-dom'
//Mui
import Button from '@mui/material/Button';

function NavBar(){
    return(
        <header className="App-header">
            <div className="logoDiv">
                <Link to={'/'}>
                    <img src="../img/logo.jpg" className="imagen-logo" alt="logo" />
                </Link>
            </div>
            <ul className="navbar">
                <li><Link to={'/'} className='linkHeader'><Button variant="contained">Home</Button></Link></li>
                <li><Link to={'/productos'} className='linkHeader'><Button variant="contained">Productos</Button></Link></li>
                <li><Link to={'/nosotros'} className='linkHeader'><Button variant="contained">Nosotros</Button></Link></li>
                <li><Link to={'/contacto'} className='linkHeader'><Button variant="contained">Contacto</Button></Link></li>
                <li><Carrito/></li>
            </ul>
        </header>
    );
}

export default NavBar;