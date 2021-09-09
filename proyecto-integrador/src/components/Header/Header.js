import React from 'react';
import './Header.css';

function Header() {
    return(
        <React.Fragment>
        <header className="header">
                <img className="logo" src="/images/logo.jpg" alt="" />
                <h2 className="menu">Todas las películas</h2>
                <h2 className="menu">Visualización</h2>
                <h2 className="menu">Nosotros</h2> 
        </header>
        </React.Fragment>

    )
       
}


export default Header;