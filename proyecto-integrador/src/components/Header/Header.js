import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor (){
        super() 
        this.state = {
            filtrarPor: '',
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


    render() {
        return (
            <React.Fragment>
               <header className="header">
                   <div className="barraNav">
                        <img className="logo" src="/images/logoFondo2.jpg" alt="" />
                        <form action="" onSubmit={(event) => this.evitarSubmit(event)}>
                            <input className="buscador" type="text" onChange={(e) => this.controlarCambios(e)} value={this.state.filtrarPor} name="search" placeholder="Buscar por titulo..." />
                        </form>
                        <a className="menu" href="http://localhost:3000/">Todas las películas</a>
                        <a className="menu2" href="https://www.instagram.com/">Nosotros</a>
                   </div>
                   

                   
               </header>
            </React.Fragment>
        )
    }
}

export default Header