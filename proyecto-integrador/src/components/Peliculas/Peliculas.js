import React, {Component} from 'react';
import Card from '../Card/Card';
import './Peliculas.css'
import Header from '../Header/Header';

class Peliculas extends Component {
    constructor(){
        super()
        this.state = {
            peliculas: [],
            peliculasIniciales: [],
            isLoaded: false,
            page: 1,
        }
    }

    componentDidMount() {    
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=18581b65b3e6ad002984aa4952878117&language=en-US&page=${this.state.page}`) //verificar
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    peliculas: data.results,
                    peliculasIniciales: data.results, 
                    isLoaded: true, 
                    page: this.state.page + 1,
                })
            })
            .catch(error => console.log(error))       
    }


    agregar() {

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=18581b65b3e6ad002984aa4952878117&language=en-US&page=${this.state.page}`)
        
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
                <div className="card-container">
                    <Header filtrarPeliculas={(busquedaAFiltrar) => this.filtrarPeliculas(busquedaAFiltrar)} />
              
                </div>
                <section>

                    {
                    this.state.isLoaded === false ?
                        <p className="cargando">Cargando...</p> :
                        this.state.peliculas.map(((pelicula, idx) =>
                            <Card key={pelicula.title + idx} dataPelicula={pelicula} remove={(peliculaABorrar) => this.borrar(peliculaABorrar)} />))
                    
                    }

                    {
                        this.state.peliculas.lenght === 0 ?
                            <p>No se encontraron resultados de búsqueda</p> : ''
                    }
                </section>

                            
                <button onClick={() => this.agregar()} >Cargar más tarjetas</button>
            </React.Fragment>
        )
    }
}


export default Peliculas;