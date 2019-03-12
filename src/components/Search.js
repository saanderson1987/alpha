import React from 'react';
import { searchMovies, getFavMovie, updateFavMovie } from '../api-calls';
import merge from 'lodash/merge';
import Movie from './Movie';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', moviesByImdbId: {}};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    searchMovies(this.state.value)
      .then(movies => {
        const moviesByImdbId = {}
        const getFavMoviePromises = [];
        for(let i = 0; i < movies.length; i++) {
          function getFavMovieInfo(i) {
            const { imdbID } = movies[i];
            getFavMoviePromises.push(getFavMovie(imdbID));
            moviesByImdbId[imdbID] = movies[i];
          }
          getFavMovieInfo(i);
        }
        this.setState({moviesByImdbId});
        Promise.all(getFavMoviePromises).then(favMovies => {
          favMovies.forEach((favMovie, i) => {
            movies[i] = Object.assign({}, movies[i], favMovie);
            const { imdbID } = movies[i];
            moviesByImdbId[imdbID] = movies[i];
          });
          this.setState({moviesByImdbId})
        })
      });
  }

  handleSubmitEdit({favMovieId, rating, comment}) {
    updateFavMovie({favMovieId, rating, comment})
      .then(updatedMovie => {
        const moviesByImdbId = merge(this.state.moviesByImdbId, {[updatedMovie.imdb_id]: updatedMovie});
        this.setState({moviesByImdbId});
      })
  }

  render() {
    const { value, moviesByImdbId } = this.state;
    const movies = Object.values(moviesByImdbId);
    return (
      <div>
        Search
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {movies.map(movie => {
          return (
            <Movie key={movie.imdbID} movie={movie} handleSubmitEdit={this.handleSubmitEdit}/>
          );
        })}
      </div>
    );
  }
}



export default Search;