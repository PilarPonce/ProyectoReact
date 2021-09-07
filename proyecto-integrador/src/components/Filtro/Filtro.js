import React, { Component } from 'react';
import './Filtro.css'

class Filtro extends Component {
    constructor() {
        super();
        this.state = {
            filtrarPor: '',
        };
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

            <form action="" onSubmit={(event) => this.evitarSubmit(event)}>
                <input className="buscador" type="text" onChange={(e) => this.controlarCambios(e)} value={this.state.filtrarPor} name="search" placeholder="Search" />
                
            </form>
        )
    }


}

export default Filtro