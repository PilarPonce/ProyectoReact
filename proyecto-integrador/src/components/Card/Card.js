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
            <article className="cardPeliculas">

                <section className="navigation">
                    <div>
                        <i className="fas fa-chevron-left"></i>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                    <i className="far fa-window-close"></i>
                </section>

                <main className= "mainPeliculas"> 
                    <img src={this.props.dataPelicula.backdrop_path} alt="" />
                    <h3>{this.props.dataPelicula.title}</h3>
                    <p className="description">{this.props.dataPelicula.overview}</p>   
                    
                    <section className="aditional-info">
                        <p className={`extra ${this.state.verMas ? 'mostrar' : 'esconder'}`} > Reproductions: {this.props.dataPelicula.popularity} 
                        <hr/>
                        Release date: {this.props.dataPelicula.release_date}
                        <hr/>
                        Vote average: {this.props.dataPelicula.vote_average} </p>
                        <p className='mas' onClick={ () => this.verMas()} >{this.state.texto}</p>
                    </section>
                
                </main>
            </article>
        )
    }
    
}
export default Card;