import React, {Component} from 'react';


class Formulario extends Component {
    constructor() {
        super();
        this.state ={
            valor: '',
        };
    }

    evitarSubmit(event) {
        event.preventDefault();
    }

    //la funcion controlarCambios obtendra el valor ingreado por el usuario en el input y actualizara el estado interno del componente 
    //el atributo target identifica al campo objetivo del evento y la prop value obtiene el valor ingresado 
    controlarCambios(e) {
        this.setState ({
            valor: e.target.value
        });
    }

    render (){
        return(
            //este form estaba en el header 
            <form action="" onSubmit= {(event)=>this.evitarSubmit(event)}>
                <input type="text" onChange={(e)=>this.controlarCambios(e)} value={this.state.valor} name="search" id="" placeholder="Search" />
                <button type="submit"><i className="fas fa-search"></i> </button>
            </form>
        )
    }



}

export default Formulario