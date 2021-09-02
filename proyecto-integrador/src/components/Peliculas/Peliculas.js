import React, {Component} from 'react';
import Card from '../Card/Card';
import './Peliculas.css'


class Peliculas extends Component {
    constructor(){
        super()
        this.state = {
            peliculas: [],
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
                })
            })
            .catch(error => console.log(error))
    }

    render () {
        return (
            <React.Fragment>
                <button type="button">Cargar más tarjetas</button>
                <div className="card-container">
                    {this.state.peliculas.map((pelicula, idx)=> <Card key={pelicula.title + idx} dataPelicula={pelicula} />)}
                </div>
 


            </React.Fragment>
        )
    }
}


export default Peliculas;