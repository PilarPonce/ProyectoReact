import React, {Component} from 'react';
import './Card.css';

class Card extends Component{
    constructor(props){
        super(props)
        this.state={
            texto:'Ver más',
            verMas: false,
        }
    }

    //funcion ver mas informacion
    verMas(){
        if(this.state.verMas){
            this.setState({
                texto:'Ver más',
                verMas: false
            })
        }else{
            this.setState({
                texto: 'Ver menos',
                verMas: true,
            })
        }
    }

    

    render(){
        return (
            <article className= {`${this.props.orientacion ? 'cardPeliculasH': 'cardPeliculasV'  }`}>
                <main className= {`${this.props.orientacion ? 'horizontalPeliculas': 'verticalPeliculas'  }`}>  
                    <img className= {`${this.props.orientacion ? 'imagenesH': 'imagenesV'  }`}src= {`https://image.tmdb.org/t/p/w500${this.props.dataPelicula.poster_path}`} alt={`${this.props.dataPelicula.title}`}/>
                    <div className="infoHorizontal">
                        <h3>{this.props.dataPelicula.title}</h3>
                        <p className="description">{this.props.dataPelicula.overview}</p> 
                        <section className="aditional-info">
                            <p className={`extra ${this.state.verMas ? 'mostrar' : 'esconder'}`} > 
                            Reproducciones: {this.props.dataPelicula.popularity} 
                            <br/>
                            Fecha de lanzamiento: {this.props.dataPelicula.release_date}
                            <br/>
                            Votos: {this.props.dataPelicula.vote_average} </p>
                            <p className='mas' onClick={ () => this.verMas()} >{this.state.texto}</p>
                        </section>

                        <p className='mas' onClick= {()=> this.props.remove(this.props.dataPelicula.id)} > Eliminar </p>
                    </div>
                </main>
            </article>
        )
    }
}
export default Card;