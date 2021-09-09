import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor (){
        super() 
        this.state = {
            filtrarPor: '',
            orientacion: false,
        }
    }
    evitarSubmit(event) {
        event.preventDefault();
    }

    controlarCambios(e) {
        this.setState({
            filtrarPor: e.target.value
        }, () => this.props.filtrarPeliculas(this.state.filtrarPor)
        )
    }

    orientacion (){
        if (this.state.orientacion) {
            this.setState({
                orientacion: false,
            })
        } else {
            this.setState({
                orientacion: true,
            })
        }
    }

    render() {
        return (
            <React.Fragment>
               <header className="header">
                   <div className="barraNav">
                        <img className="logo" src="/images/logo.jpg" alt="" />
                        <h2 className="menu">Todas las películas</h2>
                        <h2 className="menu">Visualización</h2>
                        <h2 className="menu">Nosotros</h2>
                        <button className="botonOrientacion" onClick={() => this.orientacion()}>Orientacion horizontal</button> 
                        {/* BUSCAR ICONOS DE BOTONES ORIENTACION HORIZONTAL Y VERTICAL */}
                        <button className="botonOrientacion" onClick={() => this.orientacion()}>Orientacion vertical</button>
                   </div>
                   

                    <form action="" onSubmit={(event) => this.evitarSubmit(event)}>
                        <input className="buscador" type="text" onChange={(e) => this.controlarCambios(e)} value={this.state.filtrarPor} name="search" placeholder="Search" />
                    </form>
               </header>
            </React.Fragment>
        )
    }
}

export default Header