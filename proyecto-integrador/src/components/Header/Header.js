import React from 'react';
import './Header.css';
// import Filtro from '../Filtro/Filtro';

function Header() {
    return(
        <header className="header">
            <h1 className= "titulo">RENOVAR GARDENIA</h1>
            <section>

                <i className="fas fa-th"></i>
                <i className="fas fa-align-justify"></i>

                {/* <Filtro filtrarPeliculas={(busquedaAFiltrar) => this.filtrarPeliculas(busquedaAFiltrar)} /> */}

                
            </section>
            
        </header>

    )
}

export default Header;