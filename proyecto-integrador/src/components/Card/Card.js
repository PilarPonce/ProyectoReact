import React, {Component} from 'react';
import './Card.css';

class Card extends Component{
    constructor(props){
        super(props)
        this.state={

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
                    <p>Vote average: {this.props.dataPelicula.vote_average} </p>
                    <section className="aditional-info">
                        <p className="description">{this.props.dataPelicula.overview}</p>
                        <p>Release date: {this.props.dataPelicula.release_date}</p>
                        <p>Reproductions: {this.props.dataPelicula.popularity} </p>   
                    </section>
                    <a href="CAMBIAR DESPUES">Ver más</a>
                </main>
            </article>
        )
    }
    
}
export default Card;