import React from 'react';

function NavBar(){
    return(
        <header className="App-header">
            <div>
                <img src="logo.jpg" className="imagen-logo" alt="logo" />
            </div>
            <ul className="navbar">
                <li><button>Home</button></li>
                <li><button>Productos</button></li>
                <li><button>Nosotros</button></li>
                <li><button>Contacto</button></li>
            </ul>
        </header>
    );
}

export default NavBar;