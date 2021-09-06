import React, { Component } from 'react';

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
                <input type="text" onChange={(e) => this.controlarCambios(e)} value={this.state.valor} name="search" placeholder="Search" />
                <button type="submit"><i className="fas fa-search"></i> </button>
            </form>
        )
    }


}

export default Filtro