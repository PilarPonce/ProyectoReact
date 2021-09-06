import React from 'react';
import './Header.css';
import Formulario from '../Formulario/Formulario'

function Header() {
    return(
        <header className="header">
            <h1 className= "titulo">RENOVAR GARDENIA</h1>
            <section>

                <i className="fas fa-th"></i>
                <i className="fas fa-align-justify"></i>

                <Formulario />

        

            </section>
            
        </header>

    )
}

export default Header;