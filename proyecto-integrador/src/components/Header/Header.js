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
                        <img className="logo" src="/images/logo4.jpeg" alt="" />
                        <h2 className="menu">Todas las películas</h2>
                        <h2 className="menu">Visualización</h2>
                        <h2 className="menu">Nosotros</h2>
                        <form action="" onSubmit={(event) => this.evitarSubmit(event)}>
                            <input className="buscador" type="text" onChange={(e) => this.controlarCambios(e)} value={this.state.filtrarPor} name="search" placeholder="Search" />
                        </form>
                   </div>
                   

                   
               </header>
            </React.Fragment>
        )
    }
}

export default Header