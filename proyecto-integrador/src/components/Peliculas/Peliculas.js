import React, {Component} from 'react';


class Peliculas extends Component {
    constructor(){
        super()
        this.state = {
            peliculas: [],
        }
    }

    componentDidMount() {
        
        let url = 'https://developers.themoviedb.org/3/movies/get-popular-movies';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                   peliculas: data.results,
                })
            })
            .catch(error => console.log(error))
    }

    render () {
        return (
            <main >
                <button type="button">Cargar más tarjetas</button>
                <section class="card-container">
                 
                {this.state.peliculas.map((pelicula, idx)=> <Peliculas key={pelicula.title + idx} dataPelicula={pelicula} />)}
                </section>
            </main>
        )
    }
}


export default Peliculas;