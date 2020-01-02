import React from 'react'
import { connect } from 'react-redux'
import { addToSpread } from '../spreadReducer'

import './ChatBox.css'

const mapDispatch = { addToSpread }

export const Movie = ({movie}) => {
    console.log(movie)
    return (
        <article className="movie--full">
            <h3>{movie.name}</h3>
           <div>
                <picture>
                    <img src={movie.coverUrl} />
                </picture>
                <article>
                    <h5>Rating: {movie.rating}</h5>
                    <h5>Genre: {movie.genre}</h5>
                    <h5>Notes</h5>
                    {movie.thoughts}
                </article>
           </div>
        </article>
    )
}

class MovieLog extends React.Component {
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault()

        const newMovie = {
            name: this.refs.name.value,
            genre: this.refs.genre.value,
            rating: this.refs.rating.value,
            coverUrl: this.refs.coverUrl.value,
            thoughts: this.refs.thoughts.value
        }
        const newMovies = this.state.movies.concat(newMovie)
        this.setState({
            movies: newMovies
        })
        this.props.addToSpread({data: newMovie, type: 'movies'})

        this.refs.name.value = ''
        this.refs.genre.value = ''
        this.refs.rating.value = ''
        this.refs.coverUrl.value = ''
        this.refs.thoughts.value = ''
    }

    render() {
        const movieList = this.props.movies.map(movie => {
            return <Movie movie={movie} />
        })
        return (
            <article className="MovieLog">
                <form className="MovieLog-add-new" onSubmit={this.handleSubmit}>
                    <h3>Add New Movie</h3>
                    <label>Movie Name</label>
                    <input ref="name" placeholder="Add movie's name..." />
                    <label>Genre</label>
                    <select ref="genre">
                        <option>-----</option>
                        <option>Action</option>
                        <option>Comedy</option>
                        <option>Drama</option>
                        <option>Horror</option>
                        <option>Romance</option>
                        <option>Sci-Fi</option>
                    </select>
                    <label>Rating</label>
                    <select ref="rating">
                        <option>-----</option>
                        <option>Horrendous</option>
                        <option>Bad</option>
                        <option>Okay</option>
                        <option>Good</option>
                        <option>Fantastic</option>
                    </select>
                    <label>Movie Cover</label>
                    <input ref="coverUrl" placeholder="movie poster url" />
                    <label>Quick Thoughts</label>
                    <textarea ref="thoughts" />
                    <button type="submit">Add New</button>
                </form>
                <article>{movieList}</article>
            </article>
        )
    }
}

const mapStateToProps = (state) => {
    const { spreads } = state
    const movies = spreads.movies
    return {movies}
}

export default connect(
    mapStateToProps,
    mapDispatch
  )(MovieLog)
