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
            orientacion: false,
            texto: 'Cambiar orientación a horizontal',
        }
    }

    //fetch peliculas
    componentDidMount() {    
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=18581b65b3e6ad002984aa4952878117&language=es-ES&page=${this.state.page}`) //verificar
            .then(response => response.json())
            .then(data => {
                this.setState({
                    peliculas: data.results,
                    peliculasIniciales: data.results, 
                    isLoaded: true, 
                    page: this.state.page + 1,
                })
            })
            .catch(error => console.log(error))       
    }

    //funcion orientacion
    orientacion (){
        if (this.state.orientacion) {
            this.setState({
                orientacion: false,
                texto: 'Cambiar orientación a horizontal'
            })
        } else {
            this.setState({
                orientacion: true,
                texto: 'Cambiar orientación a vertical'
            })
        }
    }

    //fetch cargar mas peliculas
    agregar() {

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=18581b65b3e6ad002984aa4952878117&language=es-ES&page=${this.state.page}`)
        
            .then(response => response.json())
            .then(data => {
                this.setState({
                    peliculas: this.state.peliculas.concat(data.results),
                    page: this.state.page + 1,
                })
            })
            .catch(error => console.log(error + 'error happened here'))
    }


    //eliminar pelicula
   borrar (peliculaABorrar){
        let peliculasQueQuedan = this.state.peliculas.filter( pelicula => pelicula.id !== peliculaABorrar);
        this.setState({
            peliculas: peliculasQueQuedan
        })
    }

    //buscador
    filtrarPeliculas(busquedaAFiltrar) {
        let peliculasFiltradas =  this.state.peliculasIniciales.filter(pelicula => pelicula.title.toLowerCase().includes(busquedaAFiltrar.toLowerCase())) 
        this.setState({
            peliculas: peliculasFiltradas,
        })   
    }

    render () {
        return (
            <React.Fragment>  
                <Header filtrarPeliculas={(busquedaAFiltrar) => this.filtrarPeliculas(busquedaAFiltrar)}  />
                <h1 className="popularMovies">PELÍCULAS POPULARES</h1>
                <div className="botonorientacion">
                    <h4 className="botonOrientacion" onClick={() => this.orientacion()}>{this.state.texto}</h4>
                </div>
              
                <main>
                        {this.state.isLoaded === false ?
                            <p className="cargando">Cargando...</p> : 
                                this.state.peliculas.length === 0 ?
                            <p>No se encontraron resultados de búsqueda</p> :
                        <div >
                            <div className={`${this.state.orientacion ? 'vertical' : 'horizontal'}`}>
                                {this.state.peliculas.map(( (pelicula, idx) =>
                                    <Card key={pelicula.title + idx} dataPelicula={pelicula} remove={(peliculaABorrar) => this.borrar(peliculaABorrar)} orientacion={this.state.orientacion} />))}
                            </div>
                            <div className="cargarmas">
                                <h4 className="botonMasTarjetas" onClick={() => this.agregar()}  >Cargar más películas  </h4>
                            </div>
                        </div>  
                        }
                </main>
            </React.Fragment>
        )
    }
}


export default Peliculas;