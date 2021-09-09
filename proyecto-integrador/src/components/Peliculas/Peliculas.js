import React, {Component} from 'react';
import Card from '../Card/Card';
import './Peliculas.css'
import Filtro from '../Filtro/Filtro';


class Peliculas extends Component {
    constructor(){
        super()
        this.state = {
            peliculas: [],
            peliculasIniciales: [],
            isloaded: false,
            page: [], //verificar
        }
    }

    componentDidMount() {    

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=18581b65b3e6ad002984aa4952878117&language=en-USpage=1`) //verificar 
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    peliculas: data.results,
                    peliculasIniciales: data.results, 
                    isloaded: true, 
                    // page: 1,
                })
            })
            .catch(error => console.log(error))       
    }


    agregar() {

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=18581b65b3e6ad002984aa4952878117&language=en-USpage=${this.state.page}`)
        
            .then(response => response.json())
            .then(data => {
                console.log('response data');
                this.setState({
                    peliculas: this.state.peliculas.concat(data.results),
                    page: this.state.page + 1,
                })
            })
            .catch(error => console.log(error + 'error happened here'))
    }


   borrar (peliculaABorrar){
        let peliculasQueQuedan = this.state.peliculas.filter( pelicula => pelicula.id !== peliculaABorrar);

        this.setState({
            peliculas: peliculasQueQuedan
        })
    }

    filtrarPeliculas(busquedaAFiltrar) {
        let peliculasFiltradas = this.state.peliculasIniciales.filter(pelicula => pelicula.title.toLowerCase().includes(busquedaAFiltrar.toLowerCase()));

        this.setState({
            peliculas: peliculasFiltradas
        } )
        
    }

    render () {
        return (
            <React.Fragment>

            <div className="barraNav">
             <section className="filtro" >
                    <Filtro filtrarPeliculas={(busquedaAFiltrar) => this.filtrarPeliculas(busquedaAFiltrar)} />
            </section>


            </div> 
               
                <div className="card-container">

                    {this.state.isloaded === false ?
                        <p className="cargando">Cargando...</p> :
                    
                    this.state.peliculas.map (((pelicula, idx ) => <Card key={pelicula.title + idx} dataPelicula={pelicula} remove= {(peliculaABorrar) =>this.borrar (peliculaABorrar)  } /> ))}

                </div>

                <button onClick={() => this.agregar()} >Cargar más tarjetas</button>
            </React.Fragment>
        )
    }
}


export default Peliculas;