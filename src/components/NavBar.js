import React from 'react';
import Button from '@mui/material/Button';


function NavBar(){
    return(
        <header className="App-header">
            <div>
                <img src="logo.jpg" className="imagen-logo" alt="logo" />
            </div>
            <ul className="navbar">
                <li><Button variant="contained">Home</Button></li>
                <li><Button variant="contained">Productos</Button></li>
                <li><Button variant="contained">Nosotros</Button></li>
                <li><Button variant="contained">Contacto</Button></li>
            </ul>
        </header>
    );
}

export default NavBar;