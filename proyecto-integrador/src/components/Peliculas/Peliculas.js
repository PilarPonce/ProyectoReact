import React, {Component} from 'react';
import Card from '../Card/Card';
import './Peliculas.css'


class Peliculas extends Component {
    constructor(){
        super()
        this.state = {
            peliculas: [],
            isloaded: false,
            nextUrl: ''
        }
    }

    componentDidMount() {
        
        let url = 'https://api.themoviedb.org/3/movie/popular?api_key=18581b65b3e6ad002984aa4952878117';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    peliculas: data.results,
                    isloaded: true,
                    nextUrl: data.results.next, 
                })
            })
            .catch(error => console.log(error))
    }


    agregar() {
        let url = this.state.nextUrl;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    peliculas: this.state.peliculas.concat(data.results),
                    nextUrl: data.results.next

                })
            })
            .catch(error => console.log(error))
    }



   borrar (peliculaABorrar){
        let peliculasQueQuedan = this.state.peliculas.filter( pelicula => pelicula.id !== peliculaABorrar);

        this.setState({
            peliculas: peliculasQueQuedan
        })
    }

    render () {
        return (
            <React.Fragment>
                <div className="card-container">
                    {this.state.isloaded === false ?
                        <p className="cargando">Cargando...</p> :
                    
                    this.state.peliculas.map((pelicula, idx)=>  <Card key={pelicula.title + idx} dataPelicula={pelicula} 
                    remove= {(peliculaABorrar) =>this.borrar (peliculaABorrar) } />)}
                </div>
                <button onClick={() => this.agregar()} >Cargar más tarjetas</button>
            </React.Fragment>
        )
    }
}


export default Peliculas;