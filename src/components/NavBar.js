import React from 'react';
import Button from '@mui/material/Button';
import BasicModal from './Modal';

function NavBar(){
    return(
        <header className="App-header">
            <div className="logoDiv">
                <img src="logo.jpg" className="imagen-logo" alt="logo" />
            </div>
            <ul className="navbar">
                <li><Button variant="contained">Home</Button></li>
                <li><Button variant="contained">Productos</Button></li>
                <li><Button variant="contained">Nosotros</Button></li>
                <li><Button variant="contained">Contacto</Button></li>
            </ul>
            <div className='imgCarrito'>
                <BasicModal/>
            </div>
        </header>
    );
}

export default NavBar;